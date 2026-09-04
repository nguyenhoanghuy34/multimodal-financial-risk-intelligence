from pathlib import Path

import pandas as pd
import requests

from config import FRED_UNEMPLOYMENT_KEY


# =========================
# FRED CONFIG
# =========================

FRED_URL = "https://api.stlouisfed.org/fred/series/observations"

SERIES_ID = "UNRATE"


# =========================
# OUTPUT
# =========================

BASE_DIR = Path(__file__).resolve().parent

DATA_DIR = BASE_DIR / "Data" / "unemployment_rate"

OUTPUT_FILE = DATA_DIR / "unemployment_rate.csv"


# =========================
# LOAD DATA
# =========================

def load_unemployment_rate() -> pd.DataFrame:

    params = {
        "series_id": SERIES_ID,
        "api_key": FRED_UNEMPLOYMENT_KEY,
        "file_type": "json",
        "sort_order": "asc",
        "limit": 100000,
    }

    print("Downloading UNRATE historical data from FRED...")

    response = requests.get(
        FRED_URL,
        params=params,
        timeout=30,
    )

    response.raise_for_status()

    data = response.json()

    if "observations" not in data:
        raise ValueError(
            "FRED response does not contain observations."
        )

    observations = data["observations"]

    df = pd.DataFrame(observations)

    # Chỉ lấy date và unemployment rate
    df = df[["date", "value"]]

    df = df.rename(
        columns={
            "date": "date",
            "value": "unemployment_rate",
        }
    )

    # Convert date
    df["date"] = pd.to_datetime(
        df["date"],
        errors="coerce",
    )

    # Convert unemployment rate
    df["unemployment_rate"] = pd.to_numeric(
        df["unemployment_rate"],
        errors="coerce",
    )

    # Remove invalid rows
    df = df.dropna(
        subset=[
            "date",
            "unemployment_rate",
        ]
    )

    # Sort chronological
    df = (
        df
        .sort_values("date")
        .reset_index(drop=True)
    )

    return df


# =========================
# SAVE DATA
# =========================

def save_unemployment_rate(
    df: pd.DataFrame,
) -> None:

    # Tạo folder:
    # backend/Data/unemployment_rate/
    DATA_DIR.mkdir(
        parents=True,
        exist_ok=True,
    )

    # Save CSV
    df.to_csv(
        OUTPUT_FILE,
        index=False,
    )

    print(
        f"Saved {len(df):,} observations."
    )

    print(
        f"Output: {OUTPUT_FILE}"
    )


# =========================
# MAIN
# =========================

if __name__ == "__main__":

    df = load_unemployment_rate()

    save_unemployment_rate(df)

    print("\nFirst 5 rows:")
    print(df.head())

    print("\nLast 5 rows:")
    print(df.tail())

    print("\nDataset information:")
    print(
        f"Number of rows: {len(df):,}"
    )

    print(
        f"Date range: "
        f"{df['date'].min().date()} "
        f"→ "
        f"{df['date'].max().date()}"
    )
import pandas as pd

from config import DATA_FILE, TEST_SIZE, TARGET_COLUMN, DATE_COLUMN


def load_data():
    df = pd.read_csv(DATA_FILE)

    df[DATE_COLUMN] = pd.to_datetime(df[DATE_COLUMN])
    df[TARGET_COLUMN] = pd.to_numeric(
        df[TARGET_COLUMN],
        errors="coerce"
    )

    df = (
        df.dropna(subset=[DATE_COLUMN, TARGET_COLUMN])
        .sort_values(DATE_COLUMN)
        .reset_index(drop=True)
    )

    return df


def train_test_split(df):
    train = df.iloc[:-TEST_SIZE].copy()
    test = df.iloc[-TEST_SIZE:].copy()

    return train, test
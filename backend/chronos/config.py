from pathlib import Path


# ============================================================
# Paths
# ============================================================

BASE_DIR = Path(__file__).resolve().parent.parent

DATA_FILE = (
    BASE_DIR
    / "Data"
    / "unemployment_rate"
    / "unemployment_rate.csv"
)


# ============================================================
# Forecast configuration
# ============================================================

TEST_SIZE = 24

MODEL_NAME = "amazon/chronos-2"

TARGET_COLUMN = "unemployment_rate"
DATE_COLUMN = "date"
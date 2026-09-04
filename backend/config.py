import os
from dotenv import load_dotenv

# Load variables from .env
load_dotenv()

# FRED API
FRED_UNEMPLOYMENT_KEY = os.getenv("FRED_UNEMPLOYMENT_KEY")

if not FRED_UNEMPLOYMENT_KEY:
    raise ValueError("FRED_UNEMPLOYMENT_KEY is not set in .env")
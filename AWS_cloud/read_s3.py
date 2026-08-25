import boto3
import pandas as pd
from io import BytesIO

# =========================
# AWS S3 CONFIG
# =========================

BUCKET_NAME = "commerce-financial-fraud-data-167667034985-ap-southeast-1-an"
FILE_KEY = "financial_transactions_demo.csv"
REGION = "ap-southeast-1"

# =========================
# CREATE S3 CLIENT
# =========================

s3 = boto3.client(
    "s3",
    region_name=REGION
)

# =========================
# READ CSV FROM S3
# =========================

response = s3.get_object(
    Bucket=BUCKET_NAME,
    Key=FILE_KEY
)

df = pd.read_csv(
    BytesIO(response["Body"].read())
)

# =========================
# DISPLAY DATA
# =========================

print("Successfully loaded data from S3!")
print()

print("Shape:")
print(df.shape)

print()

print("Columns:")
print(df.columns.tolist())

print()

print("First 5 rows:")
print(df.head())
import numpy as np

from data import load_data, train_test_split
from forecast import load_model, forecast
from evaluate import evaluate
from config import TEST_SIZE, TARGET_COLUMN


# ============================================================
# 1. Load data
# ============================================================

df = load_data()

print("Dataset shape:", df.shape)
print(
    "Date range:",
    df["date"].min(),
    "→",
    df["date"].max()
)


# ============================================================
# 2. Train / Test split
# ============================================================

train, test = train_test_split(df)

print("\nTrain:")
print(
    train["date"].min(),
    "→",
    train["date"].max()
)
print("Samples:", len(train))

print("\nTest:")
print(
    test["date"].min(),
    "→",
    test["date"].max()
)
print("Samples:", len(test))


# ============================================================
# 3. Load Chronos-2
# ============================================================

print("\nLoading Chronos-2...")

pipeline = load_model()

print("Model loaded successfully.")


# ============================================================
# 4. Forecast
# ============================================================

print(f"\nForecasting next {TEST_SIZE} months...")

forecast_output = forecast(
    pipeline,
    train[TARGET_COLUMN].values,
    prediction_length=TEST_SIZE
)


# ============================================================
# 5. Inspect Chronos-2 output
# ============================================================

print("\nForecast output type:", type(forecast_output))

if isinstance(forecast_output, list):

    print("Forecast output length:", len(forecast_output))

    for i, output in enumerate(forecast_output):
        print(f"Output [{i}] type:", type(output))

        if hasattr(output, "shape"):
            print(f"Output [{i}] shape:", output.shape)

else:

    print("Forecast output shape:", forecast_output.shape)


# ============================================================
# 6. Extract forecast
# ============================================================

forecast_tensor = forecast_output[0]

print("\nForecast tensor shape:", forecast_tensor.shape)


# Chronos-2 prediction output is expected to contain:
#
# (n_series, n_variates, prediction_length)
#
# For our dataset:
#
# (1, 1, 24)
#
# Therefore extract:
#
# [series=0, variate=0, :]
#
# This gives exactly 24 forecast values.

prediction = forecast_tensor[0, 0, :]

prediction = prediction.detach().cpu().numpy()

print("\nPrediction shape:", prediction.shape)


# ============================================================
# 7. Check prediction length
# ============================================================

y_true = test[TARGET_COLUMN].to_numpy()

print("Actual shape:", y_true.shape)
print("Prediction shape:", prediction.shape)

if len(prediction) != len(y_true):

    raise ValueError(
        f"Prediction length mismatch: "
        f"expected {len(y_true)}, "
        f"got {len(prediction)}"
    )


# ============================================================
# 8. Print forecast
# ============================================================

print("\nForecast results:")

for date, actual, pred in zip(
    test["date"],
    y_true,
    prediction
):
    print(
        f"{date.strftime('%Y-%m')} | "
        f"Actual: {actual:.2f} | "
        f"Predicted: {pred:.2f}"
    )


# ============================================================
# 9. Evaluate
# ============================================================

metrics = evaluate(
    y_true,
    prediction
)


print("\n" + "=" * 50)
print("Chronos-2 Evaluation")
print("=" * 50)

for metric, value in metrics.items():
    print(f"{metric}: {value:.4f}")

print("=" * 50)
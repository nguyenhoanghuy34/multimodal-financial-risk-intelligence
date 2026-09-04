import torch
from chronos import Chronos2Pipeline

from config import MODEL_NAME


def load_model():
    pipeline = Chronos2Pipeline.from_pretrained(
        MODEL_NAME,
        device_map="auto",
        torch_dtype=torch.bfloat16,
    )

    return pipeline


def forecast(pipeline, train_values, prediction_length=24):

    context = torch.tensor(
        train_values,
        dtype=torch.float32
    ).reshape(1, 1, -1)

    forecast = pipeline.predict(
        context,
        prediction_length=prediction_length
    )

    return forecast
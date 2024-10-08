import numpy as np

def calculate_histograms(image_tensor):
    """
    Calculate the histograms for the RGB channels and their sum from a given image tensor.

    Args:
        image_tensor (torch.Tensor): A tensor representing the image, assumed to be in the shape [1, 3, H, W].
    
    Returns:
        dict: A dictionary containing the histograms for the R, G, B channels and their sum.
    """
    # Convert tensor to numpy array
    image_np = image_tensor.squeeze(0).permute(1, 2, 0).cpu().numpy() * 255.0
    image_np = image_np.astype(np.uint8)
    
    # Extract individual RGB channels
    red_channel = image_np[:, :, 0]
    green_channel = image_np[:, :, 1]
    blue_channel = image_np[:, :, 2]

    # Calculate histograms
    red_hist = np.histogram(red_channel, bins=256, range=(0, 255))[0]
    green_hist = np.histogram(green_channel, bins=256, range=(0, 255))[0]
    blue_hist = np.histogram(blue_channel, bins=256, range=(0, 255))[0]

    # Calculate the sum of the channels
    sum_channel = red_channel + green_channel + blue_channel
    sum_hist = np.histogram(sum_channel, bins=256, range=(0, 765))[0]

    return {
        "red_hist": red_hist.tolist(),
        "green_hist": green_hist.tolist(),
        "blue_hist": blue_hist.tolist(),
        "sum_hist": sum_hist.tolist(),
    }

def adapt_histograms_for_kuldata(histograms):
    """
    Adapt the histogram data to the KulDataDataset format for use in a line chart.

    Args:
        histograms (dict): Dictionary containing histogram data.

    Returns:
        dict: A KulDataDataset-compatible dictionary.
    """
    kuldata = {
        "columns": [
            {"id": "Axis_0", "title": "Intensity"},
            {"id": "Series_0", "shape": "number", "title": "Red Channel"},
            {"id": "Series_1", "shape": "number", "title": "Green Channel"},
            {"id": "Series_2", "shape": "number", "title": "Blue Channel"},
            {"id": "Series_3", "shape": "number", "title": "Sum of Channels"},
        ],
        "nodes": []
    }

    for i in range(256):
        node = {
            "cells": {
                "Axis_0": {"value": i},
                "Series_0": {"value": histograms["red_hist"][i]},
                "Series_1": {"value": histograms["green_hist"][i]},
                "Series_2": {"value": histograms["blue_hist"][i]},
                "Series_3": {"value": histograms["sum_hist"][i] if i < len(histograms["sum_hist"]) else 0},
            },
            "id": str(i)
        }
        kuldata["nodes"].append(node)

    return kuldata
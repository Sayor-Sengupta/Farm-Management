import os
import sys
import numpy as np
import tensorflow as tf
import cv2

# 🔇 Suppress TensorFlow logs
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"
tf.get_logger().setLevel("ERROR")

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), "soil_detection_model.h5")
model = tf.keras.models.load_model(model_path)

# Read image path from command-line arguments
image_path = sys.argv[1]

# Load and preprocess the image
img = cv2.imread(image_path)
if img is None:
    print("Error: Unable to load the image. Check the file path.")
    sys.exit(1)

img = cv2.resize(img, (128, 128))
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
img = img.astype("float32") / 255.0
img = np.expand_dims(img, axis=0)

# Predict
predictions = model.predict(img, verbose=0)  # ✅ Suppress output
predicted_class_index = np.argmax(predictions, axis=-1)[0]

# ✅ Ensure correct class mapping
class_names = ['Alluvial soil', 'Black Soil', 'Clay soil', 'Red soil']
predicted_class = class_names[predicted_class_index]

# ✅ Print only the class name (important for backend processing)
print(predicted_class)

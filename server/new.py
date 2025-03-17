import tensorflow as tf
import os

model_path = os.path.join(os.path.dirname(__file__), "soil_detection_model.h5")
model = tf.keras.models.load_model(model_path)

# Print expected input shape
print("Expected model input shape:", model.summary())

# import tensorflow as tf

# dataset_path = r"C:\Users\sayor-pc\Downloads\archive\Soil types"
# dataset = tf.keras.utils.image_dataset_from_directory(dataset_path)
# print(dataset.class_names)
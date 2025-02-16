import os
import subprocess

# Define the quality for WebP
quality = 80

# Get all .jpg and .png files in the current directory
image_files = [f for f in os.listdir('.') if f.endswith(('.jpg', '.png'))]

# Loop through each image file
for img in image_files:
    # Define the output filename (change the extension to .webp)
    output_file = os.path.splitext(img)[0] + '.webp'

    # Run ffmpeg command to convert to webp
    subprocess.run(['ffmpeg', '-i', img, '-q:v', str(quality), output_file])

    print(f"Converted {img} to {output_file}")

print("Conversion complete!")

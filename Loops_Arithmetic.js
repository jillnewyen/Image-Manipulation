// Loops and Arithmatic
image = new SimpleImage ("flowers.jpg")
for (pixel: image) {
    pixel.setRed(pixel.getRed() *0.75);
    pixel.setGreen(pixel.getGreen() *0.75);
    pixel.setBlue(pixel.getBlue() *0.75);
}
print(image);
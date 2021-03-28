from PIL import Image

im=Image.open("welcome.png")
print(im.format,im.size,im.mode)
o=im.resize((600,350))

print(o.format,o.size,o.mode)

o.save("welcome.png")






import keyboard
import time
import codecs

time.sleep(3)
file = codecs.open(r"C:\Users\oleah\Documents\Desktop\ole\periode_site\elements_numberless.txt", "r", "utf-8")
string = file.read()

list = string.split()

for n in range (0, 118): 
    keyboard.write(list[n])
    time.sleep(0.0065)

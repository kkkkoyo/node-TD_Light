#!/usr/bin/env python
import RPi.GPIO as gpio
import time
import sys

lcd_list = [37,35,33,31,29,40,38,36]
#lcd_list = [38,29,33,37,35,31,40,36]
gpio.setmode(gpio.BOARD)
gpio.setup(lcd_list,gpio.OUT)

x =sys.argv[1];
print len(lcd_list)
i=0
for i in range(len(lcd_list)-int(x)):
    gpio.output(lcd_list[len(lcd_list)-i-1],(gpio.LOW))

for j in range(int(x)):
    gpio.output(lcd_list[j],(gpio.HIGH))
if int(x)==0:
    time.sleep(0.2)
else:
    time.sleep(0.05)
gpio.cleanup()

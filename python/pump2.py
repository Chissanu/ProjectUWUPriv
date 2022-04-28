import RPi.GPIO as GPIO
import time, sys

inputFromWebApp = 0 #Input from the webapp
pumpPins = [14,15,16,23,24]
# pump1 = 14
# pump2 = 15
# pump3 = 16
# pump4 = 23
# pump5 = 24
inputPin = 25
glassDetected = False

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(pumpPins[0], GPIO.OUT)
GPIO.setup(pumpPins[1], GPIO.OUT)
GPIO.setup(pumpPins[2], GPIO.OUT)
GPIO.setup(pumpPins[3], GPIO.OUT)
GPIO.setup(pumpPins[4], GPIO.OUT)
GPIO.setup(inputPin, GPIO.IN)

# def webapp_to_pump(inputFromWebApp):
#     if inputFromWebApp == 1:
#         return pump1
#     elif inputFromWebApp == 2:
#         return pump2
#     elif inputFromWebApp == 3:
#         return pump3
#     elif inputFromWebApp == 4:
#         return pump4
#     elif inputFromWebApp == 5:
#         return pump5

testArray = [10,5,4,3,5]

# Take about 11 Seconds to fill water to 300ml
# The pump pumps water 27.27 ml of water per seconds
# The maximum number of nums in array can be 27-28

def pumpFromArr(arr, pumpPins):
    index = 1
    if glassDetected:
        for i in arr:
            for j in range(i):
                GPIO.output(pumpPins[index - 1], GPIO.LOW) #turn on the pump pouring the liquid
                time.sleep(1)
            GPIO.output(pumpPins[index - 1], GPIO.HIGH) #turn off the pump
            print("Pump", index , "on pin:",pumpPins[index - 1])
            index += 1

pumpFromArr(testArray,pumpPins) 
# while True:
#     if GPIO.input(inputPin) == 0:
#         glassDetected = True
#         print("Glass detected")
#         time.sleep(5)
#     else:
#         glassDetected = False
#         print("Please put glass on stand")
#     time.sleep(1)

#     if glassDetected:
#         GPIO.output(webapp_to_pump(inputFromWebApp), GPIO.LOW) #turn on the pump pouring the liquid
#         time.sleep(11)
#         GPIO.output(webapp_to_pump(inputFromWebApp), GPIO.HIGH) #turn off the pump
#     else:
#         GPIO.output(webapp_to_pump(inputFromWebApp), GPIO.HIGH) #turn off the pump



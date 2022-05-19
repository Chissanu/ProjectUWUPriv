import RPi.GPIO as GPIO
import time, sys

inputFromWebApp = 0 #Input from the webapp
pumpPins = [14,15,18,23,24]
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

# webInput = sys.argv[1]

# Take about 11 Seconds to fill water to 300ml
# The pump pumps water 27.27 ml of water per seconds
# The maximum number of nums in array can be 27-28

# def pumpFromArr(arr, pumpPins):
#     index = 1
#     if glassDetected:
#         for i in arr:
#             for j in range(i):
#                 GPIO.output(pumpPins[index - 1], GPIO.LOW) #turn on the pump pouring the liquid
#                 time.sleep(1)
#             GPIO.output(pumpPins[index - 1], GPIO.HIGH) #turn off the pump
#             print("Pump", index , "on pin:",pumpPins[index - 1])
#             index += 1

# pumpFromArr(webInput,pumpPins)

arr = [2,4,2,2,1]

GPIO.output(14, GPIO.HIGH)
GPIO.output(15, GPIO.HIGH)
GPIO.output(18, GPIO.HIGH)
GPIO.output(23, GPIO.HIGH)
GPIO.output(24, GPIO.HIGH)

for i in range(len(arr)):
    num = arr[i]
    for j in range(num):
        GPIO.output(pumpPins[i], GPIO.LOW)
        time.sleep(1)
        GPIO.output(pumpPins[i], GPIO.HIGH)
    GPIO.output(pumpPins[i], GPIO.HIGH)


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



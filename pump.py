import RPi.GPIO as GPIO
import time

inputFromWebApp = 0 #Input from the webapp
pump1 = 14
pump2 = 15
pump3 = 16
pump4 = 23
pump5 = 24
inputPin = 25
glassDetected = False

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(pump1, GPIO.OUT)
GPIO.setup(pump2, GPIO.OUT)
GPIO.setup(pump3, GPIO.OUT)
GPIO.setup(pump4, GPIO.OUT)
GPIO.setup(pump5, GPIO.OUT)
GPIO.setup(inputPin, GPIO.IN)

def webapp_to_pump(inputFromWebApp):
    if inputFromWebApp == 1:
        return pump1
    elif inputFromWebApp == 2:
        return pump2
    elif inputFromWebApp == 3:
        return pump3
    elif inputFromWebApp == 4:
        return pump4
    elif inputFromWebApp == 5:
        return pump5

while True:
    if GPIO.input(inputPin) == 0:
        glassDetected = True
        print("Glass detected")
        time.sleep(5)
    else:
        glassDetected = False
        print("Please put glass on stand")
    time.sleep(1)

    if glassDetected:
        GPIO.output(webapp_to_pump(inputFromWebApp), GPIO.LOW) #turn on the pump pouring the liquid
        time.sleep(11)
        GPIO.output(webapp_to_pump(inputFromWebApp), GPIO.HIGH) #turn off the pump
    else:
        GPIO.output(webapp_to_pump(inputFromWebApp), GPIO.HIGH) #turn off the pump



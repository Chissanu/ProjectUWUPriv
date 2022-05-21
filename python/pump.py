import RPi.GPIO as GPIO
import time, sys

# Default Pin
pumpPin = 0

# Pin mode for each Pumps
pump1 = 14
pump2 = 15
pump3 = 16
pump4 = 23
pump5 = 24

webInput = sys.argv[1]

pump1Ml = webInput[0]
pump2Ml = webInput[1]
pump3Ml = webInput[2]
pump4Ml = webInput[3]
pump5Ml = webInput[4]


GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(14, GPIO.OUT)
GPIO.setup(15, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)
GPIO.setup(24, GPIO.OUT)


GPIO.output(14, GPIO.LOW)
time.sleep(pump1Ml)
GPIO.output(14, GPIO.HIGH)

GPIO.output(15, GPIO.LOW)
time.sleep(pump2Ml)
GPIO.output(15, GPIO.HIGH)

GPIO.output(16, GPIO.LOW)
time.sleep(pump3Ml)
GPIO.output(16,GPIO.HIGH)

GPIO.output(23, GPIO.LOW)
time.sleep(pump4Ml)
GPIO.output(23,GPIO.HIGH)

GPIO.output(24, GPIO.LOW)
time.sleep(pump5Ml)
GPIO.output(24,GPIO.HIGH)


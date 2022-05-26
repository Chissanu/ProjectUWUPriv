import RPi.GPIO as GPIO

pumpPins = [14,15,18,23,24]

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(pumpPins[0], GPIO.OUT)
GPIO.setup(pumpPins[1], GPIO.OUT)
GPIO.setup(pumpPins[2], GPIO.OUT)
GPIO.setup(pumpPins[3], GPIO.OUT)
GPIO.setup(pumpPins[4], GPIO.OUT)

GPIO.output(14, GPIO.HIGH)
GPIO.output(15, GPIO.HIGH)
GPIO.output(18, GPIO.HIGH)
GPIO.output(23, GPIO.HIGH)
GPIO.output(24, GPIO.HIGH)
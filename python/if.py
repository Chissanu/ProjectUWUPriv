import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(25, GPIO.IN)
output = ""


if (GPIO.input(25) == 0):
    print("Detected inputs")
    output = "Detected"
else:
    output = "Not detected"
    

# with open("sensortxt", "w+") as f:
#         f.write(output)

with open("sensortxt", "w+") as f:
        f.write(str(GPIO.input(25)))
# import RPi.GPIO as GPIO
import time, sys
import numpy as np

# Default Pin
pumpPin = 0

# Pin mode for each Pumps
pump1 = 14
pump2 = 15
pump3 = 16
pump4 = 23
pump5 = 24

webInput = sys.argv[1]

# if (webInput == 1):
#     pumpPin = pump1
# elif (webInput == 2):
#     pumpPin = pump2
# elif (webInput == 3):
#     pumpPin = pump3
# elif (webInput == 4):
#     pumpPin = pump4
# elif (webInput == 5):
#     pumpPin = pump5
# else:
#     pass

# GPIO.setmode(GPIO.BCM)
# GPIO.setwarnings(False)
# GPIO.setup(pumpPin, GPIO.OUT)

# GPIO.output(pumpPin, GPIO.LOW)
# print("Pumping In Progress")
# time.sleep(11)

# GPIO.output(pumpPin, GPIO.HIGH)
# print("Completed!")


# For Testing input received from Web
# f = open("myfile.txt", "w")
# f.write("Received Input:" + str(webInput[6]) + " from web\n")
# f.write("Activating Pump on Pin:" + str(pumpPin) + "\n")
# f.close()
newArr = np.array(webInput)

with open("myfiletxt", "w+") as f:
  data = f.read()
  f.write(str(newArr))

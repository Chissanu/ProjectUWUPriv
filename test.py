import sys,os

# Default Pin
pumpPin = 0

# Pin mode for each Pumps
pump1 = 14
pump2 = 15
pump3 = 16
pump4 = 23
pump5 = 24

webInput = int(sys.argv[1])

if (webInput == 1):
    pumpPin = pump1
elif (webInput == 2):
    pumpPin = pump2
elif (webInput == 3):
    pumpPin = pump3
elif (webInput == 4):
    pumpPin = pump4
elif (webInput == 5):
    pumpPin = pump5
else:
    pass

# try:
#     f = open("myfile.txt", "x")
#     f = open("myfile.txt", "w")
#     f.write("The received input from websocket is " + pumpPin)
# except:
#     os.remove("myfile.txt")
    
# if os.path.exists("myfile.txt"):
#     os.remove("demofile.txt")
#     f = open("myfile.txt", "x")
#     f = open("myfile.txt", "w")
#     f.write("The received input from websocket is " + pumpPin)
# else:
#     f = open("myfile.txt", "x")
#     f = open("myfile.txt", "w")
#     f.write("The received input from websocket is " + pumpPin)
if webInput == 1:
    f = open("myfile.txt", "x")
    f = open("myfile.txt", "w")
    f.write("Received 1")
if webInput == 2:
    f = open("myfile.txt", "x")
    f = open("myfile.txt", "w")
    f.write("Received 2")

f.close()

# import required module
import os
import requests
import time

# assign directory
directory = 'local_logs'
 
# iterate over files in
# that directory
for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        file = open(f, "r")
        r = requests.get(file.read())
        print("File: " + f + " - Response: " + r.text)
        time.sleep(0.2)
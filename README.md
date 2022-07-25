
# IOT Tasks
## Overview:

These tasks is completed by [Nada Oteif](https://sa.linkedin.com/in/nadaoteif) as a part of [Smart Method](https://s-m.com.sa/en/index.html) for Summer training in 2022 at IOT and software development track.

## Description:

### Task (1) - ESP32 operation algorithm

1. Make sure that you have internet access in your device, Then using following link: https://www.arduino.cc/en/software to install Arduino IDE 1.8.19 that makes it easy to write code and upload it to the arduino board and complete the setup steps.

2. Open Arduino IDE software, navigate to **File> Preferences**.

3. Enter the following into the “Additional Board Manager URLs” field: ```https://dl.espressif.com/dl/package_esp32_index.json``` Then, click the “OK” button.

4. Open the Boards Manager. Go to **Tools> "Arduino Uno": Board> Boards Manager**, Search for ESP32 and press the install button for the “ESP32 by Espressif Systems“, and It should be installed after a few seconds... After the installation is completed you will see the "INSTALLED" word..

5. For Testing the Installation, Plug the ESP32 board to your device, Go to **Tools> "Arduino Uno": Board> ESP32 Arduino> WEMOS D1 MINI ESP32.** You will see different esp32 Boards.. you can select what is appropriate or need for your esp32. After that Select the Port.. Go to **Tools>Port: "COM3"> COM3**.


--------------------------------------------------------------------------------

### Task (2) - Blinking the LED of ESP32 Using Arduino IDE

1. On Arduino IDE, Go to **File> Examples> 01.Basics> Blink**.

2. To initialize digital pin LED_BUILTIN pin as an output you need to add the following line: ``` pinMode(LED_BUILTIN, OUTPUT); ``` in setup function that runs when press reset or power of the board.

3. In the main loop, To turn the LED on need to add the following line: ``` digitalWrite(LED_BUILTIN, HIGH); ``` in loop function that runs over and over again forever.

4. Then, To turn the LED off need to add the following line: ``` digitalWrite(LED_BUILTIN, LOW); ``` in loop function.

5. You should add delay(1000) In between the on and the off, to get enough time to see the change, so the delay() commands tell the board to do nothing for 1000 milliseconds, or one second. 


--------------------------------------------------------------------------------

### Task (3) - A website that recognizes the Arabic speech and then converts it to text 

The required files have been attached **[Speech2Text folder](https://github.com/nadaoteif/Esp32-Speech2text/tree/main/Speech2Text)**.


--------------------------------------------------------------------------------
### Task (4) - Build web server controls LEDs connected to the ESP32


1. Start by building the circuit then connect two LEDs to the ESP32 – one LED connected to GPIO 26, and the other to GPIO 27 or whatever you want.

2. The code creates the ESP32 web server provided in **[esp-server folder](https://github.com/nadaoteif/Esp32-Speech2text/tree/main/esp-server)** attached. open it in Arduino IDE,  you need to make some changes to make it work for you.

3. After that, set your network credentials.. code is well commented on where you should make the changes. 

4. Then, plug the ESP32 board into your device and select your board in **Tools > Board**, and select the COM port in **Tools > Port**.

5. Press the Upload button in the Arduino IDE and wait a few seconds while the code compiles and uploads to your board. you should wait for the “Done uploading” message.

6. To Find the ESP IP Address, after uploading the code, open the Serial Monitor at a baud rate of 115200. 

7. Press the ESP32 EN button (reset). The ESP32 connects to Wi-Fi and outputs the ESP IP address on the Serial Monitor. Copy that IP address, because you need it to access the ESP32 web server.

8. Now you need to access the ESP32 web server, open your browser, type/paste the ESP32 IP address on a browser in the local network, and you’ll see the webpage. 

9. Click the buttons to control the LEDs so that you can instantly change the state of each LED to test the web server and make sure is working properly.

#### Notes:
* *If you take a look at the Serial Monitor in the Arduino IDE, you can see what’s happening on the background. The ESP receives an HTTP request from a new client. in addition to other information about the HTTP request*.


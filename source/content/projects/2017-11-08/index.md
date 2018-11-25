---
cover: "./daisy_pi-2.jpg"
coverBlur: "./daisy_pi-2.jpg"
coverAlt: "Tensorflow for dogs"
date: "2017-11-08"
title: "Daisy Cam"
links:
    - https://github.com/WoodburyShortridge/daisyCam
    - http://d4isy.com

areas:
    - Tensorflow for dogs
color: "#ff5959"
protected: false
---

*[www.D4isy.com](http://d4isy.com) | Password: `daisy4life`*

## Premise

About a year ago, my wife had an intensive surgery, and despite my attempts, the hospital would not allow our dog Daisy to visit - and the “Daisy Cam” was born. The Daisy Cam is an evolving Raspberry Pi-based project,  which has allowed me to explore edge computing, convolutional neural networks, animal-computer interaction, and most importantly virtually connecting the world with Daisy.

## Camera Stream

Unfortunately, Raspi(Raspberry Pi) live stream solutions are subpar, most are pretty slow, low quality, and have a huge video delay because providers like VLC re-stream a stream of Raspvid. To solve this I started with [avconv](https://libav.org/documentation/avconv.html) to convert a pipe of Raspvid to mpeg in real-time. Then, with a node.js websocket server, I opened up a data stream to connected clients.

On the client side, I implemented the amazing [jsMPEG library](https://github.com/phoboslab/jsmpeg) to decode the MPEG websocket stream in a browser and paint to HTML5's Canvas2D. The pipeline is able to decode 720p Video at 30fps on any browser and even mobile.

<video autoplay loop>
  <source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/daisy-cam/stream.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>


## Daisy Detection

The Raspi live stream was great, but catching Daisy on camera was a challenge for my wife (still recovering in hospital) and other Daisy “followers.” My task: create a Daisy detector. This required a dive into the world of convolutional neural networks(CNN), where I turned to Tensorflow's object detection API:

### Data

To begin I had to not only source a bunch of Daisy photos, but also make annotation files and convert all of these to the TFRecord file format. To move things along, I grabbed some 200 or so annotated photos of Basset Hounds from the [Oxford-IIIT Pet Dataset](http://www.robots.ox.ac.uk/~vgg/data/pets/). Next, I hand annotated another hundred photos of Daisy by drawing bounding boxes on the photos around her face. Thanks to the Python [LabelImg tool](https://github.com/tzutalin/labelImg) tool, annotations were saved as XML files in the PASCAL VOC format which I easily [converted to TFRecords](https://github.com/WoodburyShortridge/daisyCam/blob/master/tensorflow/make_tfrecord.py).

### Training

To train my model, I fired up a Google cloud server with decent GPU. I tweaked Tensorflow's sample [ssd_mobilenet_v1_pets.config](https://github.com/tensorflow/models/blob/master/research/object_detection/samples/configs/ssd_mobilenet_v1_pets.config) for my dataset, an SSD with Mobilenet v1, configured for Oxford-IIIT Pets Dataset. I used a pre-trained model checkpoint, ssdmobilenetv1_coco, to help bootstrap the training sessions. This is a small, low-latency, and low-power CNN that is designed to run efficiently on mobile, and hopefully my raspi.

![graph showing loses over steps](./graph.png)

After an initial training session of 2 hours, over 60k steps, my mean average precision hit about 0.85. With this, I could use the exported Tensorflow graph proto for classifying Daisy in photo streams!

![multiple found photos of daisy](./multiple_find.png)

![found daisy with two different dogs](./double_dog.png)

## App

Building the app meant pulling all the pieces together on the Raspi's 1.2GHz Arm processor and 1GB of RAM. I already had a node.js websocket server piping the MPEG stream. But getting Tensorflow and OpenCV to run on the Raspi was not a walk in the park. It required creating a memory swap partition on the SD card to build from source. After a successful custom build, the node server could spawn [my Python program](https://github.com/WoodburyShortridge/daisyCam/blob/master/tensorflow/daisy_detection/daisy_detection_main.py) that classified each grabbed frame with a prediction score for “Daisy” or “Not Daisy” using my frozen inference graph.

To engage with Daisy enthusiasts, I added a [node.js emailer](https://github.com/WoodburyShortridge/daisyCam/blob/master/email.js) that sends out batch emails to clients who join the mailing list. The emails are triggered when the Python program finds a frame with a 0.9 or higher “Daisy” score and saves these frames to a local directory. Then, in the same node runtime, I launched an express REST api to serve requests for captured images. I configured an NGINX reverse proxy server to forward requests to the API, client app, and websocket stream.

![email of daisy photo](./email_phone.png)

### Design

The front-end is built with the React.js library. In addition to the Canvas2D live stream, I designed an interactive photo gallery of all the machine-taken photos. To date, the model has taken over 500 photos with no false alarms!

<video autoplay loop>
  <source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/daisy-cam/galley_movie.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

And for some social interaction, Daisy's followers can chat with each other using a messenger component I built on-top of socket.io. The chat functionality provides for greater viewer engagement. Viewers reported that they liked knowing when someone else was using the app by having the ability to chat and share their excitement for Daisy.

![screen shot of a chat](./what_window3.png)

See Daisy live and explore the gallery @ *[www.D4isy.com](http://d4isy.com) | Password: `daisy4life`*, and don't forget to join the email alerts!

## Animal-computer interaction

I'm fascinated by the potential of animal-computer interaction. When I did research at Georgia Tech's Sonification Lab, the lab's Sonification Sandbox was used to train rats to [trade, and win, on Wall Street](https://www.vice.com/en_us/article/dpw9yx/rattraders-0000519-v21n12). Also while at Tech, I took on a fun project training Jacob, a goat at the Atlanta Zoo, to play a Casio SK-1 synthesizer.

<video controls>
  <source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/daisy-cam/jacob_goat.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

*Daisy Cam* has now evolved into a design exploration for accessible methods such that daisy can interact with the Raspi. I am training new models to identify and track features such as her nose and paws within the bounding box. This will allow her to communicate with the device using special gestures. In response, I have built a servo + dc motor treat dispenser system, treats being a very intuitive display for her!

![woody building the treat dispenser](./motor2.jpg)

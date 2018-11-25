---
cover: "./pong2.png"
coverBlur: "./pong2.png"
coverAlt: "The pong game user interface"
date: "2017-11-06"
title: "Sonified Pong"
links:
    - https://github.com/WoodburyShortridge/sonifiedpong
    - http://sonifiedpong.s3-website-us-east-1.amazonaws.com

areas:
    - Accessible gaming with p5.js
color: "#f06292"
protected: false
---

*Multi-sensory gaming provides an accessible “pong” experience. Unlike traditional pong, sonified pong invites users to track the ball with auditory queues. [Play](http://sonifiedpong.s3-website-us-east-1.amazonaws.com) with your eyes closed for an extra challenge!*

This project provided proof of concept for a Tufts University senior capstone project to develop an accessible, auditory aide for independent swimming for the visually impaired.

# Premise

While working with Matthew Shiffern (my fantastic intern at the [Institute for Human Centered Design](https://humancentereddesign.org/)), who is blind from birth, I learned about the primarily text-based accessible games available to blind individuals. My sonified pong endeavors push beyond the limits of visual-only modes of communication with the player, providing for more interactive play.

# Building

With [P5.js](https://p5js.org/), the JavaScript version of Processing, and Web Audio API I created two audio streams, hard panned to the left and right. These audio streams display the ball and paddle movement. On the left stream, I instantiated a triangle wave that is mapped to the X-axis movement of the paddle. As the X position of the paddle increases, the frequency of the triangle wave increases

<video controls="controls" style="width: 100%; height: 3em; "><source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/sonified-pong/paddle.mp3" type="audio/mp3"></video>

Then, on the right panned auditory stream, I created a square wave to represent the movement of the ball in 2D space. Like the paddle, the X position of the ball is mapped to the square wave frequency. For the Y position of the ball I created a sine wave modulator so that as the ball gets closer to the bottom, the modulation gets more intense.

<video controls="controls" style="width: 100%; height: 3em; "><source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/sonified-pong/ball.mp3" type="audio/mp3"></video>

To display the ball contacting the boundaries or paddle, I created an auditory cue with a ping-pong delayed tone. Again, the frequency of this tone is mapped to the Y position of the collision to provide context: a bounce off the paddle is a low frequency, whereas off the wall is higher, and off the ceiling is highest.

<video controls="controls" style="width: 100%; height: 3em; "><source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/sonified-pong/bounce.mp3" type="audio/mp3"></video>

*Here is a video of Matthew Shifrin demoing the game play.*

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/lpvNyfr51zI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

# Design

I chose the auditory textures to provide signifiers and contextual awareness of the game state. Matthew is able to understand the ball location in the context of the frame by listening to the frequency changes, modulation, and bouncing cues. While simultaneously tracking his paddle movements through frequency to block the ball at the right time. Along with hard pans, the unique sound textures of the two waveforms help to differentiate the audio stream.

To make the interactions accessible to keyboard dependent users, I made options in the UI for different JavaScript listeners such as arrow keys or even touch.

![Gif animation of the visual interface](https://s3.amazonaws.com/woodburyshortridge/api/v1/sonified-pong/pong.gif)

Assistive tech such as Matthew's JAWS screen reader cannot be used concurrently with game play because they override key functions and often speak over the auditory display. Thus, I used text-to-speech in JavaScript to make a video game-like  scorekeeper who makes announcements.

<video controls="controls" style="width: 100%; height: 3em; "><source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/sonified-pong/score.mp3" type="audio/mp3"></video>

## Extensions: Tufts Capstone Project

I was amazed at the play-ability for Matthew, other blind gamers, and anyone seeking a non-visual dominated game experience. I wonder if this proof-of-concept can be applied to wayfinding within a constrained environment. That is, the "ball" could be an actual person in an environment, displaying a stream to heighten spatial perception. Matthew described a perfect problem space for this application: he enjoys swimming, but cannot swim independently as he must bring a friend to literally whack him on the head before he crashes into the walls.

This year I am sponsoring and leading a group of Tufts University senior capstone students to attack this problem. We are currently prototyping and user-testing an underwater ultrasonic sensor system with various auditory and haptic feedback streams to facilitate independent swimming for the visually impaired community.

<video controls autoplay loop muted>
  <source src="https://s3.amazonaws.com/woodburyshortridge/api/v1/sonified-pong/swimg.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

---
cover: "./pong.png"
date: "2017-11-06"
title: "Sonified Pong"
links:
    - https://github.com/WoodburyShortridge/sonifiedpong
    - https://woodburyshortridge.github.io/sonifiedpong

areas:
    - Accessible gaming with p5.js
color: "#f06292"
---

I built this new sonified take on pong to make this classic game accessible for the blind. The app is made with the p5.js libraries, the javaScrip version of processing.

I designed the audio to display the ball and paddle movement to the user:

- The left speaker is the x-axis movement of the paddle. This is a triangle wave with lower frequency mapped to the left and higher freq to the right.
- The right speaker is the ball movement represented by a square wave. The x-axis is mapped to the freq, low on the left & high on the right. The y-axis is mapped to a sine wave modulator: as the ball gets closer to the bottom, the modulation gets more intense.
- Each bounce is cued with a ping pong delayed tone. The freq of the tone is mapped to the y-axis: a bounce off the paddle is a low freq, off the wall is higher, and off the ceiling is highest.

Here is a video of Matthew Shifrin ( creator of [Lego for the Blind](http://legofortheblind.com/) ) demoing the game:

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/lpvNyfr51zI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
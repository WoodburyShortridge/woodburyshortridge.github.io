---
cover: "./bonker.png"
coverBlur: "./conjureBlur.png"
coverAlt: "The sonos app loading screen"
date: "2017-12-01"
title: "Bonker"
links:
    - https://expo.io/@woodburyshortridge/BONKER
areas:
    - Sonos design challenge
    - first place
color: "#4A90E2"
protected: true
---
This project is the winner of the SONOS / Tufts University design challenge. My partner, Ali Decker, and I designed and developed a native app that uses computer vision and machine learning to instantly curate a playlist from photos you snap.

When we asked our friends about their smart speaker and music-app experiences, a recurring pain point was that choosing or making a playlist took a long time, and was sometimes even stressful. This sounded like a barrier standing between listening to music and enjoying their lives.

Therefore, we planned to design a technology that chooses the right music for the mood. Our aim was to relieve the user of the Paradox of Choice: the tendency for user anxiety to increase as the number of options increases, minimize time and clicks to music, and aid decision-making.

## Design process

![](./bonker-sketch.jpg)

The design process started with wireframes on paper which later became mockups in Illustrator. We conducted informal A-B testing to determine which icon designs fit user’s mental model for the intended function, and to ensure primary buttons were the most salient and reachable. Throughout the two weeks we also conducted informal experience testing that drove each iteration, and even led to new features.

![](./bonker-design.png)

## Design considerations

### Human-in-the-loop:

Music apps today use artificial intelligence to generate tailored playlists, but the user has no input. We wanted to engineer a system where the human is placed in-the-loop with AI by supplying the initial input, a photo. This relationship was designed to facilitate trust and collaboration in the playlist decisions.

### Explainable AI:

We didn’t want the decision making process behind music choices to be hidden from users. Instead, we designed the UI to be transparent and observable.

- This consideration lead to an "i" button that toggles the keywords, facial expressions, and color details that inform BONKER’s music choice.
- We created a background overlay that reflects the dominant color in the image, to increase the user’s connection between photo color and music mood. We also placed the user-generated photo behind this overlay to reinforce the connection between the photo contents and each music track.

![](./bonker-flow.png)

## Development

![](./bonker-tech.png)

We chose to build the app using React Native, a JavaScript library for building native apps that are supported by both iOS and Android. We leveraged Expo’s React Native developer tools to build, test (lots and lots of testing), and deploy prototype iterations. The AI is handled by Google’s Cloud Vision API where we ran three models: object, facial expression, and image properties, such as dominant color. We implemented the Iterative Dichotomiser 3(ID3) algorithm for the music picking decision tree. SoundCloud’s API is used to search and fetch tracks. The SONOS Control API allows BONKER to connect, stream songs, and control playback on great sounding speakers.

<video controls>
  <source src="https://github.com/WoodburyShortridge/woodburyshortridge.github.io/blob/master/source/content/projects/2017-12-01/bonker-vid.mov?raw=true" type="video/mp4">
Your browser does not support the video tag.
</video>

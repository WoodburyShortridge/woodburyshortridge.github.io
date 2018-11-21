---
cover: "./screen.png"
coverBlur: "./screen.png"
coverAlt: "Weather sonification app"
date: "2017-11-03"
title: "Accessible weather"
links:
    - https://github.com/WoodburyShortridge/mobileA11yWeather
    - https://play.google.com/store/apps/details?id=com.sonification.accessibleweather
areas:
    - Talk-back UI and ‘glanceable’ earcons
color: "#4A90E2"
protected: false
---
*Georgia Tech, Sonification research project, [International Conference on Human-Computer Interaction with Mobile Devices 2016](https://www.semanticscholar.org/paper/Talkin-about-the-weather-incorporating-TalkBack-fu-Tomlinson-Schuett/7d6a0e0d1348c5d4b9ff54940fbbb8b1be7b8b32)*

In collaboration with my team at the Georgia Tech Sonification Lab, I helped developed an [Android weather app](https://play.google.com/store/apps/details?id=com.sonification.accessibleweather) with a talk-back UI and enhanced UX for the visually impaired. The app  featured unique “earcons” that provide “glanceability” of current weather conditions. This project highlights the power of multimodal interface design for diverse users and shows how designing for edge cases elevates the experience for all.

<div class="videoWrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/EzE8g3A-D8U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Information Architecture

As ubiquitous as weather is in our daily lives, we found individuals with vision impairments endure poorly designed experiences when attempting to check the weather on their mobile devices.

Determining the appropriate information architecture (IA) was key to designing a great experience for our assistive tech user group because of the way screen-reader technology works. Screen readers used by blind individuals read aloud screen elements using text-to-speech, and information is typically presented linearly.  While sighted users can quickly skim the contents of a page for salient information, a user reliant on a screen reader is forced to consume the information in a sequential order. This means blind or visually impaired users spend additional time to get to the intended information, such as current temperature, overall conditions, or the upcoming forecast. This lack of both efficiency and flexibility often results in a poorer UX, and in some cases weather information is completely absent or inaccessible to the user. 

### Methods

![survey results showing top ranked weather information](./survey.png)

We used qualitative and self-reported data to get a sense of how users uncovered information through TalkBack (the native Andriod screen reader), what information was important, and insights into how users experienced a weather app through TalkBack. This information needs analysis consisted of an online questionnaire with opportunities for users to share their insights through forum posts. We used this data to better understand the hierarchy of information in a weather app for our users. We then pulled data using Weather Underground’s API to create version 1.0 of Accessible Weather.

![app screen shots](./screens.png)

We designed special TalkBack enabled gestures for interaction with the data hierarchy. For example:
- Tap anywhere on the background of the main screen (and also the details tab),→ all of the information (starting with the date) is read aloud to the user. 
- Swipe right to left  → each current condition type read aloud. 
- Two-finger drag in either direction → navigate between tabs and the menu drawer.
- Two-finger tap activates the menu drawer, from which a user may perform a city lookup or change settings (including what information to be read in push notifications)

## Auditory weather design

Visually impaired users can not only explore the app through gestures and text-to-speech but also through “glanceable” earcons. In a traditional weather app, visual icons quickly convey information to the user. I wanted to bring this same efficiency to screen-reader dependent users through  sonifications of weather conditions. Sonifications are intentional sounds that use non-speech audio to convey information or data to listeners.

![example of visual weather icons](./icons_line.png) 

The sounds are designed to be easily recognizable for listeners but also flexible enough to represent all weather conditions in a consistent sound palette. To do this, I began by evaluating a variety of acoustic parameters based on both synthetic and everyday real-world sounds through a sound-sorting task. The sound-sorting task revealed which acoustic parameters would work best for conveying information about each weather condition, including what musical scales are best matched to these concepts.

![chart showing what scales match weather concepts](./scales.png) 

I used Ableton Live to design the sounds based on data from the sound sorting tasks. Using the Max development environment inside of Live, I built both modular and granular synthesizers for each weather type, producing ecologically associated sound textures. With these synthetic instruments I wrote 2-3 second musical motifs in corresponding scales. Here is an example of "sunny" vs. "rainy."

#### Sunny
<video controls="controls" style="width: 100%; height: 3em; "><source src="https://raw.githubusercontent.com/WoodburyShortridge/mobileA11yWeather/master/earcons/Sun.wav" type="audio/wav"></video>

#### Rainy
<video controls="controls" style="width: 100%; height: 3em; "><source src="https://raw.githubusercontent.com/WoodburyShortridge/mobileA11yWeather/master/earcons/Rain.wav"></video>

For more examples, please see my [GitHub repository](https://github.com/WoodburyShortridge/mobileA11yWeather).

### App Experience

The user can get a “glance” at the current weather conditions by opening the app, at which point the appropriate earcon immediately plays. This happens before any text-to-speech is read aloud through a screen reader.

Users can also enable push notifications for earcons, enhancing glanceability and utility of the app for sighted and visually impaired users alike. For example,  imagine you are sitting at work on a busy day and you hear a push notification informing you that a thunderstorm approaching. Earcons, allow users to interpret this information without ever taking their phones out of their pockets. 

Try the *Accessible Weather* app on [Google Play](https://play.google.com/store/apps/details?id=com.sonification.accessibleweather), and thanks to continued work by Georgia Tech's Kamen Tsvetkov [coming soon on iOS]().

![another screen shot of final iteration GUI design](./4screens.png)

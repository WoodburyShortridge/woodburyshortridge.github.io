webpackJsonp([0xe9e57d1b6156],{1942:function(e,a){e.exports={data:{markdownRemark:{html:'<p><em>Georgia Tech, Sonification research project, <a href="https://www.semanticscholar.org/paper/Talkin-about-the-weather-incorporating-TalkBack-fu-Tomlinson-Schuett/7d6a0e0d1348c5d4b9ff54940fbbb8b1be7b8b32" target="_blank" rel="nofollow noopener noreferrer">International Conference on Human-Computer Interaction with Mobile Devices 2016</a></em></p>\n<p>In collaboration with my team at the Georgia Tech Sonification Lab, I helped developed an <a href="https://play.google.com/store/apps/details?id=com.sonification.accessibleweather" target="_blank" rel="nofollow noopener noreferrer">Android weather app</a> with a talk-back UI and enhanced UX for the visually impaired. The app  featured unique “earcons” that provide “glanceability” of current weather conditions. This project highlights the power of multimodal interface design for diverse users and shows how designing for edge cases elevates the experience for all.</p>\n<div class="videoWrapper">\n<iframe width="560" height="315" src="https://www.youtube.com/embed/EzE8g3A-D8U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n</div>\n<h2>Information Architecture</h2>\n<p>As ubiquitous as weather is in our daily lives, we found individuals with vision impairments endure poorly designed experiences when attempting to check the weather on their mobile devices.</p>\n<p>Determining the appropriate information architecture (IA) was key to designing a great experience for our assistive tech user group because of the way screen-reader technology works. Screen readers used by blind individuals read aloud screen elements using text-to-speech, and information is typically presented linearly.  While sighted users can quickly skim the contents of a page for salient information, a user reliant on a screen reader is forced to consume the information in a sequential order. This means blind or visually impaired users spend additional time to get to the intended information, such as current temperature, overall conditions, or the upcoming forecast. This lack of both efficiency and flexibility often results in a poorer UX, and in some cases weather information is completely absent or inaccessible to the user. </p>\n<h3>Methods</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/survey-b9fe657b12d361ad2876bf45b71f5416-eb381.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 16.594827586206897%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAkklEQVQI1z1O0Q6EIAzz/3+OxHvwWcFIjAcRBSOKlTWXe2i2du22Zts2zPMM7z1CCIgxki/LApmJ3nUd3NdhGAbs+w47TZwJnHM4jgPWWtZGBKUU+r7nMgkYozGOI/t1XSs3DIqHC2tYdPHLEyklTPUIF8onn7aF1hr5PHFdF57nIXLOxH3fRPnXglIKveS/XjIvsbjk71Wdi48AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="survey results showing top ranked weather information"\n        title=""\n        src="/static/survey-b9fe657b12d361ad2876bf45b71f5416-864fb.png"\n        srcset="/static/survey-b9fe657b12d361ad2876bf45b71f5416-35987.png 200w,\n/static/survey-b9fe657b12d361ad2876bf45b71f5416-b5270.png 400w,\n/static/survey-b9fe657b12d361ad2876bf45b71f5416-864fb.png 800w,\n/static/survey-b9fe657b12d361ad2876bf45b71f5416-93c48.png 1200w,\n/static/survey-b9fe657b12d361ad2876bf45b71f5416-57a61.png 1600w,\n/static/survey-b9fe657b12d361ad2876bf45b71f5416-81ea1.png 2400w,\n/static/survey-b9fe657b12d361ad2876bf45b71f5416-eb381.png 2784w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We used qualitative and self-reported data to get a sense of how users uncovered information through TalkBack (the native Andriod screen reader), what information was important, and insights into how users experienced a weather app through TalkBack. This information needs analysis consisted of an online questionnaire with opportunities for users to share their insights through forum posts. We used this data to better understand the hierarchy of information in a weather app for our users. We then pulled data using Weather Underground’s API to create version 1.0 of Accessible Weather.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-26fcf.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.640106241699876%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAByElEQVQoz12S6Y7CMAyE+yCoXAs9UuhB6cUNKghxSQgQ4v3fY9YTkRXLj6iNE0++sW3t93tsNhtkWYYkSTAajRBFEa7XK+q6xnK51DET5/5yuWA2m2E+nyOVePo+L4oc1mK1QihCvX4ffVnNZhOtVgu73U5f6vV68JSC43mw5YyPriSn0+mg+/ODYDhE33XRardFw4H1eDz0q9PpFFVVYcgLInw6nbDdbnW8KEuoIIAromma4vV6aUdhGCKKY/gqQBoHqGcJrPV6DeX7UEIRSNJgMIDjODifzzgej+A5SzKZTBBL8ng8BiEYIyn3SjFPREexWF4s4AoyxShqBEnIGpZCR2rS8JyEz+cTeZ7ruzzzJR6HARZV8l/wk5B0h8NBC5rHeI9E9/td05Ge1ikYDhTK8ZvQk9p8C5KQE8Bu0ioFvY8aGnIuWg6HAcpMBNl6CjDh2zKbwkaRgo9RkIS32003koR5LoS+QiKWl6UIsrisD0eEXyYaQWOJVIbQWGbMODINjWWkLBaYM0cazhgvsFYU5J7/htyXaeADtFxv6zdhri1HUYhJVcCiJTPMXPxvNBowzbJt+++M/xTnbPJet9vVA27y2zLcv//dYhE4uAhzAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="app screen shots"\n        title=""\n        src="/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-864fb.png"\n        srcset="/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-35987.png 200w,\n/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-b5270.png 400w,\n/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-864fb.png 800w,\n/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-93c48.png 1200w,\n/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-57a61.png 1600w,\n/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-81ea1.png 2400w,\n/static/screens-974d1d0f6d512528a21bcbcee0d2a0ea-26fcf.png 3012w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We designed special TalkBack enabled gestures for interaction with the data hierarchy. For example:</p>\n<ul>\n<li>Tap anywhere on the background of the main screen (and also the details tab),→ all of the information (starting with the date) is read aloud to the user. </li>\n<li>Swipe right to left  → each current condition type read aloud. </li>\n<li>Two-finger drag in either direction → navigate between tabs and the menu drawer.</li>\n<li>Two-finger tap activates the menu drawer, from which a user may perform a city lookup or change settings (including what information to be read in push notifications)</li>\n</ul>\n<h2>Auditory weather design</h2>\n<p>Visually impaired users can not only explore the app through gestures and text-to-speech but also through “glanceable” earcons. In a traditional weather app, visual icons quickly convey information to the user. I wanted to bring this same efficiency to screen-reader dependent users through  sonifications of weather conditions. Sonifications are intentional sounds that use non-speech audio to convey information or data to listeners.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/icons_line-a22099a952f2d7fb9928c06998c6183b-d346b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 19.77653631284916%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqElEQVQY04WPzQqCUBCFfegeoLdo3SIQoaAnCFKRhCIQ1DTcWFYQN4pcpPfO6TJCP3dRs5j5zjAc5lhE0MXtZxGZulsoqb60RUoypIGDYNJnPgsBP1zqeWEdrceoa8Gmc89Hudvz/nq7YzYdoCrizlSpt2HsDuHZPeayOsJdrKD0gZSEPAs1P9C2EiPbQbrJ+C7fFkiSCKdD9frS+heZPrKa3DQNWiPyE8EFMlX5LKq0AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="example of visual weather icons"\n        title=""\n        src="/static/icons_line-a22099a952f2d7fb9928c06998c6183b-864fb.png"\n        srcset="/static/icons_line-a22099a952f2d7fb9928c06998c6183b-35987.png 200w,\n/static/icons_line-a22099a952f2d7fb9928c06998c6183b-b5270.png 400w,\n/static/icons_line-a22099a952f2d7fb9928c06998c6183b-864fb.png 800w,\n/static/icons_line-a22099a952f2d7fb9928c06998c6183b-d346b.png 895w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     </p>\n<p>The sounds are designed to be easily recognizable for listeners but also flexible enough to represent all weather conditions in a consistent sound palette. To do this, I began by evaluating a variety of acoustic parameters based on both synthetic and everyday real-world sounds through a sound-sorting task. The sound-sorting task revealed which acoustic parameters would work best for conveying information about each weather condition, including what musical scales are best matched to these concepts.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-978c3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 63.13953488372093%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACD0lEQVQ4y21Ty4oaURD1I/0FwY2CC2WCCoJx4V+4dKGo0VkZMONishnJICIyYSKJ0UTbfqrdPfbj5Fb12A9IQdHVt7rOPXWqOuV5Huy3K1zXw83ozPP8mHuxs+TT90XsB+8UpyiQVR2O6+LpaYbHx6/BRyFI5O5/3h3HEWTcCJAYnc4XBmw0PqJUKoUs3QRQxOTWjXE6YTqdYr1ehzUpTTegCqeCZrOJcrn8noy1J4CIxfV6DdmRabqO0WiE1WoVAW62f3FUNEEXqNfrKBaLCUACIttsNphMJjAMI9SaAIfDYRLwIMmsIbGo1WooFApB8qYj3STs9fUHBoMBVFWLADUN/X4fy+UyAvy52UGSVRa0Wq0in88nJm3ZNmzhLy/fuVhRVc7TPRR3u10sFos4QwWyaJmYVCoV5HI5TtL0yMbjMev65eGBGR6Pcoyhjna7jfl8HgFScL6YPEnSL5PJhC2TUUE6ncbo/p5jSZI4R+1utzu0Wi3MZrMkoGnZDNhoNHB39wHS8chDIBsMPiGbzQqmn9HpdHgQ+/2e5aGB9Ho9fHt+jgB9XolgFUzTxOEggQZlWRZ/RKtCbf7ZS7iITsjoclVR8Ov3LthhIQ+x5sX231sLhPZxlBXoxkX4mdfJOF34MkVsgiGKVc3g+HQ2EVUGtQzoxv4Ix3EFS0tM9i3hxMAWTzt+TjK5Qe3NCfAff43FrMrrn2cAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="chart showing what scales match weather concepts"\n        title=""\n        src="/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-864fb.png"\n        srcset="/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-35987.png 200w,\n/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-b5270.png 400w,\n/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-864fb.png 800w,\n/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-93c48.png 1200w,\n/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-57a61.png 1600w,\n/static/scales-f4d6bce770eb8c87bfcaccb47212aae7-978c3.png 1720w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     </p>\n<p>I used Ableton Live to design the sounds based on data from the sound sorting tasks. Using the Max development environment inside of Live, I built both modular and granular synthesizers for each weather type, producing ecologically associated sound textures. With these synthetic instruments I wrote 2-3 second musical motifs in corresponding scales. Here is an example of "sunny" vs. "rainy."</p>\n<h4>Sunny</h4>\n<p><video controls="controls" style="width: 100%; height: 3em; "><source src="https://raw.githubusercontent.com/WoodburyShortridge/mobileA11yWeather/master/earcons/Sun.wav" type="audio/wav"></video></p>\n<h4>Rainy</h4>\n<p><video controls="controls" style="width: 100%; height: 3em; "><source src="https://raw.githubusercontent.com/WoodburyShortridge/mobileA11yWeather/master/earcons/Rain.wav"></video></p>\n<p>For more examples, please see my <a href="https://github.com/WoodburyShortridge/mobileA11yWeather" target="_blank" rel="nofollow noopener noreferrer">GitHub repository</a>.</p>\n<h3>App Experience</h3>\n<p>The user can get a “glance” at the current weather conditions by opening the app, at which point the appropriate earcon immediately plays. This happens before any text-to-speech is read aloud through a screen reader.</p>\n<p>Users can also enable push notifications for earcons, enhancing glanceability and utility of the app for sighted and visually impaired users alike. For example,  imagine you are sitting at work on a busy day and you hear a push notification informing you that a thunderstorm approaching. Earcons, allow users to interpret this information without ever taking their phones out of their pockets. </p>\n<p>Try the <em>Accessible Weather</em> app on <a href="https://play.google.com/store/apps/details?id=com.sonification.accessibleweather" target="_blank" rel="nofollow noopener noreferrer">Google Play</a>, and thanks to continued work by Georgia Tech\'s Kamen Tsvetkov <a href="">coming soon on iOS</a>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/4screens-fba4bb8e27e14c65c1f5d2255e8897b4-864fb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAACk0lEQVQozwGIAnf9AAGlxM8Oqsf+BKrI9gCpyfsAp8nnB6jG1BKryP0Ap8j2AKnK+wCmx+YAR1TWBUJO/QFEUPYAQ1D7AERS5Qt8ktsGeJD8AHOL9gBwivoAdY7mAFygsNZbpLT/WY+Y/kSFkv9AgpDvV4qR22WaoP9Ni5j+T5Cd/1WSn+4nRErdIT5E/yE3O/4aNDn/Ei4z7WFtceJ2g4f/Ym9z/nF8gP9QXmPuAJmZnNSAf4L/WFpf/E5MTf9jXVjudm9w2ZCHhf97cG78Y1hW/3NpZ+xFREXcODc4/ywsLf0rKCj/Kygm7EFOU+FcZmr/ZG1x/V5obP9DUFXsAKKvs9V2gof/Tlle/E9bYP9dam/ufX+A2o2PkP91d3j9bnBx/4iLjO1KTU7cWVpa/01OTv1BQkL/NDc57AAHD+EABQ3/AAoR/QAGDf8ACBDtAHiDiNWBi5H/aXN4/ElSV/9NVVjuiouL2pycnP+jo6T9jIyM/3NzdO1ERUbcYmJi/1NUVP1KSkr/NTY27FpgY+FeZGf/WF5h/VphY/9aYWPtAFheYtVzeHn/a3Jy/EVMT/9MTk7ubm5v2nZ2dv9vb2/9e3t7/2hoaO0uMDHcQ0RD/zw9PP0wMTL/LS0t7MbFx+HW1tf/zs3P/dHR0v/Ozs/tAElNT9VZXF3/S01N/Eg/P/92VErumpeW2qipqv+dnZ39m5yc/52dnewiJCTcHR8g/xscHf0YFRX/MCMf7MHBw+HT1Nb/ysrM/c/P0f/IycvtAExQUtVUWFn/TVBS/Do9P/9SUE3ufn5+2pqam/+enp79pqam/5ydnewlJifcICIj/yAhIv0XGBj/JSQk7Ly9v+HX19n/1tbY/djY2f/Gx8nthgJa1DgY1LEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="another screen shot of final iteration GUI design"\n        title=""\n        src="/static/4screens-fba4bb8e27e14c65c1f5d2255e8897b4-864fb.png"\n        srcset="/static/4screens-fba4bb8e27e14c65c1f5d2255e8897b4-35987.png 200w,\n/static/4screens-fba4bb8e27e14c65c1f5d2255e8897b4-b5270.png 400w,\n/static/4screens-fba4bb8e27e14c65c1f5d2255e8897b4-864fb.png 800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{cover:{childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' version='1'%3E%3Cpath d='M144 78a5823 5823 0 0 1 3 137l1 2c0 2 0 2 1 1l2-2 1 2v1l1-1h3l1 1c-2 2 1 1 3-1 3-4 13-4 14 0 1 2 1 2 1 0s2-4 2-1c0 2 3 2 4 0l1-2v2c-1 2 1 4 2 2v-2c-1-1-1-1 1-1 2-1 2-1 1 1 0 2 0 2 1 1 2-2 3-2 35-2l33 1v-85l1-81H144v27m4 155l-2 1c-2 1-2 2-2 8v7h112v-7l-1-7-53-1a386 386 0 0 1-54-1' fill='%23328bff' fill-rule='evenodd'/%3E%3C/svg%3E",aspectRatio:1.3333333333333333,src:"/static/screen-892b52fa087847d46885c72bad2a912f-3c6bf.png",srcSet:"/static/screen-892b52fa087847d46885c72bad2a912f-cf3f3.png 400w,\n/static/screen-892b52fa087847d46885c72bad2a912f-3c6bf.png 800w",srcWebp:"/static/screen-892b52fa087847d46885c72bad2a912f-da5bc.webp",srcSetWebp:"/static/screen-892b52fa087847d46885c72bad2a912f-5b674.webp 400w,\n/static/screen-892b52fa087847d46885c72bad2a912f-da5bc.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"},resize:{src:"/static/screen-892b52fa087847d46885c72bad2a912f-f6604.png"}}},coverBlur:{childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' version='1'%3E%3Cpath d='M144 78a5823 5823 0 0 1 3 137l1 2c0 2 0 2 1 1l2-2 1 2v1l1-1h3l1 1c-2 2 1 1 3-1 3-4 13-4 14 0 1 2 1 2 1 0s2-4 2-1c0 2 3 2 4 0l1-2v2c-1 2 1 4 2 2v-2c-1-1-1-1 1-1 2-1 2-1 1 1 0 2 0 2 1 1 2-2 3-2 35-2l33 1v-85l1-81H144v27m4 155l-2 1c-2 1-2 2-2 8v7h112v-7l-1-7-53-1a386 386 0 0 1-54-1' fill='%23328bff' fill-rule='evenodd'/%3E%3C/svg%3E",aspectRatio:1.3333333333333333,src:"/static/screen-892b52fa087847d46885c72bad2a912f-3c6bf.png",srcSet:"/static/screen-892b52fa087847d46885c72bad2a912f-cf3f3.png 400w,\n/static/screen-892b52fa087847d46885c72bad2a912f-3c6bf.png 800w",srcWebp:"/static/screen-892b52fa087847d46885c72bad2a912f-da5bc.webp",srcSetWebp:"/static/screen-892b52fa087847d46885c72bad2a912f-5b674.webp 400w,\n/static/screen-892b52fa087847d46885c72bad2a912f-da5bc.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"},resize:{src:"/static/screen-892b52fa087847d46885c72bad2a912f-f6604.png"}}},coverAlt:"Weather sonification app",date:"2017-11-03",title:"Accessible Weather",links:["https://github.com/WoodburyShortridge/mobileA11yWeather","https://play.google.com/store/apps/details?id=com.sonification.accessibleweather"],areas:["Talk-back UI and ‘glanceable’ earcons"],protected:!1}}},pathContext:{slug:"/accessible-weather",prev:{fields:{slug:"/eye-tracking-glasses"},frontmatter:{title:"Eye Tracking Glasses",date:"2017-11-04"}},next:{fields:{slug:"/steiner-chain-synth"},frontmatter:{title:"Steiner Chain Synth",date:"2017-11-01"}}}}}});
//# sourceMappingURL=path---accessible-weather-1c7b0b69070f36e38eb0.js.map
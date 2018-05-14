webpackJsonp([0x9fae6b9e0161],{2008:function(e,a){e.exports={data:{markdownRemark:{html:'<p>This project is the winner of the SONOS / Tufts University design challenge. My partner, Ali Decker, and I designed and developed a native app that uses computer vision and machine learning to instantly curate a playlist from photos you snap.</p>\n<p>When we asked our friends about their smart speaker and music-app experiences, a recurring pain point was that choosing or making a playlist took a long time, and was sometimes even stressful. This sounded like a barrier standing between listening to music and enjoying their lives.</p>\n<p>Therefore, we planned to design a technology that chooses the right music for the mood. Our aim was to relieve the user of the Paradox of Choice: the tendency for user anxiety to increase as the number of options increases, minimize time and clicks to music, and aid decision-making.</p>\n<h2>Design process</h2>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.3487608241266%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHqsoqD/8QAFhAAAwAAAAAAAAAAAAAAAAAAARAg/9oACAEBAAEFAkY//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEQESExQf/aAAgBAQABPyG8lmx2Gz//2gAMAwEAAgADAAAAEJTf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAQEBAQEAAAAAAAAAAAAAAQARIWGB/9oACAEBAAE/EPS5c7IfiGYxD3b/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="bonker sketch"\n        title=""\n        src="/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-8fe72.jpg"\n        srcset="/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-01eff.jpg 200w,\n/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-20d57.jpg 400w,\n/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-8fe72.jpg 800w,\n/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-3c269.jpg 1200w,\n/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-d2bfc.jpg 1600w,\n/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-c960e.jpg 2400w,\n/static/bonker-sketch-d6f78e7151ee53d36aba4f4fe4c82a7b-79dea.jpg 3349w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<p>The design process started with wireframes on paper which later became mockups in Illustrator. We conducted informal A-B testing to determine which icon designs fit user’s mental model for the intended function, and to ensure primary buttons were the most salient and reachable. Throughout the two weeks we also conducted informal experience testing that drove each iteration, and even led to new features.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 30.584851390220518%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsSAAALEgHS3X78AAABeUlEQVQY0wFuAZH+AGhjYDA6TEtOXc27r8K/wN/g4IiIiImJiWZmZsDBwOTj5EdDQlBPTUdCQcHExv3t3N2yiOS7lINaSyogLQBZU04ZJzkcEifEeGnv6+He3t+ampmBgYFhYWG9vr7g39+Ac29eV1aDdnK/v8Lk2s2wi2LJro2UY0pMKygApp2Rj4F5kGpjuIp528zC5eXmn5+fenp6WVlZt7W13tzcIB4cKCYkGRcVvr28zsbBc1tBv5pxyaGGt4x1ANvQwOLVxOLYx9TLtvHl2eLZ25mamnp5eWJjY7axseLZ2T89PEZDQ1NNTMfCwsa5tXRiVNe1m82ojreLcwDYyLnYy7nd0r/Ks6jmzs7f4+KNjIyJiYlwcHCztLPj4uKGeHVdVVV3a2jGx8fBs7KRcGDbtZyccFyXalkAinxxsqOVxq+gjF1Z1q2u4ujniIaGfHx8U1NTuLi43t3dIh4cLiwqGBMRv8LE1byytHxeu5B6iltNn2tOyAjN1JJvt2IAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="bonker design"\n        title=""\n        src="/static/bonker-design-b5cbe8986bf27ec926ea3732f711860c-b1b2e.png"\n        srcset="/static/bonker-design-b5cbe8986bf27ec926ea3732f711860c-39c13.png 200w,\n/static/bonker-design-b5cbe8986bf27ec926ea3732f711860c-99207.png 400w,\n/static/bonker-design-b5cbe8986bf27ec926ea3732f711860c-b1b2e.png 800w,\n/static/bonker-design-b5cbe8986bf27ec926ea3732f711860c-0242f.png 1043w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>Design considerations</h2>\n<h3>Human-in-the-loop:</h3>\n<p>Music apps today use artificial intelligence to generate tailored playlists, but the user has no input. We wanted to engineer a system where the human is placed in-the-loop with AI by supplying the initial input, a photo. This relationship was designed to facilitate trust and collaboration in the playlist decisions.</p>\n<h3>Explainable AI:</h3>\n<p>We didn’t want the decision making process behind music choices to be hidden from users. Instead, we designed the UI to be transparent and observable.</p>\n<ul>\n<li>This consideration lead to an "i" button that toggles the keywords, facial expressions, and color details that inform BONKER’s music choice.</li>\n<li>We created a background overlay that reflects the dominant color in the image, to increase the user’s connection between photo color and music mood. We also placed the user-generated photo behind this overlay to reinforce the connection between the photo contents and each music track.</li>\n</ul>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.3529411764706%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAElElEQVQ4y23Se0zTVxQH8ItiMrPpsjiGG5sQ51ADQgtpEWhrH7SFtrQUSlEqwjacA4Yoj7ogPuoEo2ziZBnKo/jYQHFhGiJxxCIgUlpTBTcE5NEalCoqKxZa2/5+v7OWaRYXv8nJ/eOefHLuzUFx+54Gxu1/EiQpNoUhO7xdw6DnnImiQ0Moyda0nuI4FRpsO0EiQTmFqiIdh9Wi/GFmxEFs7X55FrmaTu9TR0bcOxe9/u5ZKnX8x3WkNsSr7vTn1VxbJam4GowssKwhlqtsEYvh5NYv8T+OloOmvgq7mJkBFdHhh5E7VfD0Pc95LEsYfjFJTGgyt0BHigxauVw4TaHeR4ISy4q4fc/8FcWGDz2NPUxa7pU0BVSeVmN6fTfhALtr8NB3cPrjT8rc1yR38RHyYuxdFxylF4lm9JmZ0J4sc/VK4+EKizGCeD9rV3HVbZ8lNn3riwAWnYuOUDZLEuCCuhLrrC0nLEPX8eGibGgMCVHzYhmT0sggiAn2BWlYYJGGxTX3KhTQTIvGLtNpoI3hjaJXOY/qF3rO30PCs9XrKZDFDMb2hAYQVawgvJXPhqHUzXUVW1imw5IwOJ5IhTNCWsGl8Ahzl1AEV8TxWEssDzrl8jEkULr8BUpngDzPHOgBNWRytmbDBqjmxmBNDAZxKZSE97L50M+JqTtJ+dRUwQmDDmY4dMXRCq5SI83X2BzoiU/ABvli6BYJjEhSAGvcRd64fTbUA94II2f1MljQw+ZiN6UyYoAnwYdjxTDIZNY95FDGnuTngWVbOujio/O1sWJzn1AC/cmbXEP8BNBLE42Is/cZiVPylCYqbfnAA16XSHYOxCeBQSLD7qSmEbfjEnCjTAEdfGF9HpM+U5eZDTsZUVBKWbNrfFvOo5HcHaBnsmEsZTPczEifQDtaK/126yr9DraWrUBgWNollylHtnwBdzK2OrQsjsvA4Tvupiqgmy/4YVngymxpsuQAWuqt2rR2RfLk90enjMd+mtWuIz8Zyflm1pCbfQfZ52y3cBd+1zlnv4cBdA5k5dZZz/4C0zX1MBDJgImcXHh8/Cjo+QlH3FvgnSKHdwt7wU/VXLG8L4pFNjY0Kceamw8Z1adKdQ1ni5HL5SLgvzj/rK8u1uRtO9F9YE9ta4q0RrNZdvLijs8vNH6VlhZyXrtKUtUWwqttDPO/oVzi+SI7wC3LCzs8+tsCprk5owectb1w4i9cBI5hmNMGQEL/D9QuRm+Ie4BFz2ee9/9WWgAqUTjobrSbkBux2V0Asw4AgiBcVouF6ml2aHq8DRH0BYC8UWLbbl9V2dfze5okBa+mX8HrJbgQm7X2NWduhMtCBsz8dcs4D7567zxotc6DxgnrAnHbrvlJWN0lPuz2gwveMCF6OGnunxwdhekxEww8mHodxHECs9mslH+bJxDrWtlLcI8P7THbS5QFC4WFxDvyEuwt9nZYnK6aWWK8P9H3eNoCk1PTMHjf9DroJp2D43PM9wXgr9hPLBcU4R8J88CP2VPs44GF+eDjBiPji4iVgkJYLci3BvToDLfNj6bg4QMztOt0xn8APMaqRbmaDoYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="bonker flow"\n        title=""\n        src="/static/bonker-flow-7155b8728b67cd65d46005856af9fc53-b1b2e.png"\n        srcset="/static/bonker-flow-7155b8728b67cd65d46005856af9fc53-39c13.png 200w,\n/static/bonker-flow-7155b8728b67cd65d46005856af9fc53-99207.png 400w,\n/static/bonker-flow-7155b8728b67cd65d46005856af9fc53-b1b2e.png 800w,\n/static/bonker-flow-7155b8728b67cd65d46005856af9fc53-5eda3.png 935w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>Development</h2>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.67118169079869%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAClElEQVQoz2NgAIIlO3cYz122ZPrR1dsl/rc28X1p7ZIEiXMIqgoqaEXKMojoinsKMqh4MDHIA4WZQHL/N/9nQAKcQMwLZv2fv0NgdWtp5cT8qP/dS/bKg8XWLFX5f20vJwOTvCiveqw2A4OwqoIgi5JahoV4k4e3QXpjUiTIABkeBm4gLXTy9PEFBy/c7QSylcGGVmXmh+RlZbxKnzRfHMSflOO7oTnGMxHErtaTl1XycdLSz0vwtcnzCw/Nc3VXMZZTYJW207D0X2AIVKK7avWKeev3nKgHsmUZ/v//z/Lkw7/wPZe+pD559VMMZEh9TMjk7rKCSKAcx//VGzQCdkwzU7PTjFFWEytZ+SbT8v/cSdylISVSDAwKypLySnaKmoZqyP5nePb0acfHDx/+f/78eSdMbNbqbQUz5sx9M3vtJh/D2QckEueudC1aM825a9cqDUhQzRb8P6Nbqji/tCyjtLIPJBaRmMUMcqHh/fv37z59+uz/hw8f7ny+ckX6/5EZXJlxcUvS4kP/Z6VnFIAUG+n+5wLREpE5HOlr3WXiJucJgA2Jiavx8fc9BmK7e3iwgA188eL5g2/fvvz/9OH9zW9rVoEDNiY0fIqbjcX/pMS0EpirrSf5Czuv3x3huudx3pRzYdogsfblj4ymr7nqDWLfvb8eovDwibv6l67eW/Ho0es5346e8geJTZkzr66ls/P/0rnzS/7PnC0FEguYWWYUsOu0v9/B5xXrH/ro3FnVavUhd6WEL8N/JoYr0GT0//9yBi63/0Dn/2djUPvPsXTZG7aHOXW8Pdv/6+699d+rZ9d/uf8FCdz//yswrOrZohAzebtF1cpJOm0HJ4n/Z1jN+H9LLvP///pgs6ZMO8AAABmdFE4hc0XIAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="bonker tech"\n        title=""\n        src="/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-b1b2e.png"\n        srcset="/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-39c13.png 200w,\n/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-99207.png 400w,\n/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-b1b2e.png 800w,\n/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-4783f.png 1200w,\n/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-830ba.png 1600w,\n/static/bonker-tech-ee3beb0e42ca250a86646134ba34a9ce-e76ba.png 2141w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<p>We chose to build the app using React Native, a JavaScript library for building native apps that are supported by both iOS and Android. We leveraged Expo’s React Native developer tools to build, test (lots and lots of testing), and deploy prototype iterations. The AI is handled by Google’s Cloud Vision API where we ran three models: object, facial expression, and image properties, such as dominant color. We implemented the Iterative Dichotomiser 3(ID3) algorithm for the music picking decision tree. SoundCloud’s API is used to search and fetch tracks. The SONOS Control API allows BONKER to connect, stream songs, and control playback on great sounding speakers.</p>\n<video controls>\n  <source src="https://woodburyshortridge.github.io/img/bonkervid.mov" type="video/mp4">\nYour browser does not support the video tag.\n</video>',frontmatter:{cover:{childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250' version='1'%3E%3Cpath d='M0 29c0 28 0 30 3 28l21-1a163 163 0 0 0 35-2l4-1 4-1 12 1c7 0 9 0 9 2l1 1v-3c-2-1-1-5 0-5l2 1h1c0-2 4-1 4 1l9 1 9 1-1 1-1 2 1 1 1-1 2-1 1 1 2 1c6 0 5 8-1 11-3 1-4 2-3 3 0 2-1 2-4 2l-2 1c1 2 0 2-1 1l-3 1h-3l-1 1h-2l-8 3c-11 7-11 11 0 17l5 4c0 1 1 2 2 1 2 0 2 0 1 1v1c1 1 0 4-6 11-7 9-9 16-8 25l4 5a829 829 0 0 1 21 16l7 5 5 3 6 4c2 2 4 4 6 4l6 4c2 2 4 4 6 4 1 0 3 1 5 4 3 3 6 5 9 5l4 4 5 3 4 3 6 5 7 5 4 3 4 2 6 5c2 1 5 3 5 5l2 2h3c2 3 4 4 5 4l2 2c0 2 2 4 5 4 2 0 3 1 3 2l2 2 2 2 1 1h1l3 1 2 1h10c1 2 10 1 10-2 0-1 3-2 4 0 2 2 4-1 4-5s3-8 4-6c1 1 4-2 4-4l4-8h3l1-2c0-2 3-6 5-6l3-2c1-4 2-6 5-6l3-2 6-6 5-6s1-2 3-2l2-3 2-3 4-5 6-8 5-8 2-6c2-5 3-15 1-15l-1-2c0-2-7-8-9-8l-3-1-4-3c-3-1-4-2-3-3 0-1 0-2-2-1l-2-1-1-2c-1 1-3 0-5-1l-1-1 1-1-3-1-2-2-3-3c-1 0-4-1-5-3l-7-4-5-4-4-2-1-2h-1l-3-1c-2-2-2-2-3-1h-1l-4-4-5-3-1-2-5-3c-3-3-4-4-8-4l-1-2c0-2-2-3-4-2l-1-1-1-1-2-1c0-1-2-3-4-3l-4-3-4-4c-4-2-4-4-4-7l-1-1c-2 0-1-2 2-3h3l4 1c2-1 2-1 0-1-2-1-3-3-1-3l1-1c-1-1 3-1 11-1l13 1c1 1 2 1 4-1l5-2 3-1 3-1c1 1 2 0 2-1l1-1 1 3 1 3 2 4v4h5l5-1-4-1-4-1 16-1c16 1 21 0 20-3l6-1c5 0 6 0 6 2s2 3 5 1v-1c-2 0-2 0-1-1h23c5-2 8-1 9 1l1 2 2-2c2-2 3-2 12-2l11 1h2l8-1h8v5l1-24V0H0v29m210 47h-3l-1 1 2 1h-3l-5 1 1 1 1 1-3 1-2 1c1 1-2 3-3 3l-2 2-1 1-1-1h-3l-1 1h-1c-1-1-1 0-1 3l-1 4h-3l2 1 2 1-4 1-4 1-4 1-4 2c1 3 0 9-1 9l-2 2c-1 1-2 2-3 1l-2 1-4 6c-4 5-5 8-2 9 2 0 2 0 1 1v1h2l5 5a830 830 0 0 0 57 32c3 2 5 2 7 0 2-1 2-1 1-2l-1-2 2 1 2-1 1-2v-2c1-1 2-2 3-1l-1 1-1 1h2l1-1c0-1 3-5 5-5 2-1 3-3 1-3l-1-2 1-2 2-1h7c7 1 8 1 14-2l9-3 4-2h3l3-1c2-2 3-3 6-3l3-1c1-1 2-2 4-1 2 0 3 0 4-2 1-3 3-4 4-2v-4l3 2c3 3 4 2 1-1-1-1-3-2-4-1l-3-1c-2 0-2 0-1-1a3008 3008 0 0 1-17-12 1441 1441 0 0 0-73-38' fill='%23328bff' fill-rule='evenodd'/%3E%3C/svg%3E",aspectRatio:1.6,src:"/static/cover-a73673243808a5ac7a90662210884b03-94a33.jpg",srcSet:"/static/cover-a73673243808a5ac7a90662210884b03-66687.jpg 400w,\n/static/cover-a73673243808a5ac7a90662210884b03-d68b3.jpg 800w,\n/static/cover-a73673243808a5ac7a90662210884b03-94a33.jpg 1600w",srcWebp:"/static/cover-a73673243808a5ac7a90662210884b03-e0dfd.webp",srcSetWebp:"/static/cover-a73673243808a5ac7a90662210884b03-4c73d.webp 400w,\n/static/cover-a73673243808a5ac7a90662210884b03-67166.webp 800w,\n/static/cover-a73673243808a5ac7a90662210884b03-e0dfd.webp 1600w",sizes:"(max-width: 1600px) 100vw, 1600px"},resize:{src:"/static/cover-a73673243808a5ac7a90662210884b03-648b2.jpg"}}},date:"2017-11-05",title:"eClinic",links:["https://expo.io/@woodburyshortridge/BONKER"],areas:["Sonos design challenge","first place"]}}},pathContext:{slug:"/e-clinic",prev:null,next:{fields:{slug:"/sonified-pong"},frontmatter:{title:"Sonified Pong"}}}}}});
//# sourceMappingURL=path---e-clinic-c25e9057b40d64699911.js.map
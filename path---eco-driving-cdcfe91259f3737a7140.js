webpackJsonp([0x75f5e3184f34],{2009:function(e,a){e.exports={data:{markdownRemark:{html:'<p>This project is the design of auditory and head-up in-vehicle interfaces to allow safer completion of a secondary task: eco-driving. Eco-driving displays are meant to shape driving behavior in a fuel-efficient manner. Current research shows that visual eco-driving interfaces can reduce fuel consumption, but hinder safe driving performance due to attention decrement and workload overflow. The design decision for a head-up and auditory display was aimed to increase fuel-efficient driving behavior while maintaining driving performance. The design of both displays was driven by data from a prior participatory design card sorting study. The study, in conjunction with these designs, lead to my senior thesis (May 2016) and a conference paper for <a href="https://smartech.gatech.edu/handle/1853/58360" target="_blank" rel="nofollow noopener noreferrer">International Conference for Auditory Display 2017</a>.</p>\n<p><video controls="" style="width: 100%;"><source src="https://woodburyshortridge.github.io/registerProj/video/ecoDriving.mp4" type="video/mp4"></video></p>\n<h2>Card sorting study</h2>\n<p>I helped develop a <a href="https://github.com/WoodburyShortridge/eco-driving-testing" target="_blank" rel="nofollow noopener noreferrer">card sorting program</a> with Brianna Tomlinson, a PhD student in the School of Interactive Computing. The drag-and-drop program was written in javascript and enabled us to collect data as participants dragged and dropped sounds or icons onto matching driving concepts.</p>\n<p>The data from this study helped create a design guide for auditory and visual features that match a driver\'s mental model of the concepts they represent.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 762px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.41469816272965%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADX0lEQVQ4y5WU7WscVRTGZ+nHWgv+A/4rglAFSRSN21WDWbFWqMYUTdP0xSg0LX6w+KFVbLG0tlaIWFoUrWYnBGmlMdnUNEltttlkd/buS3Znd2c2s/M+9z6e2c2GrYjggYfnXO7Mj3PumTtSqVTC2toaFEWBks228myYK1msPkyBsTyEEOhEd/5vIdVrNZ7P50WxWARJFEslQesWMFSY+76/rQ50S51o5bTFJcF5CEJOyYlCoUCuIM8YVcYImGt5Zn0d6XQaut74JxBdsHaFnHMtCAKj/VxrQwje9v+pJr2uSSHUdd2XZmZmoNU1zM/Po1KpYHFxsdVuKpVCls42k8m08rD6ewsLKJfLSCaTqNfrLTdN8zWpE81m8+nJyckmDYglEjJ1rbDZP+6wVOohm52dZcvLy2xxaYkl5+ZYOr3G7iTnWY7OQk4kcu13Ekaj0XhmG0hVPkk6ZBjNn8mnDGNTziiqLLgjUzey7Tiya9sy9SXXVVXeuDsna/U67UG2THOKvCfkEDQi0SBa0J9uTj/BuWelVosYHDmHt4dO4/j4Veib5tYRAWzhLr5+K46z+wZweX8c6moKLuf29PVrj4cMajsi1Wq1yFaVO7NKofLywCkMDh32j44OBwNvjgSDI18GnucEJcaCz/t6g7HhD4J3Do8GHx0c8r/qj6JKB24Dj4UMXdclSVXVTtu7vrsmV/e9+xmOH3mPx2IxnDxxDL3RY2CqgaXETXwR78f+0aPofyWG90+c5OcHXsXClFxFN1DTtE6Fu/68t1J99sUx9EXjvOf5vXjuhTewN/4JmpaJ7F/3cXrPUzgQi+L13h4ciPbxsz17kEuvbgNpuBHJcZwd4eL+A2W3ZW5Wr078irFT3/JPz9zAh+Pf4LdbSQSeg4ZlY/ryJVw/Mowfxz/G94cO8uQPN+AIUV35/dbukLFe0ndIXRGpVquq51oEMLnvWXDsTZhNAzQ96PS9VTQdGw0DZV1Hoa5zyw/QNAy1GxK2epF0gSZ5xabwPB+27QhS6HBcl9yGRXIdB27oJM+xhUdry7KoSHHF9YILrh9cDIFwuv4WdBU7lz3MH7mz4foRdd3hiWQFE3NlSLdXKv6ZX1b82w82fB54IqyIrqJw2/5f6jwjPM/1Mxuany03/L8BzVALTcE8ezsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="drags"\n        title=""\n        src="/static/drags-d3e5f4ac03a25fc671032cf10379cb09-35f11.png"\n        srcset="/static/drags-d3e5f4ac03a25fc671032cf10379cb09-0baad.png 200w,\n/static/drags-d3e5f4ac03a25fc671032cf10379cb09-12ca5.png 400w,\n/static/drags-d3e5f4ac03a25fc671032cf10379cb09-35f11.png 762w"\n        sizes="(max-width: 762px) 100vw, 762px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>Sound design</h2>\n<p>I designed the sounds in Ableton live, using the Max development environment inside of Live. I created several decks of sounds following the design guidance from our study results. Some decks contained "auditory icons," which mimic everyday non-speech sounds. Others were "earcons," which are more abstract and musical sounding. The example here is an "earcon" that tells the driver to increase acceleration.</p>\n<p><video controls="controls" style="width: 100%; height: 3em; "><source src="https://raw.githubusercontent.com/WoodburyShortridge/registerProj/master/sounds/C4-Up.wav" type="audio/wav"></video></p>\n<h2>Head-up display design</h2>\n<p>Similar to the sounds, I designed each deck of icons for the head-up display following the data obtained through our study. These were designed in Illustrator, in collaboration with Yiwei Hao, a graduate industrial design student.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 680px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.1470588235294%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABw0lEQVQ4y4VUsW7CMBDND6Cqv1TaqVuHbl1Kf5CxMLKwoHShSIAKhIQUQUCJIEDC2X3n4jSxEnrSU872O/vO7xxLwoQQUlsYhvJ0SqSe12v6S0RYP8k0TbOYfLyVD3JdT7bbbdnr9Qob5jneYiFt25b9/qc6/Hg8FjYtbDifu2qz8XhcyCzPiaJIrtdrGQSBQnw4FDfMD5IkkY4zlweDZJa22WwU/i35fD7LOI6z+zFL1jy+Q0ZZBZZZmnlqVZZVvlW2WVmAmc1yuVRXZMZzhuwpTL4m4sO2BdQTKF/8cv9M8xit95aAQIU5Ns6QID2FYUSdToeazSZBZfL9b9put8TGHAb4tFqtCCpTt9ul2WymxgxeY46ly2ExtLHK3F9abdNYPN3k7JsqP+P7ANxXARyFa5wL78lig/OCVnnD5CvQwKkZsNbgOQb7yCqbY3+326kxwPE3FoJuryl7zbTKudhHvsMaFoL9fi8Hg0GC55RC5RR3qoAG5i5XQEbZ/Gg0SofDIfsJj5EYi3KnNoSa4QKP3vd98jxPQD3B3+l0KqBo1hY4WK05jqPAHNd1Fe/ycuoWnBr/tXTWZaVVNX4uRlx49R85OL5aNKHHUQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="huds"\n        title=""\n        src="/static/huds-a0cbc2d7bcca94879abd96db0492d01d-d4269.png"\n        srcset="/static/huds-a0cbc2d7bcca94879abd96db0492d01d-d6974.png 200w,\n/static/huds-a0cbc2d7bcca94879abd96db0492d01d-d2983.png 400w,\n/static/huds-a0cbc2d7bcca94879abd96db0492d01d-d4269.png 680w"\n        sizes="(max-width: 680px) 100vw, 680px"\n      />\n    </span>\n  </span>\n  </p>',frontmatter:{cover:{childImageSharp:{sizes:{tracedSVG:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='252' viewBox='0 0 400 252' version='1'%3E%3Cpath d='M0 22l1 21 9 2 29 3c63 8 85 11 79 12-2 0-2 4 0 4l3 8v12l1 7v9a374 374 0 0 1 1 37l-2-8-1 5 1 17v2l2-1c2 0 2 0 1 3-4 17-7 19-16 9-5-5-5-5-5-11 1-6 5-10 10-12 3-1 3-1 1-1l-8 2-6 1h-5c-3 0-3 0 1 1 3 0 4 1 4 2a1759 1759 0 0 0-3 28c1 1-4 4-7 4l-11 3a1584 1584 0 0 1-76 20l-3 1v50h401v-38l-1-38c-1-2-11-3-54-10l-17-3-1-4v-4l5 1 5-1-4-1c-5 0-5 0-5-2a385 385 0 0 1 7-39c5-1 5-5 1-6-3 0-3-1-3-3s0-3 7-4a170 170 0 0 1 16-3l-13 1-6 1h-4v-3l1-6c0-3 0-3 1-1s4 4 8 5a968 968 0 0 1 29 1h5l19 2 3 1c0 1-3 2-10 3l-11 2h-2v1c2 1-3 5-8 6-4 0-4 0-5-3v-3l-7 1c-15 1-14 1-15 5v3h24l-2 1-2 1 2 1c1-1 2 0 2 1l-1 2-2 1h-2c-2-2-4-2-4-1l-2 3c-2 1 0 4 3 3l1 1c-1 2 3 3 10 3h4v-5c2-13 2-13 4-13s3 0 2 3l-2 2c-1 0-2 2-2 12l-1 8 9 1 13 2 4 1v-6c0-20 0-20-6-20-3 0-4 0-4-2s1-2 5-2c5 0 5 0 5 3 1 1 1-2 1-8l-1-12c-1-1-24-3-42-3-12 0-13 0-14-2l-2-2c-2 0-1-2 1-5 2-1 2-2 1-2-1-1 1-1 4-1 4 0 5 0 4 1h-4l-1 2c1 3 8 3 8-1 0-2 0-2 5-2 5 1 7 2 3 2h-2l-1 1 10 2h3l10 1c9 0 10 0 10-2l4-2c3 0 5-2 3-3l-7-1c-6 0-12-2-12-3l14-2 6 1V0H0v22m1 42c0 8 0 9 2 9l2 3h2v-3c3 0 5 2 5 4s1 3 3 4c3 1 3 4-1 7-2 1-2 2-1 4l1 3v-3c0-3 2-2 3 1 0 2-1 3-2 2l-1 1c0 3-3 2-8-3l-6-5 2 3c2 3 3 5 1 5s-2 2-2 9v10l4 4c2 3 4 4 6 4 3 0 4 3 1 5v3c3 3 2 5-3 6-8 1-8 0-8 8 0 6 0 7 3 9 2 3 5 7 3 7l-3-3-3-3v6c-2 1 0 6 3 6 3 1 17-4 18-6 2-3 1-6-1-4-2 1-2 0-1-3l-1-10-1-13v-8l8-1 21-2h14v5l-2 9c0 7 0 8 1 7 2 0 2-1 1-3-1-3-1-3 2-3l2-2 4-1h3l1-2c0-2 0-2-2-2l-4-2c0-3 2-6 6-6h11c3-2 5 0 4 3 0 3 0 3 3 3l4-2 3-2 1-1h2c1-1 1 0 1 2v4c1 1 1 0 1-4 0-5 2-7 5-4h4l5-2 2-1a297 297 0 0 1-1-9c-1 2-1 3-12 3-8 0-11-1-12-2 0-1-1-1-2 1l-3 1-34-2-34-1-1-11c0-9 0-9 3-11l3-2-1-2c-3-4-5-8-5-11 0-4 1-4 3-3l5 2 3 2 6 2c3 2 10 3 10 1 0-1 5-3 6-2v5c-1 1 0 5 2 6l2 2c0 4 3 6 8 6 4 0 5 1 3 2s-2 4-1 6l16 2h16c0-2 0-2 2-2s2-1 2-8v-9l-3-1a879 879 0 0 0-70-18 262 262 0 0 1-25-8H1v9m148 23v26h3l8 2 5 3h-10c-5-3-6-2-6 6a7735 7735 0 0 1 1 39l1-5 2-1 4 3 4 3 18-1a338 338 0 0 0 45-5c0 1 37 2 72 1h12l1-5c2-10 3-28 1-28l-2-1c-1-2 0-5 1-4l2-2c1-3 1-3-4-2-4 0-4 0-4-2 1-2 6-3 8-1 1 2 2 0 3-16a232 232 0 0 1 1-20v-1c2-3 1-6-2-6a1681 1681 0 0 1-77-4l-80-5h-7v26m-71 2v5h16c2 0 3-3 1-5-1-1-11-4-15-4-2 0-2 0-2 4m177 10l-1 10-1 9h5c5 0 6-1 6-3l-1-2v-1c1-1 1-1-2-1s-3 0-1-2l1-3-2 1c0 2-2 1-2-1-1-1 0-2 1-3l2-1h2c2 2 3 2 3-2 0-2 0-2-5-2l-5 1m14 19v2l-4 12v10c1 5 1 5 4 5l3-1 5-1c5 0 6-1 6-3s0-2-6-2c-5 0-6-1-6-2l16-1h16v-3c0-3-5-13-7-15-1-2-24-2-27-1m120 4l-1 7-1 7h4c4 0 5 0 4-1l1-2 3-6v-5h-10M91 156c-3 1-3 3 1 2 2 0 2 0 1 1l-3 1-3 2-2 2-4 1c-1 2-3 0-3-2s0-2-1-1l-2 1c-3 0-7 2-7 5 0 2-3 6-3 4l-1-1-2 1-1 2h7l3-2 1-3c0-2 1-2 1-1 0 2 2 1 2-1 1-2 1-2 2-1l1 2c3 0 4 0 4 3 0 2 0 2 2 2l3-1 2-1c-1-2 1-3 4-3s5-4 5-8c0-2 0-3-2-3v-1h-5m185 4c-19 2-23 4-5 3a584 584 0 0 1 37-2c0-2-9-2-32-1m-17 45c-4 3-5 8-4 12s4 7 6 7l-1-2c-1-1-1-1 1-1 3 1 3-1-1-2-1-1-2-1-1-2h1l3-1v-2c-3 0-1-3 1-4l4 1h1l2-1c5-2 0-7-6-7l-6 2m38 1v2l1 1 1 2h1l-1 2v3c-2 0-3 2-1 2v2c-3 2-3 2-5 0l-1-2v2c0 2-2 3-4 1v-2l-1-2h-1v-2l2-1c2-1 2-1 0-1s-3 0-2-2l-2-1c-4 1-1 10 5 13 8 4 16-5 13-14-2-4-4-5-5-3' fill='%23328bff' fill-rule='evenodd'/%3E%3C/svg%3E",aspectRatio:1.5853976531942633,src:"/static/eco-7605289f2384c8b5e28c0500d1d0ad94-2575c.png",srcSet:"/static/eco-7605289f2384c8b5e28c0500d1d0ad94-4cb30.png 400w,\n/static/eco-7605289f2384c8b5e28c0500d1d0ad94-f3728.png 800w,\n/static/eco-7605289f2384c8b5e28c0500d1d0ad94-2575c.png 1216w",srcWebp:"/static/eco-7605289f2384c8b5e28c0500d1d0ad94-68bb0.webp",srcSetWebp:"/static/eco-7605289f2384c8b5e28c0500d1d0ad94-b7b59.webp 400w,\n/static/eco-7605289f2384c8b5e28c0500d1d0ad94-1763f.webp 800w,\n/static/eco-7605289f2384c8b5e28c0500d1d0ad94-68bb0.webp 1216w",sizes:"(max-width: 1216px) 100vw, 1216px"},resize:{src:"/static/eco-7605289f2384c8b5e28c0500d1d0ad94-f6604.png"}}},date:"2017-11-04",title:"Eco driving",links:["https://github.com/WoodburyShortridge/registerProj","https://smartech.gatech.edu/handle/1853/58360"],areas:["Auditory and head-up in-vehicle interfaces"]}}},pathContext:{slug:"/eco-driving",prev:null,next:{fields:{slug:"/bonker"},frontmatter:{title:"Bonker"}}}}}});
//# sourceMappingURL=path---eco-driving-cdcfe91259f3737a7140.js.map
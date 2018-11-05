---
cover: "./chain.png"
coverBlur: "./chain.png"
coverAlt: "Steiner Chain Synthesizer"
date: "2017-11-01"
title: "Steiner Chain Synth"
links:
    - https://github.com/WoodburyShortridge/SteinerChainSynth
    - https://s3.amazonaws.com/woodburyshortridge/api/v1/synthProj/index.html
areas:
    - Tone generation in ActionScript3
color: "#f06292"
protected: false
---

## what is this?
While exploring actionscript3 I found some Steiner Chain geometry by [Andre Michelle](http://andre-michelle.com)

Steiner Chain is a series of infinite possible number of circles. Each circle is tangent to two other non-intersecting circles. 

![Steiner Chain Geometry](./chaing.png)

I could not resist attempting to make this thing play music. I started with a simple sine wave. The phase of the wave was set to starting position divided by sampling rate (44100) * 2 pi. To create a tone I used the sine function of this phase times circle radius and speed.  Mapping the circle radius to frequency created a sequencing or arpeggio like effect - as the radius changes when the circles move around, the frequency changes accordingly in steps. Multiplying this times speed creates a transposing effect - as the speed increases, the whole sequence goes up in frequency.

I was not satisfied by the tone generation because it created a popping noise when changing frequency. The pop is because the phase position jumps when creating a sine wave with a different starting position. But, I noticed the sequenced popping sounded like an infrasonic pulse wave so I wondered if I could generate a tones with periodic pops above 20hz? Changing the volume and pan also made glitchy pops. Therefore, I mapped volume to X and pan to Y position. This creates interesting overtones when added to the sine wave, making the synth sound more “synthy”.

Because the pulse wave frequency had a very large range, I was able to create a foldover effect when the circles gain speed and quantity - a circuit-bending type sound as the waves fold over into the next periodic cycle. To me, it is analogous to the wagon-wheel visual effect seen when the circles get so fast they appear to move backwards.

### Instructions

Enable Flash and click the canvas to start. Use the up/down arrow keys to change # of circles & frequency. Left/right to adjust speed & sequencing.

<div id="flashContent">
			<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="600" height="600" id="synthProj" align="middle">
				<param name="movie" value="https://s3.amazonaws.com/woodburyshortridge/api/v1/synthProj/synthProj.swf" />
				<param name="quality" value="high" />
				<param name="bgcolor" value="#000000" />
				<param name="play" value="true" />
				<param name="loop" value="true" />
				<param name="wmode" value="window" />
				<param name="scale" value="showall" />
				<param name="menu" value="true" />
				<param name="devicefont" value="false" />
				<param name="salign" value="" />
				<param name="allowScriptAccess" value="sameDomain" />
				<!--[if !IE]>-->
				<object type="application/x-shockwave-flash" data="https://s3.amazonaws.com/woodburyshortridge/api/v1/synthProj/synthProj.swf" width="600" height="600">
					<param name="movie" value="https://s3.amazonaws.com/woodburyshortridge/api/v1/synthProj/synthProj.swf" />
					<param name="quality" value="high" />
					<param name="bgcolor" value="#000000" />
					<param name="play" value="true" />
					<param name="loop" value="true" />
					<param name="wmode" value="window" />
					<param name="scale" value="showall" />
					<param name="menu" value="true" />
					<param name="devicefont" value="false" />
					<param name="salign" value="" />
					<param name="allowScriptAccess" value="sameDomain" />
					<!--<![endif]-->
					<a href="http://www.adobe.com/go/getflash">
						<img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />
					</a>
					<!--[if !IE]>-->
				</object>
				<!--<![endif]-->
			</object>
		</div>

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
color: "#A430F6"
protected: false
---
The purpose of this synthesiser is not to create deliberate sounds - think the reverse of the music visualizer found on iTunes or Windows Media Player. The Steiner Chain Synth generates abstract sound textures through sonification of geometric animations. My mappings of sound to visual parameters was largely inspired by psychology studies finding cross-modal correspondences by measuring response time for classifying concurrently presented auditory and visual stimuli:

[Effects of Spatial Congruity on Audio-Visual Multimodal Integration](https://www.mitpressjournals.org/doi/abs/10.1162/0898929054985383) 
[Natural cross-modal mappings between visual and auditory features](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2920420/)

## What is this?

While exploring ActionScript3, I found some Steiner Chain geometry written by [Andre Michelle](http://andre-michelle.com).

Steiner Chain is a series of an infinite possible number of circles in which each circle is tangent to two other non-intersecting circles. Jakob Steiner described the chain as follows:

> “If at least one closed Steiner chain of n circles exists for two given circles α and β, then there is an infinite number of closed Steiner chains of n circles; and any circle tangent to α and β in the same way is a member of such a chain.”

I wanted to animate the chain, lured by the possibility of a geometric theorem resulting in an infinite number of objects. I could not resist attempting to make it generate tones - a geometric synthesizer.

![Steiner Chain Geometry](./chaing.png)

I started with a simple sine wave. I set the phase of the wave to the circle's starting position divided by a sampling rate ((44100) * 2 pi). To create a tone, I used the sine function of this phase times the circle radius and speed. Mapping the circle radius to frequency created a sequencing or arpeggio like effect - as the radius changes when the circles rolls around the annulus, the frequency changes accordingly in steps. Multiplying this times speed creates a transposing effect - as the speed increases, the whole sequence goes up in frequency.

Initially, I was not satisfied by ActionScript3's tone generation because it created a popping noise when changing frequency. The pop is because the phase position jumps when AS3 recreates the sine wave from a starting position at the origin. I noticed the sequenced popping sounded like an infrasonic pulse wave, so I wondered if I could generate tones with periodic pops above 20hz. I recreated the glitchy pops with not only phase changes, but also volume and pan. Then, I mapped volume to X and pan to Y coordinates of the circle. This creates interesting overtones when added to the sine wave, making the synth sound more “synthy.”

Because the pulse wave frequency had a very large range, I created a fold-over effect when the circles gain speed and quantity - a circuit-bending type sound as the waves fold over into the next periodic cycle. This temporal aliasing is analogous to the [wagon-wheel](https://en.wikipedia.org/wiki/Wagon-wheel_effect) optical illusion seen when the circles get so fast they appear to stand still or move backwards.

### Instructions

Enable Flash and click or focus the canvas below to start. Use the up/down arrow keys to change the infinite number of circles & frequency. Left/right to adjust speed & sequencing.

<div class="notice notice-warning">
        <i class="alert-icon"><svg viewBox="64 64 896 896" class="" data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path></svg></i>
        <span class="alert-message">Warning</span>
        <span class="alert-description">Due to hacky tone generation, this demo is very loud. Please adjust volume acordingly.</span>
</div>

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

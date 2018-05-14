import React from 'react';
// import particlesJS from '../animations/particles.js';
import Particles from 'react-particles-js';
import particlesConfig from '../animations/particles-config.json';
import Header from './Header';

const svgStyle = {
  position: 'absolute',
  top: '520px',
  transform: 'scaleY(-1)',
  WebkitTransform: 'scaleY(-1)',
  MozTransform: 'scaleY(-1)',
  MsTransform: 'scaleY(-1)',
};

const particlesStyle = {
  width: '100%',
  position: 'absolute',
  zIndex: '-1',
  background: 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
  backgroundSize: '400% 400%',
  WebkitAnimation: 'Gradient 35s ease infinite',
  MozAnimation: 'Gradient 35s ease infinite',
  MsAnimation: 'Gradient 35s ease infinite',
  animation: 'Gradient 35s ease infinite',
};

const ParticlesJS = () => (
  <div>
    <Particles height={600} params={particlesConfig} style={particlesStyle} />
    <svg
      style={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 14"
      height="80"
      width="100%"
      preserveAspectRatio="none"
    >
      <path
        className="wave"
        fill="white"
        d="M 27 10.0121 C 20.9727 8.01821 13.9727 3.01214 0 3.01214 L 0 0 L 54 0 L 54 13.9788 C 40.0273 13.9788 33.0273 12.0061 27 10.0121 Z"
      >
        <animate
          attributeName="d"
          values="M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 10C 21 12 14 14 0 14L 0 0L 54 0L 54 3C 40 3 33 8 27 10Z;M 27 14C 12 14 5 7 0 7L 0 0L 54 0L 54 7C 49 7 42 14 27 14Z;M 27 10C 21 8 14 3 0 3L 0 0L 54 0L 54 14C 40 14 33 12 27 10Z"
          repeatCount="indefinite"
          dur="20s"
        />
      </path>
    </svg>
  </div>
);

export default ParticlesJS;
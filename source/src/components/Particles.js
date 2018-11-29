import React , { Component } from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import particlesConfig from '../animations/particles-config.json';

const SvgWave = styled.svg`
  position: absolute;
  top: 530px;
  transform: scaleY(-1);
  height: 80px;
  
  @media (max-width: 1000px) {
    height: 40px;
    top: 570px;
  }
`;

const ParticlesGrad = styled(Particles)`
  width: 100%;
  position: absolute;
  z-index: -1;
  background: ${props => (props.color ? 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)' : 'linear-gradient(-45deg,hsla(0,0%,0%,0.8),#333,hsla(0,0%,0%,0.5),#555)')};
  background-size:400% 400%;
  animation: Gradient 35s ease infinite;
`;

class ParticlesJS extends Component {
  render () {
    return (
      <div>
        <ParticlesGrad color={this.props.color} height={600} params={particlesConfig}/>
        <SvgWave
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 54 14"
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
        </SvgWave>
      </div>
    )
  };
}

export default ParticlesJS;

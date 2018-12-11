import React, { Component } from 'react'
import * as THREE from 'three'
import styled from 'styled-components';
import genart from "../../static/img/genart.svg";

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

const ThreeGrad = styled.div`
  width: 100%;
  position: absolute;
  z-index: 0;
  // background: ${props => (props.color ? 'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)' : 'linear-gradient(-45deg,hsla(0,0%,0%,0.8),#333,hsla(0,0%,0%,0.5),#555)')};
  background-size:400% 400%;
  // animation: Gradient 35s ease infinite;
  opacity: .5;
`;

const Genart = styled.div`
  background-image: url(${genart});
  opacity: .15;
  background-repeat: repeat;
  background-position: center;
  // background-size: 105% 105%;
`;

class ThreeStuff extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      3000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const particles = new THREE.Geometry();
    for (let i = 0; i < 1000; i++) {
      let particle = new THREE.Vector3(this.random(-400, 400), this.random(-200, 200), this.random(-300, 300));
      particles.vertices.push(particle);
    }
    const particleMaterial = new THREE.PointsMaterial({ color: 0xeeeeee, size: 2 });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    particleSystem.sortParticles = true;
    scene.add(particleSystem);

    camera.position.z = 4;
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.particles = particles;
    this.particleSysem = particleSystem;
    this.clock = new THREE.Clock();

    this.mount.appendChild(this.renderer.domElement);
    this.start();

    document.body.addEventListener("mousemove", this.handleMouse, true);
  }

  handleMouse = (event) => {
    this.setState({ x: event.screenX, y: event.screenY - 600});
  };

  random = ( min, max ) => {
    if ( isNaN(max) ) {
      max = min;
      min = 0;
    }
    return Math.random() * ( max - min ) + min;
  };

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    document.body.removeEventListener('mousemove', this.handleMouse, true);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    let deltaTime = this.clock.getDelta();
    this.particleSysem.rotation.y += deltaTime/10;

    this.camera.position.x += (this.state.x - this.camera.position.x);
    this.camera.position.y += (this.state.y - this.camera.position.y);

    this.camera.lookAt(this.scene.position);

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div>
        <Genart>
          <ThreeGrad color={this.props.color} >
            <div
              style={{ width: '100%', height: '600px' }}
              ref={(mount) => { this.mount = mount }}
            />
          </ThreeGrad>
        </Genart>
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
  }
}

export default ThreeStuff

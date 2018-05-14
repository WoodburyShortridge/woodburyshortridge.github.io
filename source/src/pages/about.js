import React, { Component } from 'react';
import styled from 'styled-components';
import AboutHeader from '../components/AboutHeader';

import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';
import confetti from '../../static/img/confetti.png';
import me from '../../static/img/me.png';

const Content = styled.div`
  max-width: ${palette.MAX_WIDTH}px;
  padding: 0;
  position: relative;
  background-image: url(${confetti});
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Bio = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  background: white;
  margin-bottom: 10rem;
  h1 {
    color: ${palette.COLOR_DARK};
  }
  p {
    font-size: 1.2rem;
    color: ${palette.SECONDARY_COLOR};
  }
`;

const Me = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  margin-top: -10rem;
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 1;
  }
`;

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 27 };
  }
  componentDidMount() {
    this.interval = setInterval(this.age.bind(this), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  betweenDays = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = (d2 - Date.parse(d1)) / oneDay;
    return diffDays;
  };

  age() {
    const round = 100000000;
    const calcage = (Math.ceil(this.betweenDays('Aug 2, 1990 00:00:00', new Date()) / 365 * round) / round).toFixed(8);
    this.setState({
      age: calcage,
    });
  }

  render() {
    return (
      <div>
        <AboutHeader avatar={config.avatar} name={config.name} email={config.email} socialMedia={config.socialMedia} />
        <Content>
          <Me atl="me, woodbury shortridge" src={me} />
          <Bio>
            <p>I like to research, design, prototype, and develop technology-based experiences.</p>
            <p>
              For the past {this.state.age} years I've been fascinated by human interaction with technology with a
              special appreciation multi-sensory experiences. I'm dedicated to shaping emerging technologies with the
              end-user in mind, and have expertise working with users of varied abilities and in complex task
              environments.
            </p>
            <p>
              I work primarily in the fields of human-computer interaction, user experience, user interface research &
              design, and accessibility.
            </p>
            <p>
              Thanks for checking out my projects, and please contact me for any inquiries or further information. And,
              if you're feeling bold, try playing{' '}
              <a rel="noopener noreferrer" target="_blank" href="https://woodburyshortridge.github.io/sonified-pong/">
                sonified pong
              </a>{' '}
              with your eyes closed!{' '}
            </p>
          </Bio>
        </Content>
      </div>
    );
  }
}
module.exports = About;

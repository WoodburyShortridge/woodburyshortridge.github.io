import React from 'react';
import { FaLinkedinSquare, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/lib/fa';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';
import Portrait from './Portrait.js';

import * as palette from '../../config/Style';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${palette.MAX_WIDTH}px;
  padding: 3rem 1.0875rem 10rem 1.0875rem;
  color: ${palette.SECONDARY_COLOR};
  text-align: center;
`;

const Avatar = styled.div`
  height: 180px;
  margin: 0 auto;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  svg {
    // border-radius: 50%;
    width: 140px;
  }
`;

const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${palette.COLOR};
  font-size: 3rem;
  @media (max-width: 1000px) {
      font-size: 2.5rem;
    }
`;

const Blurb = styled.p`
  color: ${palette.COLOR};
  a {
    color: ${palette.COLOR};
  }
  margin-top: 1rem;
  font-size: 1.25rem;
  @media (max-width: 1000px) {
      font-size: 1rem;
    }
`;
const AboutLink = styled(Link)`
  margin-left: 5px;
`;
const SocialMedia = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  a {
    margin: 0 0.3rem;
    color: white;
    svg {
      transition: transform 0.4s ease;
      &:hover {
        transform: scale(1.25);
        z-index: 1;
        position: relative;
      }
    }
  }
`;

const Header = ({ avatar, name, socialMedia }) => (
  <div>
    <Wrapper>
      <Content>
        <Overdrive id="avatar-to-back">
          <Avatar>
            <Portrait />
          </Avatar>
        </Overdrive>
        <Overdrive id="name-to-back">
          <Name>{name}</Name>
        </Overdrive>
        <Blurb>
          Hi, I'm Woody, a designer, prototyper, developer...
          <AboutLink to="/about">more about me</AboutLink>
        </Blurb>
        <SocialMedia>
          {socialMedia.map(social => (
            <a key={social.name} href={social.url} rel="noopener noreferrer" target="_blank">
              {social.name === 'Linkedin' && <FaLinkedinSquare aria-label={social.name} />}
              {social.name === 'GitHub' && <FaGithubSquare aria-label={social.name} />}
              {social.name === 'Gmail' && <FaEnvelopeSquare aria-label={social.name} />}
            </a>
          ))}
        </SocialMedia>
      </Content>
    </Wrapper>
  </div>
);

export default Header;

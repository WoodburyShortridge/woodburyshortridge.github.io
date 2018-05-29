import React from 'react';
import styled from 'styled-components';
import config from '../../config/SiteConfig';

import * as palette from '../../config/Style';

const Content = styled.div`
  color: ${palette.SECONDARY_COLOR};
  text-align: center;
  p {
    display: inline-flex;
  }
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  margin: 0 auto;
  display: inline-flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  img {
    display: inline-flex;
    height: 30px;
    width: auto;
  }
`;

const IconGroup = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
`;

const Footer = () => (
  <Content>
    <p>Made with </p>
    <Avatar>
      <img src={config.heart} alt="heart" />
    </Avatar>
    <p> by Woodbury with </p>
    <IconGroup>
    <a href="https://github.com/gatsbyjs/gatsby" target="_blank">
      <Avatar>
        <img src={config.gatsby} alt="gatsby" />
      </Avatar>
    </a>
    <a href="https://github.com/facebook/react" target="_blank">
      <Avatar>
        <img src={config.react} alt="react" />
      </Avatar>
    </a>
    <a href="https://github.com/styled-components/styled-components" target="_blank">
      <Avatar>
        <img src={config.styled} alt="styled components" />
      </Avatar>
    </a>
    <a href="http://www.sketchconfetti.com" target="_blank">
      <Avatar>
        <img src={config.confetti} alt="Sketch confetti" />
      </Avatar>
    </a>
    </IconGroup>
    <br />
    <p>
      Have a look at the&nbsp;
      <a
        href="https://github.com/WoodburyShortridge/woodburyshortridge.github.io/tree/master/source"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repository
      </a>!
    </p>
  </Content>
);

export default Footer;

import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';
import { MdKeyboardArrowLeft } from 'react-icons/lib/md';
import Portrait from './Portrait.js';

import * as palette from '../../config/Style';
import config from '../../config/SiteConfig';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${palette.MAX_WIDTH}px;
  padding: 2rem 1.0875rem 16rem 1.0875rem;
  color: ${palette.COLOR};
`;

const Back = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  svg#back {
    transition: margin 0.4s ease;
    @media (max-width: 1000px) {
      margin-left: -1rem;
    }
  }

  @media (min-width: 1000px) {
    &:hover {
      svg#back {
        margin-left: 0rem;
        margin-right: 1rem;
      }
    }
  }

  img[data-info='back'] {
    width: 25px;
    height: 25px;
    margin: 0 1rem 0 0;
  }
`;

const Avatar = styled.div`
  height: 40px;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;

  svg {
    // border-radius: 50%;
    width: 40px;
    margin-top: -0.5rem;
  }
`;

const Name = styled.h4`
  margin: 0 0 0 1rem;
  color: ${palette.COLOR};
`;

const Details = styled.div`
  width: 100%;
  margin-top: 6rem;
  text-align: center;

  h1 {
    color: ${palette.COLOR};
    font-size: 3rem;
    @media (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }

  span {
    font-size: 1.75rem;
    &:not(:last-child) {
      margin-right: 0.25rem;
      &:after {
        content: ',';
      }
    }
  }
`;

const ArrowBack = styled(MdKeyboardArrowLeft)`
  color: ${palette.COLOR};
  font-size: 3rem;
  color: #fff;
  margin-left: 1rem;
  margin-right: 0rem;
`;

const AboutHeader = ({ avatar, name }) => (
  <div>
    <Wrapper>
      <Content>
        <Back to="/">
          <ArrowBack id="back"/>
          <Overdrive id="avatar-to-back">
            <Avatar>
              <Portrait />
            </Avatar>
          </Overdrive>
          <Overdrive id="name-to-back">
            <Name>{name}</Name>
          </Overdrive>
        </Back>
        <Details>
          <h1>Hi I'm Woody</h1>
        </Details>
      </Content>
    </Wrapper>
  </div>
);

export default AboutHeader;

import React from 'react';
import { MdArrowForward } from 'react-icons/lib/md';
import format from 'date-fns/format';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Overdrive from 'react-overdrive';
import Slide from 'react-reveal/Slide';

import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

const Container = styled.div``;
const CardItem = styled.div`
  min-height: 500px;
  max-width: 650px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  @media (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
  }
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

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  div {
    overflow: hidden;
  }
`;

const DateWrapper = styled.div`
  font-size: 1rem;
`;

const Data = styled.div`
  max-width: 650px;
  z-index: 10;
  position: relative;
  width: 100%;
  background: white;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1000px) {
    margin-right: 0;
    margin-top: -15rem;
  }
  margin-bottom: 10rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition: background 0.4s ease;
  h2,
  span {
    color: ${palette.SECONDARY_COLOR};
    transition: color 0.4s ease;
  }
  svg {
    transition: color 0.4s ease, margin 0.4s ease;
  }
  &:hover,
  &:focus {
    background: ${props => props.color || 'red'};
    h2,
    span,
    svg {
      color: white;
    }
    svg {
      margin-left: 2rem;
    }
  }
`;

const Content = styled.div`
  padding: 2rem;
  position: relative;
  opacity: 1;
`;

const Areas = styled.span`
  font-size: 1.5rem;
`;

const AreaItem = styled.span`
  &:not(:last-child) {
    margin-right: 0.25rem;
    &:after {
      content: ',';
    }
  }
`;

const Name = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  color: #333;
`;

const Arrow = styled(MdArrowForward)`
  font-size: 2rem;
  color: #333;
  margin-top: -0.5rem;
  margin-left: 1rem;
`;

const Date = ({ date }) => {
  const formatted = format(date, config.dateFormat);
  return <span>{formatted}</span>;
};

const Card = ({ path, cover, date, areas, title, slug, color }) => (
  <Container>
    <Overdrive id={`${slug}-cover`}>
      <CardItem>
        <Cover>
          <Img sizes={cover} />
        </Cover>
      </CardItem>
    </Overdrive>
    <Slide bottom duration={500}>
      <Data color={color}>
        <Link to={path}>
          <Content>
            <Name>{title}</Name>
            <Areas>{areas.map(area => <AreaItem key={area}>{area}</AreaItem>)}</Areas>
            <Arrow />
          </Content>
        </Link>
      </Data>
    </Slide>
  </Container>
);

export default Card;
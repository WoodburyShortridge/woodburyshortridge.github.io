import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/lib/md';

import * as palette from '../../config/Style';

const Wrapper = styled.div`
  display: flex;
  max-width: ${palette.MAX_WIDTH}px;
  margin: 6rem auto;
  a {
    color: ${palette.LINK_COLOR};
    display: flex;
    align-items: center;
    font-size: 1.25rem;
  }
  justify-items: center;
`;

const Prev = styled.div`
  a {
    color: ${palette.COLOR_DARK};
  }
  svg {
    transition: margin 0.4s ease;
    @media (max-width: 1000px) {
      margin-left: -1rem;
    }
  }

  @media (min-width: 1000px) {
    &:hover {
      svg {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  }
`;

const Next = styled.div`
  margin-left: auto;
  a {
    color: ${palette.COLOR_DARK};
  }
  svg {
    transition: margin 0.4s ease;
    @media (max-width: 1000px) {
      margin-right: -1rem;
    }
  }

  @media (min-width: 1000px) {
    &:hover {
      svg {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  }
`;

const ArrowBack = styled(MdKeyboardArrowLeft)`
  color: ${palette.COLOR_DARK};
  font-size: 3rem;
  margin-left: 2rem;
  margin-right: 0rem;
`;

const ArrowForward = styled(MdKeyboardArrowRight)`
  color: ${palette.COLOR_DARK};
  font-size: 3rem;
  margin-left: 0rem;
  margin-right: 2rem;
`;

const ProjectPagination = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <Link to={prev.fields.slug}>
          <ArrowBack />
          {prev.frontmatter.title}
        </Link>
      </Prev>
    )}

    {next && (
      <Next>
        <Link to={next.fields.slug}>
          {next.frontmatter.title}
          <ArrowForward />
        </Link>
      </Next>
    )}
  </Wrapper>
);

export default ProjectPagination;

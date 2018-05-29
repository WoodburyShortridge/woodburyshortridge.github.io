/* eslint react/no-danger: off */

import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import Img from 'gatsby-image';
import Overdrive from 'react-overdrive';
import styled from 'styled-components';

import SEO from '../components/SEO';
import ProjectHeader from '../components/ProjectHeader';
import ProjectPagination from '../components/ProjectPagination';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';
import confetti from '../../static/img/confetti.png';

const Content = styled.div`
  max-width: ${palette.MAX_WIDTH_PROJECT_DETAIL}px;
  margin: 0 auto;
  color: ${palette.SECONDARY_COLOR};
  background: white;
  margin-top: 1rem;
  p {
    font-size: 1.25rem;
  }
  h2 {
    font-size: 2.5rem;
    color: #333;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 2rem;
    color: #333;
    @media (max-width: 1000px) {
      font-size: 1.75rem;
    }
  }
  h4 {
    margin-bottom: 0rem;
  }
  li {
    font-size: 1.25rem;
  }
  video {
    display: flex;
    margin: auto;
  }
`;

const Project = props => {
  const { slug, next, prev } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const date = format(project.date, config.dateFormat);

  return (
    <div>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <ProjectHeader
        avatar={config.avatar}
        name={config.name}
        date={date}
        title={project.title}
        links={project.links}
        areas={project.areas}
        slug={slug}
      />
      <div
        style={{
          backgroundImage: `url(${confetti})`,
          padding: `0 ${palette.CONTENT_PADDING}`,
          margin: '-10rem auto 6rem auto',
        }}
      >
        <div
          style={{
            position: 'relative',
            maxWidth: palette.MAX_WIDTH_PROJECT_DETAIL,
            margin: '0 auto',
          }}
        >
          <Overdrive id={`${slug}-cover`}>
            <Img sizes={project.cover.childImageSharp.sizes} />
          </Overdrive>
        </div>
        <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <ProjectPagination next={next} prev={prev} />
      </div>
    </div>
  );
};

export default Project;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        cover {
          childImageSharp {
            sizes(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
            resize(width: 800) {
              src
            }
          }
        }
        date
        title
        links
        areas
      }
    }
  }
`;

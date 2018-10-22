/* eslint react/no-danger: off */

import React from 'react';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
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
  margin-top: 4rem;
  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-top: 3rem;
    color: #333;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 2rem;
    margin-top: 2rem;
    color: #333;
    @media (max-width: 1000px) {
      font-size: 1.75rem;
    }
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.25rem;
  }
  video {
    display: flex;
    margin: auto;
  }
  
  .videoWrapper {
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }
    margin: 3rem 0;
   }
   
  video {
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    max-width: 800px !important;
    margin: 3rem auto;
  }
  .gatsby-resp-image-wrapper {
    // box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    margin: 3rem 0;
  }
`;

const MainImg = styled(Img)`
  box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
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
        <Lightbox image={project.cover.childImageSharp.sizes} slug={slug}/>
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

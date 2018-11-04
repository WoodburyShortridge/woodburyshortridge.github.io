import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import Header from '../components/Header';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';
import confetti from '../../static/img/confetti_bw.png';

const Grid = styled.div`
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1000px) {
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: -6rem;
  }

  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled.div`
  @media (min-width: 1000px) {
    margin: -6rem auto 6rem auto;
  }
  
  max-width: ${palette.MAX_WIDTH}px;
  padding: 0;
  position: relative;
  background-image: url(${confetti});
`;

const Index = props => {
  const projectEdges = props.data.allMarkdownRemark.edges;

  return (
    <div>
      <Header avatar={config.avatar} name={config.name} email={config.email} socialMedia={config.socialMedia} />
      <Content>
        <Grid>
          {projectEdges.map((project, i) => (
            <Card
              date={project.node.frontmatter.date}
              title={project.node.frontmatter.title}
              cover={project.node.frontmatter.cover.childImageSharp.sizes}
              coverAlt={project.node.frontmatter.coverAlt}
              path={project.node.fields.slug}
              areas={project.node.frontmatter.areas}
              color={project.node.frontmatter.color}
              slug={project.node.fields.slug}
              key={project.node.fields.slug}
              i={i}
            />
          ))}
        </Grid>
      </Content>
    </div>
  );
};

export default Index;

/* eslint no-undef: off */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
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
            coverBlur {
              childImageSharp {
                sizes(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
                resize(width: 800) {
                  src
                }
              }
            }
            coverAlt
            date
            title
            areas
            color
          }
        }
      }
    }
  }
`;

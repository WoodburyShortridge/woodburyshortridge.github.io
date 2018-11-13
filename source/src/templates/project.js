/* eslint react/no-danger: off */

import React, { Component } from "react";
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
import confetti from '../../static/img/confetti_bw.png';
import Login from '../components/Login';

const Content = styled.div`
  max-width: ${palette.MAX_WIDTH_PROJECT_DETAIL}px;
  margin: 0 auto;
  color: ${palette.SECONDARY_COLOR};
  background: white;
  margin-top: 4rem;
  p {
    font-size: 1.25rem;
    margin-top: 1rem;
    img {
      width: 100%;
    }
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
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.25rem;
  }
  video {
    display: flex;
    margin: auto;
    width: 100%;
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
  
  #flashContent {
    text-align: center;
    background: #000000;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
  }
  blockquote {
    border-left: 2px solid #328bff54;
    margin-left: 0;
    
    p {
      margin-left: 1rem;
    }
  }
  .notice {
    padding: 15px 15px 15px 64px;
    position: relative;
    border-radius: 4px;
    line-height: 1.5;
    margin-bottom: 10px;
    box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
  }
  .notice-warning {
    border: 1px solid #ffe58f;
    background-color: #fffbe6;
    
    .alert-icon {
      position: absolute;
      top: 16px;
      left: 24px;
      font-size: 24px;
      color: #faad14;
    }
    .alert-message {
      font-size: 20px;
      color: rgba(0,0,0,.85);
      display: block;
      margin-bottom: 4px;
    }
    .alert-description {
      font-size: 17px;
    }
  }
`;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.signInHandler = this.signInHandler.bind(this)
  }

  signInHandler() {
    this.setState({
      loggedIn: true
    })
  }

  renderMainImage() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const project = postNode.frontmatter;
    if (project.protected && !this.state.loggedIn) {
      return <Lightbox coverAlt={project.coverAlt} image={project.cover.childImageSharp.sizes} slug={slug}/>
    }
    else return <Lightbox coverAlt={project.coverAlt} image={project.coverBlur.childImageSharp.sizes} slug={slug}/>
  }
  render() {
    const { slug, next, prev } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
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
            { this.renderMainImage() }
          </div>
          { project.protected ? <Login title={project.title} onSignIn={this.signInHandler} /> : <Content dangerouslySetInnerHTML={{ __html: postNode.html }} /> }
          <ProjectPagination next={next} prev={prev} />
        </div>
      </div>
    )
  }
}

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
        links
        areas
        protected
      }
    }
  }
`;

import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ParticlesJS from '../components/Particles.js';
import favicon from '../../static/logos/favicon.ico';
import config from '../../config/SiteConfig';
import * as palette from '../../config/Style';

/* eslint no-unused-expressions: off */
injectGlobal`
  body {
    background: white;
    color: ${palette.COLOR};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    color: ${palette.SECONDARY_COLOR}
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  
  p a {
    display: inline-flex;
    position: relative;
    text-decoration: none;
    padding: 0em 0.05em;
    border-bottom: 2px solid ${palette.LINK_HOVER_COLOR};
    
    &:after {
      content: '';
      display: flex;
      position: absolute;
      top: 100%;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${palette.LINK_HOVER_COLOR};
      z-index: 0;
      transition: top ease 0.1s;
    }
    
    &:hover:after {
      content: '';
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${palette.LINK_HOVER_COLOR};
      z-index: 0;
    }
  }

  .gatsby-resp-image-wrapper {
    margin: 2.75rem 0;
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
   }
   
  video {
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    max-width: 800px !important;
  }
  .gatsby-image-wrapper {
    box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
    max-width: 800px !important;
  }
  
  @-webkit-keyframes Gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-moz-keyframes Gradient {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes Gradient { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-ms-keyframes Gradient { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
`;

const TemplateWrapper = props => {
  const { children } = props;

  return (
    <div>
      <Helmet
        title={config.siteTitleAlt}
        meta={[
          { name: 'description', content: 'Woodbury Shortridge fun portfolio site' },
          { name: 'keywords', content: 'woody, woodbury, shortridge, portfolio, ux, ui, engineering, psychology, hci, ga tech, tufts, mit, balkans' },
        ]}
      >
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
      <SEO />
      <ParticlesJS />
      {children()}
      <Footer />
    </div>
  );
};

export default TemplateWrapper;

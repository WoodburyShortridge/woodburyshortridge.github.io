import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Overdrive from "react-overdrive"

class Lightbox extends Component {
  state = {
    showLightbox: false,
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ showLightbox: !this.state.showLightbox })
  };

  closeModal = () => {
    this.setState({ showLightbox: false })
  };

  renderModal = () => {
    const { image, slug } = this.props;
    return (
      <Modal>
        <Overlay />
        <LightboxContent >
          <ZoomOut href={image.src} onClick={e => this.handleClick(e)}>
            <Overdrive id={`${slug}-cover`}>
              <Img sizes={image} />
            </Overdrive>
          </ZoomOut>
        </LightboxContent >
      </Modal>
    )
  };

  render() {
    const { image, slug, coverAlt } = this.props;
    const { showLightbox } = this.state;
    return (
      <Fragment>
        <Zoom href={image.src} visible={showLightbox}  onClick={e => this.handleClick(e)}>
          <Overdrive id={`${slug}-cover`}>
            <MainImg sizes={image} alt={coverAlt} />
          </Overdrive>
        </Zoom>
        { showLightbox? this.renderModal() : ''}
      </Fragment>
    )
  }
}

const Zoom = styled.a`
  cursor: zoom-in;
  visibility: ${props => (!props.visible ? 'visible' : 'hidden')};
`;

const ZoomOut = styled.a`
  cursor: zoom-out;
`;
const LightboxContent = styled.div`
    width: 100%;
    max-width: calc(100vw);
    max-height: calc(100vh);
    margin: auto;
`;

const Modal = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 999;
    display: flex;
    height: 100vh;
    overflow-y: scroll;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgb(255, 255, 255);
    opacity: 1;
    transition: opacity 300ms ease 0s;
    background: white;
`;

const MainImg = styled(Img)`
  box-shadow: 0 20px 40px rgba(0,0,0,0.05), 0 15px 12px rgba(0,0,0,0.05);
`;

export default Lightbox

import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from '../common/Slider';
import Loader from '../common/Loader';
import SideBar from './SideBar';

const GalleryContainer = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
  };
`;

function Gallery() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoad = () => {
    console.log('Content Load Finish');
    setIsLoading(false);
  };

  window.addEventListener('load', handleLoad);

  return isLoading ? (
    <Loader />
  ) : (
    <GalleryContainer>
      <SideBar />
      <Slider />
    </GalleryContainer>
  );
}

export default Gallery;

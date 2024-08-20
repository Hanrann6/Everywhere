import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('your-image-url');
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
`;

const ImageWithContent = () => {
  return (
    <Container>
      <Content>
        <h1>Title</h1>
        <p>Description</p>
      </Content>
    </Container>
  );
};

export default ImageWithContent;

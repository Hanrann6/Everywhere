import styled from 'styled-components';

export const Image = styled.image`
  margin-right: 30px;
`;

export const FacilityImage = ({ imagePath, width, height }) => {
  return (
    <Image>
      <img style={{ width: width, height: height }} src={imagePath} alt="" />
    </Image>
  );
};

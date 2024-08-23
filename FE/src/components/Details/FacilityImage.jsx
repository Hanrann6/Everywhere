export const FacilityImage = ({ imagePath, width, height }) => {
  return (
    <img style={{ width: width, height: height }} src={imagePath} alt="" />
  );
};

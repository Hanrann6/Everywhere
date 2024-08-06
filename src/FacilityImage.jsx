import React from "react";

function FacilityImage(props) {
  const { imagePath } = props;

  return (
    <div>
      <div className="details-img">
        <img src={imagePath} alt="Facility" />
      </div>
    </div>
  );
}

export default FacilityImage;

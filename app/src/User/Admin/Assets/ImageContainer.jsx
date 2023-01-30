import React from "react";
import "../../styles/AdminProduct.css";

const ImageContainer = ({ src }) => {
  return (
    <>
      <div className="product__images_container">
        <img
          src={src}
          alt="course image"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "fill",
            border: "dashed 2px var(--Grey300)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        />
      </div>
    </>
  );
};

export default ImageContainer;

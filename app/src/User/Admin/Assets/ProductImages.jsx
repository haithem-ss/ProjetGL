import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import ImageContainer from "./ImageContainer";
import ImageOutline from "./ImageOutline";
import axios from "axios";
const fileTypes = ["JPG", "PNG", "GIF"];

const ProductImages = ({ setProductImages }) => {
  const [imgURL, setImgURL] = useState();
  const handleChange = (files) => {
    console.log(Object.values(files));
    setImgURL(Object.values(files).map((file) => URL.createObjectURL(file)));
    setProductImages(Object.values(files));
  };

  return (
    <div className="ProductDescription">
      <div className="product__images_wraper__Header">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={true}
          label="Ajouter des images"
          hoverTitle="Glissez et déposez votre image ici"
          onTypeError={(file) => {
            alert("Seuls les fichiers JPG, PNG et GIF sont autorisés");
          }}
          onMaxSizeError={(file) => {
            alert("Le fichier est trop volumineux");
          }}
          numberOfFiles={4}
        />{" "}
      </div>
      <div className="product__images_wraper">
        {!imgURL && (
          <>
            <div className="child">
              <p>icon</p>
            </div>{" "}
            <div className="child">
              <p>icon</p>
            </div>{" "}
            <div className="child">
              <p>icon</p>
            </div>{" "}
            <div className="child">
              <p>icon</p>
            </div>
          </>
        )}
        {imgURL &&
          imgURL.map((url, index) => <ImageContainer key={index} src={url} />)}
      </div>
    </div>
  );
};

export default ProductImages;

import React, { useState } from "react";

const Image = (props) => {
  const { resimURL } = props;
  console.log(resimURL)

  return (
    <div className="image-container">
      { resimURL &&
          <img src={resimURL} ></img>
      }
      { !resimURL &&
          <p>Yukleniyor!</p>
      }
    </div>
  );
};

export default Image;

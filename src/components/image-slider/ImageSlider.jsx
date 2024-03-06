import React, { useState } from "react";
import { Circle, CircleDot } from "lucide-react";
import "./ImageSlider.css";

function ImageSlider({ imageUrls, prjIndex }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div class={prjIndex % 2 === 0 ? "macbook" : "macbook mb-left"}>
      <div class="screen">
        <div class="viewport">
          <div
            style={{
              height: "100%",
              position: "relative",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                overflow: "hidden",
              }}
            >
              {imageUrls.map((url) => (
                <div
                  className="inner-img-slider"
                  style={{ translate: `${-100 * imageIndex}%` }}
                >
                  <img key={url} src={url} className="img-slider-img" />
                </div>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: ".5rem",
                left: "50%",
                translate: "-50%",
                display: "flex",
                gap: ".25rem",
              }}
            >
              {imageUrls.map((_, index) => (
                <button
                  className="img-slider-dot-btn"
                  onClick={() => setImageIndex(index)}
                  aria-label={`View Image ${index + 1}`}
                >
                  {index === imageIndex ? <CircleDot /> : <Circle />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="base"></div>
      <div class="notch"></div>
    </div>
  );
}

export default ImageSlider;

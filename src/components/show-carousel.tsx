import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

import { Donor } from "../App";
import "./slider.css";
import React from "react";

const ShowCarousel = () => {
  const donors = JSON.parse(localStorage.getItem("donors") ?? "[]");
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const settings = {
    classname: "slider",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
    focusOnSelect: false,
    ref: sliderRef,
  };

  return (
    <Box ref={sliderRef} className="slider-container">
      <Slider {...settings}>
        {donors.map((donor: Donor) => (
          <Box key={donor.id} sx={{ textAlign: "center" }}>
            <Typography variant="h1">{donor.name}</Typography>
            <Typography variant="h3">{donor.place}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ShowCarousel;

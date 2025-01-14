/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
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
    // autoplayspeed: 1000,
    cssEase: "linear",
    focusOnSelect: false,
  };

  return (
    <Box ref={sliderRef} className="slider-container">
      <Box>
        <Typography
          variant="h2"
          color="error"
          sx={{ textAlign: "center", p: 3 }}
        >
          పాకలపాడు గురుదేవుల ఆశ్రమం, నర్సీపట్నం
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          sx={{ textAlign: "center", p: 2 }}
        >
          తేదీ: {new Date().toLocaleDateString()}
        </Typography>
        <Typography
          variant="h5"
          color="warning"
          sx={{ textAlign: "left", ml: 10 }}
        >
          ఈరోజు అన్నదానానికి సహకరించిన వారు
        </Typography>
        <Typography
          variant="h5"
          color="warning"
          sx={{ textAlign: "left", ml: 10 }}
        >
          సర్వ శ్రీ
        </Typography>
      </Box>
      <Slider {...settings}>
        {donors.map((donor: Donor, idx) => (
          <Box key={donor.id} sx={{ textAlign: "center" }}>
            <Typography variant="h1" color="success">
              {idx + 1}. {donor.name}
            </Typography>
            <Typography variant="h3" color="secondary">
              {donor.place}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ShowCarousel;

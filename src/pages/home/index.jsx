import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import Latest from "../../components/latest";
import ProductsContainer from "../../components/products-container";
import Cta from "../../components/cta";

const Home = () => {
  return (
    <>
      <div id="slider-container">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src="assets/images/slider_1.jpg" alt="Image 1" />
            <div class="slide-caption"></div>
          </SplideSlide>
          <SplideSlide>
            <img src="assets/images/slider_2.jpg" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src="assets/images/slider_3.jpg" alt="Image 3" />
          </SplideSlide>
        </Splide>
      </div>

      <Latest />
      <ProductsContainer />
      <Cta />
    </>
  );
};

export default Home;

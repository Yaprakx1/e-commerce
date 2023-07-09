import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";

const MainPage = () => {
  return (<>
       <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <img src="assets/images/slider_1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="assets/images/slider_2.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="assets/images/slider_3.jpg" alt="Image 1" />
        </SplideSlide>
      </Splide>
       
    </>
    
  )
}

export default MainPage

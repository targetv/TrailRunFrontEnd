import styled, { css } from "styled-components";
import "swiper/swiper-bundle.css";
import { rem } from "polished";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SliderContainer = styled.section`
  display: grid;
  background-color: ${(props) => props.theme.colors.blue};
  height: 100%;

  --swiper-theme-color: white !important;

  @media screen and (max-width: 700px) {
    .swiper-button-next {
      right: 0px !important;
    }

    .swiper-button-prev {
      left: 0px !important;
    }

    h3 {
      font-size: 1.2rem !important;
    }

    p {
      width: 90% !important;
      font-size: 0.8rem !important;
    }
  }

  .slider {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: ${rem("20px")};
  }

  .slide {
    display: grid;
    place-items: center;
    grid-template-rows: ${rem("50px")} 1fr;

    h3 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.white};
    }

    p {
      color: white;
      text-align: center;
      width: 100ch;
      font-size: 1.1rem;
    }
  }

  .slide-small {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr) !important;
  }

  .singleText {
    grid-template-rows: 1fr;
  }
`;

const SponsorsComponent = () => {
  return (
    <SliderContainer id="sponsors">
      <Swiper
        className="slider"
        pagination={{ dynamicBullets: true }}
        navigation
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
      >
        <SwiperSlide className="slide">
          <h3>Breedon</h3>
          <p>
            Breedon is a leading construction materials group in the UK and
            Ireland. We operate two cement plants and around 80 quarries, 40
            asphalt plants, 170 ready-mixed concrete plants, nine concrete and
            clay products plants, four contract surfacing businesses, six
            import/export terminals and two slate production facilities.
            Breedon’s Raisby Quarry in Coxhoe, Co. Durham, is delighted once
            again to be supporting and working with Active Life Coxhoe, as
            sponsors of this year’s Coxhoe Trail Run.
          </p>
        </SwiperSlide>
        <SwiperSlide className="slide singleText">
          <h3> T.W Steam Heating Services Ltd</h3>
        </SwiperSlide>
        <SwiperSlide className="slide slide-small">
          <h3>Flowers by Michell - Coxhoe</h3>
          <h3>Alderson building services - Durham</h3>
          <h3>GT cleaning machines </h3>
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};
export default SponsorsComponent;

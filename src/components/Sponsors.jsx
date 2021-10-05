import styled from "styled-components";
import 'swiper/swiper-bundle.css';

import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper/core";
import {Swiper, SwiperSlide} from "swiper/react"

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SliderContainer = styled.section`

display: grid;
background-color: var(--blue);
height: 100%;

.slider{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
   
}

.slide{
    display: grid;
    place-items: center;
    grid-template-rows: 50px 1fr;
    

    h3{
        font-size: 2rem;
        color: white;
    }

    p{
        color: white;
        text-align: center;
        width: 100ch;
        font-size: 1.1rem;
    }
}




`


function SponsorsComponent() {
    return(
        <SliderContainer>
        <Swiper className="slider" pagination={{"dynamicBullets": true}} navigation slidesPerView={1} spaceBetween={30} centeredSlides={true} autoplay={{'delay': 8000, "disableOnInteraction": false}}>
           <SwiperSlide className="slide">
               <h3>La Chocolatrice Chocolate Factory + Shop</h3>
               <p>
                Commercial RD East, Coxhoe, DH6 4LD "Step into the magical world
                of chocolate at La Chocolatrice Chocolate Factory in Coxhoe. We
                make all of our delicious chocolate bars and treats in store. We
                dream up the flavours, do a lot of trialling and even more
                tasting, and then begin work making our truly scrumptious
                chocolate treats! We also offer the chance to be a chocolatier
                for a day, during our fantastic hands-on chocolate making
                workshops, which we run on site too!'
              </p>
           </SwiperSlide>
           <SwiperSlide className="slide">
               <h3>Breedon</h3>
               <p>
               Breedon is a leading construction materials group in the UK and
                Ireland. We operate two cement plants and around 80 quarries, 40
                asphalt plants, 170 ready-mixed concrete plants, nine concrete
                and clay products plants, four contract surfacing businesses,
                six import/export terminals and two slate production facilities.
                Breedon’s Raisby Quarry in Coxhoe, Co. Durham, is delighted once
                again to be supporting and working with Active Life Coxhoe, as
                sponsors of this year’s Coxhoe Trail Run.
              </p>
           </SwiperSlide>
        </Swiper>
      
        </SliderContainer>
    )
}
export default SponsorsComponent
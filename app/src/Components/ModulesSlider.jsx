import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AnnonceCard from './AnnonceCard'
import '../App.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import {
    Flex,
    Heading,
    Spacer,
    Box,
    Container
} from '@chakra-ui/react'
import ModulesCard from "./ModulesCard";

export default function App() {
    const sliderRef = React.useRef(null);
    const handlePrev = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
      }, []);
      const handleNext = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
      }, []);


    return (
        <Container maxW="90vw" margin="2rem auto" >
            <Flex >
                <Heading fontSize="2xl" >
                Fields
                </Heading>
                <Spacer />
                <Flex width="fit-content" gap={2}>
                    <Box borderColor="black" border='1px' width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" cursor="pointer" onClick={handlePrev}>
                        <ArrowBackIcon fontWeight={600} />
                    </Box>
                    <Spacer />
                    <Box borderColor="black" border='1px' width="30px" height="30px" display="flex" alignItems="center" justifyContent="center" cursor="pointer" onClick={handleNext}>
                        <ArrowForwardIcon fontWeight={600} />
                    </Box>
                </Flex>
            </Flex>
            
            <Swiper
                spaceBetween={30}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="mySwiper"
                ref={sliderRef}
                breakpoints={{
                    // when window width is >= 640px
                    1: {
                        width: 1,
                        slidesPerView: 0,
                      },
                    640: {
                      width: 640,
                      slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 5,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 6,
                      },
                  }}
            >
                <SwiperSlide><ModulesCard/></SwiperSlide>
                <SwiperSlide><ModulesCard/></SwiperSlide>
                <SwiperSlide><ModulesCard/></SwiperSlide>
                <SwiperSlide><ModulesCard/></SwiperSlide>
                <SwiperSlide><ModulesCard/></SwiperSlide>
                <SwiperSlide><ModulesCard/></SwiperSlide>
                <SwiperSlide><ModulesCard/></SwiperSlide>



            </Swiper>
        </Container>
    );
}

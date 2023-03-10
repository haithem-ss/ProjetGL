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
import RequestManager from "../Hooks/AxiosInstance";
function useCours (filters=null) {
    console.log(filters)
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
     RequestManager.get("cours/auteur",{params:filters})
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
     }, []);
     if (filters===null || filters==={}){
     return data;
        
     }
     return data;
}

export default function App({instructor}) {
    
    let cours=useCours({id:instructor})
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
                    Similar Courses
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
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="mySwiper"
                ref={sliderRef}
            >
                {cours && cours.map((item)=>(
                <SwiperSlide><AnnonceCard  infos={item}/></SwiperSlide>

                ))}


            </Swiper>
        </Container>
    );
}

import { Text, Flex, Image, Button,Badge,  Breadcrumb,BreadcrumbItem,BreadcrumbLink,useToast, } from "@chakra-ui/react";
import CourseImage from "./pexels-fauxels-3184328 1.png";
import ProfilePicture from "./man-g7286da5f3_1280 1.png";
import CheckVector from "./CheckVector.svg";
import LocationVector from "./LocationVector.svg";
import EmailVector from "./EmailVector.svg";
import {ChevronRightIcon} from "@chakra-ui/icons";
import PhoneVector from "./PhoneVector.svg";
import axios from "axios";
import { useState } from "react";
import {useLocation} from 'react-router-dom';
import RequestManager from "../../Hooks/AxiosInstance";
import { useNavigate } from "react-router-dom";
import CardsSlider from "../CardsSlider"
import useAddFavourite from "../../Hooks/useAddFavourite";
function Course() {
    const location = useLocation();
    const toast=useToast()
    console.log(location.state)
    const [CourseInfos, setCourseInfos] = useState(location.state);
    const userInfos=JSON.parse(localStorage.getItem("userData"))
    const navigate = useNavigate();

    const initChat=()=>{
        RequestManager.post("chat/conversations/",{
            user1:CourseInfos.auteur.id,
            user2:userInfos.id})
            .then((res)=>{
                    console.log(res.data)
                    navigate("/MyAnouncements")
            })
            .catch((err)=>console.log(err))
        }
    const addFavourite=()=>{
        useAddFavourite(CourseInfos.id,CourseInfos.auteur.id,toast)
    }
return(
    <>
    <Flex mw='100vw' mh='100vh' justifyContent='center' flexDirection='column' alignItems='center' mt={['5','5','5','5']}>
        <Flex  display={['none','none','flex','flex']} w='90%'  justify="space-between">
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Course</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>{CourseInfos.module.nom}</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{CourseInfos.titre}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        </Flex>
        <Flex mw='100vw' mh='100vh' justifyContent='center' alignItems={['center','center','flex-start','flex-start']}  gap={['5vh','5vh','10vh','10vh']} mt='4' flexDirection={['column','column','row','row']}  >
            <Flex flexDirection='Column' w={['90%','90%','30%','30%']} alignItems='center' justifyContent='center' gap='5' >
                
                <Image src={CourseImage} alt="CourseImage" />
                <Text display={['none','none','flex','flex']} alignSelf='flex-start'>instructed By:</Text>
                <Flex border='1px' padding='5'  display={['none','none','flex','flex']}>
                    <Flex gap='5' maxWidth='90%'>
                        <Image src={ProfilePicture} w='60px' h='60px' borderRadius='full' alt="InstructorProfile" />
                        <Flex flexDirection='column' mt='2' gap='2' width='80%'>
                            <Text fontSize='xl' fontWeight='700'>{CourseInfos.auteur.nom+" "+CourseInfos.auteur.prenom}</Text>
                            <Text color='#6C757D' >{CourseInfos.auteur.coursesCount} courses</Text>
                            <Text fontSize='sm'>“Bio” - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </Text>
                            <Flex alignItems='center' gap='2' >
                                <Image src={EmailVector} w='15px' h='15px'  alt="Email Logo" />
                                <Text maxWidth='80%'>{CourseInfos.auteur.email}</Text>
                            </Flex>
                            <Flex  alignItems='center' gap='2' >
                            <Image src={PhoneVector} w='15px' h='15px' alt="Phone Logo" />
                                <Text>{CourseInfos.auteur.phoneNumber}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={['100%','100%','45%','45%']} justifyContent='center'>
            <Flex alignItems='center' flexDirection='column' w='100%' gap={['1em','1em','2em','2em']} justifyContent='center' >
                <Text w='90%' fontSize={['lg','xl','4xl','4xl']} fontFamily='Space Grotesk' fontWeight='700'>{CourseInfos.titre}</Text>
                <Text w='90%' fontSize={['sm','md','lg','lg']} color='#6C757D ' fontWeight='500' fontFamily='Space Grotesk' >{CourseInfos.description}</Text>
                
                <Flex w='90%' gap='4'>
                    <Badge p='2'color='white' bgColor='#495057;'>{CourseInfos.modalité}</Badge>
                    <Badge p='2'  >{CourseInfos.niveau}</Badge>
                </Flex>
                <Flex w='90%' gap='2'>
                    <img src={LocationVector} alt="Location Logo" />
                    <Text>{CourseInfos.lieuFormation.wilaya+', '+CourseInfos.lieuFormation.wilaya}</Text>
                </Flex>
                <Flex w='90%' justifyContent='space-between'>
                    <Flex alignItems='center' gap='2'><Text fontSize='4xl' fontWeight='700' >{CourseInfos.tarif} </Text><Text  fontSize='2xl' fontWeight='500'>Da</Text> </Flex>
                    <Button backgroundColor='yellow' borderRadius='0px' onClick={initChat} padding='7' pl='9' pr='9'>Send Message</Button>
                    <Button backgroundColor='yellow' borderRadius='0px' onClick={addFavourite} padding='7' pl='9' pr='9'>Add to favourite</Button>
                </Flex>
            </Flex>
            </Flex>
            
        </Flex>
    </Flex>
        <CardsSlider instructor={CourseInfos.auteur.id}/>
    </>

);}
export default Course;

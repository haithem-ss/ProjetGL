import { Text, Flex, Image, Button,Badge,  Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator, } from "@chakra-ui/react";
import CourseImage from "./pexels-fauxels-3184328 1.png";
import ProfilePicture from "./man-g7286da5f3_1280 1.png";
import CheckVector from "./CheckVector.svg";
import LocationVector from "./LocationVector.svg";
import EmailVector from "./EmailVector.svg";
import {ChevronRightIcon} from "@chakra-ui/icons";
import PhoneVector from "./PhoneVector.svg";
import axios from "axios";
import { useState } from "react";
function Course() {
    const [CourseInfos, setCourseInfos] = useState({
        Title: '',
        Description: '',
        LevelConcerned: '',
        Cost: '',

    });
 

    
    const setTitle = e => {
        setCourseInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the Title
          Title: e.target.value,
        }))
      }
    
      const setDescription = e => {
        setCourseInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the Description
          Description: e.target.value,
        }))
      }
      const setCost = e => {
        setCourseInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the Title
          Cost: e.target.value,
        }))
      }
    
      const setLevelConcerned = e => {
        setCourseInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the Description
          LevelConcerned: e.target.value,
        }))
      }

return(
    <Flex mw='100vw' mh='100vh' justifyContent='center' flexDirection='column' alignItems='center' mt={['5','5','5','5']}>
        <Flex  display={['none','none','flex','flex']} w='80%' >
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Course</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Philosophy</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Philosophy Course From zero To Advanced</BreadcrumbLink>
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
                            <Text fontSize='xl' fontWeight='700'>Mokhtar Djelloul</Text>
                            <Text color='#6C757D' >9 courses</Text>
                            <Text fontSize='sm'>“Bio” - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </Text>
                            <Flex alignItems='center' gap='2' >
                                <Image src={EmailVector} w='25px' h='25px' alt="Email Logo" />
                                <Text maxWidth='80%'>Djamelbnf38@gmail.com</Text>
                            </Flex>
                            <Flex  alignItems='center' gap='2' >
                            <Image src={PhoneVector} w='25px' h='25px' alt="Phone Logo" />
                                <Text>+213 549161735</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={['100%','100%','45%','45%']} justifyContent='center'>
            <Flex alignItems='center' flexDirection='column' w='100%' gap={['1em','1em','2em','2em']} justifyContent='center' >
                <Text w='90%' fontSize={['lg','xl','4xl','4xl']} fontFamily='Space Grotesk' fontWeight='700'>Philosophy Course From zero To Advanced</Text>
                <Text w='90%' fontSize={['sm','md','lg','lg']} color='#6C757D ' fontWeight='500' fontFamily='Space Grotesk' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                
                <Flex w='90%' gap='4'>
                    <Badge p='2'color='white' bgColor='#495057;'>Presental</Badge>
                    <Badge p='2'  >Primaire - 1</Badge>
                </Flex>
                <Flex w='90%' gap='2'>
                    <img src={LocationVector} alt="Location Logo" />
                    <Text>khemisti, tissemsilt</Text>
                </Flex>
                <Flex w='90%' justifyContent='space-between'>
                    <Flex alignItems='center' gap='2'><Text fontSize='4xl' fontWeight='700' >2500 </Text><Text alignSelf='flex-end' fontSize='2xl' fontWeight='500'>Da</Text> </Flex>
                    <Button backgroundColor='yellow' borderRadius='0px' padding='7' pl='9' pr='9'>Send Message</Button>
                </Flex>
            </Flex>
            </Flex>
            
        </Flex>
    </Flex>
);}
export default Course;

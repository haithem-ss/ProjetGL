import { Text, Flex, Image, Button,Badge } from "@chakra-ui/react";
import CourseImage from "./pexels-fauxels-3184328 1.png";
import ProfilePicture from "./man-g7286da5f3_1280 1.png";
import CheckVector from "./CheckVector.svg";
import LocationVector from "./LocationVector.svg";
import EmailVector from "./EmailVector.svg";
import PhoneVector from "./PhoneVector.svg";
function Course() {
return(
    <Flex mw='100vw' mh='100vh' justifyContent='center' mt='12' mb='20' gap='10vw'>
        <Flex flexDirection='Column' w='30%' alignItems='center' gap='5' >
            <Text alignSelf='flex-start' >Path</Text>
            <Image src={CourseImage} alt="CourseImage" />
            <Text alignSelf='flex-start'>instructed By:</Text>
            <Flex border='1px' padding='5'>
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
                        <Image src={PhoneVector} w='25px' h='25px' alt="Email Logo" />
                            <Text>+213 549161735</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        <Flex flexDirection='column' w='45%' gap='2em'>
            <Text fontSize='4xl' fontFamily='Space Grotesk' fontWeight='700'>Philosophy Course From zero To Advanced</Text>
            <Text fontSize='lg' color='#6C757D ' fontWeight='500' fontFamily='Space Grotesk' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
            
            <Flex gap='4'>
                <Badge p='2'color='white' bgColor='#495057;'>Presental</Badge>
                <Badge p='2'  >Primaire - 1</Badge>
            </Flex>
            <Flex gap='2'>
                <img src={LocationVector} alt="Location Logo" />
                <Text>khemisti, tissemsilt</Text>
            </Flex>
            <Flex justifyContent='space-between'>
                <Flex alignItems='center' gap='2'><Text fontSize='4xl' fontWeight='700' >2500 </Text><Text alignSelf='flex-end' fontSize='2xl' fontWeight='500'>Da</Text> </Flex>
                <Button backgroundColor='yellow' borderRadius='0px' padding='7' pl='9' pr='9'>Send Message</Button>
            </Flex>
        </Flex>
        
    </Flex>
);}
export default Course;

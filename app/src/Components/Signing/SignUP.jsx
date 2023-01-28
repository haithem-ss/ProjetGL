import { Text, Flex, Image, Button,Badge,FormControl,FormLabel,Input,FormErrorMessage,FormHelperText,Radio,Link,Show} from "@chakra-ui/react";
import logo from "./Logo.svg"
import Line from "./Line.svg"
import Social1 from "./Vector 4.svg"
import Social2 from "./Vector 5.svg"
import Social3 from "./Vector 6.svg"
import image from "../../assets/landingBg.png";
import zeus from "./zeus.svg";
import axios from "axios";
import { useState } from "react";
export default function SignUp(){

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:8000/users/register', UserInfos);
        const { token } = response.data;
        // Store the token in local storage or use it to authenticate further requests
        } catch (error) {
        console.error(error);
        }
    };
    const [UserInfos, setUserInfos] = useState({
        prenom: '',
        nom: '',
        password: '',
        email: '',
    });


    
    const setprenom = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the prenom
          prenom: e.target.value,
        }))
      }
    
      const setnom = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the nom
          nom: e.target.value,
        }))
      }
      const setEmail = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the prenom
          email: e.target.value,
        }))
      }
    
      const setPassword = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the nom
          password: e.target.value,
        }))
      }


    
    return(
        <Flex w='100vw' h='100vh'justifyContent={['center','center','space-between']} bgSize='contain' gap={ {md:'0',xl:'10'} } bgPosition='center'  bgImage={image} bgColor='#1A1B1C;' overflow='hidden'>
            <Show  above='xl'><Image w={{md:'40%'}} alignSelf='flex-end' src={zeus} order='2' Display={{sm:'none', md:'none'}} maxWidth='fit-content' ></Image></Show>
            <Flex flexDirection='column' w={['90%','md']} mx={{md:'40'}}  my='auto' alignItems='center' gap='10' order='1'>
                <Image src={logo} w='40'></Image>
                <Flex flexDirection='column' w={['full','full','xl','xl']} h={{md:'xl'}} gap='3' justifyContent='center' alignItems='center' bgColor='white' borderRadius='4px' p='10' maxWidth='100%' >
                    
                    <FormControl>
                        <FormLabel >First Name</FormLabel>
                        <Input borderRadius='0px' type='text' value={UserInfos.prenom} onChange={setprenom}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input borderRadius='0px' type='text' value={UserInfos.nom} onChange={setnom} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input borderRadius='0px' type='email' value={UserInfos.email} onChange={setEmail}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input borderRadius='0px' type='password' value={UserInfos.password} onChange={setPassword} />
                    </FormControl>
                    
                    <Button borderRadius='0px' bgColor='#00F07D' width='80%' type='submit' onClick={handleSubmit}><Text fontSize='xl' color='black'>Register</Text></Button>
                    <Flex justifyContent='center' gap='4' mt='5'>
                        <Image src={Line} w='20%'></Image>
                        <Text fontSize='md' color='gray.500'> or continue with</Text>
                        <Image src={Line} w='20%'></Image>
                    </Flex>
                    <Flex justifyContent='space-between' w='100%' mt='5'>
                        <Button w='30%'  h='10'bgColor='white' borderRadius='4px' border='1px' borderColor='gray.500' > <Image src={Social1} ></Image> </Button>
                        <Button w='30%' h='10'bgColor='white' borderRadius='4px' border='1px' borderColor='gray.500' > <Image src={Social2} ></Image> </Button>
                        <Button w='30%'  h='10'bgColor='white' borderRadius='4px' border='1px' borderColor='gray.500' > <Image src={Social3} ></Image> </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        
    )
}
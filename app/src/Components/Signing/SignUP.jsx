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
export default function SignIn(){
    const [UserInfos, setUserInfos] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('/api/users/register', UserInfos);
        const { token } = response.data;
        // Store the token in local storage or use it to authenticate further requests
        } catch (error) {
        console.error(error);
        }
    };
    const setFirstName = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the firstName
          firstName: e.target.value,
        }))
      }
    
      const setLastName = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the lastName
          lastName: e.target.value,
        }))
      }
      const setEmail = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the firstName
          email: e.target.value,
        }))
      }
    
      const setPassword = e => {
        setUserInfos(existingValues => ({
          // Retain the existing values
          ...existingValues,
          // update the lastName
          password: e.target.value,
        }))
      }


    
    return(
        <Flex w='100vw' h='100vh'justifyContent={['center','center','space-between']} bgSize='contain' gap={ {md:'0',xl:'10'} } bgPosition='center'  bgImage={image} bgColor='#1A1B1C;' overflow='hidden'>
            <Show  above='xl'><Image w={{md:'40%'}} alignSelf='flex-end' src={zeus} order='2' Display={{sm:'none', md:'none'}} maxWidth='fit-content' ></Image></Show>
            <Flex flexDirection='column' w={['90%','md']} mx={{md:'40'}}  my='auto' alignItems='center' gap='10' order='1'>
                <Image src={logo} w='40'></Image>
                <Flex flexDirection='column' w={['full','xl']} h={{md:'xl'}} gap='5' justifyContent='center' alignItems='center' bgColor='white' borderRadius='4px' p='10' maxWidth='100%' >
                    <Text>{JSON.stringify(UserInfos)}</Text>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input borderRadius='0px' type='email' value={UserInfos.Email} onChange={setEmail}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input borderRadius='0px' type='password' value={UserInfos.Password} onChange={setPassword} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input borderRadius='0px' type='email' value={UserInfos.Email} onChange={setEmail}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input borderRadius='0px' type='password' value={UserInfos.Password} onChange={setPassword} />
                    </FormControl>
                    
                    <Button borderRadius='0px' bgColor='#00F07D' width='80%'><Text fontSize='xl' color='black'>Sign In</Text></Button>
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
import { Text, Flex, Image, Button,Badge,FormControl,FormLabel,Input,FormErrorMessage,FormHelperText,Radio,Link,Show} from "@chakra-ui/react";
import logo from "./Logo.svg"
import Line from "./Line.svg"
import Social1 from "./Vector 4.svg"
import Social2 from "./Vector 5.svg"
import Social3 from "./Vector 6.svg"
import image from "../../assets/landingBg.png";
import zeus from "./zeus.svg";
export default function SignIn(){
    return(
        <Flex w='100vw' h='100vh'justifyContent={['center','center','space-between']} bgSize='contain' gap={ {md:'0',xl:'10'} } bgPosition='center'  bgImage={image} bgColor='#1A1B1C;' overflow='hidden'>
            <Show  above='xl'><Image w={{md:'40%'}} alignSelf='flex-end' src={zeus} order='2' Display={{sm:'none', md:'none'}} maxWidth='fit-content' ></Image></Show>
            <Flex flexDirection='column' w={['90%','md']} mx={{md:'40'}}  my='auto' alignItems='center' gap='10' order='1'>
                <Image src={logo} w='40'></Image>
                <Flex flexDirection='column' w={['full','xl']} h={{md:'xl'}} gap='5' justifyContent='center' alignItems='center' bgColor='white' borderRadius='4px' p='10' maxWidth='100%' >
                    
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input borderRadius='0px' type='email' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input borderRadius='0px' type='password' />
                    </FormControl>
                    <Flex w='100%' justifyContent='space-between' mt='5'>
                        <Radio value='Sasuke' color='#343A40'>Remember Me </Radio>
                        <Link fontWeight='500' color='#343A40'>Forgot Password ?</Link>
                    </Flex>
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
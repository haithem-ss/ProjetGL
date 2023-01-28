import React, { useState, useEffect } from "react";
import { Text, Flex, Image, Button,Link,IconButton,Divider} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import logo from "./Logo.svg";
import pattern from "./pattern.svg";
import "./scroll.css";
import TOP from "../Landing/Top";




function Navbar() {
const [isShown, setShown] = useState(false);
  const height=(0.9 * window.innerHeight)
  const handleScroll = () => {
    if (window.pageYOffset > height) {
      setShown(true);
    } else {
      setShown(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Flex flexDirection='column' position='fixed' zIndex='20' >
        <Flex w='100vw' h='10vh' bg="#1F1F1F" justifyContent='center' >
          <Flex w='90%' justifyContent='space-between' alignItems='center'>
            <Image maxWidth={['15%','15%','10%','8%']} src={logo} max></Image>
            <Flex h='100%' alignItems='Center' display={['none','none','flex','flex']} color='white' >
              <Divider orientation='vertical'  borderWidth='1px' opacity='1'  display={isShown ? 'flex' : 'none'}   />
              <Link padding='6'  _hover={{bgColor:'white' ,color:'black'}} >HOME</Link>
              <Divider orientation='vertical' borderWidth='1px' opacity='1' display={isShown ? 'flex' : 'none'}  />
              <Link padding='6'  _hover={{bgColor:'white' ,color:'black'}}>COURSES</Link>
              <Divider orientation='vertical' borderWidth='1px' opacity='1' display={isShown ? 'flex' : 'none'}  />
              <Link padding='6'  _hover={{bgColor:'white' ,color:'black'}}>ACCOUNT</Link>
              <Divider orientation='vertical' borderWidth='1px' opacity='1' display={isShown ? 'flex' : 'none'}  />
            </Flex>
            <IconButton
            bgColor='transparent'
            padding='4'
            color='white'
            _hover={{bgColor:'white' ,color:'black'}} 
            fontSize='2xl'
            icon={<HamburgerIcon/>}
            display={['flex','flex','none','none']}
            >

            </IconButton>

          </Flex>
        </Flex>
        <Flex className="wrapper" display={isShown ? 'flex' : 'none'} w='100vw' h='10vh' bg="#1F1F1F" justifyContent='center' zIndex='20' bgImage={pattern}>  
        </Flex>
      </Flex>
      <TOP/>
    </div>
    
  )
}

export default Navbar;
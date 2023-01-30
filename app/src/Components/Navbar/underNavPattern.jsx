import React, { useState, useEffect } from "react";
import { Text, Flex, Image, Button,Link,IconButton,Divider} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import logo from "./Logo.svg";
import pattern from "./pattern.svg";
import "./scroll.css";
import TOP from "../Landing/Top";

function UnderNavbar() {
const [isShown, setShown] = useState(true);
  const height=(0.9 * window.innerHeight)

  return (
        <Flex   className="wrapper"  w='100vw' h='10vh' bg={isShown ? "#1F1F1F" : 'white'} justifyContent='center' zIndex='20'  bgImage={isShown ? pattern : 'white'} >  
        </Flex>  
    
  )
}

export default UnderNavbar;

import React, { useState, useEffect } from "react";
import {
  Text, Flex, Image, Button, Link, IconButton, Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider, border,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "./Logo.svg";
import pattern from "./pattern.svg";
import "./scroll.css";
import TOP from "../Landing/Top";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const Logout = () => {
    localStorage.removeItem("authTokens")
    localStorage.removeItem("userData")
    location.reload()
  }

  const isStaff = JSON.parse(localStorage.getItem("userData"))?.staff === true
  const isLoggedIn = JSON.parse(localStorage.getItem("userData")) != null
  console.log(isLoggedIn)
  const [isShown, setShown] = useState(false);
const [IsToggeled, setIsToggeled] = useState(false);

  const height = (0.9 * window.innerHeight)
  const handleScroll = () => {
    if (window.pageYOffset > height) {
      setShown(true);
    } else {
      setShown(false);
    }
  };
  const handleMenuClick=()=>{
    if (IsToggeled==true) {
      setIsToggeled(false)
    }
    else{
      setIsToggeled(true)
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div >
      <Flex flexDirection='column' position='fixed' zIndex='20' alignItems='center'>
        <Flex w='100vw' h='10vh' bg={IsToggeled ? '#282828' :"#1F1F1F"} justifyContent='center' >
          <Flex w='90%' justifyContent='space-between' alignItems='center'>
            <Image maxWidth={['15%', '15%', '10%', '8%']} src={logo} max></Image>
            <Flex h='100%' alignItems='Center' display={['none', 'none', 'flex', 'flex']} color='white' >
              <Divider transition="all 0.1s ease-in-out" orientation='vertical' borderWidth='1px' opacity='1' borderColor={isShown ? 'white' : '#1F1F1F'} />
              <Link padding='6' _hover={{ bgColor: 'white', color: 'black' }}onClick={() => navigate("/")} >HOME</Link>
              <Divider transition="all 0.1s ease-in-out" orientation='vertical' borderWidth='1px' opacity='1' borderColor={isShown ? 'white' : '#1F1F1F'} />
              <Link padding='6' _hover={{ bgColor: 'white', color: 'black' }}>COURSES</Link>
              <Divider transition="all 0.1s ease-in-out" orientation='vertical' borderWidth='1px' opacity='1' borderColor={isShown ? 'white' : '#1F1F1F'} height="99%" />
              <Menu>
                <MenuButton padding='6' bg="#1F1F1F" _active={{ minHeight: "100%", borderRadius: 0, outline: 0 }} _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} as={Button} >
                  ACCOUNT
                </MenuButton>
                <MenuList bg="#1F1F1F">
                  {isStaff && isLoggedIn &&
                    <>
                      <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={() => navigate("/Dashboard")}>Dashboard</MenuItem>
                      <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={() => navigate("/ControlPanel")}>Control pannel</MenuItem>
                      <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={Logout}>Logout</MenuItem>

                    </>
                  }
                  {!isStaff && isLoggedIn && <>
                    <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={() => navigate("/Messages")} >My messages</MenuItem>
                    <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={() => navigate("/Favourites")}>My favourites</MenuItem>
                    <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={Logout}>Logout</MenuItem>

                  </>}
                  {!isLoggedIn && <>
                    <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={() => navigate("/Login")}>Login</MenuItem>
                    <MenuItem bg="#1F1F1F" _hover={{ bgColor: 'white', color: 'black', minHeight: "100%", boreder: 0, borderRadius: 0 }} onClick={() => navigate("/Register")}>Register</MenuItem>

                  </>}

                </MenuList>
              </Menu>

              <Divider transition="all 0.1s ease-in-out" orientation='vertical' borderWidth='1px' opacity='1' borderColor={isShown ? 'white' : '#1F1F1F'} />
            </Flex>

            <IconButton
              bgColor='transparent'
              padding='4'
              color='white'
              _hover={{ bgColor: "#252525", color: 'black', border:'none' }}
              fontSize='2xl'
              icon={<HamburgerIcon />}
              display={['flex', 'flex', 'none', 'none']}
            onClick={handleMenuClick}
            >
            
            </IconButton>
          </Flex>
          
        </Flex>
        <Flex className="NavSlide"  display={IsToggeled ? 'flex' :'none'} gap='5' fontSize='2xl' alignItems='center' justifyContent='center' flexDirection='column'bg="#1F1F1F"  w='100vw' h='40vh'>
          <Link _hover={{'color':"#555353"}} color='white'>HOME</Link>
          <Link _hover={{'color':"#555353"}} color='white'>COURSES</Link>
          <Link _hover={{'color':"#555353"}} color='white'>ACCOUNT</Link>
        </Flex>
      </Flex>

    </div >

  )
}

export default Navbar;
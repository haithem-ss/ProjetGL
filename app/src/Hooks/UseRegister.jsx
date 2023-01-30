import React from "react";
import RequestManager from "./AxiosInstance";
import { useToast } from "@chakra-ui/react";

const UseRegister=(UserInfos,toast,navigate)=> {
    RequestManager.post("users/register",UserInfos)
        .then((res)=>{
            console.log(res)
            if (res.status===201){
                toast({
                  title: 'Account created.',
                  description: "Please login now.",
                  status: 'success',
                  position: 'bottom-right',
                  duration: 2000,
                  isClosable: true,
                })
                setTimeout(()=>{
                    navigate("/Login");
                },3000)
              }
        })
        .catch((err)=>{
          console.log(err)
            toast({
                title: 'There was an error',
                description: "Please verify and try again",
                position: 'bottom-right',
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
        })
     
}

export default UseRegister
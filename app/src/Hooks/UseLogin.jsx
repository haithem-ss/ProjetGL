import React from "react";
import RequestManager from "./AxiosInstance";

const UseLogin=async (UserInfos,toast,navigate)=> {
    RequestManager.post("users/login",UserInfos)
        .then((res)=>{
            console.log(res)
            console.log(UserInfos)
            if (res.status===200){
                toast({
                  title: 'Logged in successfully',
                  description: "Please login now.",
                  status: 'success',
                  position: 'bottom-right',
                  duration: 2000,
                  isClosable: true,
                })
                setTimeout(()=>{
                    navigate("/");
                },3000)
                let userData={
                  id:res.data.id,
                  email:res.data.email,
                  nom:res.data.nom,
                  prenom:res.data.prenom,
                  staff:res.data.staff,
                }
                localStorage.setItem("userData",JSON.stringify(userData))

                let Tokens={
                  access:res.data.access,
                  refresh:res.data.refresh,
                }
                localStorage.setItem("authTokens",JSON.stringify(Tokens))

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

export default UseLogin
import React from "react";
import RequestManager from "./AxiosInstance";
 function useAddFavourite(cours,user,toast) {
     RequestManager.post("favoriteCours/post/",{cours:cours,user:user})
        .then((res)=>{
            console.log(res)
            if (res.status === 201){
                toast({
                    title: 'Added to favourites successfully',
                    status: 'success',
                    position: 'bottom-right',
                    duration: 2000,
                    isClosable: true,
                  })
            }else{
                toast({
                    title: 'Already added to favourites',
                    status: 'info',
                    position: 'bottom-right',
                    duration: 2000,
                    isClosable: true,
                  })
            }
            })
              .catch ((err)=>{
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

export default useAddFavourite
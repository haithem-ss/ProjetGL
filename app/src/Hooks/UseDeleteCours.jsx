import React from "react";
import RequestManager from "./AxiosInstance";
const UseDeleteCours=(id,toast)=> {
        RequestManager.delete("cours/",{data:{id:id}})
        .then((res)=>{
            if (res.status===202){
                toast({ 
                    title: 'Course deleted successfully',
                    status: 'success',
                    position: 'bottom-right',
                    duration: 2000,
                    isClosable: true,
                  })
                  location.reload()
            }
        }).catch((err)=>{
            console.log(err)
            toast({
                title: 'There was an error',
                status: 'error',
                position: 'bottom-right',
                duration: 2000,
                isClosable: true,
              })
        })

}

export default UseDeleteCours
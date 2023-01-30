import React from "react";
import RequestManager from "./AxiosInstance";
 function useFavourites(user) {
  const [data,setData]=React.useState()
      console.log(user)
     React.useEffect(()=>{
      RequestManager.get("favoriteCours/",{params:{user:user}})
        .then((res)=>{
            console.log(res)
            setData(res.data)
            })
     },[user])
     return data
}

export default useFavourites
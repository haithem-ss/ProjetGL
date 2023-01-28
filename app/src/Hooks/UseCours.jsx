import React from "react";
import RequestManager from "./AxiosInstance";
 function useCours (filters=null) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
     RequestManager.get("cours/Search",{params:filters})
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
     }, [filters]);
     if (filters===null || filters==={}){
     return data;
        
     }
     return data;
}

export default useCours
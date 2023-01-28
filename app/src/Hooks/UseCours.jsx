import React from "react";
import RequestManager from "./AxiosInstance";
const useCours=(filters=null)=> {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        RequestManager.get("cours/Search",{params:filters})
        .then((res)=>{
            setData(res.data)
        })
     }, [filters]);
     return data;
}

export default useCours
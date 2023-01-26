import React from "react";
import RequestManager from "./AxiosInstance";
const useModules=()=> {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        RequestManager.get("cours/modules")
        .then((res)=>{
            setData(res.data)
        })
     }, []);
     return data;

}

export default useModules
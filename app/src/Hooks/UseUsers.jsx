import React from "react";
import RequestManager from "./AxiosInstance";
const UseUsers=()=> {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        RequestManager.get("users/")
        .then((res)=>{
            setData(res.data)
        })
     }, []);
     return data;
}

export default UseUsers
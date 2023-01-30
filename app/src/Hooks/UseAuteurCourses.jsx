import React from "react";
import RequestManager from "./AxiosInstance";
 function UseAuteurCourses (id) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
     RequestManager.get("cours/auteur",{params:{id:id}})
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
     }, []);

     return data;
}

export default UseAuteurCourses
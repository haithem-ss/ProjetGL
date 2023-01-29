import React from "react";
import RequestManager from "./AxiosInstance";
const UseConversationHistory = (userData) => {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        RequestManager.get("chat/conversations/", { params: { idUser: userData.id } })
            .then((res) => {
                let result = []
                for (let i of res.data) {
                    let obj = {}
                    if (i.user1.id != userData.id) {
                        obj["id"]=i.id
                        obj["user2"] = i.user1
                        obj["user1"] = i.user2
                        result.push(obj)
                    }else{
                        result.push(i)
                    }
                }
                setData(result)
            })
    }, []);
    return data;

}

export default UseConversationHistory
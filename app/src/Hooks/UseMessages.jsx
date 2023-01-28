import React from "react";
import RequestManager from "./AxiosInstance";
function UseMessages(currentChat) {
    const [data, setData] = React.useState([]);
    const [dates, setDates] = React.useState([]);
    React.useEffect(() => {
        if (currentChat != null) {
            RequestManager.get("chat/messages/", { params: { conversation_id: currentChat.id } })
                .then((res) => {
                    let newData = []
                    for (let i of res.data) {
                        if (newData.length === 0) {
                            newData.push({
                                dateTimeMessage: new Date(i.dateTimeMessage).toDateString(),
                                messages: [i]
                            })
                        } else {
                            if (new Date(i.dateTimeMessage).toDateString() === newData[newData.length - 1].dateTimeMessage) {
                                newData[newData.length - 1].messages.push(i)
                            } else {
                                newData.push({
                                    dateTimeMessage: new Date(i.dateTimeMessage).toDateString(),
                                    messages: [i]
                                })
                            }
                        }
                    }
                    setData(newData);
                });
        }
    },
        [currentChat]);
    return data;

}

export default UseMessages
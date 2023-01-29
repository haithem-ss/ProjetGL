// import { createContext, useState, useEffect } from 'react'
// import { useToast } from "@chakra-ui/react";
// import RequestManager from "../Hooks/AxiosInstance";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext()
// const toast = useToast()
// const navigate = useNavigate()
// export default AuthContext;


// export const AuthProvider = ({ children }) => {
//     let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
//     let [user, setUser] = useState(() => localStorage.getItem('userData') ? localStorage.getItem('userData') : null)
//     let [loading, setLoading] = useState(true)

//     const UseLogin = async (UserInfos) => {
//         RequestManager.post("users/login", UserInfos)
//             .then((res) => {
//                 console.log(res)
//                 console.log(UserInfos)
//                 if (res.status === 200) {
//                     toast({
//                         title: 'Logged in successfully',
//                         description: "Please login now.",
//                         status: 'success',
//                         position: 'bottom-right',
//                         duration: 2000,
//                         isClosable: true,
//                     })
//                     setTimeout(() => {
//                         navigate("/");
//                     }, 3000)
//                     let userData = {
//                         id: res.data.id,
//                         email: res.data.email,
//                         nom: res.data.nom,
//                         prenom: res.data.prenom,
//                         staff: res.data.staff,
//                     }
//                     let Tokens = {
//                         access: res.data.access,
//                         refresh: res.data.refresh,
//                     }
//                     localStorage.setItem("userData", JSON.stringify(userData))
//                     setAuthTokens(Tokens)
//                     setUser(userData)
//                 }
//             })
//             .catch((err) => {
//                 toast({
//                     title: 'There was an error',
//                     description: "Please verify and try again",
//                     position: 'bottom-right',
//                     status: 'error',
//                     duration: 5000,
//                     isClosable: true,
//                 })
//             })

//     }

//     let logoutUser = () => {
//         setAuthTokens(null)
//         setUser(null)
//         localStorage.removeItem('authTokens')
//         localStorage.removeItem('userData')
//         navigate("/");
//     }

//     let updateToken = async () => {
//         RequestManager.post("users/token/refresh/", {
//             Refresh: authTokens.refresh
//         }).then((res) => {
//             console.log("Updating token")
//             if (response.status === 200) {
//                 setAuthTokens(data)
//                 setUser(jwt_decode(data.access))
//                 localStorage.setItem('authTokens', JSON.stringify(data))
//             }
//         }).catch((err) => {
//             logoutUser()
//         }).finally(() => {
//             if (loading) {
//                 setLoading(false)
//             }
//         })
//     }

//     let contextData = {
//         user: user,
//         authTokens: authTokens,
//         loginUser: loginUser,
//         logoutUser: logoutUser,
//     }


//     useEffect(() => {

//         if (loading) {
//             updateToken()
//         }

//         let fourMinutes = 1000 * 60 * 4

//         let interval = setInterval(() => {
//             if (authTokens) {
//                 updateToken()
//             }
//         }, fourMinutes)
//         return () => clearInterval(interval)

//     }, [authTokens, loading])

//     return (
//         <AuthContext.Provider value={contextData} >
//             {loading ? null : children}
//         </AuthContext.Provider>
//     )
// }
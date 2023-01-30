import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Social1 from "../Components/Signing/Vector 4.svg"
import { Text, Flex, Image, Button,useToast,FormControl,FormLabel,Input,FormErrorMessage,FormHelperText,Radio,Link,Show} from "@chakra-ui/react";
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

function GoogleAuth() {
    const [ profile, setProfile ] = useState([]);
    let navigate=useNavigate()
    const clientId = '1029852426120-knmri2g5rju9u5cortjhup7qp56n4vl6.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
              apiKey: 'YOUR_API_KEY',
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log(res)
        setProfile(null);
        navigate("/")

    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
    };

    return (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    render={renderProps => (
                        <Button w='30%' onClick={renderProps.onClick}  h='10'bgColor='white' borderRadius='4px' border='1px' borderColor='gray.500' > <Image src={Social1} ></Image> </Button>
                      )}
                />
    );
}
export default GoogleAuth;
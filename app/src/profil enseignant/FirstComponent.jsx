import { AspectRatio, Avatar, Container, Grid, Title, Text, Group, Button, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import mailimg from "./assets/mail.svg";
import phoneimg from "./assets/phone.svg";
import {useLocation} from 'react-router-dom';
import Navbar from "../Components/Navbar/Navbar"
import Footer from "./Footer"
import UseAuteurCourses from"../Hooks/UseAuteurCourses"
import CardsContainer from "../Components/CardsContainer";
import RequestManager from "../Hooks/AxiosInstance";
import { useNavigate } from "react-router-dom";
export default function FirstComponent() {
    let navigate=useNavigate()
    const location = useLocation();
    console.log(location.state)
    const { imgurl, nom,prenom, coursesCount, bio, email, phoneNumber ,id}=location.state.auteur
    const isMobile = useMediaQuery("(max-width: 768px)")
    const data=UseAuteurCourses(id)
    const initChat=()=>{
        const userInfos=JSON.parse(localStorage.getItem("userData"))
        RequestManager.post("chat/conversations/",{
            user1:id,
            user2:userInfos.id})
            .then((res)=>{
                    console.log(res.data)
                    navigate("/ControlPanel")
            })
            .catch((err)=>console.log(err))
        }
    return (<>
    <Navbar/>
        <Container style={{minHeight:"100vh",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Grid gutter="lg">
                <Grid.Col span={12} sm={2}>
                    <Center>
                        <AspectRatio w={isMobile ? "50%" : "100%"} ratio={1}>
                            <Avatar
                                src={imgurl}
                                size="xl" radius="100%" />
                        </AspectRatio>
                    </Center>
                </Grid.Col>
                <Grid.Col span={12} sm={7}>
                    <Title mt="xl" mb="sm" order={2} align={isMobile ? "center" : "start"} >{nom+" "+prenom}</Title>
                    <Text mb="xs" c="dimmed" align={isMobile ? "center" : "start"} >{coursesCount} Courses</Text>
                    <Text fz="lg" color="#495057">
                        {bio}
                    </Text>
                </Grid.Col>
                <Grid.Col span={12} sm={3}>
                    <Group mb="sm" position="left" spacing={0}>
                        <img width={24} alt="mail" src={mailimg} />
                        <Text ml="xs">{email}</Text>
                    </Group>
                    <Group position="left" spacing={0}>
                        <img width={24} alt="mail" src={phoneimg} />
                        <Text ml="xs">{phoneNumber}</Text>
                    </Group>
                    <Group position={isMobile ? "right" : "left"}>
                        <Button
                        onClick={initChat}
                            mt="xl"
                            radius={0}
                            size="lg"
                            sx={theme => ({
                                backgroundColor: "#FFF84B",
                                color: "#212529",
                                borderColor: "none",
                                fontSize: "1rem",
                                "&:active": {
                                    backgroundColor: "#EAE445"
                                }
                            })}>
                            Send Message
                        </Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
        <Container size="90%">
        <CardsContainer title="Anouncments" data={data}/>

        </Container>
        <Footer/>
        </>
 
    );
}
import { AspectRatio, Box, Center, Container, Group, Text } from "@mantine/core";
import footerlogo from "./assets/footerlogo.svg"
import facebookimg from "./assets/facebook.svg"
import instagramimg from "./assets/instagram.svg"
import twitterimg from "./assets/twitter.svg"
import linkedinimg from "./assets/linkedin.svg"

export default function Footer() {
    return (
        <Box mt="xl" py={"xl"} sx={{ width: "100%", backgroundColor: "#1A1B1C" }}>
            <Container size="xs">
                <Center margin="2rem 0rem">
                    <img alt="footerlogo" src={footerlogo} width="200"  style={{margin:"2rem 0rem"}}/>
                </Center>
                <Center >
                    <Text align="center" color={"white"} weight="300" size="xl">
                        The first online soutien courses in algeria !
                    </Text>
                </Center>
                <Center mt="xl">
                    <Group mt="xl" position="center">
                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"50%"} alt="linkedin" src={linkedinimg} style={{cursor:"pointer"}}/>
                            </Box>
                        </AspectRatio>

                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"60%"} alt="instagram" src={instagramimg} style={{cursor:"pointer"}}/>
                            </Box>
                        </AspectRatio>

                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"60%"} alt="facebook" src={facebookimg} style={{cursor:"pointer"}} />
                            </Box>
                        </AspectRatio>

                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"60%"} alt="twitter" src={twitterimg} style={{cursor:"pointer"}} />
                            </Box>
                        </AspectRatio>
                    </Group>
                </Center>
            </Container>
        </Box>
    );
}
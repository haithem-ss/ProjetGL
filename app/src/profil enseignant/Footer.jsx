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
                <Center>
                    <img alt="footerlogo" src={footerlogo} />
                </Center>
                <Center >
                    <Text align="center" color={"white"}>
                        The first online soutien courses in algeria !
                    </Text>
                </Center>
                <Center mt="xl">
                    <Group mt="xl" position="center">
                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"50%"} alt="linkedin" src={linkedinimg} />
                            </Box>
                        </AspectRatio>

                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"60%"} alt="instagram" src={instagramimg} />
                            </Box>
                        </AspectRatio>

                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"60%"} alt="facebook" src={facebookimg} />
                            </Box>
                        </AspectRatio>

                        <AspectRatio w={"30px"} ratio={1}>
                            <Box sx={{ backgroundColor: "#F8F9FA" }} >
                                <img width={"60%"} alt="twitter" src={twitterimg} />
                            </Box>
                        </AspectRatio>
                    </Group>
                </Center>
            </Container>
        </Box>
    );
}
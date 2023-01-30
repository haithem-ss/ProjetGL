import { AspectRatio, Avatar, Container, Grid, Title, Text, Group, Button, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import mailimg from "./assets/mail.svg";
import phoneimg from "./assets/phone.svg";

export default function FirstComponent({ imgurl, name, courses, bio, email, phone }) {
    const isMobile = useMediaQuery("(max-width: 768px)")
    return (
        <Container>
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
                    <Title mt="xl" mb="sm" order={2} align={isMobile ? "center" : "start"} >{name}</Title>
                    <Text mb="xs" c="dimmed" align={isMobile ? "center" : "start"} >{courses}</Text>
                    <Text fz="sm">
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
                        <Text ml="xs">{phone}</Text>
                    </Group>
                    <Group position={isMobile ? "right" : "left"}>
                        <Button
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
    );
}
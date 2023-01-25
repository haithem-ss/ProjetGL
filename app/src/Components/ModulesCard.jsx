import {
    Image,
    Text,
    Heading,
    Box,
    Tag,
} from '@chakra-ui/react'
import ModuleBackground from "../assets/ModuleBackground.png"

export default function () {
    return <>
        <Box
            userSelect="none"
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="flex-end"
            width="100%"
            maxWidth="100%"
            textAlign="left"
            _before={{
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(0deg, #212529 0%, rgba(33, 37, 41, 0) 100%);",
                zIndex: 1
            }}
            backgroundImage={`url(${ModuleBackground})`}
            backgroundSize="contain"
            height={200}>
            <Heading size="md" color="white" zIndex="1" margin=" 0 0 0.25rem 0.5rem ">
                Subject
            </Heading>
        </Box>
    </>
}
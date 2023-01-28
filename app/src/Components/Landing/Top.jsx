import image from "../../assets/landingBg.png";
import image2 from "../../assets/3amod1.png";
import image3 from "../../assets/3amod2.svg";
import { Text, Flex, Image, Button,Show} from "@chakra-ui/react";
function TOP() {
  return (
      <Flex
        w="100vw"
        h="90vh"
        bg="#1F1F1F"
        overflow="hidden"
        bgImage={image}
        bgSize="80%"
        justifyContent="space-between"
        flexDirection={["column", "column", "row"  ]}
        mb='200px'
        position='relative'
        top='10vh'
      >
        <Flex
          h={{ base: "40%", md: "100%" }}
          w={{ base: "40%", md: "25%" }}
          ml={{ base: "-10%", md: "0" }}
          mt={{ base: "-30%", md: "0" }}
          maxHeight="100%"
          order={["2", "2", "1" ]}
          alignItems="flex-end"
          justifyContent='center'
          alignSelf="flex-start"
        >
          <Image src={image2} objectFit="contain"></Image>
        </Flex>
        <Flex
          h={ ["60%", "60%", "100%"  ] }
          w={["100%", "100%", "60%"  ]}
          textAlign="center"
          mb={{ sm: "-3.5", md: "0" }}
          order={["1", "1", "2"  ]}
          minWidth="fit-content"
          alignItems="center"
          justifyContent={{ base: "flex-end", md: "center" }}
          flexDirection="column"
        >
          <Text
            fontSize={["6xl", "6xl", "7xl", "8xl"]}
            fontWeight="700"
            color="white"
            fontFamily="Albra Display TRIAL"
          >
            A WORLD OF{" "}
          </Text>
          <Text
            fontSize={["6xl", "6xl", "7xl", "8xl"]}
            color="white"
            fontWeight="700"
            fontFamily="Albra Display TRIAL"
          >
            LEARNING
          </Text>
          <Text
            fontSize={["base","sm","md", "xl", "2xl"]}
            color="white"
            fontFamily="Cabinet Grotesk Variable"
          >
            Discover Amazing Courses Produced By Amazing
            <br />
            Teachers with the best Deals!
          </Text>
          <Button
            borderRadius="0px"
            w={["40%", "40%", "50%"]}
            h={{ base: "10%", md: "7%" }}
            mt="4"
            backgroundColor="#FFF84B"
            color="black"
            colorScheme="teal"
          >
            Discover Now
          </Button>
        </Flex>
        <Show  above='md'>
        <Flex
          h="100%"
          w={["0%", "25%"]}
          display={{ base: "none", md: "flex" }}
          order={{ base: "3", md: "3" }}
          justifyContent="center"
          alignItems="flex-end"
        >
          <Image
            src={image3}
            maxHeight="95%"
            display={{ base: "none", md: "block" }}
          ></Image>
        </Flex>
        </Show>
      </Flex>
    
  );
}
/*
//const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
*/

export default TOP;

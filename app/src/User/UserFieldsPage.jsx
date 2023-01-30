import React, { useState, useEffect } from "react";
import {
  Stack,
  Box,
  Link,
  Button,
  WrapItem,
  Avatar,
  Text,
  Input,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";
import Vector from "./assets/Vector.png";
import axios from "axios";
import "../User/styles/general.css";
export const LinksDiv = ({ currentClass }) => {
  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      alignItems={"baseline"}
      justifyContent={"center"}
      gap={20}
    >
      <Link
        height={"30px"}
        width={"150px"}
        href="/user"
        fontSize={"0.875rem"}
        background={currentClass === "General" ? "#343A40" : "#F8F9FA"}
        color={currentClass === "General" ? "white" : "black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        _hover={{
          background: currentClass === "General" ? "#343A40" : "#F8F9FA",
          color: currentClass === "General" ? "white" : "black",
        }}
        _active={{
          background: currentClass === "General" ? "#343A40" : "#F8F9FA",
          color: currentClass === "General" ? "white" : "black",
        }}
        _focus={{
          background: currentClass === "General" ? "#343A40" : "#F8F9FA",
          color: currentClass === "General" ? "white" : "black",
        }}
      >
        General
      </Link>
      <Link
        fontSize={"0.875rem"}
        width={"150px"}
        height={"30px"}
        href="/user/security"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        background={currentClass === "security" ? "#343A40" : "#F8F9FA"}
        color={currentClass === "security" ? "white" : "black"}
        _hover={{
          background: currentClass === "security" ? "#343A40" : "#F8F9FA",
          color: currentClass === "security" ? "white" : "black",
        }}
        _active={{
          background: currentClass === "security" ? "#343A40" : "#F8F9FA",
          color: currentClass === "security" ? "white" : "black",
        }}
        _focus={{
          background: currentClass === "security" ? "#343A40" : "#F8F9FA",
          color: currentClass === "security" ? "white" : "black",
        }}
        outline={"1px solid #CED4DA"}
      >
        Security
      </Link>
    </Stack>
  );
};

const ImageDiv = ({ firstName, lastName }) => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    data.append("image", files[0]);

    const res = await axios
      .post("http://localhost:8000/users/upload/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setImage(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={4}
        marginBottom={50}
      >
        <WrapItem
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginRight={4}
        >
          <Avatar
            width={"150px"}
            height={"150px"}
            borderRadius={"50%"}
            name={`${firstName} ${lastName}`}
            src={image}
          />{" "}
        </WrapItem>
        <label for="inputTag">
          <input
            type="file"
            id="file"
            accept="image/*"
            value={file}
            onChange={(e) => {
              setFile(e.target.value);
              uploadImage(e);
            }}
          />
        </label>
      </Box>
      <Button
        height={"30px"}
        width={"160px"}
        border={"1px solid #CED4DA"}
        background={"#F8F9FA"}
        borderRadius={"0.25rem"}
        color={"#6C757D"}
        _hover={{
          background: "#F8F9FA",
          color: "#6C757D",
        }}
        _active={{
          background: "#F8F9FA",
          color: "#6C757D",
        }}
        _focus={{
          background: "#F8F9FA",
          color: "#6C757D",
        }}
        fontSize={"0.75rem"}
      >
        <img
          height={"10px"}
          width={"10px"}
          src={Vector}
          alt="Vector"
          style={{
            marginRight: "5px",
          }}
          onClick={uploadImage}
        />
        Change Picture
      </Button>
    </>
  );
};

const UserSuppFields = ({ setPhoneNum, setAddressAdr, setBiobio }) => {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  useEffect(() => {
    setPhoneNum(phone);
    setAddressAdr(address);
    setBiobio(bio);
  }, [phone, address, bio]);

  return (
    <Box display={"flex"} flexDirection={"column"} marginTop={4}>
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Phone Number
      </Text>{" "}
      <Input
        placeholder="Phone number..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Address
      </Text>
      <Input
        placeholder="Address..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Bio
      </Text>
      <ChakraTextarea
        placeholder="Bio..."
        width={"300px"}
        height={"165px"}
        fontSize={"0.75rem"}
        marginTop={2}
        resize={"none"}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
    </Box>
  );
};

const UserField = ({ setFirstNamefirst, setLastNamelast }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setFirstNamefirst(firstName);
    setLastNamelast(lastName);
  }, [firstName, lastName]);

  return (
    <Box display={"flex"} flexDirection={"column"} mt={50}>
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
      >
        First Name
      </Text>
      <Input
        placeholder="First name..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Text
        fontSize={"1.25rem"}
        color={"#495057"}
        textTransform={"capitalize"}
        fontWeight={700}
        marginTop={4}
      >
        Last Name
      </Text>
      <Input
        placeholder="Last name..."
        width={"300px"}
        height={"30px"}
        fontSize={"0.75rem"}
        marginTop={2}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </Box>
  );
};

const UserFieldsPage = () => {
  const [firstNamefirst, setFirstNamefirst] = useState("");
  const [lastNamelast, setLastNamelast] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [addressAdr, setAddressAdr] = useState("");
  const [biobio, setBiobio] = useState("");

  useEffect(() => {
    console.log(firstNamefirst, lastNamelast, phoneNum, addressAdr, biobio);
  }, [firstNamefirst, lastNamelast, phoneNum, addressAdr, biobio]);

  const dataSumbit = (e) => {
    e.preventDefault();
    const data = `email=b@b.dz&nom=${firstNamefirst}&prenom=${lastNamelast}&nomEtablissement=kablianh&id=2&password=pbkdf2_sha256$390000$Got3TTWXIKLLqmSwJSbmqy$IwWM9uBzO0ta1vv7DMaSimccrEr+KEnz3tNi1KZ2urE=`;
    axios
      .put("http://localhost:8000/users/edit", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={2}
      width={"100vw"}
    >
      <LinksDiv currentClass={"General"} />
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        alignItems={"flex-start"}
        marginTop={4}
        gap={50}
      >
        <Stack className="left" direction="column" spacing={4} marginTop={10}>
          <ImageDiv
            firstName={firstNamefirst}
            lastName={lastNamelast}
            alt={"profile"}
          />
          <UserField
            setFirstNamefirst={setFirstNamefirst}
            setLastNamelast={setLastNamelast}
          />
        </Stack>
        <Stack className="right" direction="column" spacing={4} marginTop={10}>
          <UserSuppFields
            setPhoneNum={setPhoneNum}
            setAddressAdr={setAddressAdr}
            setBiobio={setBiobio}
          />
        </Stack>
      </Box>
      <Button
        height={"40px"}
        backgroundColor={"#00F07D"}
        color={"black"}
        width={"200px"}
        mt={20}
        borderRadius={"0px"}
        _hover={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        _active={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        _focus={{
          backgroundColor: "#00F07D",
          color: "black",
          outline: "none",
          border: "none",
        }}
        onClick={dataSumbit}
      >
        Save
      </Button>
    </Box>
  );
};

export default UserFieldsPage;

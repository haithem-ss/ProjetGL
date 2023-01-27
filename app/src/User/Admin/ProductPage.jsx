import React from "react";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import ProductImages from "./Assets/ProductImages";
import Textfield from "@atlaskit/textfield";
import { useNavigate } from "react-router";
import axios from "axios";
import Select from "@atlaskit/select";
import TextArea from "@atlaskit/textarea";
import {
  Stack,
  Box,
  Link,
  Button,
  Text,
  Input,
  Container,
  Heading,
} from "@chakra-ui/react";
import communes from "../Admin/API/commune";
import wilayas from "../Admin/API/Wilaya";
import "../styles/AdminProduct.css";
export const LinksDiv = ({ currentClass }) => {
  return (
    <Stack
      marginTop={10}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"baseline"}
      justifyContent={"center"}
      gap={20}
    >
      <Link
        height={"40px"}
        width={"150px"}
        href="/user"
        fontSize={"0.875rem"}
        background={currentClass === "Anouncements" ? "#343A40" : "#F8F9FA"}
        color={currentClass === "Anouncements" ? "white" : "black"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        _hover={{
          background: currentClass === "Anouncements" ? "#343A40" : "#F8F9FA",
          color: currentClass === "Anouncements" ? "white" : "black",
        }}
        _active={{
          background: currentClass === "Anouncements" ? "#343A40" : "#F8F9FA",
          color: currentClass === "Anouncements" ? "white" : "black",
        }}
        _focus={{
          background: currentClass === "Anouncements" ? "#343A40" : "#F8F9FA",
          color: currentClass === "Anouncements" ? "white" : "black",
        }}
      >
        Anouncements
      </Link>
      <Link
        fontSize={"0.875rem"}
        width={"150px"}
        height={"40px"}
        href="/user/security"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        background={currentClass === "Messages" ? "#343A40" : "#F8F9FA"}
        color={currentClass === "Messages" ? "white" : "black"}
        _hover={{
          background: currentClass === "Messages" ? "#343A40" : "#F8F9FA",
          color: currentClass === "Messages" ? "white" : "black",
        }}
        _active={{
          background: currentClass === "Messages" ? "#343A40" : "#F8F9FA",
          color: currentClass === "Messages" ? "white" : "black",
        }}
        _focus={{
          background: currentClass === "Messages" ? "#343A40" : "#F8F9FA",
          color: currentClass === "Messages" ? "white" : "black",
        }}
        outline={"1px solid #CED4DA"}
      >
        Messages
      </Link>
    </Stack>
  );
};
const ProductPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("");
  const [modalite, setModalite] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [moduleName, setModuleName] = React.useState("");
  const [wilaya, setWilaya] = React.useState("");
  const [commune, setCommune] = React.useState({});
  const [price, setPrice] = React.useState("");
  const [productImages, setProductImages] = React.useState([]);
  const [year, setYear] = React.useState("");
  // console.log({
  //   category,
  //   modalite,
  //   description,
  //   moduleName,
  //   wilaya,
  //   commune,
  //   price,
  //   productImages,
  // });

  const dataSumbit = (e) => {
    e.preventDefault();
    const data = {
      category: category,
      modalite: modalite,
      description: description,
      titre: moduleName,
      tarif: price,
      lieuFormation: {
        long: communes[commune].longitude,
        lat: communes[commune].latitude,
      },
      images: productImages,
    };
    console.log(data);

    // axios.post("http://localhost:8000/cours/adresses", data.lieuFormation);

    // axios
    //   .post("http://localhost:8000/cours/modules", {
    //     titre: data.titre,
    //     description: data.description,
    //   })
    // axios
    //   .post("http://localhost:8000/cours/cours",

    axios
      .post("http://localhost:8000/cours/", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="Product__Wraper" onSubmit={dataSumbit}>
      <Box
        width={"70%"}
        height={"60px"}
        display={"flex"}
        alignItems={"center"}
        margin={"20px auto"}
        justifyContent={"space-between"}
      >
        <LinksDiv currentClass={"Anouncements"} />
        <Box className="header_buttons_1">
          <Button
            height={"40px"}
            background={"#DEE2E6"}
            color={"#343A40"}
            width={"150px"}
            mt={10}
            mx={5}
            borderRadius={"0px"}
            _hover={{
              background: "#DEE2E6",
              color: "#343A40",
              outline: "none",
              border: "none",
            }}
            _active={{
              background: "#DEE2E6",
              color: "#343A40",
              outline: "none",
              border: "none",
            }}
            _focus={{
              background: "#DEE2E6",
              color: "#343A40",
              outline: "none",
              border: "none",
            }}
          >
            Discard
          </Button>
          <Button
            height={"40px"}
            backgroundColor={"#00F07D"}
            color={"black"}
            width={"150px"}
            mt={10}
            mx={5}
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
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Box>
      <div className="Product_header">
        <button
          className="title"
          onClick={() => navigate("/Dashboard/Produits")}
        >
          <div className="title-icon">
            <ArrowLeftIcon size="large" />
          </div>
          Course Page
        </button>
        <div className="header_button">
          <button
            className="btn-delete"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Delete course <TrashIcon size="small" />
          </button>
        </div>
      </div>

      <div className="Product_body">
        <div className="Product_body_left ">
          <h3
            className="Product_body_left_title"
            style={{
              marginLeft: "15px",
            }}
          >
            Description
          </h3>
          <div className="ProductDescription">
            <h3 className="Product_body_left_title title_left">Course Title</h3>
            <Textfield
              type="text"
              name="basic"
              aria-label="default text field"
              placeholder="Course Title"
              onChange={(e) => {
                setModuleName(e.target.value);
              }}
            />
            <h3 className="Product_body_left_title">Course mode</h3>
            <Select
              className="select"
              classNamePrefix="select"
              id="single-select-example"
              isSearchable
              name="single-select-example"
              options={[
                { value: "online", label: "online (default)" },
                { value: "oflline", label: "oflline" },
              ]}
              onChange={(e) => {
                setModalite(e.value);
              }}
            />
            <h3 className="Product_body_left_title">Course Description</h3>
            <TextArea
              className="textarea"
              name="textarea"
              placeholder="Course Description..."
              resize="none"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="Product_body_right">
          <h3
            className="Product_body_left_title"
            style={{
              marginLeft: "15px",
            }}
          >
            More Information
          </h3>
          <div className="ProductDescription">
            <h3 className="Product_body_left_title Product_body_righ_header">
              Study Year
            </h3>
            <Textfield
              type="number"
              name="basic"
              aria-label="default text field"
              placeholder="Year..."
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <h3 className="Product_body_left_title Product_body_righ_header">
              Course Field{" "}
            </h3>
            <Select
              className="select"
              classNamePrefix="select"
              id="single-select-example"
              isSearchable
              name="single-select-example"
              options={[
                { value: "Primaire", label: "Primaire" },
                { value: "Collège", label: "Collège" },
                { value: "Lycée", label: "Lycée" },
              ]}
              onChange={(e) => {
                setCategory(e.value);
              }}
            />
            <h3 className="Product_body_left_title Product_body_righ_header">
              Willaya{" "}
            </h3>
            <Select
              className="select"
              classNamePrefix="select"
              id="single-select-example"
              isSearchable
              name="single-select-example"
              options={wilayas.map((wilaya) => {
                return {
                  value: wilaya.id,
                  label: wilaya.name,
                };
              })}
              onChange={(e) => {
                setWilaya(e.value);
              }}
            />
            <h3 className="Product_body_left_title Product_body_righ_header">
              Commune{" "}
            </h3>
            <Select
              className="select"
              classNamePrefix="select"
              id="single-select-example"
              isSearchable
              name="single-select-example"
              options={communes.map((commune) => {
                return {
                  value: commune.id,
                  label: commune.name,
                };
              })}
              onChange={(e) => {
                setCommune(e.value);
              }}
            />
            <h3 className="Product_body_left_title title_left">Adresse</h3>
            <Textfield
              type="text"
              name="basic"
              aria-label="default text field"
              placeholder="Adresse..."
            />
            <h3 className="Product_body_left_title Product_body_righ_header">
              Price
            </h3>
            <Textfield
              type="number"
              name="basic"
              aria-label="default text field"
              placeholder="Price..."
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="Product_body_third">
          <h3
            className="Product_body_left_title"
            style={{
              marginLeft: "15px",
            }}
          >
            Course images
          </h3>
          <div className="ProductDescription">
            <ProductImages setProductImages={setProductImages} />
          </div>
        </div>
      </div>
      <Box className="header_buttons">
        <Button
          height={"40px"}
          background={"#DEE2E6"}
          color={"#343A40"}
          width={"150px"}
          mt={10}
          mx={5}
          borderRadius={"0px"}
          _hover={{
            background: "#DEE2E6",
            color: "#343A40",
            outline: "none",
            border: "none",
          }}
          _active={{
            background: "#DEE2E6",
            color: "#343A40",
            outline: "none",
            border: "none",
          }}
          _focus={{
            background: "#DEE2E6",
            color: "#343A40",
            outline: "none",
            border: "none",
          }}
        >
          Discard
        </Button>
        <Button
          height={"40px"}
          backgroundColor={"#00F07D"}
          color={"black"}
          width={"150px"}
          mt={10}
          mx={5}
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
          type="submit"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default ProductPage;

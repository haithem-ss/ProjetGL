import React, { useEffect } from "react";
import ProductImages from "./Assets/ProductImages";
import { useNavigate } from "react-router";
import axios from "axios";
import { Stack, Box, Link, Button, Input } from "@chakra-ui/react";
import communes from "../Admin/API/commune";
import wilayas from "../Admin/API/Wilaya";
import "../styles/AdminProduct.css";
import { Textarea } from "@chakra-ui/react";
export const LinksDiv = ({ currentClass }) => {
  return (
    <Stack
      marginTop={10}
      display={"flex"}
      flexDirection={"row"}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
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
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
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
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
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
  const [module, setModule] = React.useState("");
  const [lieu, setLieu] = React.useState("");
  const [tarifPromotion, setTarifPromotion] = React.useState("");
  const [thumbnail_url, setThumbnail_url] = React.useState("");
  const [adresse, setAdresse] = React.useState("");
  const [modules, setModules] = React.useState([]);
  const [adresses, setAdresses] = React.useState([]);
  useEffect(() => {
    console.log("commune", commune);
    console.log("module", module.id);
    console.log("lieu", lieu.id);
    console.log("wilaya", wilaya);
    console.log("category", category);
    console.log("modalite" , modalite)  }, [commune, module, lieu, wilaya, category , modalite]);
  const getModules = async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:8000/cours/modules")
      .then((res) => {
        console.log(res.data);
        setModules(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAdresses = async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:8000/cours/adresses")
      .then((res) => {
        console.log(res.data);
        setAdresses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CreateModule = async (e) => {
    e.preventDefault();
    const data = {
      nom: moduleName,
      description: description,
      image_url: null,
    };
    await axios
      .post("http://localhost:8000/cours/modules", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setModule(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const CreateLieu = async (e) => {
    e.preventDefault();
    const data = {
      wilaya: wilaya,
      commune: commune,
      adresse: adresse,
      longitude: communes[commune - 1].longitude,
      latitiude: communes[commune - 1].latitude,
    };
    await axios
      .post("http://localhost:8000/cours/adresses", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setLieu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataSumbit = async (e) => {
    e.preventDefault();
    await getModules(e)
      .then(async (res) => {
        if (
          modules.filter((module) => module.nom === moduleName).length === 0
        ) {
          await CreateModule(e);
        } else {
          setModule(modules.filter((module) => module.nom === moduleName)[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    await getAdresses(e)
      .then(async (res) => {
        if (adresses.filter((adresse) => adresse === adresse.id).length === 0) {
          await CreateLieu(e);
        } else {
          setLieu(adresses.filter((adresse) => adresse === adresse.id)[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const auteur_id = 1;
    const payload = `niveau=${category}&modalité=Online&description=${description}&titre=your way to learn ${moduleName}&tarif=${price}&tarifPromotion=${tarifPromotion}&lieuFormation=1&module=${module.id}&auteur=${auteur_id}&thumnail_url=${thumbnail_url}`;

    const config = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    axios
      .post("http://127.0.0.1:8000/cours/", payload, config)

      .then((res) => {
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
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
        margin={"20px auto"}
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
            id="btn_submit"
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
          Course Page
        </button>
        <div className="header_button">
          <button
            className="btn-delete"
            display="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Delete course
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
            {/* <Textfield
              id="course_title"
              type="text"
              name="basic"
              aria-label="default text field"
              placeholder="Course Title"
              onChange={(e) => {
                setModuleName(e.target.value);
              }}
            /> */}
            <Input
              type="text"
              id="course_title"
              name="basic"
              aria-label="default text field"
              placeholder="Course Title"
              onChange={(e) => {
                setModuleName(e.target.value);
              }}
            />
            <h3 className="Product_body_left_title">Course mode</h3>
            {/* <Select
              id="course_mode"
              className="select"
              classNamePrefix="select"
              isSearchable
              name="single-select-example"
              options={[
                { value: "Online", label: "online (default)" },
                { value: "Presental", label: "Presental" },
              ]}
              onChange={(e) => {
                setModalite(e.value);
              }}
            /> */}
            <label className="select">
              <select
                className="select__input"
                id="course_mode"
                placeholder="Field..."
                onChange={(e) => {
                  setModalite(e.target.value);
                }}
              >
                <option value="Online">Online (default)</option>
                <option value="Presental">Presental</option>
              </select>
            </label>

            <h3 className="Product_body_left_title">Course Description</h3>
            <Textarea
              id="course_description"
              className="textarea"
              name="textarea"
              placeholder="Course Description..."
              resize="none"
              height={"300px"}
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
            <Input
              type="number"
              id="course_year"
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
            <label className="select">
              <select
                id="course_field"
                className="select__input"
                placeholder="Field..."
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="Primaire">Primaire</option>
                <option value="College">Collège</option>
                <option value="Lycée">Lycée</option>
                <option value="Université">Université</option>
                <option value="Autre">Autre</option>
              </select>
            </label>

            <h3 className="Product_body_left_title Product_body_righ_header">
              Willaya{" "}
            </h3>
            <label className="select">
              <select
                id="course_wilaya"
                className="select__input"
                placeholder="Wilaya..."
                onChange={(e) => {
                  setWilaya(e.target.value);
                }}
              >
                {wilayas.map((wilaya) => {
                  return (
                    <option value={wilaya.id} key={wilaya.id}>
                      {wilaya.name}
                    </option>
                  );
                })}
              </select>
            </label>
            <h3 className="Product_body_left_title Product_body_righ_header">
              Commune{" "}
            </h3>
            {/* <Select
              id="course_commune"
              className="select"
              classNamePrefix="select"
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
            /> */}
            <label className="select">
              <select
                id="course_commune"
                className="select__input"
                placeholder="Commune..."
                onChange={(e) => {
                  setCommune(e.target.value);
                }}
              >
                {communes.map((commune) => {
                  return (
                    <option
                      value={commune.id}
                      key={commune.id}
                      // onChange={(e) => {
                      //   setCommune(e.value);
                      // }}
                    >
                      {commune.name}
                    </option>
                  );
                })}
              </select>
            </label>

            <h3 className="Product_body_left_title title_left">Adresse</h3>
            {/* <Textfield
              id="course_adresse"
              type="text"
              name="basic"
              aria-label="default text field"
              placeholder="Adresse..."
              onChange={(e) => {
                setAdresse(e.target.value);
              }}
            /> */}
            <Input
              id="course_adresse"
              placeholder="Adresse..."
              type="text"
              onChange={(e) => {
                setAdresse(e.target.value);
              }}
            />

            <h3 className="Product_body_left_title Product_body_righ_header">
              Price
            </h3>
            {/* <Textfield
              id="course_price"
              type="number"
              name="basic"
              aria-label="default text field"
              placeholder="Price..."
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            /> */}
            <Input
              id="course_price"
              placeholder="Price..."
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <h3 className="Product_body_left_title Product_body_righ_header">
              Price Promotion
            </h3>
            <Input
              id="course_price_promotion"
              placeholder="Price..."
              type="number"
              onChange={(e) => {
                setTarifPromotion(e.target.value);
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
            <ProductImages setThumbnail_url={setThumbnail_url} />
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
          id="btn_submit"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default ProductPage;

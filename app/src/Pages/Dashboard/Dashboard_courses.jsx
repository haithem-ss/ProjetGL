import {
    Flex,
    Heading,
    Spacer,
    Spinner,
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    useToast,
    IconButton
} from '@chakra-ui/react'

import "../../styles/Dashboard.css"

import Sidebar from "../../Components/Dashboard/Sidebar"
import { SectionTitle, StatsCard } from "../../components/Dashboard/Components";
import React from "react";
import { UtilityBarCourses, DownloadSVG } from "../../components/Dashboard/Components"
import Navbar from "../../components/Dashboard/Navbar"
import { useNavigate } from 'react-router-dom';
import UseCours from "../../Hooks/UseCours"
import UseDeleteCours from "../../Hooks/UseDeleteCours"
export default function () {
    const navigate = useNavigate();
    const [filter,setFilter]=React.useState({})
    let commandes = UseCours(filter)
    let toast=useToast()
    const count = React.useRef(0);
    const deleteCourse=(id)=>{
        UseDeleteCours(id,toast)
    }


    return (<div className="dashboard">
        <Navbar/>
        <Sidebar />

        <div className="ContentWrapper">

            {commandes === null ?
            <div
                style={{
                    width: "75vw",
                    height: "calc(100vh - 120px)",
                    display: "flex",
                    justifyContent: "center",
                    overflow:"hidden",
                    alignItems: "center"
                }}
            >
                <div>
                    <Spinner margin="auto" color='blue.500' size='xl' thickness='4px' />
                </div>

            </div> :
                <>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "space-between",
                            marginBottom: "1rem"
                        }}>
                        {SectionTitle("Courses List", "Download .CSV", <DownloadSVG></DownloadSVG>)}
                        <div className="MainStatsWrapper">

                            {StatsCard("Total Number", count.current)}
                        </div>

                    </div>
                    <UtilityBarCourses Filter={(e)=>setFilter(e)}/>

                    {commandes.length === 0 ? <Flex height="70%" align="center" justify="center"><Heading size="md">No Matching results</Heading></Flex> : 
<>
                    <TableContainer>
                        <Table variant='simple' style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
                            <Thead bg="#F0F2F3" boxShadow="0px 8px 20px rgba(0, 0, 0, 0.03)">
                                <Tr>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Course name</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">incstructor</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Category</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700" isNumeric>date added</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700" isNumeric></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {commandes.map((course) => (
                                    <Tr bg="white" >
                                        <Td   color="#6C757D" fontWeight="500">{course.titre}</Td>
                                        <Td  color="#6C757D" fontWeight="500">{course.auteur.nom + " " + course.auteur.prenom}</Td>
                                        <Td   color="#6C757D" fontWeight="500">{course.module.nom}</Td>
                                        <Td color="#6C757D" fontWeight="500" isNumeric>{course.date}</Td>
                                        <Td color="#6C757D" fontWeight="500" isNumeric>
                                            <Menu>
                                                <MenuButton
                                                    as={IconButton}
                                                    aria-label='Options'
                                                    icon={<svg width="15" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="23" cy="3" r="3" fill="#ADB5BD" />
                                                        <circle cx="13" cy="3" r="3" fill="#ADB5BD" />
                                                        <circle cx="3" cy="3" r="3" fill="#ADB5BD" />
                                                    </svg>
                                                    }
                                                    variant='outline'
                                                    borderRadius={0} border="0" _hover={{ borderColor: "#343A40 " }} _active={{}} outline="0px"
                                                />
                                                <MenuList>
                                                    <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px" onClick={()=>navigate(`/Course/${course.titre}`,{state:course})}>View course</MenuItem>
                                                    <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px">View instructor	</MenuItem>
                                                    <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px" onClick={()=> deleteCourse(course.id)}>Delete course</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                ))}

                            </Tbody>

                        </Table>
                    </TableContainer>
                    </>}
    
                </>
            }


        </div>
    </div>)
}
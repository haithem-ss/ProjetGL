import {
    Flex,
    Heading,
    Spacer,
    Spinner,
    Table,
    Thead,
    Tbody,
    Tfoot,
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
    MenuDivider,
    IconButton
} from '@chakra-ui/react'

import "../../styles/Dashboard.css"

import Sidebar from "../../Components/Dashboard/Sidebar"
import { SectionTitle, StatsCard } from "../../components/Dashboard/Components";
import React from "react";
import { UtilityBarUsers, DownloadSVG } from "../../components/Dashboard/Components"
import Navbar from "../../components/Dashboard/Navbar"
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion"
import UseUsers from '../../Hooks/UseUsers';
import { useNavigate } from 'react-router-dom';

export default function () {
    let users = UseUsers()
    let navigate=useNavigate()


    return (<div className="dashboard">
        <Navbar/>

        <Sidebar />
        

        <div className="ContentWrapper">

            {users === null || users.length === 0 ? <div
                style={{
                    width: "75vw",
                    height: "calc(100vh - 120px)",
                    display: "flex",
                    justifyContent: "center",
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
                        {SectionTitle("Users List", "Download .CSV", <DownloadSVG></DownloadSVG>)}
                        <div className="MainStatsWrapper">
                            {StatsCard("Total Number", users.length)}
                        </div>

                    </div>
                    <UtilityBarUsers/>
                    <TableContainer>
                        <Table variant='simple' style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
                            <Thead bg="#F0F2F3" boxShadow="0px 8px 20px rgba(0, 0, 0, 0.03)">
                                <Tr>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Username</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Email</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Phone number</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Registration date</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700">Courses</Th>
                                    <Th color="#6C757D" fontSize={15} fontWeight="700" isNumeric></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users.map((user) => (
                                    <Tr bg="white" >
                                        <Td  color="#6C757D" fontWeight="500">{user.nom + " " + user.prenom}</Td>
                                        <Td color="#6C757D" fontWeight="500" >{user.email}</Td>
                                        <Td color="#6C757D" fontWeight="500" >{user.phoneNumber}</Td>
                                        <Td   color="#6C757D" fontWeight="500">{user.dateInscription}</Td>
                                        <Td color="#6C757D" fontWeight="500" >{user.coursesCount}</Td>
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
                                                    <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px" onClick={()=>navigate("/Instructor",{state:{auteur:user}})}>View instructor</MenuItem>
                                                    <MenuItem borderRadius={0} border="0" _hover={{ borderColor: "white ", border: "0px", outline: 0 }} _active={{ borderColor: "white ", border: "0px", outline: 0 }} outline="0px">Block instructor</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Td>
                                    </Tr>
                                ))}

                            </Tbody>

                        </Table>
                    </TableContainer>
                    {/* <Table
                        checkbox={false}
                        status={false}
                        head={[
                            "Date de commande", "Client", "Nombre de produits", "Total"
                        ]}
                        rows={commandes}
                    /> */}
                </>
            }


        </div>
    </div>)
}
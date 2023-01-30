import {
    Flex,
    Heading,
    Spacer,
    Box,
    Container
} from '@chakra-ui/react'
import "../../styles/Dashboard.css"

import Sidebar from "../../Components/Dashboard/Sidebar"
import { SectionTitle, StatsCard } from "../../components/Dashboard/Components";
import React from "react";
import Navbar from "../../components/Dashboard/Navbar"
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion"
import WebScraper from "../../User/WebScraper"

export default function () {




    return (<div className="dashboard">
        <Navbar/>

        <Sidebar />

        <div className="ContentWrapper">
            <WebScraper></WebScraper>
          

        </div>
    </div>)
}
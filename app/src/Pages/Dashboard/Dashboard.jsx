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


export default function () {




    return (<div className="dashboard">
        <Sidebar />

        {/* <div className="ContentWrapper">

            {commandes.length === 0 ? <div
                style={{
                    width: "75vw",
                    height: "calc(100vh - 120px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <div>
                    <Spinner
                        size={"large"}
                    />
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
                        {SectionTitle("Liste des commandes", "Télécharger", <DownloadSVG></DownloadSVG>)}
                        <div className="MainStatsWrapper">

                            {StatsCard("Nombre de commandes", commandes.length)}
                        </div>

                    </div>
                    <Table
                        checkbox={false}
                        status={false}
                        head={[
                            "Date de commande", "Client", "Nombre de produits", "Total"
                        ]}
                        rows={commandes}
                        text="Nouvelle produit"
                        button={true}
                        link="/Dashboard/Produits/Ajouter"

                    />
                </>}


        </div> */}
    </div>)
}
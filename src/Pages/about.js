import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
import React from 'react';
import '../App.css';

const About = () => {
    return (
        <div className="Page-container" style={{
            paddingTop: "250px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>ABOUT THE PROJECT</h1>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDGene-Disease-ChemicalTriad/CTDGene-Disease-ChemicalTriad?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>

            <p>This project was created for the CSC8099 module for the MSc Computer Science program at Newcastle University.</p>
            <p>The aim of this project is to display visualisations on Gene, Disease and Chemical relationships. </p>
            <p>The motivation behind this project is the curiosity and the need for research in the area.</p>
            <p>The scope of the project is to analyse the Gene-Disease, Gene-Chemical and Disease-Chemical relationships through CTD and DISGENET databases, and to create a gene-disease-chemical triad via CTD.</p>
            <p>Starting from Introduction, you may discover the world of cancer diseases.</p>
            <p>To interact with the visualisations, simply hover to view the detailed information. You may also switch visualisations through the tabs.</p>
        </div>

    )
}

export default About; 
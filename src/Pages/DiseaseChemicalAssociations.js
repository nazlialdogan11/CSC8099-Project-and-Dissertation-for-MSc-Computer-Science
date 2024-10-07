import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const DiseaseChemicalAssociations = () => {
    return (
        <div style={{
            paddingTop: "250px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>CTD DISEASE-CHEMICAL ASSOCIATIONS</h1>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDDisease-ChemicalAssociations/CTDDisease-ChemicalInferenceScores?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisations above display the Top 10 Chemicals by Disease, and Disease-Chemical Inference Scores, both obtained from CTD database only.</p>
            <p>The first visualisation shows the top 10 chemicals associated with the different types of cancer diseases. It can be observed that prostatic neoplasms, breast neoplasms and Hepatocellular Carcinoma take the lead, with the chemical association counts of 132,040, 128,561, and 116,743, respectively.</p>
            <p>The second visualisation shows the disease-chemical inference score, to answer the 14th question.</p>
        </div>
    )
}

export default DiseaseChemicalAssociations; 
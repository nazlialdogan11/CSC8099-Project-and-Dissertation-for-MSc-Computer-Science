import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const DISGENET = () => {
    return (
        <div style={{
            paddingTop: "250px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>DISGENET GENE-DISEASE ASSOCIATIONS</h1>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/DISGENETGene-DiseaseAssociations/DISGENETTopGene-DiseaseAssociations?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The DISGENET data visualisation on gene-disease associations as provided above, shows us the count of each gene by the type of cancer disease.</p>

        </div>
    )

}


export default DISGENET; 
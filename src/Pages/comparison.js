import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const Comparison = () => {

    return (
        <div style={{
            paddingTop: "250px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>COMPARISON OF THE TWO DATABASES FOR GENE-DISEASE ASSOCIATIONS</h1>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/Gene-DiseaseAssociationsComparisonAcrossDatabases/DISGENETTopGene-DiseaseAssociations?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
        </div>
    )
    return (
        <p>You may compare the two databases, DISGENET and CTD by the gene-disease associations they provide, in this section.</p>
    )
}

export default Comparison; 
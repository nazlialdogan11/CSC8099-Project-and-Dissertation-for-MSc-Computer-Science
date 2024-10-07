import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const CTD = () => {

    return (
        <div style={{
            paddingTop: "250px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>CTD GENE-DISEASE ASSOCIATIONS</h1>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDGene-DiseaseAssociations/CTDTopGene-DiseaseAssociations?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisation above shows the gene-disease associations on CTD by counting the genes associated with the types of cancer diseases. The genes were sorted by the most to least counted for the types.</p>
            <p>The cancer disease type with the most counted genes were prostatic neoplasms, followed by breast neoplasms and so on, from top to bottom. </p>
            <p>For each of these disease types, the mostly associated genes can be observed from the left to the right. For instance, for prostatic neoplasms, IL6 gene was observed to be associated with this disease the most, with the gene-disease association count of 2,239. Following IL6, BCL2 had the count of 1,991.</p>
            <p>The differentiation of gene-diasese associations by the different types of cancers can be observed by the visualisation.</p>
            <p>The mostly associated genes can be used as biomarkers for early cancer detection. These include IL6, BCL2, MAPK3, BAX and much more.These are the overall top genes ssociated with most of the cancer types.</p>
        </div>
    )

}

export default CTD; 
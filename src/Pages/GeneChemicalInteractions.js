import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const GeneChemicalInteractions = () => {
    return (
        <div style={{
            paddingTop: "250px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            <h1>CTD GENE-CHEMICAL INTERACTIONS</h1>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDGene-ChemicalInteractions/CTDOverallGene-ChemicalInteractions?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>Gene-chemical interactions show which genes in the human body interacted with which chemical, in this case, carcinogen, to analyse which genes are prone to be affected by these substances.</p>
            <p>There are two visualisations above, separated into two tabs. While the first visualisation displays the top gene-chemical interactions by the different types of cancer diseases, the second visualisation provides the picture as a whole by showcasing all gene-chemical interactions, sorted from the most to least observed in terms of chemicals. </p>
            <p>By looking at the first visualisation, it can be observed that the most commonly seen disease was Prostatic Cancer, followed by the Breast Neoplasms and Hepatocellular Carcinoma.</p>
            <p>The most commonly observed chemical to be interacting with the genes, however, was bisphenol A, followed by benzo(a)pyrene, and tetrachlorodibenzodioxin.</p>
            <p>Bisphenol A was observed in 626 cases for patients with Prostatic Cancer, as the overall highest affected chemical.</p>

            <p>By looking at the second table, the count of chemicals that were found to be interacting with the genes found in the human body can be observed. The data shows that the top 10 chemicals interacting with the human genes were:</p>
            <ol>
                <li>Bisphenol A</li>
                <li>Benzo(a)pyrene</li>
                <li>Tetrachlorodibenzodioxin</li>
                <li>Valproic Acid</li>
                <li>Sodium Arsenite</li>
                <li>Acetaminophen</li>
                <li>Estradiol</li>
                <li>Tobacco Smoke Pollution</li>
                <li>Cadmium Chloride</li>
                <li>Aflatoxin B1</li>
            </ol>

            <p>Based on these findings, it is evident that these top 10 chemicals are in need of strong regulation to be evicted from our environment for public health concerns, answering the 20th question.</p>
        </div>

    )
}

export default GeneChemicalInteractions; 
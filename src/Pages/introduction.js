import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
import VennDiagram from '../Components/Common/vennDiagram';
const Introduction = () => {
    return (
        <div style={{ paddingTop: "250px", }}>
            <h1>INTRODUCTION</h1>

            <p>This web application aims to display the data visualisations prepared for this project on providing an in-depth analysis for the cause-effect relationship between cancer disease in humans and environmental factors, limited into carcinogens, the chemicals known to cause or trigger cancer development, by combining data from two reliable databases, CTD(The Comparative Toxicogenomics Database) and DISGENET.
                These analyses rely on the relationships between genes, diseases and chemicals.
                The questions below were attempted to be answered by the project.</p>

            <p>This project attempts to answer the questions below:</p>
            <ol>
                <li>What type of genes is cancer disease in humans associated with?</li>
                <li>What type of carcinogens interact with such genes, e. g. which of these genes are most frequently associated with specific carcinogens, therefore more prone to being affected by carcinogens in the environment?</li>
                <li>Do particular genes show strong interactions with multiple carcinogens?</li>
                <li>What is the association strength between a gene and a carcinogen, accessed through correlation, causation indicators?</li>
                <li>How do gene-disease associations differ across the different types of cancer, e. g. brain, lung, ovary, etc.?</li>
                <li>Which genes are most likely to be associated with a certain type of cancer, potentially acting as the top genes?</li>
                <li>Which genes are used as biomarkers for the early detection of specific types of cancer development?</li>
                <li>Which cancer-associated genes are targeted and treated with FDA-approved medicines?</li>
                <li>When exposed to specific carcinogens, which genes are upregulated or downregulated as a response?</li>
                <li>What are the common genetic factors throughout all types of cancers affected by carcinogens?</li>
                <li>Can predictive modelling be applied relying on gene-chemical interactions; e. g. what are the  potential carcinogens implicated in rare or less-studied cancer types?</li>
                <li>Which chemicals are most strongly linked to specific types of cancer, e. g. breast cancer, brain cancer?</li>
                <li>Do carcinogens associated with multiple cancer types exist? How do such associations compare, is there a potential pattern or a possible connection between them?</li>
                <li>What is the distribution of inference scores across different chemicals and cancer types?</li>
                <li>How does the association between different databases compare, e. g. CTD GDAs with DISGENET GDAs? </li>
                <li>Are findings from CTD in parallel with the recent literature, or are there any discrepancies regarding gene-disease and chemical-disease associations?</li>
                <li>What are the recommendations to prevent cancer development based on the analyses?</li>
                <li>Based on the carcinogen analysis, which chemicals are in need of urgent regulation prioritisation?</li>
                <li>What kind of preventative measures can be taken to reduce the risk of cancer, as obtained from the gene-chemical interaction data in CTD?</li>
                <li>In what level does CTD data support existing public health guidelines in terms of carcinogen exposure?</li>
            </ol>

            <p>To understand the relationships between genes, diseases and chemicals, and where questions belong within such relationships, a Venn Diagram was provided below.</p>

            <div style={{ width: '100%', height: '50%' }}><VennDiagram /></div>

            <p>The intersection between genes and diseases represent gene-disease associations.
                The intersection between genes and chemicals represent gene-chemical interactions.
                The intersection between diseases and chemicals represent disease-chemical interactions.
                The intersection of genes, diseases and chemicals represent the gene-disease-chemical triad, which was created via CTD.
                The numbers within the Venn Diagram indicate the questions and which relationship(s) they belong to for a better view.
            </p>
            <p>All of these intersections were used as categories to view data, which can be accessed via the menu at the very top of the page.</p>
            <p>The gene-disease associations analysed via both DISGENET and CTD databases, were also compared, all to be accessed by the dropdown menu.</p>
            <p>As DISGENET had gene-disease associations data only, for the gene-chemical interactions and disease-chemical associations, the only database to be used was CTD.</p>
            <p>The chemical aspect was added to gene-disease associations to analayse what types of chemicals have the possibility to cause cancer diseases, and to what extent, based on the cases presented via CTD.</p>

            <h2>A Deep Dive into the DISGENET Database</h2>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/DISGENETGeneCount/DISGENETGeneCountII?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisations above show the gene count within DISGENET in two separate formats: packed bubbles and treemaps. These can be toggled by the tabs.</p>
            <p>This visualisation answers the first question by providing the genes cancer diseases are associated with in humans via DISGENET database.</p>
            <p>It was observed that the most counted genes were APC, CDH1, KRAS, PIK3CA and TP53, all with the gene counts of 6.</p>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/DISGENETDiseaseCount/DISGENETDiseaseCountII?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisations above show the disease count within DISGENET in two separate formats: packed bubbles and treemaps. These can be toggled by the tabs.</p>
            <p>It was observed that the most counted disease type was Malignant Neoplasm of Breast with a count of 735, followed by Liver Carcinoma with a count of 660.</p>
            <h2>A Deep Dive into CTD</h2>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDGeneCount/CTDGeneCountI?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisations above show the gene count within CTD in two separate formats: packed bubbles and treemaps. These can be toggled by the tabs.</p>
            <p>This visualisation answers the first question by providing the genes cancer diseases are associated with in humans via CTD.</p>
            <p>It was observed that the most counted genes were TP53, PTGS2, TNF, BCL2 and IL6. TP53 takes the lead with the count of 93,452, however, as the database is huge, this leading gene makes up only 3.883% of the gene data.</p>
            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDDiseaseCount/CTDDiseaseCountI?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisations above show the disease count within CTD in two separate formats: packed bubbles and treemaps. These can be toggled by the tabs.</p>
            <p>It was observed that the most counted disease types were Prostatic Neoplasms, Breast Neoplasms, Hepatocellular Carcinoma, Lung Neoplasms and Stomach Neoplasms with the counts 132,040, 128,561, 116,743, 77,895 and 75,527, respectively.</p>

            <div style={{
                height: '100vh'
            }}>
                <TableauEmbed sourceUrl='https://public.tableau.com/views/CTDChemicalCount/CTDChemicalCountII?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' />
            </div>
            <p>The visualisations above show the chemical count within CTD in two separate formats: packed bubbles and treemaps. These can be toggled by the tabs.</p>
            <p>It was observed that the most counted chemicals were Bisphenol A, Benzo(a)pyrene, Tetrachlorodibenzodioxin, Valproic Acid and Sodium Arsenite. Detailed information is available through hovering on the visualisations.</p>

        </div>

    )
}

export default Introduction; 
import React from 'react';
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";
const Resources = () => {
    return (
        <div style={{ paddingTop: "250px", }}>
            <h1>RESOURCES</h1>
            The resources used for this project were:
            <ol>
                <li><a href='https://ourworldindata.org/causes-of-death#:~:text=Heart%20diseases%20were%20the%20most,1-in-7%20deaths'>[1] Our World in Data(2023) Causes of Death Available at: https://ourworldindata.org/causes-of-death#:~:text=Heart%20diseases%20were%20the%20most,1-in-7%20deaths (Accessed: 15 Jul 2024).</a></li>
                <li><a href='https://www.who.int/news-room/fact-sheets/detail/cancer'>[2] World Health Organization (2022) Cancer. Available at: https://www.who.int/news-room/fact-sheets/detail/cancer (Accessed: 15 Jul 2024).</a></li>
                <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3521879/#:~:text=DNA-mismatch%20repair%20genes%2C%204,cancers%20are%20hereditary%20(8)'>[3] Natural Library of Medicine (2012) Environmental Factors Inducing Human Cancers. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3521879/#:~:text=DNA-mismatch%20repair%20genes%2C%204,cancers%20are%20hereditary%20(8) (Accessed: 15 Jul 2024).</a></li>
                <li><a href='https://doi.org/10.1093/nar/gkz1021'>[4] Piñero, J., Ramírez-Anguita, J. M., Saüch-Pitarch, J., Ronzano, F., Centeno, E., Sanz, F., & Furlong, L. I. (2020). The DisGeNET knowledge platform for disease genomics: 2019 update. Nucleic acids research, 48(D1), D845-D855. https://doi.org/10.1093/nar/gkz1021</a></li>
                <li><a href='https://www.disgenet.com'>[5] DISGENET(2024) Available at: https://www.disgenet.com (Accessed: 20 Sept 2024)</a></li>
                <li><a>[6] Davis AP, Wiegers TC, Johnson RJ, Sciaky D, Wiegers J, Mattingly CJ Comparative Toxicogenomics Database (CTD): update 2023. Nucleic Acids Res. 2022 Sep 28.</a></li>
                <li><a href='https://ctdbase.org/'>[7] Curated chemical–gene interactions|chemical–disease|gene–disease data were retrieved from the Comparative Toxicogenomics Database (CTD), MDI Biological Laboratory, Salisbury Cove, Maine, and NC State University, Raleigh, North Carolina. World Wide Web (URL: https://ctdbase.org/). (Accessed: 15 Jul 2024).</a></li>
                <li><a href='https://www.ncbi.nlm.nih.gov'>[8] NCBI(2024) Available at: https://www.ncbi.nlm.nih.gov (Accessed: 15 Jul 2024).</a></li>
                <li><a href='https://www.cancer.gov'>[9] National Cancer Institute(2024) Available at: https://www.cancer.gov (Accessed: 21 Sept 2024).</a></li>
                <li><a href='10.1177/1176935119835546'>[10] Qu Z, Lau CW, Nguyen QV, Zhou Y, Catchpoole DR. Visual Analytics of Genomic and Cancer Data: A Systematic Review. Cancer Informatics. 2019;18. doi:10.1177/1176935119835546.</a></li>
                <li><a href='https://doi.org/10.3390/e25060909'>[11] Cinaglia P, Cannataro M. Identifying Candidate Gene–Disease Associations via Graph Neural Networks. Entropy. 2023; 25(6):909. https://doi.org/10.3390/e25060909.</a></li>
                <li><a href='https://doi.org/10.1186/gm413'>[12] Schroeder, M.P., Gonzalez-Perez, A. & Lopez-Bigas, N. Visualizing multidimensional cancer genomics data. Genome Med 5, 9 (2013). https://doi.org/10.1186/gm413.  </a></li>
                <li><a>[13] G.N. Wogan, et al. Environmental and chemical carcinogenesis Semin. Cancer Biol., 14 (2004), pp. 473-486.</a></li>
                <li><a href='https://www.cancer.org/cancer/risk-prevention/understanding-cancer-risk/determining-if-something-is-a-carcinogen.html#:~:text=Some%20carcinogens%20cause%20cancer%20by,that%20DNA%20changes%20will%20occur'>[14] American Cancer Society, Determining if Something is a Carcinogen. https://www.cancer.org/cancer/risk-prevention/understanding-cancer-risk/determining-if-something-is-a-carcinogen.html#:~:text=Some%20carcinogens%20cause%20cancer%20by,that%20DNA%20changes%20will%20occur. Accessed 21 Sept 2024.</a></li>
                <li><a href='https://www.sciencedirect.com/science/article/abs/pii/S0041008X19302820?casa_token=C4qoObmXwjoAAAAA:IUeNqrq615PcI8AVb4qB-aEouPeuXeZzkxlNISR3qHmxW6xVbt_w1ctDrqicTogqniKpr4-jaw#s0115'>[15]Science Direct(2019) Determination of chemical-disease risk values to prioritize connections between environmental factors, genetic variants, and human diseases. Available at:
                    https://www.sciencedirect.com/science/article/abs/pii/S0041008X19302820?casa_token=C4qoObmXwjoAAAAA:IUeNqrq615PcI8AVb4qB-aEouPeuXeZzkxlNISR3qHmxW6xVbt_w1ctDrqicTogqniKpr4-jaw#s0115 (Accessed: 15 Jul 2024).</a></li>
                <li><a href='10.1093/jnci/djw031'>[16] Chia PL, Gedye C, Boutros PC, Wheatley-Price P, John T. Current and Evolving Methods to Visualize Biological Data in Cancer Research. J Natl Cancer Inst. 2016 May 31;108(8):djw031. doi: 10.1093/jnci/djw031. PMID: 27245079; PMCID: PMC5017943. </a></li>
                <li><a>[17] Rossello FJ, Tothill RW,, Britt K, et al. Next-generation sequence analysis of cancer xenograft models. PloS One. 2013;8(9):74432.</a></li>
                <li><a href='10.1126/science.7545954'>[18] Miki Y, Swensen J, Shattuck-Eidens D, Futreal PA, Harshman K, Tavtigian S, Liu Q, Cochran C, Bennett LM, Ding W, et al. A strong candidate for the breast and ovarian cancer susceptibility gene BRCA1. Science. 1994 Oct 7;266(5182):66-71. doi: 10.1126/science.7545954. PMID: 7545954. </a></li>
                <li><a>[19] Leroy, B., Anderson, M., & Soussi, T. (2014). TP53 mutations in human cancer: Database reassessment and prospects for the next decade. Human Mutation, 35(6), 672-688. </a></li>
                <li><a>[20] International Agency for Research on Cancer. (2012). Arsenic, metals, fibres, and dusts. Volume 100 C. A review of human carcinogens. IARC Monographs on the Evaluation of Carcinogenic Risks to Humans. Lyon (FR): International Agency for Research on Cancer, Arsenic and arsenic compounds, 41-94.</a></li>
                <li><a href='10.3322/caac.21632'>[21] Turner MC, Andersen ZJ, Baccarelli A, Diver WR, Gapstur SM, Pope CA 3rd, Prada D, Samet J, Thurston G, Cohen A. Outdoor air pollution and cancer: An overview of the current evidence and public health recommendations. CA Cancer J Clin. 2020 Aug 25:10.3322/caac.21632. doi: 10.3322/caac.21632. Epub ahead of print. PMID: 32964460; PMCID: PMC7904962.</a></li>
                <li><a href='https://doi.org/10.1038/s41586-020-1943-3'></a>[22] Alexandrov, L.B., Kim, J., Haradhvala, N.J. et al. The repertoire of mutational signatures in human cancer. Nature 578, 94–101 (2020). https://doi.org/10.1038/s41586-020-1943-3. </li>
                <li><a href='https://www.nvisia.com/insights/agile-methodology'>[23] The Agile Process 101: Understanding the Benefits of Using Agile Methodology (no date) nvisia. Available at: https://www.nvisia.com/insights/agile-methodology (Accessed: 30 September 2024). </a></li>
                <li><a href='https://www.geeksforgeeks.org/functional-vs-non-functional-requirements/'>[24] GeeksforGeeks (2024) Functional vs Non Functional Requirements, GeeksforGeeks. Available at: https://www.geeksforgeeks.org/functional-vs-non-functional-requirements/ (Accessed: 30 September 2024). </a></li>
            </ol>
        </div>
    )
}

export default Resources; 
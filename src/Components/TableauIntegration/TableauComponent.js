import React, { useEffect, useRef } from 'react';
const { tableau } = window;
export const Tableau = () => {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/sampledata_17281270666320/Sheet1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
    function initViz() {
        tableau.Viz(ref.current, url);
    }
    return (
        <div ref={ref} style={{ width: '70%', margin: 'auto' }}></div>
    );
}
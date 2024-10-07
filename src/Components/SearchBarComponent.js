import React, { useState, useEffect } from "react";

const SearchBarComponent = () => {
    const [queryText, setQuery] = useState("");

    const content = "This is an example of content where the searched words will be highlighted.";

    // Recursive function to highlight the query within text nodes
    const highlightRecursive = (element) => {
        if (element.nodeType === Node.TEXT_NODE) {
            const text = element.nodeValue;
            console.log(text);
            if (queryText && text.toLowerCase().includes(queryText.toLowerCase())) {
                // Create a new span element to wrap the highlighted part
                const regex = new RegExp(`(${queryText})`, "gi");
                const highlightedText = text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`);

                // Replace the text node with an HTML span containing the highlighted text
                const tempElement = document.createElement("span");
                tempElement.innerHTML = highlightedText;
                element.replaceWith(...tempElement.childNodes);
            }
        } else if (element.nodeType === Node.ELEMENT_NODE && element.tagName !== "SCRIPT" && element.tagName !== "STYLE") {
            // Recursively process all child elements except for <script> and <style> tags
            element.childNodes.forEach((child) => highlightRecursive(child));
        }
    };

    const removeHighlight = () => {
        const highlightedSpans = document.body.querySelectorAll("span[style='background-color: yellow;']");
        highlightedSpans.forEach((span) => {
            const parent = span.parentNode;
            if (parent) {
                // Replace the span with its text content (span.textContent keeps the original text unfragmented)
                const textNode = document.createTextNode(span.textContent);
                parent.replaceChild(textNode, span); // Replace the span with a single text node
                parent.normalize(); // Normalize the parent to merge any adjacent text nodes
            }
        });
    };



    const highlightText = (query) => {
        console.log(query);
        // First, remove all previously highlighted spans
        removeHighlight();

        if (query) {
            console.log('function called' + ': ' + query)
            // Then, highlight the new query
            highlightRecursive(document.body);
        }
    };

    const handleInputChange = (e) => {
        const newQuery = e.target.value;

        setQuery(newQuery);

    };

    useEffect(() => {
        // This will run after the count has been updated
        console.log(`QueryText has been updated to: ${queryText}`);
        highlightText(queryText);
    }, [queryText]);

    return (
        <div>
            <input
                type="text"
                value={queryText}
                onChange={handleInputChange}
                placeholder="Enter text to search"
            />
        </div>
    );
};

export default SearchBarComponent;
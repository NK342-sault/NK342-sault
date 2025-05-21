    // This creates a glossary of terms related to the content of the page. 
    const glossary = [
        {
            term: "Tekken",
            description: "Tekken is a popular fighting game series developed by Bandai Namco Entertainment."
        },
        {
            term: "Dragon Ball FighterZ",
            description: "Dragon Ball FighterZ is a 2D fighting game based on the Dragon Ball franchise."
        },
        {
            term: "Guilty Gear Strive",
            description: "Guilty Gear Strive is a 2D fighting game known for its anime-style graphics and deep gameplay mechanics."
        }
]; 
// Creating the main element and append it to the body
const main = document.getElementById("creating-a-glossary"); 
const l1Heading = document.createElement("h1");
l1Heading.textContent = "Glossary";
main.appendChild(l1Heading);
const descriptList = document.createElement("dl");
// This is the description list
glossary.forEach(item => {
    const dt = document.createElement("dt");
    dt.textContent = item.term;
    const dd = document.createElement("dd");
    dd.textContent = item.description;
    descriptList.appendChild(dt);
    descriptList.appendChild(dd);
});
main.appendChild(descriptList);
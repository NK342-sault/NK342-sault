//Creating an array of navigation items
const navItems = [
    {href: "index.html", label: "Home"},
    {href: "links.html", label: "Links"},
    {href: "glossary.html", label: "Glossary"},
    {href: "survey.html", label: "Survey"}
];

//Function to generate the navigation HTML with class for CSS
function generateNav(items){
    // Add class 'main-nav' to nav if your CSS uses it
    const listItems = items.map(item => 
        `<li><a href="${item.href}">${item.label}</a></li>`
    ).join("");
    return `<nav class="main-nav"><ul>${listItems}</ul></nav>`;
}

//Inserting the navigation into the header
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header").insertAdjacentHTML("afterbegin", generateNav(navItems));
});
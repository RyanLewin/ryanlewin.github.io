
let root = document.querySelector(":root");
let darkModeButton = document.querySelector(".dark-mode-button");

function ready() {
    let colourScheme = localStorage.getItem("colourScheme");
    colourScheme == 'dark' ? root.classList.add('dark') : root.classList.remove('dark');
}

if (document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

darkModeButton.addEventListener('click', () => {
    event.preventDefault();
    
    let colourScheme = localStorage.getItem("colourScheme");
    localStorage.setItem("colourScheme", colourScheme == 'dark' ? 'light' : 'dark');
    colourScheme == 'dark' ? root.classList.remove('dark') : root.classList.add('dark');

    // console.log("Changing color mode");
})
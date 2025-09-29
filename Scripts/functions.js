function toggleBlock(elementName) {
    var element = document.getElementById(elementName + '-content');
    var clickedElement = document.getElementById(elementName + '-toggle');
    var show = element.style.display === "block";
    element.style.display = (show) ? "none" : "block";
    clickedElement.style.display = (show) ? "block" : "none";
    if (show)
        clickedElement.scrollIntoView({behavior: "smooth", block: "nearest"});
    else
        element.scrollIntoView({behavior: "smooth", block: "nearest"});
}
function getInputValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.value);
    element.value = "";

    return elementValue;
}

function setOutput(shape, area) {
    const container = document.getElementById("area-results");
    const count = container.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `${count + 1}. ${shape} ${area}cm<sup>2</sup>`;

    container.appendChild(p);
}
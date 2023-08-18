document.getElementById("btn-calculate-triangle").addEventListener("click", function () {
    const base = getInputValue("t-base");
    const height = getInputValue("t-height");

    if(isNaN(base) || isNaN(height)) {
        alert("Please enter a valid input!");
        return;
    }

    const area = 0.5 * base * height;

    setOutput("Triangle", area);
});

document.getElementById("btn-calculate-rectangle").addEventListener("click", function () {
    const width = getInputValue("rect-width");
    const length = getInputValue("rect-length");

    if(isNaN(width) || isNaN(length)) {
        alert("Please enter a valid input!");
        return;
    }

    const area = width * length;

    setOutput("Rectangle", area);
})
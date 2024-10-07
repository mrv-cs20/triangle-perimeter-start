// Triangle Perimeter Assignment Start Code
document.getElementById("calculateBtn").addEventListener("click", function() {
    const sideAB = parseFloat(document.getElementById("sideAB").value) || 0;
    const sideAC = parseFloat(document.getElementById("sideAC").value) || 0;
    const sideBC = parseFloat(document.getElementById("sideBC").value) || 0;

    const perimeter = sideAB + sideAC + sideBC;

    document.getElementById("result").innerText = `Perimeter: ${perimeter}`;
});
// Triangle Perimeter Assignment Start Code

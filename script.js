function generateAdvancedResult() {

    let userData = {
        interest: document.getElementById("interest").value,
        environment: document.getElementById("environment").value,
        risk: document.getElementById("risk").value,
        study: document.getElementById("study").value,
        govt: document.getElementById("govt").value
    };

    localStorage.setItem("careerData", JSON.stringify(userData));
    window.location.href = "result.html";
}
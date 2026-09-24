function downloadPdf() {

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !company || !email) {
        alert("Please complete all fields.");
        return;
    }

    fetch(
        "https://script.google.com/macros/s/AKfycbz3pTOd8QhUKqSCXEFj4nRox05oY3O3owcZw41yfsoUFabrovUR-QGcHgEP0bFgNpuYbA/exec",
        {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:
                "firstname=" + encodeURIComponent(firstName) +
                "&lastname=" + encodeURIComponent(lastName) +
                "&company=" + encodeURIComponent(company) +
                "&email=" + encodeURIComponent(email)
        }
    );

    const link = document.createElement("a");

    link.href = "MULTI-LEVEL-INVERTER-ARCHITEKTUREN ONEPAGER ENG.pdf";
    link.download = "MULTI-LEVEL-INVERTER-ARCHITEKTUREN ONEPAGER ENG.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Thank you. Your download has started.");
}

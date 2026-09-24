function downloadPdf() {

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !company || !email) {
        alert("Please complete all fields.");
        return;
    }

    const link = document.createElement("a");

    link.href = "MULTI-LEVEL-INVERTER-ARCHITEKTUREN ONEPAGER ENG.pdf";
    link.download = "MULTI-LEVEL-INVERTER-ARCHITEKTUREN ONEPAGER ENG.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

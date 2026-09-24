function downloadPdf() {

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !company || !email) {
        alert("Please complete all fields.");
        return;
    }

    const a = document.createElement("a");

    a.href = "./whitepaper.pdf";
    a.download = "TWT-Whitepaper.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert("Thank you. Your download has started.");
}

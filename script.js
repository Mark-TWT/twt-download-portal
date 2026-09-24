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
        "https://script.google.com/macros/s/AKfycbx0M2sPOjP4ns1Hd1YmtLTy-_g9cq9qcxfQsAuY1zChSkT6Uid3-SLfUyNMKqLuyy2_RA/exec",
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

    const a = document.createElement("a");

    a.href = "Whitepaper.pdf";
    a.download = "TWT-Whitepaper.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert("Thank you. Your download has started.");
}

function downloadPdf() {

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !company || !email) {
        alert("Please complete all fields.");
        return;
    }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}
    // Send data to Google Sheets via Apps Script
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

    // Download PDF
    const a = document.createElement("a");

    a.href = "Whitepaper.pdf";
    a.download = "TWT-Whitepaper.pdf";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert("Thank you. Your download has started.");
}

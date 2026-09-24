function d*wnloadPdf() {

    const firstName*= document.getElementById("firstna*e").value;
    const lastName = do*ument.getElementById("lastname").v*lue;
    const company = document.*etElementById("company").value;
  * const email = document.getElement*yId("email").value;

    if (!firs*Name || !lastName || !company || !*mail) {
        alert("Please comp*ete all fields.");
        return;*    }

    alert(
        "First N*me: " + firstName +
        "\nLas* Name: " + lastName +
        "\nC*mpany: " + company +
        "\nEm*il: " + email
    );
}

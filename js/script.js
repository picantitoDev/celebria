function sendEmail() {
    var params = {
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value,
        message: document.getElementById("formMessage").value
    };
    const serviceID = "service_975g9md";
    const templateID = "template_v04u5rn";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("formName").value = "";
                document.getElementById("formEmail").value = "";
                document.getElementById("formMessage").value = "";
                console.log(res);
                alert("Mensaje enviado!");
            }
        )
        .catch(err => console.log(err));
}

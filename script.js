function sendEmail() {
    const templateParams = {
        name: document.getElementById("#name").value,
        email: document.getElementById("#email").value,
        subject: document.getElementById("#subject").value,
        message: document.getElementById("#message").value,
    };

    emailjs.send("service_4pe5j8e", "template_cgtb6f6", templateParams)
    .then ( () => {
        alert   ("Email sent successfully!");

    })
    .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
    } );
}
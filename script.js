document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill all fields");
                return;
            }

            let submissions =
                JSON.parse(localStorage.getItem("submissions")) || [];

            submissions.push({
                name: name,
                email: email,
                message: message
            });

            localStorage.setItem(
                "submissions",
                JSON.stringify(submissions)
            );

            alert("Form Submitted Successfully!");
            window.location.href = "submissions.html";
        });
    }

    const submissionList = document.getElementById("submissionList");

    if (submissionList) {
        let submissions =
            JSON.parse(localStorage.getItem("submissions")) || [];

        submissions.forEach(function (data) {
            let div = document.createElement("div");

            div.innerHTML =
                "<p><b>Name:</b> " + data.name + "</p>" +
                "<p><b>Email:</b> " + data.email + "</p>" +
                "<p><b>Message:</b> " + data.message + "</p><hr>";

            submissionList.appendChild(div);
        });
    }

});
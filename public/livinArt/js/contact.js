document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("subject-dropdown");
    const form = document.getElementById("optionForm");

    dropdown.addEventListener("change", function () {
        if (dropdown.value === "Other") {
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.id = "subject-dropdown";
            inputField.classList.add("form-control");
            inputField.name = "subject";
            inputField.placeholder = "Enter your querry here";
            inputField.required = true;
            inputField.value = "";

            dropdown.replaceWith(inputField);
            inputField.focus();

            inputField.addEventListener("blur", function () {
                if (inputField.value.trim() === "") {
                    inputField.replaceWith(dropdown);
                }
            });
        }
    });



    // form.addEventListener("submit", function (e) {
    //     e.preventDefault();

    //     let val = document.getElementById("subject-dropdown").value;

    //     console.log("Selected Option:", val); // Replace with API call if needed

    //     // alert("Submitted: " + val + " assistance request");
    // });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
      
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject-dropdown").value;
        let message = document.getElementById("message").value;
      
        let mailtoLink = `mailto:livinarttech@gmail.com?cc=impact@livinarttech.com,founder.livinart@livinarttech.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Message: ${message}\n\n---\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`)}`;
      
        window.location.href = mailtoLink;
    
    });
});


function validateForm(event) {
    //Gather the HTML form-control elements into a collection so that we don't have to
    //create a variable for each one.
    let controls = document.getElementsByClassName("form-control");
    //console.log(controls);

    let validationMessages = document.getElementsByClassName("invalid");

    //Regular expression for email:
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Regex for name"
    let rxpName = new RegExp(/^[a-zA-Z]+$/);

    //Check the length of the text in all of the controls to ensure that there is at least
    //one character in each field. If there isn't, stop the submission and fire a
    //validation error to the page

    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 ||
        controls['subject'].value.length == 0 || controls['message'].value.length == 0 ||
        !rpxEmail.test(controls['email'].value) || !rxpName.test(controls['name'].value)) {
        event.preventDefault();

        //Check individual controls
        //Name Validation
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "Name is required";
        }
        else {
            validationMessages['rfvName'].textContent = "";
        }
        if (!rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "Name must only contain alphabetic characters";
        }
        if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "";
        }

        //Email Validation
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "Email is required";
        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }
        if (!rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "Needs a valid email";
        }
        if (!rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }

        //Subject Validation
        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "Subject is required"
        }
        else {
            validationMessages['rfvSubject'].textContent = ""
        }

        //Message Validation
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "Message is required"
        }
        else {
            validationMessages['rfvMessage'].textContent = ""
        }
    };
}
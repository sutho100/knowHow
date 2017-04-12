//validate form
function validateMyForm()
{
    var validationStatus = true;    
    $("#result").text("");      //Default div text

    var name = $('#name').val();    

    //validate name
    if (name.length === 0) {
        $('#resultName').text("Please enter your name"); // This Segment Displays The Validation Rule For All Fields
        $("#resultName").css("color", "red");
        $("#name").focus();
        validationStatus = false;
        return false;
    }

    //validate email
    var emailText = $('#email').val();
    if (validateEmail(emailText)) {
        $("#result").text(emailText + " is valid :)");
        $("#result").css("color", "green");
    } else {
        $("#result").text(emailText + " is not valid :(");
        $("#result").css("color", "red");
        $("#email").focus();
        validationStatus = false;
        return false;
    }

    //validate message
    if ($('#ccomment').val().length < 5) {
        $('#resultComment').text("Please write a message min 5 words");
        $("#resultComment").css("color", "red");
        $("#ccomment").focus();
        validationStatus = false;
        return false;
    }

    //check if form failed
    if (validationStatus) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
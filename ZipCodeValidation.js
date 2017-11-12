// JavaScript source code


// JavaScript source code


function contactOnSave(context) {
    debugger;
    var countryCode = Xrm.Page.getAttribute('address1_country').getValue();
    var zipCode = Xrm.Page.getAttribute('address1_postalcode').getValue();


    if (countryCode === 'SI') {

        var pattern = new RegExp("^[0-9]{4}$");


        if (!pattern.test(zipCode) || parseInt(zipCode) <= 1000 || parseInt(zipCode) >= 9000) {
            context.getEventArgs().preventDefault();
            setNotification('Postal code for Slovenia must be between values 1000 and 9000.');
        }

    }




    else if (countryCode === 'DE') {

        var pattern = new RegExp("^[A-Za-z]{2}[0-9]{4}$");
        var result = pattern.test(zipCode);
        if (!result) {
            context.getEventArgs().preventDefault();
            setNotification('Postal code for Germany must start with 2 letters followed by 4 digits.');
        }

    }
    else {
        Xrm.Page.ui.clearFormNotification('codeValidation');
    }

}

function setNotification(message) {

    Xrm.Page.ui.setFormNotification(message, 'ERROR', 'codeValidation');


    setTimeout(function () {
        Xrm.Page.ui.clearFormNotification('codeValidation');
    }, 5000);

}


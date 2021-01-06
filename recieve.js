// Variable to hold request
var request;

// Bind to the submit event of our form
$(document).ready(function(event){

    // Abort any pending request
    // setup some local variables

    // Let's select and cache all the fields

    // Serialize the data in the form

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbww-N-8f8OgAKDeQSKCorRQoP_dkeFx0U0q3--vMw/dev",
        type: "get",
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log(response);
        $('#code').html(response)
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error is given: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
    });

    // Prevent default posting of form
});

$(document).ready(function() {
    // Form validation
    $("form").submit(function() {
        var submissionLimit = 50;
        // Prevent submission of empty strings, only spaces and excess length
        if (($("#burgerForm").val().trim() === "" || $("#burgerForm").val().trim().length > submissionLimit)) {
            // Clear the form
            $("#burgerForm").val("")

            // Display an error message
            $("#formIncomplete").html("Please enter a valid name");

            return false;
        } else {
            //Hide the error message
            $("#formIncomplete").hide()
        }
    });

    // AJAX put request to eat a burger
    $(".freshBurger").click(function() {
        var burgerID = $(this).attr("burgerID")
        var queryURL = "/api/burgers/" + burgerID
        $.ajax({
            url: queryURL,
            type: 'PUT',
            success: function(data) {
                // Reload the page to display the latest data
                location.reload();
            }
        });
    });

    // AJAX put request to delete a burger
    $(".eatenBurger").click(function() {
        var burgerID = $(this).attr("burgerID")
        var queryURL = "/api/burgers/" + burgerID
        $.ajax({
            url: queryURL,
            type: 'DELETE',
            success: function(data) {
                // Reload the page to display the latest data
                location.reload();
            }
        });
    });
});
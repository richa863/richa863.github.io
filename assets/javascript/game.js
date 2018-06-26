var dogArray = ["Great Dane", "Collie", "Anatolian Shepherd Dog", "German Shepherd Dog", "Australian Shepherd", "Irish Wolfhound", "Golden Retriever", "Bernese Mountain Dog", "Corgie", "Belgian Malinois", "Laika"];

$(document).ready(function() {
    for (var i = 0; i < dogArray.length; i++) {
        $("#dog-buttons").append("<button type='button' onclick='searchGif(\"" + dogArray[i] + "\")' class='btn btn-primary btn-block' value=' " + dogArray[i] + "'> " + dogArray[i] + " </button>");
    }
});

function breedButtonClick() {
    var userInput = $('#dog-input').val();
    searchGif(userInput);
}

function submitButtonClick() {
    var userInput = $('#dog-input').val();

    if (userInput) {
        $('#dog-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary btn-block' value=' " + userInput + "'> " + userInput + " </button>");
    }
}

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=BQ9xscdPspsk0bTObZFQGqeb4UYa8c5d&limit=10',
            type: 'GET',
        })
        .done(function(response) {
            displayGif(response);
        })
}

function displayGif(response) {
    $('#dogs').empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
        var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
            '" data-still=" ' + response.data[i].images.fixed_height_still.url +
            ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage" style= "width:250px; height:250px">';

        image = '<div class="col-md-6">' + image + "</div>";
        $('#dogs').append(image);
    }

    $('.movImage').on('click', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).attr("data-animate"));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).attr("data-still"));
            $(this).attr('data-state', 'still');
        }

    });
}
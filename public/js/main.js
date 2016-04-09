$(document).ready(function() {
  getCharacter();
});

function searchCharacter() {
  var searchQuery = $('.search').val(); // grab value from search input
  getCharacter(searchQuery);
}

function getCharacter(searchQuery) {
  var url = 'http://gateway.marvel.com:80/v1/public/characters?'; // url for the API
  var params = {
   apikey: apiKey, // coming from apiKey in index.ejs
  };
  if (searchQuery) {
    params.name = searchQuery;
  } else {
    params.name = "Captain America";
  }
  $.ajax(url + $.param(params), {
    success: function (data) {
      var description = data.data.results[0].description;
      var name = data.data.results[0].name;
      var link = data.data.results[0].resourceURI;
      $('.name').text(name);
      $('.summary').text(description);
      $('.link').text(link);
    },
    error: function (error) {
      $('.error-message').text('An error occurred :(');
    }
  });
}


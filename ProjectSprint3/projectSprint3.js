$(document).ready(function() {
  var links = $('nav li a');
  var main = $('main');

  links.on('click', function(event) {
    event.preventDefault();

    var jsonFileName = $(this).attr('title') + '.json';

    main.empty();

    $.ajax({
      url: 'json_files/' + jsonFileName,
      dataType: 'json',
      success: function(data) {
        var EmployeerHTML = '<h2>' + data.Employeer + '</h2>' +
                            '<img src="' + data.image + '" alt="' + data.Employeer + '">' +
                            '<p>' + data.text + '</p>';

        main.html(EmployeerHTML);
      },
      error: function(error) {
        console.log('JSON file could not be imported:', error);
      }
    });
  });
});

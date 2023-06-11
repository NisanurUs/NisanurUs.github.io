$(document).ready(function() {
  var links = $('nav li a');
  var main = $('main');
  

  links.on('click', function() {
    var jsonFileName = $(this).attr('title') + '.json';

    main.empty();

    $.ajax({
      url: 'json_files/' + jsonFileName,
      dataType: 'json',
      success: function(data) {
        var employee = data.Employeers[0]; 

        var employeeHTML = '<h2>' + employee.Employeers + '</h2>' +
                           '<img src="' + employee.image + '" alt="' + employee.Employeers + '">' +
                           '<p>' + employee.text + '</p>';

        main.html(employeeHTML);
      },
      error: function(error) {
        console.log('JSON file could not be imported:', error);
      }
    });
  });
});


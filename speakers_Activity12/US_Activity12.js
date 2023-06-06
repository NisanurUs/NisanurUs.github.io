$(document).ready(function() {
   
    var links = $('aside a');
  
    links.on('click', function(event) {
      event.preventDefault(); 
  
      var jsonFileName = $(this).attr('title') + '.json';
  
      var main = $('main');
      main.empty();
  
      $.ajax({
        url: 'json_files/' + jsonFileName,
        dataType: 'json',
        success: function(data) {
          
          var speakerHTML = '<h2>' + data.speakers[0].speaker + '</h2>' +
                            '<img src="' + data.speakers[0].image + '" alt="' + data.speakers[0].speaker + '">' +
                            '<p>' + data.speakers[0].text + '</p>';
  
          
          main.html(speakerHTML);
        },
        error: function() {
          console.log('JSON file could not be imported.');
        }
      });
    });
  });
  
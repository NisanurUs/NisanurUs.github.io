$(document).ready(function() {
	$( "#birthday" ).datepicker();

    var type = [
        "Suggession",
        "Complaint"
        ];
        
        
        $( "#type" ).autocomplete({
            source: type
        });


});
$(document).ready(function() {
    $('#contact-form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Please enter your name'
        },
        email: {
          required: 'Please enter your email',
          email: 'Please enter a valid email address'
        },
        message: {
          required: 'Please enter a message'
        }
      },
      submitHandler: function(form) {
        
        form.submit();
      }
    });
  });

  $(document).ready(function() {
    $('.message').message({
      length: 50, 
      ellipsis: '...', 
      showMoreText: 'Show More!',
      showLessText: 'Show Less!' 
    });
  });
  
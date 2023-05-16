$(document).ready(function() {
	$( "#birthday" ).datepicker();

});

var languages = [
"Javascript",
"Java",
"C++",
"C",
"C#",
"ASP",
"Swift",
"Pyhton"
];

$(document).ready(function() {
$( "#languages" ).autocomplete({
	source: languages
});
	
	
});
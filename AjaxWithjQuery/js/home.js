//File for use in Ajax lesson
$(document).ready(function(){

    $.ajax({
        type: 'GET',
        url: 'http://contactlist.us-east-1.elasticbeanstalk.com/',
        success: function() {
            alert('SUCCESS!');
        },
        error: function() {
            alert('FAILURE!');
        }
    })

})
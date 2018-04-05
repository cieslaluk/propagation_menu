$('#red').click(function(event) {
    event.stopPropagation();
    $('ul').addClass('active');
});

$('body').click(function () {
    $('ul').removeClass('active');
});

$('ul').click(function(event) {
    event.stopPropagation();
});
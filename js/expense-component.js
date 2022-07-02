$(document).ready(function() {
    var barChartItems = $('.expense-card__body-chart ul li');

    console.log(barChartItems);

    $(barChartItems).each(function() {
        var value = $(this).find('.expense-card__body-value');

        $(this).on('click', function() {
            $(barChartItems).removeClass('active');
            $('.expense-card__body-value').removeClass('active');

            $(value).addClass('active');
            $(this).addClass('active');
        });
    }); 
});
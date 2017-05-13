/**
 * Created by artemkopytko on 12.05.17.
 */
$(document).ready(function() {
    const slider = $('.al-const-slider');
    const sliderProjects = $('.our-projects-slider');
    var idName = '';
    slider.slick({
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('.al-arrow-prev'),
        nextArrow: $('.al-arrow-next')
    });
    sliderProjects.slick({
        slidesToShow: 1,
        arrows: true,
        fade: true,
        prevArrow: $('.pr-arrow-prev'),
        nextArrow: $('.pr-arrow-next')
    });
    $('#AluminiumImg1').click(function () {
        slider.slick('slickGoTo', 0);
    });
    $('#AluminiumImg2').click(function () {
        slider.slick('slickGoTo', 1);
    });
    $('#AluminiumImg3').click(function () {
        slider.slick('slickGoTo', 2);
    });
    $('#AluminiumImg4').click(function () {
        slider.slick('slickGoTo', 3);
    });
    $('#AluminiumImg5').click(function () {
        slider.slick('slickGoTo', 4);
    });
    $('#AluminiumImg6').click(function () {
        slider.slick('slickGoTo', 5);
    });
    $('#ProjectsHelper1').click(function () {
        sliderProjects.slick('slickGoTo', 0);
    });
    $('#ProjectsHelper2').click(function () {
        sliderProjects.slick('slickGoTo', 1);
    });
    $('#ProjectsHelper3').click(function () {
        sliderProjects.slick('slickGoTo', 2);
    });
    $('#ProjectsHelper4').click(function () {
        sliderProjects.slick('slickGoTo', 3);
    });
    slider.on('beforeChange',function(event, slick, currentSlide, nextSlide) {
        currentSlide += 1;
        idName = 'Aluminium' + currentSlide.toString();
        $('#' + idName).removeClass('_active');
        nextSlide +=1;
        idName = 'Aluminium' + nextSlide.toString();
        $('#' + idName).addClass('_active');

    })
});

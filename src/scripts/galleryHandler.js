/**
 * Created by artemkopytko on 12.05.17.
 */
$(document).ready(function() {
    $('.gl-const-gallery-item').hover(
        function(){
            $(this).addClass('_galleryActive');
        },
        function () {
            $(this).removeClass('_galleryActive');
        }
    )
});
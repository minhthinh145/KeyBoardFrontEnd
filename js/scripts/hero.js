$(document).ready(function () {
    var $heroImages = $('.hero img');
    var currentIndex = 0;
    
    function changeImage() {
        $heroImages.removeClass('active');
        currentIndex = (currentIndex + 1) % $heroImages.length;
        $heroImages.eq(currentIndex).addClass('active');
    }
    
    setInterval(changeImage, 3000);  // Change image every 3 seconds
});

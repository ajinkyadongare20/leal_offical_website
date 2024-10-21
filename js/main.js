(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

})(jQuery);


// in index page 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Default slides visible at once (for large screens)
    spaceBetween: 30, // Space between slides
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        // Mobile view (max-width: 576px) - 1 slide at a time, 100% width
        0: {
            slidesPerView: 1,
            spaceBetween: 0, // Remove space between slides for full width
        },
        // Tablet view (min-width: 577px and max-width: 991px) - 2 slides at a time
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // Large screens (min-width: 992px) - 3 slides at a time
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});



// career job apply code 
const careerJobListings = document.querySelectorAll('.job-listing');
careerJobListings.forEach(listing => {
    listing.addEventListener('click', function (event) {
        // Toggle the form for the clicked job listing
        const form = this.querySelector('.apply-form');

        // Close any open forms and reset styles
        careerJobListings.forEach(item => {
            if (item !== listing) {
                item.querySelector('.apply-form').style.display = 'none';
                item.classList.remove('no-scale', 'form-open'); // Remove classes from other items
            }
        });

        // Toggle the visibility of the form
        if (form.style.display === 'block') {
            form.style.display = 'none';
            this.classList.remove('no-scale', 'form-open'); // Remove classes to restore hover effects
        } else {
            form.style.display = 'block';
            this.classList.add('no-scale', 'form-open'); // Add classes to stop scaling and show left border
        }

        event.stopPropagation(); // Prevent further propagation of the current event
    });

    // Prevent click event from bubbling up when clicking inside the form
    const form = listing.querySelector('.apply-form');
    form.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent clicks inside the form from closing it
    });
});





// YouTube video URL
const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID"; // Replace with your YouTube video ID

// jQuery to load the video URL when the modal opens
$('#videoModal').on('show.bs.modal', function (event) {
    const modal = $(this);
    modal.find('#videoIframe').attr('src', videoUrl);
});

// Clear the video URL when the modal is closed
$('#videoModal').on('hide.bs.modal', function (event) {
    const modal = $(this);
    modal.find('#videoIframe').attr('src', '');
});

//   

function openVideo(videoUrl) {
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrl;
    var myModal = new bootstrap.Modal(document.getElementById('videoModal'));
    myModal.show();
}

// Clear video frame on modal close
document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
});




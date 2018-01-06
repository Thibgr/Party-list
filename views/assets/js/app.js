
/* Hiding nav */
(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('.navPL').fadeIn(500);
            } else {
                $('.navPL').fadeOut(500);
            }
        });
    });
})(jQuery);


/* Smooth scrolling */

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length-86 ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top-86
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

/* confettis */

var Confettiful = function Confettiful(el) {
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 3;
    this.confettiColors = ['#52c3ed', '#f18fbc', '#f9eb4d'];
    this.confettiAnimations = ['slow', 'medium', 'fast'];

    this._setupElements();
    this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
    var containerEl = document.createElement('div');
    var elPosition = this.el.style.position;

    if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.el.style.position = 'relative';
    }

    containerEl.classList.add('confetti-container');

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
    var _this = this;

    this.confettiInterval = setInterval(function () {
        var confettiEl = document.createElement('div');
        var confettiSize = Math.floor(Math.random() * 4) + 10 + 'px';
        var confettiBackground = _this.confettiColors[Math.floor(Math.random() * _this.confettiColors.length)];
        var confettiLeft = Math.floor(Math.random() * _this.el.offsetWidth) + 'px';
        var confettiAnimation = _this.confettiAnimations[Math.floor(Math.random() * _this.confettiAnimations.length)];

        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        confettiEl.removeTimeout = setTimeout(function () {
            confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        _this.containerEl.appendChild(confettiEl);
    }, 25);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));


/* video player */

var videoPlayButton,
    videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
                this.formatVideoPlayButton()
                // video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#000"/>\
                    <polygon points="142.9,93.5 86.2,164.8 64.5,54.5 "/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            // video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
    }

videoMethods.renderVideoPlayButton()



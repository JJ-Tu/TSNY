/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// FareHarbor Integration Code //
// This is run before the rest of the main.js code because code in this file refers to elements that do not exist on
// all pages and therefore the code stops before the end on pages other than index.html
    var p = window.document;
    fhScript = p.createElement('script');
    fhScript.src = "https://fareharbor.com/embeds/api/v1/?autolightframe=yes";
    p.body.appendChild(fhScript); 
    fhStyleSheet = p.createElement('link');
    fhStyleSheet.href = 'https://fh-kit.com/buttons/v2/?red=ed4933&purple=505393';
    fhStyleSheet.rel = 'stylesheet';
    fhStyleSheet.type = 'text/css';
    p.body.appendChild(fhStyleSheet); 
    fhFixedButton = p.createElement('a');
    fhFixedButton.href = 'https://fareharbor.com/embeds/book/santamonicatrapezeschool/?full-items=yes';
    fhFixedButton.className = 'fh-button-true-flat-red fh-icon--calendar-check fh-fixed--bottom';
    fhFixedButton.innerHTML = 'BOOK NOW';
    fhFixedButton.style = '';
    fhFixedButton.id = 'fhFixedButton';
    p.body.appendChild(fhFixedButton);

// End of FareHarbor code //

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
	
	// I started messing with stuff starting from here:	
	// Daily notice	-- Updates the current date
		document.querySelector('#dailyNotice').innerHTML = "Classes today <br>" + new Date().toDateString();

})(jQuery);




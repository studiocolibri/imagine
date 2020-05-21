var carousel = document.querySelector('#e-magine-header__slides-items');
var items = document.querySelectorAll('#e-magine-header__slides .slide-item');

if (carousel !== undefined && items !== undefined && carousel !== null && items !== null) {
	var itemscount = items.length;
	var btnprev = document.querySelector('.e-magine-header__slides-control__btn--prev');
	var btnnext = document.querySelector('.e-magine-header__slides-control__btn--next');	

	if (itemscount > 1) {
		
		// Create Dots
		var dotbox = document.createElement('div');
		dotbox.classList.add('e-magine-header__slides-dots');
		// carousel.after(dotbox); Not supported by Edge => see next line
		carousel.parentNode.insertBefore(dotbox, carousel.nextSibling);			
		for (var i=0; i<itemscount; i++) {
			dotbox.insertAdjacentHTML('beforeend', '<button aria-controls="slide-'+(i+1)+'" aria-label="Slide number '+(i+1)+'" aria-selected="'+(document.querySelector('.slide--active').getAttribute('id').slice(-1) == (i+1) ? 'true' : 'false')+'"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14"><g fill="none" stroke="#bbe0de" stroke-width="1"><ellipse cx="6.5" cy="7" rx="6.5" ry="7" stroke="none"/><ellipse cx="6.5" cy="7" rx="6" ry="6.5" fill="none"/></g></svg></button>');
		}	
			
		var dots = document.querySelectorAll('.e-magine-header__slides-dots button');
	
		function slideprev() {
			var itemcurrent = document.querySelector('.slide--active');
			var dotcurrent = document.querySelector('.e-magine-header__slides-dots button[aria-selected="true"]');
			var prevslide = itemcurrent.previousElementSibling;
			var prevdot = dotcurrent.previousElementSibling;
			if(prevslide === null) {
				prevslide = items[itemscount - 1];
				prevdot = dots[itemscount - 1]; 
			}
			// Remove current
			itemcurrent.classList.remove('slide--active');
			dotcurrent.setAttribute('aria-selected', 'false');
					
			// Add Next
			prevslide.classList.add('slide--active');
			prevdot.setAttribute('aria-selected', 'true');
		}
		
		function slidenext() {
			var itemcurrent = document.querySelector('.slide--active');
			var dotcurrent = document.querySelector('.e-magine-header__slides-dots button[aria-selected="true"]');
			var nextslide = itemcurrent.nextElementSibling;
			var nextdot = dotcurrent.nextElementSibling;
			if(nextslide === null) {
				nextslide = items[0];
				nextdot = dots[0];
			}
			// Remove current
			itemcurrent.classList.remove('slide--active');
			dotcurrent.setAttribute('aria-selected', 'false');
								
			// Add Next
			nextslide.classList.add('slide--active');
			nextdot.setAttribute('aria-selected', 'true');
		}
						
		// Dots Navigate
		[].map.call(dots, function(dot) {

			dot.addEventListener('click', function(e) {
				var itemcurrent = document.querySelector('.slide--active');
				var dotcurrent = document.querySelector('.e-magine-header__slides-dots button[aria-selected="true"]');
				var dotclick = dot.getAttribute('aria-controls');
				var targetslide = document.querySelector('#'+ dotclick +'');
				var targetdot = document.querySelector('button[aria-controls="'+dotclick+'"]');

				// Remove current
				itemcurrent.classList.remove('slide--active');
				dotcurrent.setAttribute('aria-selected', 'false');
									
				// Add Target
				targetslide.classList.add('slide--active');
				targetdot.setAttribute('aria-selected', 'true');
		
				e.preventDefault();
			
			},false);
			
		},false);
				
		// Navigate
		btnprev.addEventListener('click', slideprev);
		btnnext.addEventListener('click', slidenext);
		
		// Keyboard Navigate
		carousel.addEventListener('keydown', keyHandler);		
		function keyHandler(e) {
			// Left Arrow
			if (e.keyCode === 37 || (e.ctrlKey && e.keyCode === 37)) {		
				e.preventDefault();
				slideprev();
			}
			// Right Arrow
			if (e.keyCode === 39 || (e.ctrlKey && e.keyCode === 39)) {		
				e.preventDefault();
				slidenext();
			}
	    }
				
	} else { // End itemscount > 1 => Remove buttons controls
		btnprev.parentNode.removeChild(btnprev);
		btnnext.parentNode.removeChild(btnnext);
	}
	
}
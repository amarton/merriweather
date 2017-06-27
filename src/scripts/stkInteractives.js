// stkGphx contains all of the code for the interactives in Shoot to Kill. They are 
// combined into one namespace in order to share use of the scrolljacking code.
var stkGphx = {
	scrollerInstance: null,
	unlock: false,
	touchX0: null,
	touchX1: null,
	cityNames: [
		['Baltimore','300','637','3.1','Baltimore','Source: Baltimore Police Department'],
		['Milwaukee','118','634','6.4','Milwaukee','Source: Milwaukee Police Department'],
		['Charlotte','51','293','6.7','Charlotte','Source: Charlotte-Mecklenburg Police Department'],
		['Nashville','61','209','4.4','Nashville','Source: Nasvhille Police Department'],
		['New York','216','921','5.3','NewYork','Source: New York Police Department'],
		['D.C.','123','299*','3.4','DC','Source: Metropolitan Police Department']
	],
	stats: [
			['262','268','221','344'],
			['203','216','168','300'],
			['82 ','92 ','84 ','186'],
			['N/A','127','104','211']
	],
	allChars: ['1','2','3','4','5','6','7','8','9','0'],
	init: function(){
		console.log('stkGphx running');
		stkGphx.scrollFuncs();
		stkGphx.neighborhoods();
	},
	scrollFuncs: function(){
		$('.arrow').on('click', function(){
			stkGphx.headshotScroller(Number($(this).data('dir')));
		});
		$('.slidePos').on('click', function() {
			stkGphx.headshotScrollTo(Number($(this).data('pos')))
		});
		$('.cityOutline').on('click', function(){
			stkGphx.populateNewCity($(this).data('city'));
			return false;
		});
	},
	headshotScroller: function(direction){
		stkGphx.scrollerInstance = setTimeout(function(){
			stkGphx.unlock = false;
			var pos = $('.center').data('pos');
			if(pos != 0 && direction == 0) {
				stkGphx.headshotScrollTo(pos - 1);
			} else if(pos != 3 && direction == 1){
				stkGphx.headshotScrollTo(pos + 1);
			} else {
				stkGphx.unlock = true;
			};
			return stkGphx.unlock;
		}, 200);
		return false;
	},
	headshotScrollTo: function(pos) {
		var domStats = $('.statNum');
		$('.center').removeClass('center');
		for(var i = 0;i < 4;i++) {
			if(i < pos) {
				$('.slide--'+i).removeClass('right').addClass('left');
			} else if (i == pos) {
				$('.slide--'+i).removeClass('right').removeClass('left').addClass('center');
			} else if (i > pos) {
				$('.slide--'+i).removeClass('left').addClass('right');
			};
		};
		if (pos == 0) {
			$('.arrow').removeClass('inactive');
			$('.arrow--left').addClass('inactive');
		} else if(pos == 3){
			$('.arrow').removeClass('inactive');
			$('.arrow--right').addClass('inactive');
		} else {
			$('.arrow').removeClass('inactive');
		};
		$('.slidePos').removeClass('active');
		$('.slidePos--' + pos).addClass('active');
		if(!stkGphx.unlock) {
			for(var i = 0;i < domStats.length; i++){
				stkGphx.charScrambler(stkGphx.stats[pos][i], domStats[i].children, 0);
			};
		};
		return false;
	},
	unlockCheck: function(e) {
		if(stkGphx.unlock) {
			$('body').unbind();
		} else {
			e.preventDefault();
		};
		return stkGphx.unlock;
	},
	charScrambler: function(chars, dom, count){
		var char_cycles = 15; //how many nonsense letters it cycles through
		var char_cycle_length = 30; //length of each cycle in milliseconds
		//Cycle through the appropriate number of letters, according to the settings above
		if(count < char_cycles){
			setTimeout(function(){
				for(var x = 0; x < chars.length; x++){
					$(dom[x]).text(stkGphx.allChars[Math.floor((Math.random()*10))]);
				}
				stkGphx.charScrambler(chars, dom, (count+1));
			}, char_cycle_length);
		} else {
			for(var y = 0; y < chars.length; y++){
				$(dom[y]).text(chars.substring(y,y+1));
			}
		};
		return false;
	},
	cityScroller: function(direction){
		stkGphx.scrollerInstance = setTimeout(function(){
			stkGphx.unlock = false;
			var active = $('.activeCity');
			var pos = active.data('city');
			if(direction == -1 && pos > 0){
				stkGphx.populateNewCity(pos-1);
			} else if(direction == 1 && pos < 5){
				stkGphx.populateNewCity(pos+1);
			} else {
				stkGphx.unlock = true;
			};
			return stkGphx.unlock;
		}, 200);
		return false;
	},	
	scrollSnap: function(scrollDivClass, childDivClass) {
		var scrollDiv = $(scrollDivClass);
		var childDivs = $(childDivClass);
		var childDivWidth = $(childDivs[0]).width();
		var animating = false;
		var divNum;
		// On window resize, the childDivWidth is recalculated. This is a potentially wasteful and 
		// unnecessary function that I may phase out in the future. It is a soft patch for now.
		var resizeId;
		$(window).resize(function(){
			clearTimeout(resizeId);
			resizeId = setTimeout(doneResizing, 500);
		});
		function doneResizing() {
			childDivWidth = $(childDivs[0]).width();
		};
		// The on scroll function is set on a timeout to help reduce site load.
		scrollDiv.on('scroll', function(){
			clearTimeout($.data(this, 'scrollTimer'));
			if (!animating) {
				$.data(this, 'scrollTimer', setTimeout(function() {
					divNum = Math.round(scrollDiv.scrollTop() / childDivWidth);
					scrollBehavior();
					return false;
				}, 200));
			};
			return false;
		});
		// The on click function will actually trigger the on scroll function above because it will
		// scroll the parent div. This isn't ideal, but the clearTimeout and animating boolean 
		// ensures that the heavy lifting isn't done on the scroll function -- 
		// multiple instances of the scrollBehavior will not run.
		childDivs.on('click', function(){
			if (!animating) {
				divNum = $(this).data('city');
				scrollBehavior();
				return false;
			};		
			return false;
		});
		// The scroll behavior is broken out into a helper function to reduce bloat.
		// Code itself is fairly self-explanatory.
		function scrollBehavior(){
			if(divNum > 5){
				divNum = 5;
			};
			animating = true;
			scrollDiv.animate({
				scrollTop: divNum * childDivWidth + 'px'
			}, 250);
			setTimeout(function() { animating = false; }, 300);
			// On scroll end, we populate with new data from the current div.
			stkGphx.populateNewCity(divNum);
			return false;
		};
	},
	populateNewCity: function(cityNum) {
		var currCity = $('.cityOutline--'+cityNum);
		var scrollDiv = $('.cities');
		var childDivWidth = $('.cityOutline--0').width();
		var resizeId;
		$(window).resize(function(){
			clearTimeout(resizeId);
			resizeId = setTimeout(doneResizing, 500);
		});
		function doneResizing() {
			childDivWidth = $('.cityOutline--0').width();
		};
		scrollDiv.animate({
			scrollTop: cityNum * childDivWidth + 'px'
		}, 250);
		$('.activeCity').removeClass('activeCity');
		currCity.addClass('activeCity');
		cityNum = currCity.attr('data-city');
		$('.jsFade').fadeOut('fast',function(){
			$('.cityName').text(stkGphx.cityNames[cityNum][0]);
			$('.nonFatStat').text(stkGphx.cityNames[cityNum][1]);
			$('.fatStat').text(stkGphx.cityNames[cityNum][2]);
			$('.perShot').text(stkGphx.cityNames[cityNum][3]);
			$('.cityGraph').attr('src',
				'dist/images/graph' + stkGphx.cityNames[cityNum][4] + '.png');
			$('.cityDisclaimer').text(stkGphx.cityNames[cityNum][5]);
			$(this).fadeIn();
		});
		return false;
	},
	// neighborhoods creates the Carto map. There's not much to it -- basically just 
	// boilerplate embed code {from Carto's website.
	neighborhoods: function(){
		var map = new L.Map('map', {
			zoomControl: false,
			dragging: false,
			touchZoom: false,
			scrollWheelZoom: false,
			doubleClickZoom: false,
			boxZoom: false,
			tap: false,
			center: [39.275, -76.620],
			zoom: 12,
		});
		map.dragging.disable();
		cartodb.createLayer(map,
			'https://baltsun.carto.com/api/v2/viz/6679b36e-80ea-11e6-b5c2-0e3ebc282e83/viz.json')
		.addTo(map)
		.on('done', function(layer) {
		})
		.on('error', function() {
			cartodb.log.log("some error occurred");
		});
	}
};
$(document).ready(function(){
	stkGphx.init();
	console.log('connected');
});

var app = app || {

	init: function(){

		app.share();
		//app.show_video();
		app.navigation();

	},

	navigation: function(){

		$("section").mouseenter(function(){
			var id = $(this).attr('id');
			$('a').removeClass('active');
			$("[href=#"+id+"]").addClass('active');
		});

		$("section").on("touchmove", function(){
			var id = $(this).attr('id');
			$('a').removeClass('active');
			$("[href=#"+id+"]").addClass('active');
		});

	},

	show_video: function(){

		$("#featured-video").find(".fv__overlay, .fv__play-btn").on("click", function(){
			$(".fv__overlay, .fv__play-btn").addClass("is-hidden");
		});

	},

	share: function(){

		$(".icon-twitter").on("click", function(){

			var tweet = "Baltimore is one of the most lethal cities in the United States. How did we get there?"; //Tweet text
			var url = "http://data.baltimoresun.com/news/shoot-to-kill/"; //Interactive URL

			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

		$(".icon-facebook").on("click", function(){

			var picture = "http://data.baltimoresun.com/news/shoot-to-kill/dist/images/s2ksocial-thumb.png"; //Picture URL
			var title = "Shoot to Kill"; //Post title
			var description = "Baltimore is one of the most lethal cities in the United States. How did we get there?"; //Post description
			var url = "http://data.baltimoresun.com/news/shoot-to-kill/"; //Interactive URL

	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

		});

	}
	
}



$(document).ready(function(){
	app.init();
});

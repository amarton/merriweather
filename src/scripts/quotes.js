
var data = [
      {"id":1,"quote":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.","source":"- James Murphy, LCD Soundsystem", "image":"dist/images/headshot.png"},
      {"id":2,"quote":"Rurabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.","source":"- Daniel Ash, Love & Rockets", "image":"dist/images/headshot2.png"},
      {"id":3,"quote":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.","source":"Frank Black, The Pixies", "image":"dist/images/headshot.png"}
    ];


    var nextlinkID = 2;
    var prevlinkID = 1;


    function nextQuote(quoteID){


      $.each(data, function(idx, obj) {
        if (obj.id == quoteID) {
        
          source = obj.source;
          quote = obj.quote;
          image = obj.image;


        }

      });

      $('#quote').html(quote);
      $('#source').html(source);
      $('#quote-container').css("background-image", "url(" + image + ")");

       nextlinkID = ++quoteID;
       prevlinkID = nextlinkID - 2;
  
       if (prevlinkID !== 0) {
    
        $('#arrow-left').show();
      } else {
        $('#arrow-left').hide();
      }

      //SET THIS NUMBER -- 4 -- THE HIGHEST RACE ID PLUS 1
       if (nextlinkID == 4) {
    
        $('#arrow-right').hide();
      } else {
        $('#arrow-right').show();
      }



    };

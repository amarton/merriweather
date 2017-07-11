
var data = [
      {"id":1,"quote":"It doesn’t look anything like any other venue in America. Physically, Merriweather has an appearance of some sort of indoor-outdoor space. It just has it all. It’s in the middle of the woods. You just feel like you bore out a tree and moved in.","source":"- Marc Roberge, singer of O.A.R.", "image":"dist/images/quote-oar.png"},
      {"id":2,"quote":"When we were in high school, we developed this phrase that was ‘Merriweather’ for this kind of music. It was a lot of [psychedelic] music we were listening to at the time. Anything that had this grand, epic kind of psych. You can imagine it being great listening to outdoors. We’d be like, ‘That’s so Merriweather, that sound.’","source":"- Dave Portner, a.k.a. Avey Tare of Animal Collective", "image":"dist/images/quote-avytare.png"},
      {"id":3,"quote":"We never thought we’d get to headline a venue like this. The place keeps getting better and better every time we come back.","source":"- Jason Isbell during his Merriweather Post Pavilion concert on June 30", "image":"dist/images/quote-jason.png"}
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
      $('#headshot').html("<img src='" + image + "' height='200px'>");

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

$(document).foundation();


    $('.programme-item').on('click', function() {
      player.currentTime($(this).children('.chapter').data('starttime'));
      player.play();
      $("html, body").animate({ scrollTop: 184 }, "slow");
    });
    
function updatePlaylistInfo() {
    $('.programme-item').removeClass('now-playing');
   $(".chapter").each(function() {
     if(player.currentTime() >= $(this).data('starttime') && player.currentTime() < $(this).data('endtime') ) {
       $(this).parent().addClass('now-playing');
     }
     
});
}

player.on("seeked", function (e) {
 updatePlaylistInfo();
});



flowplayer(function(api){

    

    
    api.on("cuepoint", function(e) {
      console.log("checkpoint!");
      console.log(e);
            var counter=-1;
      $(".chapter").each(function() {
      
        if(api.video.time<$(this).data('time')) {
          if(counter!=-1){
            $('.programme-item').removeClass('now-playing');
            $('.chapter:eq('+counter+')').parent().addClass('now-playing');
            return false
          } else {
            $('.programme-item').removeClass('now-playing');
              return false
          }
        } else {
          counter=counter+1;
        }      
        if (counter==($(".chapter").length-1)) {
           $('.programme-item').removeClass('now-playing');
            $('.chapter').last().parent().addClass('now-playing');
          
        }
    });
  })
});


  $(".owl-slider-featured").owlCarousel({
    items: 3,
  });
  
  $(".owl-slider-playlist").owlCarousel({
    items: 5,
  });
  $(".top-channel-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      singleItem:true,
      autoPlay: 7000,
      stopOnHover: true,
      rewindSpeed: 3000,
      paginationSpeed: 3000
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

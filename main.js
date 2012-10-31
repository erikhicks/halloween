$(document).ready(function() {
  Hell.init();
});

(function( Hell, $, undefined ) {
  var images = [
    'http://25.media.tumblr.com/tumblr_mcof5i6vzS1riohewo1_500.gif',
    'http://24.media.tumblr.com/tumblr_mcpa5m0evG1rk1dqwo1_500.jpg',
    'http://1.bp.blogspot.com/_Xj84QYCcFok/TMoUKomWioI/AAAAAAAAC0Y/HHlv-5koeco/s1600/Swinging+Reaper+2010-10-28.jpg',
    'http://2.bp.blogspot.com/_Xj84QYCcFok/TL3tMcaxWGI/AAAAAAAACxk/L-c87RoVzSk/s1600/Zombie+Baboon+Corralitas+Drive+2010-10-15.jpg',
    'http://angelabrook.com/wp-content/uploads/2010/09/InsaneAsylum-1.jpg',
    'http://static.atlasobscura.netdna-cdn.com/images/place/museo-del-manicomio-san-servolo-insane-asylum-museum.8671.large_slideshow.jpg',
    'http://static.atlasobscura.netdna-cdn.com/images/place/museo-del-manicomio-san-servolo-insane-asylum-museum.8669.large_slideshow.jpg',
    'http://1.bp.blogspot.com/-fDbWGmI8VXs/UHBY6rvuCII/AAAAAAAAHdg/Cb2EfLzqBNQ/s1600/insane-asylum-dayroom.jpg',
    'http://www.funnycommercialsworld.com/wp-content/uploads/2009/09/Asylum-626.jpg',
    'http://4.bp.blogspot.com/-s46kQSe1D1g/UIAOg1IvXQI/AAAAAAAAFWo/s2Aw3EYWlPI/s1600/american+horror+story+asylum+season+2008.JPG',
    'http://www.mountainsanatorium.net/images/s/sluttelshole.jpg',
    'http://www.mountainsanatorium.net/images/f/femaleemployee.jpg',
    'http://i664.photobucket.com/albums/vv3/matthewmcdowell/creepy.jpg',
    'http://www.shockya.com/news/wp-content/uploads/deathly_hallows_creepy_villain1.jpg',
    'http://2.bp.blogspot.com/-U1Oh6arF82U/TtuU2xyoCrI/AAAAAAAAACg/ggt-e5OsirE/s1600/asylum1.jpg',
    'http://upload.wikimedia.org/wikipedia/commons/d/d6/Magdalen-asylum.jpg',
    'http://1.bp.blogspot.com/-1x52QSQ5r8U/UHBfv2Dy1LI/AAAAAAAADBI/igiX66NvCug/s1600/American-Horror-Story-Asylum-S2-Poster-2.jpeg',
    'http://ktismatics.files.wordpress.com/2011/04/shining-freaks.png'

  ];

  Hell.init = function() {
    preloadImages();
    styleBody();
    animateBody();
  };

  Hell.randomBody = function() {
    $('body').removeClass('image');
    $('body').addClass('noimage');
    $('body').css('background-image', 'none');
    $('body').toggleClass('black');

    if (!$('body').hasClass('black')) {
      showRandomImage();
    } else {
      animateBody();
    }
  };

  // private

  function preloadImages() {
    $.each(images, function(index, image_src) {
      var image = new Image();
      image.src = image_src;
      console.log(image_src);
    });
  }

  function showRandomImage() {
    $('body').removeClass('noimage');
    $('body').addClass('image');

    var image_src = images[Math.floor(Math.random()*images.length)];

    $('body').css('background-image', 'url(' + image_src + ')');
    animateBody();
  }

  function styleBody() {
    $('body').addClass('black');
  }

  function animateBody() {
    var randomInterval = Math.floor(Math.random()*1000);
    setTimeout('Hell.randomBody()', randomInterval);
  }


}( window.Hell = window.Hell || {}, jQuery ));
function setupEnv() {
  var toggle_lyrics_mode = 0;
  
  $('.toggle_lyrics').click(function(event) {
    event.preventDefault();
    if (toggle_lyrics_mode  == 0) {
    $("pre#lyrics_only").show();
    $("pre#song").hide();
    $("#toollist .non-bordered").hide();
    toggle_lyrics_mode = 1;
    }
    else {
    $("pre#lyrics_only").hide();
    $("pre#song").show();
    $("#toollist .non-bordered").show();
    toggle_lyrics_mode = 0;
    }
  });
}

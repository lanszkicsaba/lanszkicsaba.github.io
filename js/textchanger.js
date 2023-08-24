(function () {
    var words = ["Researcher","Software Developer", "Web Developer", "Data Scientist", "UX/UI Designer"],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })()
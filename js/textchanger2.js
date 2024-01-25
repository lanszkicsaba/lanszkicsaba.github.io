(function () {
    var words2 = ["Kutató fejlesztő","Szoftverfejlesztő", "Webfejlesztő", "Data Scientist", "UX/UI Designer"];
    i = 0;   
    setInterval(function(){ $('#words2').fadeOut(function(){
        $(this).html(words2[(i = (i + 1) % words2.length)]).fadeIn();
      }); }, 3000)
  })()
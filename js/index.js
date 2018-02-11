var colorList = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "##8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"];
var content = "";
var title = "";
$(document).ready(function(){
  changeQuote();
  $('button').on('click', function(e) {
    changeQuote();
});
});
function getRandomColor(){
  var randomIndex=Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
}
function changeQuote() {
  var randomColor=getRandomColor();
  $('.color').css('color', randomColor);
  $('.background-color').css('background-color', randomColor);
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();
        content = post.content.slice(3, post.content.length-5);
        title = post.title;
        $('span').html(" " + content);
        $('footer').html("- " + post.title);
        $('a').attr("href", 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(content) + " - " + encodeURIComponent(title));
        },
      cache: false
    });
}
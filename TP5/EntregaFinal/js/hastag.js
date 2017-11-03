var imagenes = [];

function Hastag(){


}

Hastag.prototype.searchTags = function(q){

    var search_term = q;
    $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'https://api.twitter.com/1.1/search/tweets.json',
            data:{q: search_term},
                success: function(data){
                  console.log(data);
                },
                error: function(){

                }
            });
}

function colocarImagenes(){
    var contenido = '';
    for (var i = 0; i < imagenes.length; i++) {
         contenido = contenido + '<div class="imagen"><img src="'+imagenes[i][0]+'"><div class="tweet">'+imagenes[i][1]+'</div></div>';
    }
    document.getElementById("imagenes").innerHTML = contenido;
}


var searchclass = new Hastag();

$('#search').change(function(){

  document.getElementById("loading").style.display = 'block';

  let q = $(this).val();

  var cb = new Codebird;
  cb.setConsumerKey('4J8f4cnXTqWOWRNZnpmLcManX', 'fv0bVfePWTdMNzBk3pJnPRlnGt7WZGOwNOOnqHSqgDXQWmNcEr');

  cb.__call(
    'oauth2_token',
    {},
    function (reply) {
        var bearer_token = reply.access_token;
      }
  );

  cb.__call(
    'search/tweets',
    'q=#'+q + '&tweet_mode=extended&filter:media',
    function (reply) {
      imagenes = [];
      for(i=0;i<reply.statuses.length;i++){
        if(typeof reply.statuses[i].extended_entities !== "undefined"){
          imagenes.push([reply.statuses[i].extended_entities.media[0].media_url, reply.statuses[i].favorite_count]);
          document.getElementById("loading").style.display = 'none';
          colocarImagenes();
        }
      }
    },
    true // this parameter required
  );

});

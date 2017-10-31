function Hastag(){
  var CONSUMER_KEY = '';
  var CONSUMER_SECRET = '';
  var ACCESS_TOKEN = '';
  var ACCESS_TOKEN_SECRET = '';

/*
OAuth oauth_consumer_key="4J8f4cnXTqWOWRNZnpmLcManX",
oauth_token="106515381-hrU5tNmzLFlgt5FFOdLnfukPWbwik4jD4XJl0fTh",
oauth_signature_method="HMAC-SHA1",
oauth_timestamp="1509388485",
oauth_nonce="EcFkKe",
oauth_version="1.0",
oauth_signature="F%2FGDQw0OR66QJx24E%2B7dsKrucys%3D"
*/

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

var searchclass = new Hastag();

$('#search').change(function(){
  let q = $(this).val();
  //console.log(q);
  $.ajax({
          type: 'GET',
          dataType: 'json',

          url: 'https://api.twitter.com/1.1/search/tweets.json?q='+q,
              beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'OAuth oauth_consumer_key="4J8f4cnXTqWOWRNZnpmLcManX",oauth_token="106515381-hrU5tNmzLFlgt5FFOdLnfukPWbwik4jD4XJl0fTh",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1509389276",oauth_nonce="pyTrIN",oauth_version="1.0",oauth_signature="ZUBxq3%2F1UmGa3EYjWeNyH6whoBw%3D"');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
              },
              success: function(data){
                console.log(data);
              },
              error: function(){

              }
          });
  //searchclass.searchTags(q);
});

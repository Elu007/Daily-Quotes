var quote = document.querySelector("#quote");
var author = document.querySelector("#author");

var api_url = "http://quotable.io/random";

fetch(api_url)
.then(res => res.json())
.then(data => {
    quote.innerHTML = '"' + data.content + '"';
    author.innerHTML = "-" + data.author;
});
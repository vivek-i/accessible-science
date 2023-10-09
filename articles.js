

function loadArticles() {
  $.getJSON("articles.json", function (json) {
    
    var articlesAdded = 0;
    var filter = getParameterByName("filter");
    for (var i = 0; i < json.length; i++) {
      if (json[i].topic == filter || filter == null || filter == "") {
        articlesAdded++;
        var thisArticle = document.createElement("div");
        var articleTitle = document.createElement("h1");
        var description = document.createElement("p");
        var articleImage = document.createElement("img");

        thisArticle.classList.add("articleContainer");

        if (articlesAdded % 2 == 0) {
          thisArticle.setAttribute("data-aos", "fade-right");
        } else {
          thisArticle.setAttribute("data-aos", "fade-left");
        }

        var articleLink = json[i].linkToArticle;

        articleTitle.innerHTML = json[i].title;
        description.innerHTML = json[i].description;
        articleImage.src = json[i].imageAddress;

        thisArticle.appendChild(articleTitle);
        thisArticle.appendChild(description);
        thisArticle.appendChild(articleImage);

        var aTag = document.createElement("a");

        aTag.setAttribute("href", json[i].linkToArticle);

        thisArticle.appendChild(aTag);

        articleSection.appendChild(thisArticle);

        // thisArticle.onclick = function () {
        //     var index = Array.from()
        //     console.log($(thisArticle.index()))
        //     $.getJSON("articles.json", function(jsonCopy) {
        //         //openArticle(jsonCopy[index-1].linkToArticle)
        //     })
        // }
        $(".articleContainer").click(function () {
          window.location = $(this).find("a").attr("href");
          return false;
        });
      }
    }
  });
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
} 

function addArticle(title, imageLink, descriptionText, id) {

    var articleSection = document.getElementById("articleSection");

    var thisArticle = document.createElement("div");
    var articleTitle = document.createElement("h1");
    var description = document.createElement("p");
    var articleImage = document.createElement("img");
    var articleLink = "/article.html?id=" + id;
    thisArticle.classList.add("articleContainer");

    articleTitle.innerHTML = title;
    description.innerHTML = descriptionText;
    articleImage.src = imageLink;

    thisArticle.appendChild(articleTitle);
    thisArticle.appendChild(description);
    thisArticle.appendChild(articleImage);

    var aTag = document.createElement("a");
    aTag.setAttribute("href", articleLink);
    aTag.appendChild(thisArticle);
    //thisArticle.appendChild(aTag);
    articleSection.appendChild(aTag);
}
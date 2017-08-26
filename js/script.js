function getSearchList(searchText) {
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchText + "&format=json&callback=?", function(json) {
    var searchList = json.query.search; // Returns a list of results
    generateSearchList(searchList);
  });
}

function generateSearchList(searchList) {
  var html = "";
  var len = searchList.length;

  for (var i = 0; i < len; i++) {
    var searchRes = searchList[i];
    html += "<a target='_blank' href='https://en.wikipedia.org/wiki/" + searchRes.title + "'>\n<div class='search-result'>\n<h3>\n" + searchRes.title + "\n</h3>\n";
    html +=  searchRes.snippet + "\n</div>\n</a>"
  }
  $("#search-list").html(html);
}

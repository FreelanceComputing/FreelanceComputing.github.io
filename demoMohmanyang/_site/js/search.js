$(function() {
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('postHeading');
    this.field('subHeading');
    this.field('content', { boost: 10 });
    this.field('date');
    this.field('tags');
    this.field('image');
  });
  
  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON('/search-data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });
  
  // Event when the form is submitted
  $("#site_search").submit(function(event){
      event.preventDefault();
	  document.getElementById('displaySearchError').style.display = 'none';
      var query = $("#search_box").val(); // Get the value from the search field
	  // if the user doesn't enter a query, display error message
	  if(query == "")
	  {
		  document.getElementById('displaySearchError').style.display = '';
		  return;
	  }
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });
  
  function display_search_results(results) {
    // Wait for data to load
    window.data.then(function(loaded_data) {
      // Are there any results?
      if (results.length) { 
		// Clear any old results
        $("#search_results").empty();
		// Hide blog entries
		$("#entries").hide();
		// Clear search box field
		$("#search_box").val("");
		// Re-animate search button
		document.getElementById('searchBtn').setAttribute('style','color: #fff !important;background-color: #e5877e !important');
        // Iterate over the results
        results.forEach(function(result,i) {
          var item = loaded_data[result.ref];		  
		  // Build a snippet of HTML for this result, add loop index
		  build_html(i, item.url, item.postHeading, item.subHeading, item.date, item.tags.split(', '));
        });
		// Create load more button if there are more than 6 results
		if(results.length > 6)
			build_load_more_button();
		// Redirect to search_results div
		window.location.href = "#search_results";
      } else {
        // If there are no results, let the user know.
		$("#no-results").css('display', 'block');
      }
    });
  }
  
  function build_html(index, url, heading, subHeading, date, tags)
  {
	  var heading_ = document.createElement("h3");
	  heading_.innerHTML = heading;
	  
	  var subHeading_ = document.createElement("h5");
	  subHeading_.innerHTML = subHeading;
	  
	  var date_ = document.createElement("span");
	  date_.setAttribute('class', 'w3-opacity');
	  date_.innerHTML = date;
	  var date__ = document.createElement("h5");
	  date__.appendChild(date_);
	  
	  var tags__ = document.createElement("h5");
	  tags__.innerHTML = "Tags: "
	  for(var i=0; i<tags.length; i++)
	  {
		  var tag = tags[i];
		  var tagTitle = 'View posts tagged with "' + tag + '"';
		  var tagUrl = '/tag/' + tag + '#entries';
		  var tagUrl_ = document.createElement("a");
		  tagUrl_.setAttribute('href', tagUrl);
		  tagUrl_.setAttribute('title', tagTitle);
		  tagUrl_.innerHTML = tag;
		  var tag_ = document.createElement("span");
		  tag_.setAttribute('class', 'w3-tag w3-black w3-margin-bottom');
		  tag_.appendChild(tagUrl_);
		  tags__.appendChild(tag_);
		  tags__.innerHTML += '\xa0';
	  }
	  
	  var urlText = document.createElement("b");
	  urlText.innerHTML = "READ MORE >>";
	  var url_ = "window.location.href='" + url + "#blogEntry'";
	  var urlButton = document.createElement("button");
	  urlButton.setAttribute('class', 'w3-button w3-padding-large w3-white w3-border');
	  urlButton.setAttribute('onclick', url_);
	  urlButton.appendChild(urlText);
	  var url__ = document.createElement("p");
	  url__.appendChild(urlButton);
	  
	  var postPreview = document.createElement("div");
	  postPreview.setAttribute('class', 'w3-container');
	  postPreview.appendChild(heading_);
	  postPreview.appendChild(subHeading_);
	  postPreview.appendChild(date__);
	  postPreview.appendChild(tags__);
	  postPreview.appendChild(url__);
	  
	  var divider = document.createElement("hr");
	  
	  var entryId = "blogEntry" + index;
	  var blogEntry = document.createElement("div");
	  blogEntry.setAttribute('id', entryId);
	  blogEntry.setAttribute('class', 'w3-card-4 w3-margin w3-white');
	  if(index > 5)
		  blogEntry.setAttribute('style', 'display:none');
	  blogEntry.appendChild(postPreview);
	  blogEntry.appendChild(divider);
	  
	  $("#search_results").append(blogEntry);
  }
  
  function build_load_more_button()
  {
	var moreButton = document.createElement("button");
	moreButton.setAttribute('class', 'w3-button w3-black w3-padding-large w3-margin-bottom');
	moreButton.setAttribute('onclick', 'loadMoreEntries(this, "search_results", 6)');
	moreButton.innerHTML = "Load More";
	var moreButtonP = document.createElement("p");
	moreButtonP.setAttribute('style', 'text-align: center');
	moreButtonP.appendChild(moreButton);
	var moreButtonF = document.createElement("footer");
	moreButtonF.setAttribute('id', 'more_results');
	moreButtonF.setAttribute('class', 'w3-margin');
	moreButtonF.appendChild(moreButtonP);
	$("#search_results").append(moreButtonF);
  }
  
  
});
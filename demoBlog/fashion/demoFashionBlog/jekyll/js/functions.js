// Toggle between hiding and showing blog replies/comments

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "✓ Liked";
}

function readMore(id)
{
	var postIndex = id.slice(-1);
	var postEntryId = "blogEntry" + postIndex;
	var postExcerptId = "postExcerpt" + postIndex;
	var postContentId = "postContent" + postIndex;
	var postExcerpt = document.getElementById(postExcerptId);
	var postContent = document.getElementById(postContentId);
	postExcerpt.className = postExcerpt.className.replace(" w3-show", "");
	postContent.className += " w3-show";
	
	var entries = document.getElementById('entries').childNodes;
	for(var i=0; i<entries.length; i++) 
	{
		if ((entries[i].nodeName.toLowerCase() == 'div') && (entries[i].id != postEntryId) )
		{
		   entries[i].style.display = 'none';
		}
	}
}

function goBack(id)
{
	var postIndex = id.slice(-1);
	var postEntryId = "blogEntry" + postIndex;
	var postExcerptId = "postExcerpt" + postIndex;
	var postContentId = "postContent" + postIndex;
	var postExcerpt = document.getElementById(postExcerptId);
	var postContent = document.getElementById(postContentId);
	postExcerpt.className += " w3-show";
	postContent.className = postExcerpt.className.replace(" w3-show", "");
	
	var entries = document.getElementById('entries').childNodes;
	for(var i=0; i<entries.length; i++) 
	{
		if ((entries[i].nodeName.toLowerCase() == 'div') && (entries[i].id != postEntryId) )
		{
		   entries[i].style.display = '';
		}
	}
}
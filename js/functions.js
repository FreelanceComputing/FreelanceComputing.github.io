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

function loadMoreTagEntries(btn)
{
	var disable = false;
	var count = 0;
	var entries = document.getElementById('entries').childNodes;
	for(var i=0; i<entries.length; i++) 
	{
		if ((entries[i].nodeName.toLowerCase() == 'div') && (entries[i].style.display == 'none') )
		{
		   entries[i].style.display = '';
		   count = count + 1;
		}
		if(i == entries.length-1)
			disable = true;
		if(count >= 2)
			break;
	}
	if(disable)
		btn.className += " w3-disabled";
	else
	{
		btn.style.color = "#fff !important";
		btn.style.backgroundColor = "#000 !important";
	}
}

function subscribe(){
	$('#displayEmailError').style.display = 'none';
	var f_email = document.getElementById("email");
	var f = $('#contactForm');
	if(!f[0].email.validity.valid)
	{
		$('#displayEmailError').style.display = '';
		return;
	}
	var  f_data = "Email="+f_email.value;
	console.log(f_data);
	$.ajax({
		dataType: "json",
		url: "https://formsapi.jabwn.com/key/RJgPflYOU79fwdeJbPU8",
		method: "POST",
		data: {message: f_data}
	});
	document.getElementById('thank-you').style.display='block';
	return false;
}

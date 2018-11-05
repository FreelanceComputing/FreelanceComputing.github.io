// Toggle between hiding and showing blog replies/comments

function viewHideReactions(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
		var y = document.getElementById("hideBtn");
		y.style.display = '';
		var z = document.getElementById("reactionsBtn");
		z.style.display = 'none';
    } else { 
        x.className = x.className.replace(" w3-show", "");
		var y = document.getElementById("hideBtn");
		y.style.display = 'none';
		var z = document.getElementById("reactionsBtn");
		z.style.display = '';
    }
}

function loadMoreEntries(btn, id, iter)
{
	var disable = false;
	var count = 0;
	var entries = document.getElementById(id).children;
	
	var entriesLength = 0;
	if(entries[entries.length - 1].nodeName.toLowerCase() == 'footer')
		entriesLength = entries.length - 1;
	else
		entriesLength = entries.length;
	
	for(var i=0; i<entriesLength; i++) 
	{
		if (entries[i].style.display == 'none')
		{
		   entries[i].style.display = '';
		   count = count + 1;
		}
		if(i == entriesLength-1)
			disable = true;
		if(count >= iter)
			break;
	}
	if(disable)
		btn.className += " w3-disabled";
	else
	{
		btn.setAttribute('style','color: #fff !important;background-color: #000 !important');
	}
}

function subscribe(formId){
	var formIndex = formId.slice(-1);
	var displayEmailError = "displayEmailError" + formIndex;
	var rat = "rat" + formIndex;
	var email = "email" + formIndex;
	
	document.getElementById(displayEmailError).style.display = 'none';
	
	var f = $(formId);
	if(!f[0].email.validity.valid)
	{
		document.getElementById(displayEmailError).style.display = '';
		return;
	}
	
	var f_rat = document.getElementById(rat);
	if(f_rat.value != "")
		return;
		
	var f_email = document.getElementById(email);
	var  f_data = "Email="+f_email.value;
	f_email.value = '';
	
	$.ajax({
		dataType: "json",
		url: "https://formsapi.jabwn.com/key/RJgPflYOU79fwdeJbPU8",
		method: "POST",
		data: {message: f_data}
	});
	$("#thank-you").css('display', 'block');
	$("#subscribe").css('display', 'none');
	return false;
}

function reply(formId){	
	var error = false;
	
	document.getElementById("displayReplyNameError").style.display = 'none';
	document.getElementById("displayReplyCommentError").style.display = 'none';
	document.getElementById("displayReplyEmailError").style.display = 'none';
	
	var f = $(formId);
	if(!f[0].alias.validity.valid)
	{
		document.getElementById("displayReplyNameError").style.display = '';
		error = true;
	}
	if(!f[0].comment.validity.valid)
	{
		document.getElementById("displayReplyCommentError").style.display = '';
		error = true;
	}
	if(!f[0].email.validity.valid)
	{
		document.getElementById("displayReplyEmailError").style.display = '';
		error = true;
	}
	
	var f_rat = document.getElementById("replyRat");
	if(f_rat.value != "")
		error = true;
	
	if(error == true)
		return;
		
	var f_name = document.getElementById("replyName");
	var f_comment = document.getElementById("replyComment");
	var f_email = document.getElementById("replyEmail");
	var f_data = "Name="+f_name.value+"&Comment="+f_comment.value+"&Email="+f_email.value;
	f_name.value = '';
	f_comment.value = '';
	f_email.value = '';
	
	$.ajax({
		dataType: "json",
		url: "https://formsapi.jabwn.com/key/RJgPflYOU79fwdeJbPU8",
		method: "POST",
		data: {message: f_data}
	});	
	$("#thanks").css('display', 'block');
	$("#reply").css('display', 'none');
	return false;
}

/*function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "✓ Liked";
}*/

/*function readMore(id)
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
}*/

/*function goBack(id)
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
}*/


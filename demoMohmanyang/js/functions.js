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
	
	var dataObj = {};
	dataObj["Email"] = f_email.value;
	dataObj["_subject"] = "New Subscription!";
	
	f_email.value = '';
	
	$.ajax({
		dataType: "json",
		url: "https://formsapi.jabwn.com/key/RJgPflYOU79fwdeJbPU8",
		method: "POST",
		data: dataObj
	});
	$("#thank-you").css('display', 'block');
	$("#subscribe").css('display', 'none');
	return false;
}

function reply(formId, postUrl){	
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
	var f_post = postUrl.split('/').slice(-1)[0];
	
	var dataObj = {};
	dataObj["Name"] = f_name.value;
	dataObj["Email"] = f_email.value;
	dataObj["Post"] = f_post;
	dataObj["Comment"] = f_comment.value;
	dataObj["_subject"] = "Mohmanyang Comment: " + f_post;
	dataObj["_replyto"] = f_email.value;
	
	f_name.value = '';
	f_comment.value = '';
	f_email.value = '';
	
	$.ajax({
		dataType: "json",
		url: "https://formsapi.jabwn.com/key/RJgPflYOU79fwdeJbPU8",
		method: "POST",
		data: dataObj
	});	
	$("#thanks").css('display', 'block');
	$("#reply").css('display', 'none');
	return false;
}




function send()
{
    var f_name = document.getElementById("name");
    var f_email = document.getElementById("email");
    var f_subject = document.getElementById("subject");
    var f_message = document.getElementById("message");
    var f = $('#ContactForm');
    
    if( !f[0].name.validity.valid
    ||  !f[0].email.validity.valid
    ||  !f[0].subject.validity.valid
    ||  !f[0].message.validity.valid)
    {
        return;
    }
    
    var  f_data = "Name="+f_name.value+"&Email="+f_email.value+"&Subject="+f_subject.value+"&Message="+f_message.value;
    
    $.ajax({
        url : "https://hidden-no-more-237.com/php/contact.php",
        type: "POST",
        data : f_data,
        success: function(data)
        {
            f_name.value = "";
            f_email.value = "";
            f_subject.value = "";
            f_message.value ="";
            console.log(data);
            alert(data);
        },

    });
    return;
}

function myMap()
{
		myCenter = new google.maps.LatLng(41.878114, -87.629798);
	var mapOptions= {
		center: myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
		position: myCenter,
  });
  marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
		document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block";
	var captionText = document.getElementById("caption");
	captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  
  
function w3_open() {
	var mySidebar = document.getElementById("mySidebar");
    if (mySidebar.style.display === 'block') {
		mySidebar.style.display = 'none';
	} else {
		mySidebar.style.display = 'block';
	}
}

// Close the sidebar with the close button
function w3_close() {
	var mySidebar = document.getElementById("mySidebar");
		mySidebar.style.display = "none";
	}
	


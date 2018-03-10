// JavaScript Document

// Back to Top scripts
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Captcha Script

		function checkform(theform){
		var why = "";

		if(theform.CaptchaInput.value == ""){
		why += "- Please Enter CAPTCHA Code.\n";
		}
		if(theform.CaptchaInput.value != ""){
		if(ValidCaptcha(theform.CaptchaInput.value) == false){
		why += "- The CAPTCHA Code Does Not Match.\n";
		}
		}
		if(why != ""){
		alert(why);
		return false;
		}
		}

		var a = Math.ceil(Math.random() * 9)+ '';
		var b = Math.ceil(Math.random() * 9)+ '';
		var c = Math.ceil(Math.random() * 9)+ '';
		var d = Math.ceil(Math.random() * 9)+ '';
		var e = Math.ceil(Math.random() * 9)+ '';

		var code = a + b + c + d + e;
		document.getElementById("txtCaptcha").value = code;
		document.getElementById("CaptchaDiv").innerHTML = code;

		// Validate input against the generated number
		function ValidCaptcha(){
		var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
		var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
		if (str1 == str2){
		return true;
		}else{
		return false;
		}
		}

		// Remove the spaces from the entered and generated code
		function removeSpaces(string){
		return string.split(' ').join('');
		};


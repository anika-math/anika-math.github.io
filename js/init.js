(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function logIn(name){
	window.location.href="menu.html?name="+name.value;
}

function questionOne(elem) {
	var answer = elem.value.split(",");
	var truelist = ["blue", "car", "house", "book", "street"];
	for (var i=0; i<answer.length; i++){
		for(var j=0; j<truelist.length;j++){
			if(answer[i] == truelist[j]){
				truelist.splice(j,1);
			}
		}
	}
	if(truelist.length <=0){
		var res = document.getElementById("response");
		var title = document.createElement("H1");
		var text = document.createTextNode("Correct");
		text.style="color:green";
		title.appendChild(text);
		res.appendChild(title);
	} else{
		var res = document.getElementById("response");
		var title = document.createElement("H1");
		var text = document.createTextNode("Incorrect");
		text.style="color: red";
		title.appendChild(text);
		res.appendChild(title);
	}
	setTimeout(function(){
		window.location.href="menu.html"
	},5000);
}

function questionTwo(elem) {
	var answer = elem.value;
	if(answer == "100 Circle Road"){
		var res = document.getElementById("response");
		var title = document.createElement("H1");
		var text = document.createTextNode("Correct");
		text.style="color:green";
		title.appendChild(text);
		res.appendChild(title);
	} else{
		var res = document.getElementById("response");
		var title = document.createElement("H1");
		var text = document.createTextNode("Incorrect");
		text.style="color: red";
		title.appendChild(text);
		res.appendChild(title);
	}
	setTimeout(function(){
		window.location.href="question3.html"
	},5000);
}

function questionThree(elem){
	if(elem.value=="100-96-92-88-84-80-76"){
		var res = document.getElementById("response");
		var title = document.createElement("H1");
		var text = document.createTextNode("Correct");
		text.style="color:green";
		title.appendChild(text);
		res.appendChild(title);
	} else{
		var res = document.getElementById("response");
		var title = document.createElement("H1");
		var text = document.createTextNode("Incorrect");
		text.style="color: red";
		title.appendChild(text);
		res.appendChild(title);
	}
	setTimeout(function(){
		window.location.href="question2.html"
	},5000);
}

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('./service-worker.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}

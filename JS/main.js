// image scaling
var image = document.getElementById('main-imageID');
image.onclick = function changeWidth() {
	
	image.style.maxWidth = 98 + '%';
	image.style.position = 'absolute';
	image.style.margin = 10 + 'px';
	image.style.left = 0;
	image.style.top = 0;
	image.style.cursor = 'default ';
	image.style.minWidth = 855 + 'px';
	var timeBtn = document.getElementById('times');
	timeBtn.style.display = 'block';
	timeBtn.onclick = function() {
		image.style.maxWidth = 200 + 'px';
		image.style.minWidth = 190 + 'px';
		image.style.position = 'unset';
		timeBtn.style.display = 'none';
		
	}
	
}

 // progressbar

function userProgress(time) {
	var proc = document.getElementById('progress-proc');
	var start = 0;
	var progressElement = document.getElementById('progress-bar');
	var intervarl = setInterval(function(){
		progressElement.value = start;
		proc.innerHTML = start;
		start++;
		console.log(start);
		if(proc.innerHTML >= 100) {
			clearInterval(intervarl);
		}
	}, time);
	
	
}
userProgress(300);
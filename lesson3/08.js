window.onload = function(){
	var oClock = document.getElementById('clock');
	var aSpan = oClock.getElementsByTagName('span');

	setInterval(getTimes,1000);
	getTimes();
	function getTimes(){
		var oDate = new Date();
		var aDate = [oDate.getHours(),oDate.getMinutes(),oDate.getSeconds()];
		for(var i in aDate){
			aSpan[i].innerHTML = format(aDate[i]);
		}
	}
	function format(a){
		return a.toString().replace(/^(\d)$/,"0$1");
	}
}
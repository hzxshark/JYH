
//get方法
function get(url,fn){
	var xhr=new XMLHttpRequest();
	xhr.open ("GET",url,true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}
}

//post方法
function post(url,data,fn){
	var xhr=new XMLHttpRequest();
	xhr.open("POST",url,true);
	xhr.setRequestHeader('content-Type','application/x-www-form-urlencoded');
	xhr.send(data);
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			if(fn){
				fn(xhr.responseText);
			}
		}
	}
}

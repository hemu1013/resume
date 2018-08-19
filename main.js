function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json")
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readystate===4 && xhr.status=="200")
			callback(xhr.responseText);
	}
}
xhr.send();
}
json("data.json",function(text){
	let d=JSON.parse(text);
   	console.log(d);

})
var main=document.querySelector(".first");
var l=document.create.Element("div");
l.left.classlist.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basicdetails)
{

	var i=document.createElement("img");
	i.src=basic.image;
    i.alt="profile photo";
	l.appendChild(i);
	var nam=document craeteElement("h3");
	nam.textcontent=basicdetails.name;
	l.appendChild(nam);
}

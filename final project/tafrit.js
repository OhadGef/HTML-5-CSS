

var menu=
'<ul id=tafrit1 class=menu>' +
		'<li style="display:inline-block;" ><a href="index.html"> דף הבית</a>' +
		'<li style="display:inline-block;" ><a href="about.html"> אודות</a>' +

	'<li><a href="restaurants.html"> אוכל  </a>' +	
		'<ul class=submenu>' +
			'<li><a href="restaurants.html">  מסעדות</a>' +
			'<li><a href="bars.html">  ברים</a>' +
		'</ul>' +
		
	'<li ><a href="Culture.html">בילויים </a>' +
		'<ul class=submenu>' +
			'<li ><a href="Culture.html">תרבות </a>' +
			'<li><a href="entertainment.html">פנאי</a>' +
		'</ul>' +
		
		
	'<li><a href="tel-o-fun.html">תחבורה </a>' +
	'<ul class=submenu>' +
		'<li ><a href="tel-o-fun.html">תל אופן </a>' +
		'<li style="border-left:none"><a href="parking.html">חניה</a>' +
	'</ul>' +
			'<li ><a href="contact.html"> צור קשר</a>' +
	
	
	
'</ul>'

 function mark(){
var page=window.location.href ;// page url
var obj=document.getElementById("tafrit1") ;
var elements = obj.getElementsByTagName("a");// Array of links

for (i=elements.length-1;  i> 0 ; i--) {
var kuku=page.indexOf(elements[i].href) ;

if (kuku >= 0 ) break ; }
elements[i].className='current';

 var objli=elements[i].parentNode.parentNode ;
if  (objli.id=="tafrit1")
{
elements[i].parentNode.className='current';
return
}

document.getElementById("side").innerHTML=objli.innerHTML ;
objli.parentNode.className = 'current';
}



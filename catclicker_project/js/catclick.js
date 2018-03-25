

/*
this is jquery but i cannot produce the function by this one
$('#clicks').click(function(){
	alert( "Handler for .click() called." );
	var numclick = i;
	var i = i + 1 ;
	console.log(numclick);
	$('.text').append (String(i));
});

*/

var catsdata = [
{
   "name" :  "Catname : loading95%",
   "HTMLname" :  "#catname1",
   "url" : "images/loading95%meme.jpg",
   "HTMLurl" : "#cat1pic",
   "num" : countUpValue,
   "HTMLnum" : "#clicks",


},

{
   "name" :  "lunchmeme",
   "url" : "images/lunchmeme.jpg",
   "num" : countUpValue2,
},
{
	"name" :  "flexible",
	"url" : "images/I-am-totally-flexible-Funny-Cat-memes.jpg",
	"num" : countUpValue	,
},
];

// I will use for loop and iterate over the catsdata

// loading cat 1 
$(catsdata[0].HTMLname).append(catsdata[0].name
);
$(catsdata[0].HTMLurl).attr("src",catsdata[0].url);

$(catsdata[0].HTMLnum).append(catsdata[0].num	
);

// loading cat 2
$("#catname2").append(catsdata[1].name
);
$("#cat2pic").attr("src",catsdata[1].url);

$("#clicks2").append(catsdata[1].num	
);

$("#catname3").append(catsdata[2].name
);
$("#cat3pic").attr("src",catsdata[2].url);

$("#clicks3").append(catsdata[2].num	
);



/*
for (var i = 0; i <= catsdata.length; i++){
	var countUpValue = 0;
	var elem = document.getElementById('clicks');

}
*/


// I will iterate over the data using for loop


var countUpValue = 0;
var elem = document.getElementById('clicks');

elem.addEventListener('click', function(elem){
	
	countUp();
	
	//カウントアップする関数 countUp の定義
	function countUp(){
		var div = document.getElementById("num");  
	    countUpValue++;

	    // console.log(countUpValue);
	    div.textContent = countUpValue;
	}

}, false);


var countUpValue2 = 0;
var elem2 = document.getElementById('clicks2');

elem2.addEventListener('click', function(elem2){
	
	countUp();
	
	//カウントアップする関数 countUp の定義
	function countUp(){
		var div = document.getElementById("num2");  
	    countUpValue2++;

	    // console.log(countUpValue);
	    div.textContent = countUpValue2;
	}

}, false);


// define Paren constructer 
var Person= function(obj){
	this.obj = obj;
};

// Add 1 method to Person.prototype
Person.prototype.count = function(){
	alert ('Personis called, man');
};

// Define Student constructer
function Student(obj){
	Person.call(this, obj);
};

// Inherit Person.prototype. Start by calling Student
Student.prototype = Object.create(Person.prototype);

// Difine that constructoer property refers to Student
Student.prototype.constructor = Student;

/*
Example how to call new instance and use function

var Student1 = new Student('Kohki');
Student1.count();
*/

function loadJSON1(callback) {   	//this function takes data 
    var xobj = new XMLHttpRequest();          //XMLHttpRequest API provides functionality for transferring data between a client and a server. It allows an easy way to retrieve data from a URL without having to do a full page refresh. we assign it to variable so we can use it.
    xobj.overrideMimeType("application/json"); //overrideMimeType() specifies a MIME type other than the one provided by the server to be used.
    xobj.open('GET', 'data1.json', true);       //this gets data from our data1.json
    xobj.onreadystatechange = function () {  //onreadystatechange property defines a function to be executed when the readyState changes.
      if (xobj.readyState == 4 && xobj.status == "200") { //The readyState property holds the status of the XMLHttpRequest. status property returns the numerical HTTP status code of the XMLHttpRequest 's response. Before the request completes, the value of status is 0.
        callback(xobj.responseText); //A callback's primary purpose is to execute code in response to an event.
      }
    };
    xobj.send(null);  //method send() sends the request to the server.
  }

  function loadJSON2(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data2.json', true);     //this function gets data from our data2.json
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }

  function loadJSON3(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data3.json', true);    //this function gets data from our data3.json
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }

function tableBuilder(product)
{
	var beks=""; // variable beks will be our table
	beks="<table border width=80%><tr><td>Place</td><td>Name</td><td>Surname</td><td>Game_id</td><td>Gender</td></tr>" //here we make head of our table
		for(let i=0; i<product.length;i++){ // we are using loop to go through whole table. We are taking each data from json data and we are putting it into our table
			beks+= `
				<tr>
					<td>${product[i].place}</td> 
					<td>${product[i].first_name}</td>
					<td>${product[i].last_name}</td>
					<td>${product[i].game_id}</td>
					<td>${product[i].gender}</td>
				</tr>
			`;
		}
		
	beks+="</table>" // we end our table here
	document.getElementById("demo").innerHTML=beks; // we need to get this HTML element to perform action on it. Otherwise it will not show os site.

}

function buildChart(data) { //we are making function to bulid chart
	var genderCounts = {}; //we need to make a list so we can put counted genders here
	data.forEach(function(row) { //The forEach() method calls a function for each element in an array.
	  var gender = row.gender; // we assign gender from our json data to variable gender
	  if (!genderCounts[gender]) {     //{
		genderCounts[gender] = 0;  //{
	  }                                //{ this function goes through wholse json data. It creates new gender if it sees that we dont have it yet, and when it gets gender that we have already it raises its count by 1
	  genderCounts[gender]++;          //{
	});                                //{
	
	var labels = [];  // we make list of labels that will be used in creating our chart 
	var chartData = [];  // we make a list that will display hom many people are of this gender 
	for (var gender in genderCounts) { // we use the loop to go through every thing that we have in genderCounts
	  labels.push(gender); // we add labels to our labels list
	  chartData.push(genderCounts[gender]); // we add how many ppl are of the chosen gender to our chart 
	}
	
	new Chart(document.getElementById("pieChart"), { // we create new chart here and we name it
	  type: 'pie', // we chose what type of chart it is
	  data: { // here we have data that we need to have to display chart
		labels: labels, //we use our previously prepared variable to use in here to create labels
		datasets: [{ // same function as data, just more specified
		  label: 'Gender', //this function displays what text we want to see when we hoover mouse above the specified chart
		  data: chartData, // here we add our previous variable to display how many people are in this gender
		  backgroundColor: [ // we choose what color we want our labels to be
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',  
			'rgba(153, 102, 255, 0.2)',
			'rgba(25, 159, 64, 0.2)',
			'rgba(20, 10, 13, 0.2)'
		  
		  ],
		  
		  borderWidth: 1 //border-width property sets the width of an element's four borders
		}]
	  },
	  options: { // here we have bonus options that we can use in our chart
		  responsive: true, // Resizes the chart canvas when its container does
          maintainAspectRatio: true // Maintain the original canvas aspect ratio (width / height) when resizing.
	  }
	});
  }



  

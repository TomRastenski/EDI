function loadJSON1(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data1.json', true); 
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }

  function loadJSON2(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data2.json', true); 
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
    xobj.open('GET', 'data3.json', true); 
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }

function tableBuilder(product)
{
	var beks="";
	beks="<table border width=80%><tr><td>Place</td><td>Name</td><td>Surname</td><td>Game_id</td><td>Gender</td></tr>"
		for(let i=0; i<product.length;i++){
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
		
	beks+="</table>"
	document.getElementById("demo").innerHTML=beks;

}

function buildChart(data) {
	var genderCounts = {};
	data.forEach(function(row) {
	  var gender = row.gender;
	  if (!genderCounts[gender]) {
		genderCounts[gender] = 0;
	  }
	  genderCounts[gender]++;
	});
	
	var labels = [];
	var chartData = [];
	for (var gender in genderCounts) {
	  labels.push(gender);
	  chartData.push(genderCounts[gender]);
	}
	
	new Chart(document.getElementById("pieChart"), {
	  type: 'pie',
	  data: {
		labels: labels,
		datasets: [{
		  label: 'Gender',
		  data: chartData,
		  backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(25, 159, 64, 0.2)',
			'rgba(20, 10, 13, 0.2)'
		  
		  ],
		  
		  borderWidth: 1
		}]
	  },
	  options: {
		  responsive: true,
          maintainAspectRatio: true
	  }
	});
  }




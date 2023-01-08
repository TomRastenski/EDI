anychart.onDocumentReady(function() {

    
    var data = [
        {x: "Female", value: 51},
        {x: "Male", value: 37},
        {x: "other", value: 12},
    ];
  
    
    var chart = anychart.pie();
  
    
    chart.title("Gender of players");
  
    
    chart.data(data);
    
    
    chart.sort("desc");  
    
    
    chart.legend().position("right");
    
    chart.legend().itemsLayout("vertical");  
  
    
    chart.container('container');
    chart.draw();
  
  });
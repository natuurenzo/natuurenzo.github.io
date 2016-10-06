var db;

$('#button1').click(function (){
  
  db = openDatabase("Motorola", "1.0", "Moto Mobile Database", "200000");
  
  alert("database was created");
  
});

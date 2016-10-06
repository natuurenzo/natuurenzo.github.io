var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var country = document.getElementById("country");
localStorage.setItem("Firstname",fname.value);
localStorage.setItem("Lastname",lname.value);
localStorage.setItem("Country",country.value);

for(var i = 0; i < localStorage.key(); i++){
  document.write('<table class="table table-bordered table-striped table-hover table-condensed"><thead><tr><th>'+localStorage.key(1)+"</th><th>"+localStorage.key(2)+"</th>"+localStorage.key(0)+"</th></thead>");
}

var rowCount = 7;
var rowOutput = "";
   
//problemi ifade edecek olursak her satýr için bir önceki satýra # ekleyerek console’a yazdýrýyoruz ve satýr sayýsý boyunca dönüyoruz. 
  for(var i=1;i<=rowCount;i++) {
      rowOutput = rowOutput +  "*";          //c#’daki += shorthand kullanýlabilir.
	  document.write(rowOutput + "<br>")
        }     
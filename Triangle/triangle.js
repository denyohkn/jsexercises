var rowCount = 7;
var rowOutput = "";
   
//problemi ifade edecek olursak her sat�r i�in bir �nceki sat�ra # ekleyerek console�a yazd�r�yoruz ve sat�r say�s� boyunca d�n�yoruz. 
  for(var i=1;i<=rowCount;i++) {
      rowOutput = rowOutput +  "*";          //c#�daki += shorthand kullan�labilir.
	  document.write(rowOutput + "<br>")
        }     
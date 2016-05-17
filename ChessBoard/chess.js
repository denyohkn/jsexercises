for( var x = 1; x < 9; x++)
{
    for(y = 1; y < 9; y++)
	{
		var total = x + y;
		var resultMod = total % 2 ;
		
        if(resultMod ==0 )
		{
            document.write  ("A");
        }else
		{
            document.write  ("B");
        }
	}	
	document.write("<br>");
}
﻿function writeFizzBuzz()
{
	for(var i = 1; i<= 100; i++)
	{
		if(i%3 == 0)
		{
			document.writeln("Fizz" + "<br>");
		}
		else if(i%5 == 0)
		{
			document.writeln("Buzz" + "<br>");
		}
		else
		{
			document.writeln(i + "<br>");
		}
	}
};

writeFizzBuzz();
function getColor(selection)
{
	switch(selection){
        // Add more options here
        case 0:
            colorname = red;
            break;
        case 1:
            colorname = green;
            break;
        case 2:
            colorname = blue;
            break;
	    default:
	    	return true;  //returns false because the user picked an unavailable color             
	}
}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else (false)
	console.log('We are sorry, that color is not available');

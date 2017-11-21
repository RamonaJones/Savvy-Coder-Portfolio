var listItems = document.querySelectorAll( "li" );
var generateEvenListItems = function generateEvenListItems(){
    var evens = document.querySelector( "#evens" );
    var listItemString = "";

    for( var i = 1; i <= 10; i++ ){
        listItemString += "<li>";
        listItemString += i * 2;
        listItemString += "</li>";
    }
    evens.innerHTML = listItemString;
};

var fizzBuzzResult = "";
var fizzy = function( num ){
    if( num % 5 === 0 && num % 3 === 0 ){
        fizzBuzzResult += ", FizzBuzz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += " , Buzz";
    }
 	else if( num % 3 === 0 ){
        fizzBuzzResult += ", Fizz";
    }
    else if( num === 1 ){
        fizzBuzzResult += num;
    }
    else{
        fizzBuzzResult += ", " + num;
    }
};

var fizzBuzzLightYears = function fizzBuzzLightYears( limit ){
    for( var i = 1; i <= limit; i++ ){
        fizzy( i );
    }
};

fizzBuzzLightYears( 50 );

var makeListItems = function makeListItems(){};

for( var i = 0; i < listItems.length; i++ ){
    listItems[i].textContent = i + 1;
}

document
    .querySelector( "#fizzbuzz" )
    .textContent = fizzBuzzResult;
document.querySelectorAll( "li" );

generateEvenListItems();

// while( i <= 100 ){
//    fizzy( i );
//    i++;
// }

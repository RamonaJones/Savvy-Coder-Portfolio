var hello = "hello";

/* eslint-disable no-console */
var originalName = prompt( "what's your name?" );
var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "Stop playing and type your real name please." );
        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};

checkUserName( originalName );

var node = document.querySelector( "h1" ).textContent = "Hello, " + originalName + ". Welcome To My World";

alert( node );

document
  .querySelector( "#subheader" );
  .outerHTML = "<h3>Hello, " + originalName + "</h3>;"

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

var node = document.querySelector( "h1" ).textConotent = "Hello," + originalName;

alert( node );

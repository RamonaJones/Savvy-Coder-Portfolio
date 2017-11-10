var hello = "hello";

/* eslint-disable no-console */
var userName = prompt( "what's your name?" );
var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "Stop playing and type your real name please." );
        checkUserName();
    }
};

checkUserName();

alert( hello + " " + userName );

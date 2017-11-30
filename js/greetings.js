$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h3> " + value + "</h3>" );
    }
);
$( ".ExtraPink" ).on( "mouseenter", ( event ) => {
    $( event.target ).css( "background-color", "yellow" );
} );

$( ".ExtraPink" ).on( "mouseleave", ( event ) => {
    $( event.target ).css( "background-color", "transparent" );
} );

$( "img" ).on( "dblclick", ( event ) => console.log( event.target.textContent = "You've been clicked" ) );

// /* eslint-disable no-console */
// var originalName = prompt( "what's your name?" );
// var checkUserName = function checkUserName( userName ){
//     if( !userName || userName === " " ){
//         userName = prompt( "Stop playing and type your real name please." );
//         checkUserName( userName );
//     }
//     else{
//         originalName = userName;
//     }
// };
//
// checkUserName( originalName );
//
// var node = document.querySelector( "h1" ).textContent = "Hello, " + originalName + ". Welcome To My World";
//
// alert( node );
//
// document
//   .querySelector( "#subheader" );
//   .outerHTML = "<h3>Hello, " + originalName + "</h3>;"

$( "img" ).on( "dblclick", ( event ) => console.log( event.target.textContent = "You've been clicked" ) );

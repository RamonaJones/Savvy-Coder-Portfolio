/* globals $ */
var $output = $( "#output" );
var $subtitle = $( "<h2>I'm a subtitle</h2>" );

$output
    .html( "<h1>hello, world</h1>" )
    .css( {
        "color": "Red",
        "font-size": "200%",
        "margin-left": "200px"
    } )
    .append( "<h2>I'm a subtitle</h2>" )
    .fadeOut( 3000 )
    .fadeIn( )
    .animate( {
        "margin-top": "200%"
    }, {
        "duration": "5000",
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color", "hotpink" );
        }
    } );

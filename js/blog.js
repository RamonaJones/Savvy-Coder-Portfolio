var postsRequests = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( ".content" );

postsRequests
    .then(
        ( posts ) => posts
            .map(
                ( post ) => "<p>" + post.title + "</p>"
            )
            .forEach(
                ( title ) => $content.append( title )
            )
    )
    .catch(
        ( ) => $content.text( "There was an error" )
    );

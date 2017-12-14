/* eslint-disable no-use-before-define */
/* globals $ */
// var runStory = function runStory( branch ){
//     var chapter = story[branch];
//     var choices = chapter.choices
//     var choice = prompt( story[branch].text );
var story = {
    "start": {
        "text": "Hello, I’m Ramona Jones. What’s keeping me busy these days? I’m glad you asked.  <br>Type <b>Personal</b> to learn about my hobbies, or <br>Type <b>Business</b> to see what I’m learning. (Note: Your entry is case sensitive.)",
        "choices": [ "Personal", "Business" ]
    },

    "Personal": {
        "text": "<h2>My Personal Dimension</h2>I'm a self-published author of two books. Writing helps me to create meaning and better understand life in ways that inspire others. Want to learn more? <br>Type <b>Author</b> to see my books, or <br>Type <b>Speaker</b> to watch a short YouTube video.<p>Click<b> Restart</b> to make another selection.",
        "choices": [ "Author", "Speaker" ],
    },
    "Author": {
        "text": "<h2>My Personal Dimension: Author</h2><img src='./web-images/mybooks.JPG' alt='Books From Tongue To Ear To Heart So Says the Wise and Your Legacy Voice The Prelude To Your Breakthrough' width='453' height'320'><p>I hope you enjoyed learning about me as an author. Join my mailing list above, and I’ll send you an invite to my virtual Blog Launch Party.</p><p>Click  <b>Restart</b> to make another selection.</p>",
    },
    "Speaker": {
        "text": "<h2>My Personal Dimension: Speaker</h2>I hope my video inspires you to write. I'm happy to discuss your next steps. <p><iframe width='640' height='360' src='https://www.youtube.com/embed/M5jIHLIMXhQ#t=7m35s' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe></p><p>Click<b>Restart</b> to make another selection.",
    }  ,
    "Business": {
        "text": "<h2>My Business Dimension</h2><ol align=left><li><b>Learning</b> is one of my top five strengths. I'm driven by my need to know. </li><li><b>Developing</b> useful products, services and experiences is my passion. <ul> <li>Web Page Development and Graphic Design</li><li>User-Centered Design, UX</li><li>Technical Writing and Instructional Design </li></ul></ol><p align=left>If you are a great company in need of a life-long learner with front-end Web development, interpersonal communications, and project coordination skills, then let's talk.</p><p>Click<b> Restart</b> to make another selection.",
    }

};

var $choice = $( "#choice" );


function validateChoice( choice, choices ){
    var isValidChoice = choice.isValidChoice;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
        }
    }

    return isValidChoice;
}


function runStory( branch ){
    var chapter = story[branch];

    $choice.on( "keyup", ( event ) => {
        var userInput = $( event.target ).val();

        if( validateChoice( userInput, chapter.choices ) ){
            // $choice.off( "keyup" );//
            $choice.val( "" );
            runStory( userInput );
        }
    } );
    document
        .querySelector( "#textOutput" )
        .innerHTML = chapter.text;
}

runStory( "start" );

$( ".button" ).on( "click", () => runStory( "start" ) );
// var runStory = function runStory( branch ){
//     var chapter = story[branch];
//     var choices = chapter.choices
//     var choice = prompt( story[branch].text );
//
//     if( choices === choices[0] ){
//         choice = prompt( story[choices].text );
//
//         if( choice === chapter.choices ){
//             document
//                 .querySelector( "#output" )
//                 .textContent = story[choice].text;
//         }
//         else if( choice === chaptter.choices ){
//             document
//                 .querySelector( "#output" )
//                 .textContent = story[choice].text;
//         }
//     }
//     else if( choice === chaptter.choices ){
//         document
//             .querySelector( "#output" )
//             .textContent = story[branch].text;
//     }
//     else{
//         runStory( choices [0])        alert( "You did not enter a valid choice. Please try again." );
//         prompt( story[choice].text );

//     }
// };

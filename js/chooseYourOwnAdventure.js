/* eslint-disable no-use-before-define */
/* globals $ */
// var runStory = function runStory( branch ){
//     var chapter = story[branch];
//     var choices = chapter.choices
//     var choice = prompt( story[branch].text );
var story = {
    "start": {
        "text": "Are you most interested in learning about Ramona as a person or the tech skills she brings to the table? <br>Type <b>Personal</b> to check out my hobbies, or <br>Type <b>Business</b> to learn about my experience and skillset.",
        "choices": [ "Personal", "Business" ]
    },

    "Personal": {
        "text": "I'm a self-published author of two books. Writing helps me to create meaning and better understand life. I find journaling creative and healing. I enjoy helping people to learn and encouraging them to win at being their best. Want to learn more? <br>Type <b>Author</b> to see my books, or <br>Type <b>Speaker</b> to watch a short YouTube video.",
        "choices": [ "Author", "Speaker" ],
    },
    "Author": {
        "text": "I hope you enjoy learning about me as an author. You can purchase my books on Amazon. My Blog in the works.",
    },
    "Speaker": {
        "text": "I hope my video inspires you to write. I'm happy to discuss your next steps.",
    }  ,
    "Business": {
        "text": "Learning is one of my top five strengths. I'm driven by my need to know. I have experience in multimedia development, technical writing, Web page development and graphic design. I'm also passionate about user-centered design. I'm currently pursuing UX development as a member of Interaction Design Foundation. If you are a great company in need of a life-long with front-end Web development, communications, and project coordination skills, than let's talk.",
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
        console.log("event");
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

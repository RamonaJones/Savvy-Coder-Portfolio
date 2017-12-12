/* eslint-disable no-use-before-define */
// var runStory = function runStory( branch ){
//     var chapter = story[branch];
//     var choices = chapter.choices
//     var choice = prompt( story[branch].text );
var story = {
    "start": {
        "text": "Are you most interested in learning about Ramona as a person or the tech skills she brings to the table? Type Personal to check out my hobbies. Type Business to learn about my experience and skillset.",
        "choices": [ "Personal", "Business" ]
    },

    "Personal": {
        "text": "I'm a self-published author of two books. Writing helps me to create meaning and better understand life. I find journaling creative and healing. I enjoy helping people to learn and encouraging them to win at being their best. To learn more about me, type Author to see my books or type Speaker to watch a short YouTube video.",
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


var myForm = document.getElementById( "frmChoice" );

myForm.addEventListener( "btnclick", validateChoice, false );

function validateChoice( choice, choices ){
    var isValidChoice = choice.isValidChoice;

    for( let i = 0; i < choices.length; i++ ){
        if( choice === choices[i] ){
            isValidChoice = true;
            choice.preventDefault();
            choices.preventDefault();
        }
    }

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    // var choice = prompt( chapter.text );
    var choice = $( "#txtOutput" ).text( chapter.text );

    if( validateChoice( choice, chapter.choices ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        var choice = txtOutput.value;

        document
            .querySelector( "#txtOutput" )
            .textContent = chapter.text;
        choice.preventDefault();
    }
}

runStory( "start" );


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

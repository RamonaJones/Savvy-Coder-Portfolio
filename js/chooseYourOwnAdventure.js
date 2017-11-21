var story = {
    "start": {
        "text": "All the puppies in town are missing. The police are stumpted. I'm the lead detective, but I need your help. Will you accept the mission? Yes or No.",
        "choices": [ "No", "Yes" ]
    },

    "Yes": {
        "text": "Thank you! I'm so glad that you are taking the lead on this investigation. We can use your skills. Where will you begin? Investigate or Think?",
        "choices": [ "Investigate", "Think" ],
    },
    "Investigate": {
        "text": "Here are the three people to speak with - Debbie, Mike, and Sandy.",
    },
    "Think": {
        "text": "Sit in your special chair.",
    }  ,
    "No": {
        "text": "What? You are turning down a major crime busting opportunity. The children of St. Louis need you. Don't let them down. Call me at 314-555-5555 if you reconsider.",
    }
};


var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var choice;
    var isValidChoice = false;
    var choice;

    if( choices ){
        choice = prompt( chapter.text );
        for( var i = 0; i < choices.length; i++ ){
            if( choice === choices[i] ){
                isValidChoice = true;
            }
        }
        if( isValidChoice ){
            runStory( choice );
        }
        else{
            runStory( branch );
        }
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
};


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

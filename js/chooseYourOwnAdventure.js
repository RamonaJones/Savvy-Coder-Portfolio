var story = {
    "start": "All the puppies in town are missing. The police are stumpted. I'm the lead detective, but I need your help. Will you accept the mission? Yes or No.",
    "No": "What? You are turning down a major crime busting opportunity. The children of St. Louis need you. Don't let them down. Call me at 314-555-5555 if you reconsider.",
    "Yes": "Thank you! I'm so glad that you are taking the lead on this investigation. We can use your skills. Where will you begin? Investigate or Think?"
    "Investigate": "Here are the three people to speak with - Debbie, Mike, and Sandy.",
    "Think": "Sit in your special chair."
};

var runStory = function runStory(){
    var choice = prompt( story.start );

    if( choice === "Yes" ){
      choice = prompt( story[choice] );

    if( choice === "Investigate" ){
      document
          .querySelector( "#output" )
          .textContent = story.No;
        }
      else if( choice ==="Think"){
        document
            .querySelector( "#output" )
            .textContent = story.No;
      }
  
    }
    else if( choice === "No" ){
        document
            .querySelector( "#output" )
            .textContent = story.No;
    }
    else{
        alert( "You did not enter a valid choice. Please try again." );
        prompt( story.start );
    }
};

runStory();

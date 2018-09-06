let slackMessage = "";
let pointType = "";
let participantPoints = 0;
let totalParticipantPoints = 0;
let totalBonuslyPoints = 1050;

let whoNeedsPoints = [];

let participants = [

  {
    name: 'dave',
    maxPointsToGive: 150,
    bonuslyPoints: "",

  },

  {
    name: 'dorian',
    maxPointsToGive: 150,
    bonuslyPoints: "",
  },

  {
    name: 'hung',
    maxPointsToGive: 150,
    bonuslyPoints: "",

  },

  {
    name: 'justin',
    maxPointsToGive: 150,
    bonuslyPoints: "",
  },

  {
    name: 'nate',
    maxPointsToGive: 150,
    bonuslyPoints: "",
  },

  {
    name: 'artem',
    maxPointsToGive: 150,
    bonuslyPoints: "",
  },

  {
    name: 'michelle',
    maxPointsToGive: 150,
    bonuslyPoints: "",

  },
];

let dirtyParticipants = [];



function myFunction(inputId) {
  let inputValue = document.getElementById(inputId).value;
  participantPoints = parseInt(inputValue);

  // THIS FUNCTION IS CALLED INSIDE MYFUNCTION AND WILL UPDATE THE TOTALPARTICIPANTSPOINTS VARIABLE
  getInputValues();
}

function getInputValues() {
  let totalInputValues = 0;
  let artemPoints = document.getElementById('artem').value;
  let davePoints = document.getElementById('dave').value;
  let dorianPoints = document.getElementById('dorian').value;
  let hungPoints = document.getElementById('hung').value;
  let justinPoints = document.getElementById('justin').value;
  let michellePoints = document.getElementById('michelle').value;
  let natePoints = document.getElementById('nate').value;
  // console.log(parseInt(artemPoints), davePoints, dorianPoints, hungPoints, justinPoints, michellePoints, natePoints);

  if (artemPoints === "") {
    artemPoints = 0;
  }
  if (davePoints === "") {
    davePoints = 0;
  }
  if (dorianPoints === "") {
    dorianPoints = 0;
  }
  if (hungPoints === "") {
    hungPoints = 0;
  }
  if (justinPoints === "") {
    justinPoints = 0;
  }
  if (michellePoints === "") {
    michellePoints = 0;
  }
  if (natePoints === "") {
    natePoints = 0;
  }

  totalInputValues = parseInt(artemPoints) + parseInt(davePoints) + parseInt(dorianPoints) + parseInt(hungPoints) + parseInt(justinPoints) +
    parseInt(michellePoints) + parseInt(natePoints)
  // console.log(totalInputValues);

  totalParticipantPoints = totalInputValues;
  document.getElementById('total-points').innerHTML = totalParticipantPoints

  // The following statements give me a percentage instead of decimal as well as returning a 0 instead of NAN if calculate button is clicked without numbers entered.

  // NATE
  let percentagePoints = natePoints / totalParticipantPoints;
  let nateBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(nateBonuslyPoints);
  participants[4].bonuslyPoints = nateBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('nate-percentage').innerHTML = percentagePoints;

  // ARTEM
  percentagePoints = artemPoints / totalParticipantPoints;
  let artemBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(artemBonuslyPoints);
  participants[5].bonuslyPoints = artemBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('artem-percentage').innerHTML = percentagePoints;


  // MICHELLE
  percentagePoints = michellePoints / totalParticipantPoints;
  let michelleBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(michelleBonuslyPoints);
  participants[6].bonuslyPoints = michelleBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('michelle-percentage').innerHTML = percentagePoints;

  // JUSTIN
  percentagePoints = justinPoints / totalParticipantPoints;
  let justinBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(justinBonuslyPoints);
  participants[3].bonuslyPoints = justinBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('justin-percentage').innerHTML = percentagePoints;

  // HUNG  
  percentagePoints = hungPoints / totalParticipantPoints;
  let hungBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(hungBonuslyPoints);
  participants[2].bonuslyPoints = hungBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('hung-percentage').innerHTML = percentagePoints;

  // DORIAN  
  percentagePoints = dorianPoints / totalParticipantPoints;
  let dorianBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(dorianBonuslyPoints);
  participants[1].bonuslyPoints = dorianBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('dorian-percentage').innerHTML = percentagePoints;

  // DAVE
  percentagePoints = davePoints / totalParticipantPoints;
  let daveBonuslyPoints = Math.round(percentagePoints * totalBonuslyPoints);
  console.log(daveBonuslyPoints);
  participants[0].bonuslyPoints = daveBonuslyPoints;

  if (percentagePoints !== true) {
    percentagePoints = Math.floor(percentagePoints * 100);
  } else {
    percentagePoints = 0;
  }
  document.getElementById('dave-percentage').innerHTML = percentagePoints;
  // console.log("end of big function");
  buildswhoNeedsPointsArray();
  // dirtyParticipants = participants.slice(0)
};


function buildswhoNeedsPointsArray() {
// debugger
  for (i = 0; i < participants.length; i++) {
    if (participants[i].bonuslyPoints > 0) {
      whoNeedsPoints.unshift(participants[i].name)
    };
  };
 console.log(whoNeedsPoints)
  // printShortCodeWellness();
}

function printShortCodeWellness(category) {

    if (category === "Wellness")  {
    document.getElementById("wellness-button").classList.add("green");
    document.getElementById("training-button").classList.remove("green"); 
    } else {
      document.getElementById("training-button").classList.add("green");
      document.getElementById("wellness-button").classList.remove("green");
    };

    for (i = 0; i < whoNeedsPoints.length; i++) {
     
      // debugger;
      for (x = 0; x < participants.length; x++) {
        if (whoNeedsPoints[i] != participants[x].name && participants[x].maxPointsToGive === 150) {
          for (y = 0; y < participants.length; y++) {
            if (whoNeedsPoints[i] === participants[y].name && participants[y].bonuslyPoints >= 150) {
              let pointsGiven = 0;
              pointsGiven = participants[x].maxPointsToGive;
              participants[y].bonuslyPoints -= pointsGiven;
              participants[x].maxPointsToGive -= pointsGiven;
              totalBonuslyPoints -= pointsGiven;
              document.getElementById('slack-box').innerHTML += `${participants[x].name} gives points to ${participants[y].name} /give +150 @${participants[y].name} Good job on ${category}! #${category} <br/>`
              console.log("total bonusly points " + totalBonuslyPoints)
             
            } 
              
          }
        }
      }
    }
    printShortCodeWellness2(category);
  }






function printShortCodeWellness2(category) {

  if (category === "Wellness")  {
  document.getElementById("wellness-button").classList.add("green");
  document.getElementById("training-button").classList.remove("green"); 
  } else {
    document.getElementById("training-button").classList.add("green");
    document.getElementById("wellness-button").classList.remove("green");
  };
    for (i = 0; i < whoNeedsPoints.length; i++) {
      // debugger;
      if (totalBonuslyPoints > 0) {
        for (x = 0; x < participants.length; x++) {
          if (whoNeedsPoints[i] != participants[x].name && participants[x].maxPointsToGive > 0) {
            for (y = 0; y < participants.length; y++) {
              if (whoNeedsPoints[i] === participants[y].name && participants[y].bonuslyPoints > 0) {
                let pointsGiven = 0;
                // debugger;
                if (participants[x].maxPointsToGive <= participants[y].bonuslyPoints) {
                  pointsGiven = participants[x].maxPointsToGive;
                  participants[x].maxPointsToGive -= pointsGiven;
                  participants[y].bonuslyPoints -= pointsGiven;
                  totalBonuslyPoints -= pointsGiven;
                } else {
                  pointsGiven = participants[y].bonuslyPoints;
                  participants[x].maxPointsToGive -= pointsGiven;
                  participants[y].bonuslyPoints -= pointsGiven;
                  totalBonuslyPoints -= pointsGiven;
                }
                document.getElementById('slack-box').innerHTML += `${participants[x].name} gives points to ${whoNeedsPoints[i]} /give +${pointsGiven} @${whoNeedsPoints[i]} Good job on ${category}! #${category} <br/>`
                
                console.log("total bonusly points " + totalBonuslyPoints)
              
              }
            }
          }
        } 
      }  
    } 
    slackMessage += document.getElementById('slack-box').innerText
    pointType = category
    sendSlack()
} 



function sendSlack() {
  fetch(`https://hooks.slack.com/services/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`, {
      mode: 'no-cors',
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json'},
    body: JSON.stringify({
      "attachments": [
          {
              "fallback": `The Bonusly Conversion Project: This month's points allocation for ${pointType}.`,
              "color": "#A344FF",
              "pretext": "Allocate Bonus.ly Points to your team with the click of a button!",
              // "author_name": "@Dorian",
              "author_icon": "./users_icon.png",
              "title": `Distributed Bonusly Points for ${pointType}`,
              "title_link": "https://api.slack.com/",
              "text": `_Be sure to include the */slash* when you copy over your points to give..._ \n${slackMessage}`,
            //   "mrkdwn_in": [
            //     "text",
            //     "pretext"
            // ],
              "fields": [
                  {
                      "title": "Priority",
                      "value": "High",
                      "short": false
                  }
              ],
              "image_url": "http://my-website.com/path/to/image.jpg",
              "thumb_url": "http://example.com/path/to/thumb.png",
              "footer": "The Bonusly Conversion Project",
              // "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
              
          }
      ]})
//     }).then((response) => console.log(response)).catch(error => console.log(error))
})}

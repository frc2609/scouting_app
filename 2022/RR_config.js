var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"scouter",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      
      "Match #":{
        "code":"matchNumber",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
      "Team #": {
        "code":"teamNumber",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Taxi": {
        "code":"taxi",
        "title": "Taxied?",
        "type":"bool"
      },
      "Low Goal": {
        "code":"autoLow",
        "title": "Low Goal",
        "type":"counter"
      },
      "Missed": {
        "code":"autoMiss",
        "title": "Missed",
        "type":"counter"
      },
      "High Goal": {
        "code":"autoHighGoal",
        "title": "High Goal",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "teleop": {
      "Low Goal": {
        "code":"teleLow",
        "title": "Low Goal",
        "type":"counter"
      },
      "Missed": {
        "code":"teleMiss",
        "title": "Missed",
        "type":"counter"
      },
      "High Goal": {
        "code":"teleHighGoal",
        "title": "High Goal",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Rung": {
        "code":"rung",
        "title": "Rung",
        "type":"radio",
        "choices":{
          "low":"Low<br>",
          "mid":"Mid<br>",
          "high":"High<br>",
          "traversal":"Traversal<br>",
          "fall":"Attempted but fell<br>",
          "none":"Not attempted"
        },
        "defaultValue":"none"
      },
      "If fell,<br>Last successful rung": {
        "code":"lastSuccessfulRung",
        "title": "If fell,<br>Last successful rung",
        "type":"radio",
        "choices":{
          "low":"Low<br>",
          "mid":"Mid<br>",
          "high":"High<br>",
          "traversal":"Traversal<br>",
          "fall":"No successful rung<br>",
          "none":"n/a"
        },
        "defaultValue":"none"
      },
      "Early Climb": {
        "code":"earlyClimb",
        "title": "Started climb before EndGame",
        "type":"bool"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code":"driverSkill",
        "title": "Driver Skill",
        "type":"radio",
        "choices":{
          "0":"Not Observed<br>",
          "1":"Not Effective<br>",
          "2":"Average<br>",
          "3":"Very Effective"
        },
        "defaultValue":"0"
      },
      "Shooting Skill": {
        "code":"shootingSkill",
        "title": "Shooting Skill",
        "type":"radio",
        "choices":{
          "0":"Not Observed<br>",
          "1":"Not Effective<br>",
          "2":"Average<br>",
          "3":"Very Effective"
        },
        "defaultValue":"0"
      },
      "Climbing Skill": {
        "code":"climbingSkill",
        "title": "Climbing Skill",
        "type":"radio",
        "choices":{
          "0":"Not Observed<br>",
          "1":"Not Effective<br>",
          "2":"Average<br>",
          "3":"Very Effective"
        },
        "defaultValue":"0"
      },
      "Defense Rating": {
        "code":"defenseRating",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "0":"Not Observed<br>",
          "1":"Not Effective<br>",
          "2":"Average<br>",
          "3":"Very Effective"
        },
        "defaultValue":"0"
      },
      "Was Defended": {
        "code":"defended",
        "title": "Was Defended",
        "type":"bool"
      },
      "Died/Tipped": {
        "code":"died",
        "title": "Died/Tipped",
        "type":"bool"
      },
      "No Show": {
        "code":"noShow",
        "title": "No Show",
        "type":"bool"
      },
      "Make good alliance partner?": {
        "code":"goodPartner",
        "title": "Make good alliance partner?",
        "type":"bool"
      },
      "Comments": {
        "code":"comments",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":50
      }
    }
  }
}`;

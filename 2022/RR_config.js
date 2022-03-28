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
      "Upper Cargo Scored": {
        "code":"autoUp",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"autoLow",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code":"autoMiss",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"autoPickUp",
        "title": "Picked up more cargo?",
        "type":"bool"
      },
      "Auto Start Position": {
        "code":"autoStartPos",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"teleUp",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"teleLow",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Cargo Missed": {
        "code":"teleMiss",
        "title": "Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"defended",
        "title": "Was Defended",
        "type":"bool"
      },
      "Shooting Spot": {
        "code":"shootingSpots",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"climb",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "a":"Attempted but failed<br>",
          "x":"Not attempted"
        },
        "defaultValue":"x"
      },
      "If climb failed,<br>Last successful rung,<br>if any": {
        "code":"lastSuccessfulRung",
        "title": "If climb failed,<br>last successful rung,<br>if any",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "n":"No successful rung<br>",
          "x":"n/a"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
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
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Driver Comment": {
        "code":"driverComment",
        "title": "Driver Comment",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Shooting Skill": {
        "code":"shootingSkill",
        "title": "Shooting Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Shooter Comment": {
        "code":"shooterComment",
        "title": "Shooter Comment",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Climbing Skill": {
        "code":"climbingSkill",
        "title": "Climbing Skill",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Climbing Comment": {
        "code":"climbingComment",
        "title": "Climbing Comment",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Defense Rating": {
        "code":"defenseRating",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "n":"Not Effective<br>",
          "a":"Average<br>",
          "v":"Very Effective<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Defense Comment": {
        "code":"defenseComment",
        "title": "Defense Comment",
        "type":"text",
        "size":15,
        "maxSize":50
      },
      "Died/Tipped": {
        "code":"died",
        "title": "Died/Tipped",
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

var config_data = `
{
  "title":"Scouting PASS 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      }
    },
    "auton": {
      "Upper Cargo Scored": {
        "code":"au",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Auto Aquired Cargo": {
        "code":"ac",
        "title": "Picked up more cargo?",
        "type":"bool"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Wall shot": {
        "code":"wbt",
        "title": "Wall shot",
        "type":"bool"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "0":"Start<br>",
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      }
    },
    "postmatch": {
      "Died/Tipped": {
        "code":"d",
        "title": "Died/Tipped",
        "type":"bool"
      }
    }
  }
}`;

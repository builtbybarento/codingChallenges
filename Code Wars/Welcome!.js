// 8 kyu - Welcome!

// Description:
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// Please modify this as appropriate for your language.

// [ ("english", "Welcome")
// , ("czech", "Vitejte")
// , ("danish", "Velkomst")
// , ("dutch", "Welkom")
// , ("estonian", "Tere tulemast")
// , ("finnish", "Tervetuloa")
// , ("flemish", "Welgekomen")
// , ("french", "Bienvenue")
// , ("german", "Willkommen")
// , ("irish", "Failte")
// , ("italian", "Benvenuto")
// , ("latvian", "Gaidits")
// , ("lithuanian", "Laukiamas")
// , ("polish", "Witamy")
// , ("spanish", "Bienvenido")
// , ("swedish", "Valkommen")
// , ("welsh", "Croeso")
// ]
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
  // 	  const db = {
  //     "english": "Welcome",
  //     "czech": "Vitejte",
  //     "danish": "Velkomst",
  //     "dutch": "Welkom",
  //     "estonian": "Tere tuemast",
  //     "finnish": "Tervetula",
  //     "flemish": "Welgekomn",
  //     "french": "Bienvenue",
  //     "german": "Willkomme",
  //     "irish": "Failte",
  //     "italian": "Benvenut",
  //     "latvian": "Gaidits",
  //     "lithuanian": "Lauki",
  //     "polish": "Witamy",
  //     "spanish": "Bienveni",
  //     "swedish": "Valkommen",
  //     "welsh": "Croeso" 
  //   }
  //   if (db.hasOwnProperty(language)){
  //     return db[language]
  //   }
  //   return db["english"]
    
    
    const db = [ ["english", "Welcome"]
      , ["czech", "Vitejte"]
      , ["danish", "Velkomst"]
      , ["dutch", "Welkom"]
      , ["estonian", "Tere tulemast"]
      , ["finnish", "Tervetuloa"]
      , ["flemish", "Welgekomen"]
      , ["french", "Bienvenue"]
      , ["german", "Willkommen"]
      , ["irish", "Failte"]
      , ["italian", "Benvenuto"]
      , ["latvian", "Gaidits"]
      , ["lithuanian", "Laukiamas"]
      , ["polish", "Witamy"]
      , ["spanish", "Bienvenido"]
      , ["swedish", "Valkommen"]
      , ["welsh", "Croeso"]
    ]
    let database = new Map(db)
    if (database.has(language)){
      return database.get(language)
    }
    return database.get('english')
  }
  
  //input is a string  that is a language
  //output should be the corresponding greeting from the database, else english by default
  //ex greet('dutch') ===> 'Welkom'
  //const db is an array
  //check if language is in array
  //if so return it else english
  
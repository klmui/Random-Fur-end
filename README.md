# Random Fur-end
- By: Kenneth (Kenny) Mui
- Feel free to email me if you have any questions at klmui@wisc.edu
- Credits for the ASCII cats go to: https://www.asciiart.eu/animals/cats and corresponding designers

# Getting a random ASCII Cat
Make a GET request to this link: https://us-central1-random-fur-end.cloudfunctions.net/api

# Posting an ASCII cat
1. Design your ASCII cat

2. Go to https://regex101.com/ to enter 3 different regular expressions so Postman can send your ASCII cat
      
    * Change the flag in the "Regular Expression" field from "gm" to "g"  
      
    * Enter "\\\\" into the "Regular Expression" field

    * Paste your ASCII cat into the text field

    * Enter "\\\\\\" into the "Substitution" field

    * Copy the result

    * Erase the current regular expression and enter "\n"

    * Erase the current substitution and enter `<br>`

    * Paste your result into the text field

    * Copy the result
    
    * Erase the current regular expression and enter '"'
    
    * Erase the current substitution and enter '\\"'
    
    * Copy the result

3. Go to the Postman app and submit a POST request to https://us-central1-random-fur-end.cloudfunctions.net/api using a JSON format with "cat" as the key and the result as the value

# Technologies Used
- Firebase Functions
- Firestore
- Node.js
- Express.js
- Postman

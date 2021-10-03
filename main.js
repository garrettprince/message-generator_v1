//List of items that will be used in the message generator
const nounSingularList = ['cat', 'dog', 'chair', 'television', 'cow',
    'desk', 'lamp', 'duck', 'pasta', 'olive', 'garden',
    'breadstick', 'marinara', 'waiter', 'waitress',
    'rigitoni', 'cake', 'dissapointment',
    'spiderman', 'cloth', 'shoe'];

const verbPastTenseList = ['ran', 'swam', 'loved', 'climbed',
    'believed', 'troubled', 'hoped', 'skipped', 'brainwashed',
    'hugged', 'screwed', 'yelled', 'creeped', 'brewed', 
    'grunked', 'journaled', 'frowned', 'smiled'];

const adjectiveList = ['beatiful', 'ugly', 'greasy', 'huge', 'yellow',
    'warm', 'joyous', 'blue', 'frumpy', 'crusty', 'red', 'green',
    'poisonous', 'precious', 'bouyant', 'disgusting', 'purple',
    'busted', 'loyal', 'furry', 'Italian'];

//Function that will produce a random sentence using the strings nested in the arrays above
const getRandomSentence = () => {

    //create a random number cased on input arrays
    function getRandomNumber(array) {
        return Math.floor(Math.random() * array.length);
    }

    //creating variables to establish random entry in existing arrays
    let noun = nounSingularList[getRandomNumber(nounSingularList)];
    let verb = verbPastTenseList[getRandomNumber(verbPastTenseList)];
    let adjective = adjectiveList[getRandomNumber(adjectiveList)];

    //creating sentence to incorporate random strings from existing arrays
    let fullString = `Just the other day, my ${noun} ${verb}. It really made me see that ${adjective} ${noun} differently.`

    console.log(fullString); 

}

//calling function to present random sentence
getRandomSentence();
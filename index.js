function shout(aString) {
    return aString.toUpperCase();
}

function whisper(aString) {
    return aString.toLowerCase();
}

function logShout(aString) {
    console.log(`${aString.toUpperCase()}`)
}

function logWhisper(aString) {
    console.log(`${aString.toLowerCase()}`)
}


function caseDetector(aString) {
    if (aString === aString.toUpperCase()) {
        return 'upperCase';
    } else if (aString === aString.toLowerCase()) {
        return 'lowerCase';
    } else {
        return 'mixedCase';
    }

}

function sayHiToHeadphonedRoommate(aString) {
    let response = '';

    switch (caseDetector(aString)) {

        case 'upperCase': 
            response = 'YES INDEED!';
            break;

        case 'lowerCase':
            response = 'I can\'t hear you!';
            break;

        case 'mixedCase':
            response = "I would love to!";
            break;
        }

    return response;
}
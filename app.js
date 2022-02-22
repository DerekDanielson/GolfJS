const strokeResponse = ["Hole in One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Not Good", "Yikes!"];

//Generate two random numbers (strokes & par)


//Generate Score
function score(strokes, par) {
    if (strokes === 1) {
        return strokeResponse[0];    
    } else if (strokes <= par - 2) {
        return strokeResponse[1];
    } else if (strokes == par - 1) {
        return strokeResponse[2];
    } else if (strokes === par) {
        return strokeResponse[3];
    } else if (strokes == par + 1) {
        return strokeResponse[4];
    } else if (strokes == par + 2) {
        return strokeResponse[5];
    } else if (strokes == par + 3) {
        return strokeResponse[6];
    } else {
        return strokeResponse[7];
    }
}

//score(3, 2);
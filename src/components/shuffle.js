//  the Fisher-Yates (aka Knuth) Shuffle
// https://github.com/coolaj86/knuth-shuffle
function shuffle(props) {
    // reset shuffledArray array
    console.log("this.state.pokemon: ", props)
    const shuffledArray = props;
    // const numCards = 12;
    // for (var i = 0; i < numCards; i++) {
    //     shuffledArray.push(i);
    // }
    var randomIndex;
    var tempIndex;
    // go from 11-0; randomize current i; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        tempIndex = shuffledArray[i]; // copy current index to temp
        shuffledArray[i] = shuffledArray[randomIndex]; // copy random index to current index i in array
        shuffledArray[randomIndex] = tempIndex; // copy temp index to random index
    }
    console.log("Shuffled Array: ", shuffledArray);
    
    return shuffledArray;
}

export default shuffle;
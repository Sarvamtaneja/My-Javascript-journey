// allowa us to create a new array with the elements that fulfil a condition.

const songs = [
    {name: "Dreamin", singer: "PARTYNEXTDOOR", duration: 2.29},
    {name: "Sparks", singer: "Coldplay", duration: 3.49},
    {name: "Bin-Tere", singer: "Vishal Shekhar", duration: 4.48},
    {name: "Die for you", singer: "The Weekend", duration: 3.55}
]

console.log(songs.filter(song => song.duration >3));
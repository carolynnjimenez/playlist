
// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Dog Days are Over",
    "Pa'lante",
    "Soy Yo",
    "Why We Build the Wall"
];
// BELOW Add 4 More arrays to store image links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

var imageLinks = [
    "https://i.ytimg.com/vi/iWOyfLBYtuU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LilVDjLaZSE/maxresdefault.jpg",
    "https://i.ytimg.com/vi/bxWxXncl53U/maxresdefault.jpg",
    "https://i.ytimg.com/vi/hFyNCmDIABM/maxresdefault.jpg"
    ];
var artists = [
    "Florence + the Machine",
    "Hurray for the Riff Raff",
    "Bomba Estereo",
    "Anais Mitchell"
    ];
var songLengths = ["4:11", "5:53", "2:39", "3:35"];
var links = [
    "https://www.youtube.com/watch?v=iWOyfLBYtuU",
    "https://www.youtube.com/watch?v=LilVDjLaZSE",
    "https://www.youtube.com/watch?v=bxWxXncl53U",
    "https://www.youtube.com/watch?v=hFyNCmDIABM"
    ];

function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    artists.forEach(function(artist){
        $('#artists').append("<p>" + artist + "</p>");
    });
    
    imageLinks.forEach(function(image){
        $("#images").append("<img src=\"" + image + "\">")
    });
    
    songLengths.forEach(function(length){
        $("#lengths").append("<p>" + length + "</p>");
    });
    
    links.forEach(function(link){
        $("#links").append("<a href=\"" + link+ "\" > Listen </a>");
    });
}

function emptySongInfo(){
    $("#song").empty();
    // Use jQuery to empty all of the remaining divs
    $("#artist").empty();
    $("#image").empty();
    $("#length").empty();
    $("#link").empty();

}


function addSongInfo(){
    var songName = $("#song").val();
    var image = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#songLength").val();
    var link = $("#links").val();
    
    songs.push(songName);
    imageLinks.push(image);
    artists.push(artistName);
    lengths.push(songLength);
    links.push(link);
}

$("#add").click(function() {
    addSongInfo();
    displaySongInfo();
    emptySongInfo();
});

displaySongInfo();
/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Dark Red/ Ryd", "Hostage", "Self Control", "Barbie Tingz"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Steve Lacy", "Billie Ellish", "Frank Ocean", "Nicki Minaj"];
var songImages = ["https://consequenceofsound.files.wordpress.com/2017/02/steve-lacy-dark-red-solo-album-the-internet.png?w=807", 
    "https://cdn.baeblemusic.com/images/bblog/12-15-2017/f8e999aeblog_cropped-580.jpg", 
    "https://i.ytimg.com/vi/H_nVMUDCz0k/maxresdefault.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Barbie_Tingz.png/220px-Barbie_Tingz.png"];
var songLengths = ["608", "349", "409", "330"];
var songLinks = ["https://www.youtube.com/watch?v=x-OzspEcQG8", "https://www.youtube.com/watch?v=p9sUkJry_XA",
"https://www.youtube.com/watch?v=BME88lS6aVY", "https://www.youtube.com/watch?v=eppa0RXRU-I&list=RDeppa0RXRU-I&start_radio=1"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song){
        console.log(song);
       $("#songs").append("<p>"+song+"</p>"); 
        }
    );
    artists.forEach(function(art){
       $("#artists").append("<p>"+art+"</p>"); 
        }
    );
    songLengths.forEach(function(length){
       $("#lengths").append("<p>"+length+"</p>"); 
        } 
    );
    songLinks.forEach(function(link){
       $("#links").append("<a href=" + link+ ">" + "Listen!</a>");
        }
    );
    songImages.forEach(function(image){
       $("#images").append("<img src=" + image + ">");
        }
    );
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
     $("#artists").empty();
     $("#lengths").empty();
     $("#links").empty();
     $("#images").empty();
     
     
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var song = $("#song").val();
        songs.push(song);
    var artist = $("#artist").val();
        artists.push(artist);
    var songTime = $("#length").val();
        songLengths.push(songTime);
    var songPlace = $("#link").val();
        songLinks.push(songPlace);
    var songPic = $("#image").val();
        songImages.push(songPic);

}

$("#add").click(function() {
    console.log(1);
    emptySongInfo();
    addSongInfo();
    console.log(songs);
    displaySongInfo();
});

displaySongInfo();

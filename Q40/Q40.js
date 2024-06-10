"use strict";
// 40.	Album: Write a function called make_album() that builds a Object describing a music album. 
//      The function should take in an artist name and an album title, and it should return a Object 
//      containing these two pieces of information. 
//      Use the function to make three dictionaries representing different albums. 
//      Print each return value to show that Objects are storing the album information correctly. 
//      Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//      If the calling line includes a value for the number of tracks, 
//      add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle, tracks) {
    const album = {
        artistName: artistName,
        albumTitle: albumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return (album);
}
let a = make_album("Nazia Hussan", "Title1", 12);
console.log(a);
let b = make_album("Nusrat Fateh Ali Khan", "title1");
console.log(b);
let c = make_album("AAMIR SALEEM", "AJNABI", 3);
console.log(c);

function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("artist1", "album1");
var album2 = make_album("artist2", "album2");
var album3 = make_album("artist3", "album3");
var album4 = make_album("artist4", "album4", 12);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);

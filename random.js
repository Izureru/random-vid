var movies = ["ben.mp4","khulz.mp4","nandos.mp4","savethedate.mp4"]; // array containing YouTube Video IDs
var movie = movies[Math.floor(Math.random() * movies.length)]; // pick one item from the array at random
// now write out the tags for the movie
document.write('<iframe width="420" height="315" src="vids/' + movie + '" frameborder="0" allowfullscreen></iframe>');



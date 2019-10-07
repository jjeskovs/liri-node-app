<h1>About: </h1> 

LIRI Bot is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

<h2>Technology used: </h2>

* Node-Spotify-API
* Axios
* Used to make calls to grab data from the OMDB API and the Bands In Town API 
* Moment
* DotEnv


From the command line the user has an option to run the following commands. 


<h3>"concert-this" </h3>

Will make a call to the Bands In Town API and return the results of all concerts that matching the artist that the user has entered.

![consert-this-function](assets/Concert-this.png)

<h3>"spotify-this-song" </h3>

Will call the Spotify API and return the results matching the songs user entered. If no song is provided then your program will default to "The Sign" by Ace of Base.

![spotify-this-song](assets/spotify-this-song.png)

<h4>And empty search:</h4>

![spotify-empty-search](assets/spotify-this-song-empty.png)

<h3>"movie-this"</h3>
Will call the IMBD API and display the details of the movie the user searched. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.

![spotify-this-song](assets/movie-this.png)

<h4>And empty search:</h4>

![spotify-this-song](assets/movie-this-empty.png)

<h3>"do-what-it-says"</h3>
By running this command. The app will read the info from the random.txt and will perform the search per the command stored in the text file. 
    
![spotify-this-song](assets/spotify-this-song.png)

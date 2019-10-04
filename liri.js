    require("dotenv").config();
    var fs = require("fs");
    var axios = require("axios");
    var Spotify = require("node-spotify-api");
    var moment = require("moment");
    
    var keys = require("./keys.js");
    
    var action = process.argv[2];
    var search = process.argv.slice(3).join("+");
        
        switch (action) {
          case "concert-this":
            concert();
            break;
        
          case "spotify-this-song":
            spotify();
            break;
        
          case "movie-this":
            movie();
            break;
        
          case "do-what-it-says":
            justDoIt();
            break;
        
         
        }
    // concert-this
    function concert() {
          var queryUrl = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";
        console.log(queryUrl)
          axios
            .get(queryUrl)
            .then(function(response) {
              var events = response.data;
            
              events.forEach(function(event) {
                var eventData = [
                  "Venue: " + event.venue.name,
                  "Location: " + event.venue.city + " " + event.venue.country,
                  "Date: " + moment(event.datetime).format("L")
                ];
                // console.log(eventData);
                console.log(JSON.stringify(eventData, null, 2));
              });
            })
            .catch(function(err) {
              console.log(err);
            });
        }
        
    // spotify-this-song
    function spotify(){

      
      var spotify = new Spotify(keys.spotify);
      if(!search){
        var search = "The Sign"
      }
      spotify
      .search({ type: "track", query: search })
      .then(function(response) {
        
        console.log(response.tracks.items[5].artists[0].name);
        console.log(response.tracks.items[5].name);
        console.log(response.tracks.items[5].preview_url);
        console.log(response.tracks.items[5].album.name);
        
      })
      .catch(function(err) {
        console.log(err);
      });
    
    }
      
    // movie-this
    function movie(){
          
          if (!search) {
            name = "Mr. Nobody";
          }
          //   console.log(name);
          var queryUrl =
            "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy";
      
          axios
            .get(queryUrl)
            .then(function(response) {
              console.log(`Title: ${response.data.Title}`);
              console.log(`Year: ${response.data.Year}`);
              console.log(`IMDB Rating: ${response.data.imdbRating}`);
              console.log(`Rotten Tomatoes Rating: ${response.data.Metascore}`);
              console.log(`Country of production: ${response.data.Country}`);
              console.log(`Spoken Language: ${response.data.Language}`);
              console.log(`Plot: ${response.data.Plot}`);
              console.log(`Actors: ${response.data.Actors}`);
            })
            .catch(function(err) {
              console.log(err);
            });
        }
        
        // do-what-it-says
        function justDoIt() {

          fs.readFile("random.txt", "utf8", function(err, data){
            // console.log(typeof data)
            if (err){
              console.log("Ups, try it again")
            } 
            var fileData = data.split(","); 
            // console.log(fileData);
            var action = fileData[0];
            var search = fileData[1].split(" ").join("+");
            search = search.substring(1,search.length-1).toLowerCase();
            // console.log(action);
            // console.log(search);
            if (action === "concert-this"){
                  concert(search);
            }else if(action === "spotify-this-song"){
                  spotify();
            }else if(action === "movie-this"){
              movie();
            }
          })
        }
          
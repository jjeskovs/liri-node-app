    require("dotenv").config();
    var fs = require("fs");
    var axios = require("axios");
    var Spotify = require("node-spotify-api");
    var moment = require("moment");
    
    var keys = require("./keys.js");
    
    var action = process.argv[2];
    var name = process.argv.slice(3).join("+");
        
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
        
          default:
            console.log("Read the readme file and execute the proper command");
        }
    // concert-this
    function concert() {
          var queryUrl = `https://rest.bandsintown.com/artists/${name}/events?app_id=codingbootcamp`;
        
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
    // function spotify(){}
    //     var spotify = new Spotify(keys.spotify);
    //     if(!name){
    //         name = "The Sign"
    //     }
    //     spotify
    //       .search({ type: "track", query: name })
    //       .then(function(response) {
    //         console.log(response.tracks)
    //         var trackInfo = (response.tracks.items);

    //         trackInfo.forEach(function(track){
    //             var trackData = [
    //                 //    * Artist(s)
                    
    //                 //    * The song's name
                    
    //                 //    * A preview link of the song from Spotify
                    
    //                 //    * The album that the song is from
    //             ];
    //             console.log(trackData);
    //         })

    //     })
    //     .catch(function(err) {
    //       console.log(err);
    //     });



      
    // movie-this
    function movie(){
          
          if (!name) {
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
        function justDoIt() {}
            fs.readFile("random.txt", "utf8", function(err, data){
            // console.log(typeof data)
            if (err){
                console.log("Ups, try it again")
            } 
            var fileData = data.split(","); 
            // console.log(typeof fileData);
            var action = fileData[0];
            var name = fileData[1];
            // console.log(action);
            // console.log(name);
            if (action === "concert-this"){
                concert(name);
            }else if(action === "spotify-this-song"){
                spotify();
            } else if (action )
        })

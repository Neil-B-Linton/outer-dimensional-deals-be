const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Neil sickass server';

// app.get('/', (req, res) => {

// })

// app.post('/', (req, res) => {

// })

// app.delete('/', (req, res) => {

// })


// RECENTLY RELEASED (MAIN)


app.get('/recently_released', (req, res) => {

    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '3a8e9rxb53epaje6lad5z58r4t4n9u',
            'Authorization': 'Bearer 7m200g0j426udal1ekbr5hd5nifnc3',
        },
        data: 'fields name,aggregated_rating,release_dates.human,cover.url,genres.name,platforms.name,platforms.platform_logo.url,screenshots.url,videos.name,videos.video_id; where first_release_date <= 1676247209 & aggregated_rating >= 80 & version_parent = null; sort first_release_date desc; limit 50;'
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(err => {
        res.send(err);
    });

    
});



app.get('/anticipated', (req, res) => {

    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '3a8e9rxb53epaje6lad5z58r4t4n9u',
            'Authorization': 'Bearer 7m200g0j426udal1ekbr5hd5nifnc3',
        },
        data: 'fields name,aggregated_rating,release_dates.human,cover.url,genres.name,platforms.name,platforms.platform_logo.url,screenshots.url,videos.name,videos.video_id; where first_release_date >= 1676247209 & hypes > 10 & version_parent = null; sort hypes desc; limit 50;'
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(err => {
        res.send(err);
    });

});






app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
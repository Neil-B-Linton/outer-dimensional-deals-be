const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

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
            'Authorization': 'Bearer hxbxfktpq34b2oru7ivokpt9oa9t8u',
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


app.get('/recently_released_sample', (req, res) => {

    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '3a8e9rxb53epaje6lad5z58r4t4n9u',
            'Authorization': 'Bearer hxbxfktpq34b2oru7ivokpt9oa9t8u',
        },
        data: 'fields name,aggregated_rating,release_dates.human,cover.url,genres.name,platforms.name,platforms.platform_logo.url,screenshots.url,videos.name,videos.video_id; where first_release_date <= 1676247209 & aggregated_rating >= 80 & version_parent = null; sort first_release_date desc; limit 10;'
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
            'Authorization': 'Bearer hxbxfktpq34b2oru7ivokpt9oa9t8u',
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

app.get('/anticipated_sample', (req, res) => {

    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '3a8e9rxb53epaje6lad5z58r4t4n9u',
            'Authorization': 'Bearer hxbxfktpq34b2oru7ivokpt9oa9t8u',
        },
        data: 'fields name,aggregated_rating,release_dates.human,cover.url,genres.name,platforms.name,platforms.platform_logo.url,screenshots.url,videos.name,videos.video_id; where first_release_date >= 1676247209 & hypes > 10 & version_parent = null; sort hypes desc; limit 10;'
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(err => {
        res.send(err);
    });
});

app.post('/genre', (req, res) => {
   console.log(req.body.id)


    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '3a8e9rxb53epaje6lad5z58r4t4n9u',
            'Authorization': 'Bearer hxbxfktpq34b2oru7ivokpt9oa9t8u',
        },
        data: `fields name,aggregated_rating,release_dates.human,cover.url,genres.name,platforms.platform_logo.url,screenshots.url,videos.name,videos.video_id; where first_release_date >= 1676247209 & version_parent = null & genres = ${req.body.id}; sort hypes desc; limit 16;`
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
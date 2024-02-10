const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const urls = {}; // Simple in-memory storage for demo purposes

router.get('/:shortUrl', (req, res) => {
    const { shortUrl } = req.params;
    const longUrl = urls[shortUrl];
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

router.post('/shorten', (req, res) => {
    const { longUrl } = req.body;
    console.log({ longUrl })
    const shortUrl = nanoid(8);
    urls[shortUrl] = longUrl;
    return res.render("index", { shortUrl: "http://localhost:4000/" + shortUrl })
    // return res.json({ shortUrl: "http://localhost:4000/" + shortUrl });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const fs = require("fs");
router.use(express.json());
const details = "./data/video-details.json";

router.get("/", (req, res) => {
  fs.readFile(details, "utf8", (err, data) => {
    if (err) console.log(err);
    let videos = JSON.parse(data);
    res.json(videos);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(details, "utf8", (err, data) => {
    let videosDetails = JSON.parse(data);
    videosDetails = videosDetails.find((video) => video.id == id);
    if (err) console.log(err);
    res.json(videosDetails);
  });
});

router.post("/", (req, res) => {
  const videoRead = fs.readFileSync(details);
  const newVideos = JSON.parse(videoRead);

  const { title, description } = req.body;

  let videoId = uuidv4();

  newVideos.push({
    id: videoId,
    title,
    channel: "BrainStation",
    image: "https://i.imgur.com/i6S8m7I.jpg",
    description,
    views: "3,092,284",
    likes: "75,985",
    duration: "4:20",
    timestamp: 1531007012000,
  });

  const data = JSON.stringify(newVideos);
  res.json(data);

  fs.writeFileSync(details, data);
});

module.exports = router;

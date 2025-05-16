import express from "express";
import { createServer } from "http";
import { devvitMiddleware } from "./middleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(devvitMiddleware);
const router = express.Router();
router.get("/api", testAPI);
app.use(router);

async function testAPI(req, res) {
  const { postId } = req.devvit;
  res.json({ type: 'test', postId: postId, });
}

const port = process.env.WEBBIT_PORT || 3000;
const server = createServer(app);
server.on("error", err => console.error('ERROR:', err.stack));
server.listen(port, () => console.log('Server Started'));

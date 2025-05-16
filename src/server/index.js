import express from "express";
import { createServer } from "http";
import { devvitMiddleware } from "./middleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(devvitMiddleware);
const router = express.Router();
router.get("/api/user", getUser);
app.use(router);

async function getUser(request, response) {
  const profile = await request.devvit.reddit.getCurrentUser();
  const username = profile?.username ?? 'Anon';
  const defaultAvatarUrl = 'https://www.redditstatic.com/shreddit/assets/thinking-snoo.png';
  const avatarUrl = (await profile?.getSnoovatarUrl()) ?? defaultAvatarUrl;
  response.json({ type: 'userdata', username: username, avatar: avatarUrl, });
}

const port = process.env.WEBBIT_PORT || 3000;
const server = createServer(app);
server.on("error", err => console.error('ERROR:', err.stack));
server.listen(port, () => console.log('Server Started'));

import { RequestContext } from '@devvit/server';

export function devvitMiddleware(req, res, next) {
  req.devvit = RequestContext(req.headers); next();
}

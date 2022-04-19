import { getFoldersOfUser } from '../logic/folder-logic.js';

export const logicRouter = (req, res) => {
  switch (req.url) {
    case '/get_folders':
      res.jsonp(getFoldersOfUser(res.locals.data))
      break;
    default:
      break;
  }
}
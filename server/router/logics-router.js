import { getFoldersOfUser } from '../logic/folder-logic.js';
import server from '../server.js';

export const logicRouter = (req, res) => {
  console.log('server.db', server.db)
  switch (req.headers['special_request_url']) {
    case 'get_folders':
      res.jsonp(getFoldersOfUser(res.locals.data))
      break;
    default:
      res.jsonp(res.locals.data)
      break;
  }
}
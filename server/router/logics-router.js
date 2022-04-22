import { getProcessOfSet } from '../logic/sets-logic.js';

export const logicRouter = (req, res) => {
  switch (req.url) {
    case '/sets/1?_embed=cards':
      res.jsonp(getProcessOfSet(res.locals.data))
      break;
    default:
      res.jsonp(res.locals.data)
      break;
  }
}
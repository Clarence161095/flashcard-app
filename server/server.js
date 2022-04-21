import jsonServer from 'json-server'
import auth from 'json-server-auth'
import { logicRouter } from './router/logics-router.js'
import { rulesRouter } from './router/rules-router.js'
import { validationsRouter } from './router/validate-router.js'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Bind the router db to the app
server.db = router.db

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Validate or logic before next to router resolve witch any request
server.use(jsonServer.bodyParser)
server.use(validationsRouter)

// Logic after has res.locals.data and before return res to client
router.render = logicRouter;

// Permission rules
const rules = auth.rewriter(rulesRouter)
server.use(rules)
server.use(auth)
server.use(router)
server.listen(3004, () => {
  console.log('JSON Server is running port 3004')
})
export default server; 

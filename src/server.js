const http = require('http')
const middleware = require('./middleware')
const httpStatus = require('./config/httpStatus')
const deleteTodosAll = require('./deleteTodo')
const getTodo = require('./getTodo')
const postTodo = require('./postTodo')
const todos = []

const requestListener = (req, res) => {
  let body = ''

  req
    .on('data', (chunk) => {
      body += chunk
    })
    .on('end', () => {
      middleware(req, res, body, handlers)
    })
}

const handlers = (req, res) => {
  if (req.url == '/todos' && req.method == 'GET') {
    getTodo(res, todos)
  } else if (req.url == '/todos' && req.method == 'POST') {
    postTodo(res, req, todos)
  } else if (req.url == '/todos' && req.method == 'DELETE') {
    // deleteTodo.js
    deleteTodosAll(res, todos)
  } else if (req.url.startsWith('/todos/') && req.method == 'DELETE') {
    // deleteTodo.js
  } else if (req.url.startsWith('/todos/') && req.method == 'PATCH') {
    // patchTodo.js
  } else if (req.method == 'OPTIONS') {
    res.sendStatus(httpStatus.OK)
  } else {
    res.status(httpStatus.NOT_FOUND).json({
      status: 'false',
      message: '無此網站路由',
    })
  }
}

const server = http.createServer(requestListener)
server.listen(process.env.PORT || 3005)

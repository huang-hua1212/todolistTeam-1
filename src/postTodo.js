const { v4: uuidv4 } = require('uuid')

function postTodo(res, req, todos) {
  const title = JSON.parse(req.body).title
  if (title !== undefined) {
    todos.push({
      'title': title,
      'id': uuidv4()
    })
    res.status(200).json({
      status: 'success',
      data: todos,
    })
  } else {
    res.status(400).json({
      status: 'false',
      message: 'title 欄位未填寫正確',
    })
  }
}

module.exports = postTodo

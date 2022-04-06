function patchTodo(res, req, todos) {
  const todo = JSON.parse(req.body).title
  const id = req.url.split('/').pop()
  const index = todos.findIndex((element) => element.id == id)
  if (todo !== undefined && index !== -1) {
    todos[index].title = todo
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

module.exports = patchTodo

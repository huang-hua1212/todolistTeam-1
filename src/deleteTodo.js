function deleteTodosAll(res, todos) {
  todos.length = 0
  res.status(200)
  res.json({
    status: 'success',
    data: todos,
  })
}

module.exports = deleteTodosAll

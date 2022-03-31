function deleteIdTodo(res, req, todos) {
  let id = req.url.split('/').pop()
  let index = todos.findIndex(item => item.id === id)
  if (index !== -1) {
    res.status(200).json({
      status: 'success',
      data: todos,
    })
    res.end()
  } else {
    res.status(200).json({
      status: 'false',
      data: '刪除失敗或無此ID',
    })
    res.end()
  }
}

module.exports = deleteIdTodo;
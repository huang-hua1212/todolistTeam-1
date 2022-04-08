function getTodoById(req, res, todos){
  const id = req.url.split('/').pop()
  const index = todos.findIndex(el => el.id === id)
  if (index !== -1) {
    res.status(200).json({
      status: 'success',
      data: todos[index],
    })
  } else {
    res.status(400).json({
      status: 'false',
      data: '路徑錯誤或無此ID',
    })
  }
}

module.exports = getTodoById
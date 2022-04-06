function getTodo(res, todos) {
  res.status(200).json({
    status: 'success',
    data: todos,
  })
}

module.exports = getTodo

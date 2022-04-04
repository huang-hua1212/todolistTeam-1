function patchTodo(res, req, todos) {
  req.on('end', () => {
    try {
      const todo = JSON.parse(body).title
      const id = req.url.split('/').pop()
      const index = todos.findIndex((element) => element.id == id)
      if (todo !== undefined && index !== -1) {
        todos[index].title = todo
        res.writeHead(200, headers)
        res.write(
          JSON.stringify({
            'status': 'success',
            'data': todos,
          }),
        )
        res.end()
      } else {
        errorHandle(res)
      }
    } catch {
      errorHandle(res)
    }
  })
}

module.exports = patchTodo

function getTodo(res, todos){
    res.status(200).json({
        status: 'success',
        data: todos,
    })
}
// 123
// 123

module.exports = getTodo
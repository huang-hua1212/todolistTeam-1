// const { v4: uuidv4 } = require('uuid');
// function postTodo(res, req, todos){
//     const title = JSON.parse(req.body).title;
//     if(title === undefined){
//         res.status(200).json({ status: 'false', message: "欄位未填寫正確，或無此 todo ID" })
//     }else{
//         todos.push({
//             "title": title,
//             "id": uuidv4(),
//         })
//         res.status(200).json({
//             "status": "success",
//             "data": todos,
//         });
//     }
// }


// module.exports = postTodo

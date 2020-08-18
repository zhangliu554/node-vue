const db = require('../db')
exports.start = (req, res) => {
}
// 登录注册处理
exports.login = (req, res) => {
    let username = req.body.params.username
    let pwd = req.body.params.pass
    // 查询语句
    let sql = 'select * from userinfo where username = ?'
    db.base(sql, username, (result) => {
        console.log(result);
        if (!result.length) {
            return res.json({ code: 203, msg: '登录失败' })
        } else {
            if (result[0].username == username) {
                if (result[0].password == pwd) {
                    return res.json({ code: 200, msg: '登录成功', data: result })
                } else {
                    return res.json({ code: 201, msg: '密码错误' })
                }
            } else {
                return res.json({ code: 202, msg: '用户名错误' })
            }

        }
    })
}
exports.register = (req, res) => {
    console.log(req.body)
    res.send('测试')
}

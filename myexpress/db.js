let mysql = require('mysql')
exports.base = (sql, data, callback) => {
    let connection = mysql.createConnection({
        host: 'localhost',// 主机名
        user: 'root', // 用户名
        password: 'root',// 口令
        database: 'jieyou',// 使用哪个数据库
        port: 3306 // 端口号，MySQL默认3306
    })
    connection.connect();
    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback && callback(results)
    })
    connection.end();
}
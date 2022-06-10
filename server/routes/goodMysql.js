var mysql  = require('mysql');  
 
var express = require('express')

var router = express.Router();

var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'goods' // test 下面的 goods数据库
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM goods'; // 数据库中的表
var goods = []
function getGoodsSQL () {
  
  //查找数据库
  connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n'); 
    goods = result
  });
  return goods
}

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getGoodsSQL());
});


module.exports = router;
/*
 Navicat MySQL Data Transfer

 Source Server         : 127.0.0.1
 Source Server Version : 50621
 Source Host           : localhost
 Source Database       : test

 Target Server Version : 50621
 File Encoding         : utf-8

 Date: 05/18/2016 11:44:07 AM
*/


SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `websites`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` char(20) NOT NULL DEFAULT '' COMMENT '商品名称',
  `productPrice` int(11) NOT NULL DEFAULT '0' COMMENT '价格',
  `productImg` varchar(255) NOT NULL DEFAULT '' COMMENT '商品图',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `goods`
-- ----------------------------
BEGIN;
INSERT INTO `goods` VALUES ("10001", "小米6", "2499", "mi6.jpg"), ("10002", "小米笔记本", "3999", "note.jpg"),("10003", "小米6", "2499", "mi6.jpg"),("10004", "小米6", "2499", "1.jpg"),("10005", "小米6", "2499", "2.jpg"),("10006", "小米6", "2499", "3.jpg"),("10007", "小米6", "2499", "4.jpg"),("10008", "小米6", "2499", "5.jpg");
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

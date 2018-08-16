/*
 Navicat Premium Data Transfer

 Source Server         : test1
 Source Server Type    : MySQL
 Source Server Version : 50520
 Source Host           : localhost:3306
 Source Schema         : database1

 Target Server Type    : MySQL
 Target Server Version : 50520
 File Encoding         : 65001

 Date: 16/08/2018 20:15:46
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for jyhlist
-- ----------------------------
DROP TABLE IF EXISTS `jyhlist`;
CREATE TABLE `jyhlist`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of jyhlist
-- ----------------------------
INSERT INTO `jyhlist` VALUES (3, NULL, '13488119622', 'qwer1234');
INSERT INTO `jyhlist` VALUES (4, NULL, '18534534786', 'qwert1234');
INSERT INTO `jyhlist` VALUES (5, NULL, '18534524789', '123456qwer');
INSERT INTO `jyhlist` VALUES (6, NULL, '18534524782', '123456qwer');
INSERT INTO `jyhlist` VALUES (7, NULL, '18534524781', '123456qwer');
INSERT INTO `jyhlist` VALUES (8, NULL, '18534524780', '123456qwer');
INSERT INTO `jyhlist` VALUES (9, NULL, '13455678765', 'qwertyui');
INSERT INTO `jyhlist` VALUES (10, NULL, '13455678761', 'qwertyui');
INSERT INTO `jyhlist` VALUES (11, NULL, '17677889876', '1234qwer');
INSERT INTO `jyhlist` VALUES (12, NULL, '18788990987', 'qwerasdf');
INSERT INTO `jyhlist` VALUES (13, NULL, '18777889977', '12345qwert');
INSERT INTO `jyhlist` VALUES (14, NULL, '13455666677', 'qwert12345');
INSERT INTO `jyhlist` VALUES (15, NULL, '13488119633', 'qwert1234');

-- ----------------------------
-- Table structure for list1
-- ----------------------------
DROP TABLE IF EXISTS `list1`;
CREATE TABLE `list1`  (
  `select` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `ip` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 112 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of list1
-- ----------------------------
INSERT INTO `list1` VALUES (NULL, 86, 'å…³ç¾½', '1', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 88, 'æ›¹æ“', 'é˜¿æ»¡', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 90, 'æº', '1', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 91, 'åˆ˜ç¦…', '1', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 92, 'åˆ˜å¤‡', '222', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 93, 'å¼ é£ž', '2', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 94, 'èµµäº‘', '7', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 95, 'å•å¸ƒ', '3', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 96, 'å­™ç­–', '88', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 97, 'é»„å¿ ', '321', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 98, 'å­™å°šé¦™', '67', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 99, 'å‘¨ç‘œ', '321', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 100, 'ç”„å§¬', '3', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 101, 'è”¡æ–‡å§¬', '556', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 102, 'å¬´æ”¿', '21', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 103, 'ç™½èµ·', '23', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 104, 'é¬¼è°·å­', '21', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 105, 'å­™æ–Œ', '3', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 106, 'èŠˆæœˆ', '5', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 107, 'å¤ä¾¯æƒ‡', '31', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 108, 'å»‰é¢‡', '1', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 109, 'é©¬å¯æ³¢ç½—', '3', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 110, 'é²ç­', '31', NULL, NULL);
INSERT INTO `list1` VALUES (NULL, 111, '134', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for list_data
-- ----------------------------
DROP TABLE IF EXISTS `list_data`;
CREATE TABLE `list_data`  (
  `id` int(11) NOT NULL,
  `price` int(10) DEFAULT NULL,
  `src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sales` int(255) DEFAULT NULL,
  `oldprice` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of list_data
-- ----------------------------
INSERT INTO `list_data` VALUES (1, 298, '35', 'æžè„‰å¥³å£«é€æ°”ä¸€ä½“å¼ä¼‘é—²éž‹', 124, 447);
INSERT INTO `list_data` VALUES (2, 298, '34', 'æžè„‰ç”·å£«é€æ°”ä¸€ä½“å¼ä¼‘é—²éž‹', 144, 447);
INSERT INTO `list_data` VALUES (3, 319, '33', 'DUNLOPä¼‘é—²è£¤è£…ç»„', 9, 479);
INSERT INTO `list_data` VALUES (4, 199, '32', 'æžè„‰å¤šåŠŸèƒ½è¿åŠ¨æˆ·å¤–æ—…è¡Œå¥³å¤–å¥—', 8, 298);
INSERT INTO `list_data` VALUES (5, 199, '39', 'æžè„‰å¤šåŠŸèƒ½è¿åŠ¨æˆ·å¤–æ—…è¡Œç”·å¤–å¥—', 7, 298);
INSERT INTO `list_data` VALUES (6, 199, '36', 'æ³¢å¸ç™»ç¿©é›…é£Žå°šç²¾å“ç”·å£«POLOè¡«', 123, 299);
INSERT INTO `list_data` VALUES (7, 199, '37', 'ä»Šæ˜‡æ—¶å°šè¤¶çš±ååª›å¥—è£…', 266, 299);
INSERT INTO `list_data` VALUES (8, 233, '31', 'æµªèŽŽè•¾ä¸æ€§æ„Ÿèˆ’é€‚ç¾ŽèƒŒå†…è¡£', 220, 447);
INSERT INTO `list_data` VALUES (9, 3999, '38', 'ç¦é›·å¸¦å¸½ç‹ç‹¸æ¯›é¢†è²‚çš®å¤§è¡£', 129, 5970);
INSERT INTO `list_data` VALUES (10, 299, '29', 'è¢‹é¼ å¥³å£«é«˜è…°é«˜å¼¹å¥³è£¤å¥—ç»„', 110, 449);
INSERT INTO `list_data` VALUES (11, 1980, '30', 'æ³•å›½æºç‘žçˆµå£«é£Žå°šçš®æ¯›å¤§è¡£', 145, 2970);
INSERT INTO `list_data` VALUES (12, 199, '28', 'è‰¾ä¼Šéœç»å…¸èˆ’é€‚å¥³éž‹ç§’æ€ç»„', 226, 299);
INSERT INTO `list_data` VALUES (13, 3519, '27', 'é›·äº‹é”å°Šäº«ç‹ç‹¸é¢†è²‚çš®å¤§è¡£', 133, 5287);
INSERT INTO `list_data` VALUES (14, 239, '26', 'RQQBAç”·å£«ä¼‘é—²POLOè¡«ç»å…¸ç»„', 188, 358);
INSERT INTO `list_data` VALUES (15, 1380, '24', 'æ³•å›½æºç‘žåç»’ç‹ç‹¸æ¯›é¢†ç¾Šçš®å¤§è¡£', 214, 2080);
INSERT INTO `list_data` VALUES (16, 5980, '25', 'ç¦é›·é•¿æ¬¾å¸¦å¸½è²‚çš®å¤§è¡£', 151, 8970);
INSERT INTO `list_data` VALUES (17, 298, '22', 'æžè„‰èˆ’é€‚å¹²çˆ½ä¼‘é—²ç”·å£«å¥—è£…', 152, 447);
INSERT INTO `list_data` VALUES (18, 99, '23', 'åœ£æ ¼ä¼¦çº³é­…åŠ›è¿žè¡£è£™ç»„', 179, 447);
INSERT INTO `list_data` VALUES (19, 557, '21', 'æ„å¤§åˆ©Baguttaå†°æ°§å§ä¼‘é—²ç”·è£¤', 208, 899);
INSERT INTO `list_data` VALUES (20, 569, '20', 'æ„å¤§åˆ©Baguttaé£Žè¡£æ¬¾ç”·ç¾½ç»’æœ', 199, 1899);
INSERT INTO `list_data` VALUES (21, 298, '35', 'æžè„‰å¥³å£«é€æ°”ä¸€ä½“å¼ä¼‘é—²éž‹', 124, 447);
INSERT INTO `list_data` VALUES (22, 319, '1', 'å‡¯ç‘žæ‘©ä¼‘é—²é’ˆç»‡ç”·æ¬¾è¿åŠ¨å¥—è£…', 117, 599);
INSERT INTO `list_data` VALUES (23, 3980, '2', 'ç¦é›·ç”·æ•´è²‚èƒ†ç¾Šç»’å¤§è¡£æ„Ÿæ©ç»„', 133, 5970);
INSERT INTO `list_data` VALUES (24, 199, '3', 'ä»ªä¾çººæŠ‘èŒæ—¶å°šç”·å¥³è¢œç§’æ€ç»„', 110, 299);
INSERT INTO `list_data` VALUES (25, 498, '4', 'å¯†ä¸é»›ç‘žç¾Šçš®é•‚ç©ºå¥³éž‹å°Šäº«ç»„', 114, 899);
INSERT INTO `list_data` VALUES (26, 292, '5', 'æžè„‰æ¸…çˆ½ä¼‘é—²ç”·å£«å¥—è£…', 194, 393);
INSERT INTO `list_data` VALUES (27, 299, '6', 'æºç‘žé¦™äº‘çº±æ”¹è‰¯ç‰ˆæ——è¢é«˜å®šæ¬¾', 107, 447);
INSERT INTO `list_data` VALUES (28, 292, '7', 'æžè„‰æ¸…çˆ½ä¼‘é—²å¥³å£«å¥—è£…', 195, 447);
INSERT INTO `list_data` VALUES (29, 1510, '8', 'ZRé˜¿å°”å¸•å¡ç¾Šé©¼æ¯›é•¿æ¬¾å¤§è¡£', 120, 2265);
INSERT INTO `list_data` VALUES (30, 269, '9', 'çš®å°”å¡ä¸¹èŽ±å¡æ— ç¼è‹¹æžœè‡€ä¸è¢œ', 185, 447);
INSERT INTO `list_data` VALUES (31, 1690, '10', 'ä»Šæ˜‡å®šåˆ¶æ¬¾ç¾Šæ¯›ç¾Šçš®å¤§è¡£', 273, 2520);
INSERT INTO `list_data` VALUES (32, 298, '11', 'E.KERè¡£å®¢æ°”åž«é£žç»‡å¥³éž‹ç»„', 215, 447);
INSERT INTO `list_data` VALUES (33, 598, '12', 'saisamornåŽŸè£…è¿›å£ä¹³èƒ¶å†…è¡£', 162, 899);
INSERT INTO `list_data` VALUES (34, 3980, '13', 'ä»Šæ˜‡ç§å®¶å…¸è—ç”·å£«è²‚ç»’å¤§è¡£', 111, 5970);
INSERT INTO `list_data` VALUES (35, 298, '14', 'Genie braæ‹‰é“¾æ— æ„Ÿå†…è¡£', 205, 447);
INSERT INTO `list_data` VALUES (36, 1980, '15', 'COACHå¥³æ¬¾å•è‚©ç™¾å˜å¥³åŒ…', 151, 2970);
INSERT INTO `list_data` VALUES (37, 2980, '16', 'é›·äº‹è¾¾åŒé¢çš®è‰æ—¶å°šç»å…¸æ¬¾', 131, 4470);
INSERT INTO `list_data` VALUES (38, 229, '17', 'æ³•å›½åœ£æ ¼ä¼¦çº³é«˜è…°å¼¹åŠ›å¥³è£¤ç»„', 194, 343);
INSERT INTO `list_data` VALUES (39, 196, '18', 'æžè„‰å¤šåŠŸèƒ½è¿åŠ¨æˆ·å¤–æ—…è¡Œå¥³å¤–å¥—', 195, 398);
INSERT INTO `list_data` VALUES (40, 499, '19', 'èŠ­èŠ­åˆ©äºšç”·æ¬¾é¹…ç»’è£¤', 4, 887);

SET FOREIGN_KEY_CHECKS = 1;

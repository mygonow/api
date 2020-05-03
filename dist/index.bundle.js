module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_joi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_joi__);


// require and configure dotenv, will load vars in .env in PROCESS.ENV
__webpack_require__(6).config();

// 建立每個變數 joi 驗證規則
const envVarSchema = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.object().keys({
  NODE_ENV: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().default('development').allow(['development', 'production']), // 字串且預設值為development 並只允許兩種參數
  PORT: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.number().default(8080), // 數字且預設值為 8080
  MYSQL_PORT: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.number().default(3306), // 數字且預設值為3306
  MYSQL_HOST: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().default('192.192.155.114'), // 字串取預設值為127.0.0.1
  MYSQL_USER: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().default('user'), // 字串
  MYSQL_PASS: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().default(''), // 字串
  MYSQL_DATABASE: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string().default('shopping'), // 字串
  VERSION: __WEBPACK_IMPORTED_MODULE_0_joi___default.a.string() // 字串
}).unknown().required();

// process.env 撈取 .env 內的變數做 joi 驗證
const { error, value: envVars } = __WEBPACK_IMPORTED_MODULE_0_joi___default.a.validate(process.env, envVarSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  version: envVars.VERSION, // 版本
  env: envVars.NODE_ENV, // 開發模式
  port: envVars.PORT, // 阜號
  mysqlPort: envVars.MYSQL_PORT, // 連接阜號(MYSQL_PORT)
  mysqlHost: envVars.MYSQL_HOST, // 主機名稱 (MYSQL_HOST)
  mysqlUserName: envVars.MYSQL_USER, // 用戶名稱 (MYSQL_USER)
  mysqlPass: envVars.MYSQL_PASS, // 資料庫密碼(MYSQL_PASS)
  mysqlDatabase: envVars.MYSQL_DATABASE
};

/* harmony default export */ __webpack_exports__["a"] = (config); // 匯出共用

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_express__ = __webpack_require__(7);



if (!module.parent) {
  // listen on port config.port
  __WEBPACK_IMPORTED_MODULE_1__config_express__["a" /* default */].listen(__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].port, () => {
    console.log(`server started on  port http:///192.192.155.114:${__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].port} (${__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].env})`);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__config_express__["a" /* default */]);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_routes_index_route__ = __webpack_require__(11);







const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

// parse body params and attache them to req.body
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));
// enable CORS - Cross Origin Resource Sharing
app.use(__WEBPACK_IMPORTED_MODULE_2_cors___default()());
// HTTP request logger middleware for node.js
app.use(__WEBPACK_IMPORTED_MODULE_3_morgan___default()('dev'));

/* GET home page. */
app.get('/', (req, res) => {
  res.send(`server started on  port http:/192.192.155.114:${__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].port} (${__WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].env})`);
});

app.use('/api', __WEBPACK_IMPORTED_MODULE_5__server_routes_index_route__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mysql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mysql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mysql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_route__ = __webpack_require__(12);






const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.use('/article', __WEBPACK_IMPORTED_MODULE_3__article_route__["a" /* default */]);
/* GET localhost:[port]/api page. */
router.get('/', (req, res) => {
  res.send(`此路徑是: http://192.192.155.114:${__WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].port}/api`);
});
/* mysql連線測試 */
router.get('/sqlTest', (req, res) => {
  const connectionPool = __WEBPACK_IMPORTED_MODULE_1_mysql___default.a.createPool({ // 建立一個連線池
    connectionLimit: 10, // 限制池子連線人數
    host: __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].mysqlHost, // 主機名稱
    user: __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].mysqlUserName, // 用戶名稱
    password: __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].mysqlPass, // 資料庫密碼
    database: __WEBPACK_IMPORTED_MODULE_2__config_config__["a" /* default */].mysqlDatabase // 資料庫名稱
  });
  connectionPool.getConnection((err, connection) => {
    // 建立一個連線若錯誤回傳err
    if (err) {
      res.send(err);
      console.log('連線失敗！');
    } else {
      res.send('連線成功！');
      console.log(connection);
    }
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_article_controller__ = __webpack_require__(13);



const router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

router.route('/get/:tables').get(__WEBPACK_IMPORTED_MODULE_1__controllers_article_controller__["a" /* default */].articleGet); /** 取得 Article 所有值組 */
router.route('/post/:tables').post(__WEBPACK_IMPORTED_MODULE_1__controllers_article_controller__["a" /* default */].articlePost); /** 新增 Article 值組 */

router.route('/put/:tables/:address_ID').put(__WEBPACK_IMPORTED_MODULE_1__controllers_article_controller__["a" /* default */].articlePut); /** 修改 Article 值組 */
router.route('/delete/:tables/:address_ID').delete(__WEBPACK_IMPORTED_MODULE_1__controllers_article_controller__["a" /* default */].articleDelete); /** 刪除 Article 值組 */

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_article_module__ = __webpack_require__(14);


/**
 * Article 資料表
 */

/*  Article GET 取得  */
const articleGet = (req, res) => {
  const tableId = req.params.tables;
  console.log(tableId);
  __WEBPACK_IMPORTED_MODULE_0__modules_article_module__["a" /* default */].selectArticle(tableId).then(result => {
    res.send(result); // 成功回傳result結果
  }).catch(err => {
    return res.send(err);
  }); // 失敗回傳錯誤訊息
};

/* Article  POST 新增 */
const articlePost = (req, res) => {
  // 取得新增參數
  const tableId = req.params.tables;
  const insertValues = req.body;
  __WEBPACK_IMPORTED_MODULE_0__modules_article_module__["a" /* default */].createArticle(tableId, insertValues).then(result => {
    res.send(result); // 成功回傳result結果
  }).catch(err => {
    return res.send(err);
  }); // 失敗回傳錯誤訊息
};

/* Article PUT 修改 */
const articlePut = (req, res) => {
  // 取得修改id
  const tableId = req.params.tables;
  const articleId = req.params.address_ID;
  console.log(articleId);
  // 取得修改參數
  const insertValues = req.body;
  __WEBPACK_IMPORTED_MODULE_0__modules_article_module__["a" /* default */].modifyArticle(tableId, insertValues, articleId).then(result => {
    res.send(result); // 回傳修改成功訊息
  }).catch(err => {
    return res.send(err);
  }); // 失敗回傳錯誤訊息
};

/* Article  DELETE 刪除 */
const articleDelete = (req, res) => {
  // 取得刪除id
  const tableId = req.params.tables;
  const articleId = req.params.address_ID;
  __WEBPACK_IMPORTED_MODULE_0__modules_article_module__["a" /* default */].deleteArticle(tableId, articleId).then(result => {
    res.send(result); // 回傳刪除成功訊息
  }).catch(err => {
    return res.send(err);
  }); // 失敗回傳錯誤訊息
};

const test = (req, res) => {
  res.send('測試');
};

/* harmony default export */ __webpack_exports__["a"] = ({
  test,
  articleGet,
  articlePost,
  articlePut,
  articleDelete
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mysql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mysql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config__ = __webpack_require__(0);



const connectionPool = __WEBPACK_IMPORTED_MODULE_0_mysql___default.a.createPool({
  connectionLimit: 10,
  host: __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* default */].mysqlHost,
  user: __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* default */].mysqlUserName,
  password: __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* default */].mysqlPass,
  database: __WEBPACK_IMPORTED_MODULE_1__config_config__["a" /* default */].mysqlDatabase
});

/*  Article GET 取得  */
const selectArticle = () => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        connection.query( // Article撈取所有欄位的值組
        'SELECT*FROM  address', (error, result) => {
          if (error) {
            console.error('SQL error: ', error);
            reject(error); // 寫入資料庫有問題時回傳錯誤
          } else {
            resolve(result); // 撈取成功回傳 JSON 資料
          }
          connection.release();
        });
      }
    });
  });
};

/* Article  POST 新增 */
const createArticle = insertValues => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        connection.query('INSERT INTO address SET ?', insertValues, (error, result) => {
          // Article資料表寫入一筆資料
          if (error) {
            console.error('SQL error: ', error);
            reject(error); // 寫入資料庫有問題時回傳錯誤
          } else if (result.affectedRows === 1) {
            resolve(`新增成功！ address_ID: ${result.insertId}`); // 寫入成功回傳寫入id
          }
          connection.release();
        });
      }
    });
  });
};

/* Article PUT 修改 */
const modifyArticle = (insertValues, productId) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // Article資料表修改指定id一筆資料
        connection.query('UPDATE address SET ?  WHERE address_ID= ?', [insertValues, productId], (error, result) => {
          if (error) {
            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
            reject(error);
          } else if (result.affectedRows === 0) {
            // 寫入時發現無該筆資料
            resolve('請確認修改Id！');
          } else if (result.message.match('Changed: 1')) {
            // 寫入成功
            resolve('資料修改成功');
          } else {
            resolve('資料無異動');
          }
          connection.release();
        });
      }
    });
  });
};

/* Article  DELETE 刪除 */
const deleteArticle = productId => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // Article資料表刪除指定id一筆資料
        connection.query('DELETE FROM address WHERE address_ID= ?', productId, (error, result) => {
          if (error) {
            console.error('SQL error: ', error); // 資料庫存取有問題時回傳錯誤
            reject(error);
          } else if (result.affectedRows === 1) {
            resolve('刪除成功！');
          } else {
            resolve('刪除失敗！');
          }
          connection.release();
        });
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  selectArticle,
  createArticle,
  modifyArticle,
  deleteArticle
});

/***/ })
/******/ ]);
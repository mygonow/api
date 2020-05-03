import Joi from 'joi';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// 建立每個變數 joi 驗證規則
const envVarSchema = Joi.object().keys({
  NODE_ENV: Joi.string().default('development').allow(['development', 'production']), // 字串且預設值為development 並只允許兩種參數
  PORT: Joi.number().default(8080), // 數字且預設值為 8080
  MYSQL_PORT: Joi.number().default(3306), // 數字且預設值為3306
  MYSQL_HOST: Joi.string().default('192.192.155.114'), // 字串取預設值為127.0.0.1
  MYSQL_USER: Joi.string().default('user'), // 字串
  MYSQL_PASS: Joi.string().default(''), // 字串
  MYSQL_DATABASE: Joi.string().default('shopping'), // 字串
  VERSION: Joi.string() // 字串
}).unknown().required();

// process.env 撈取 .env 內的變數做 joi 驗證
const { error, value: envVars } = Joi.validate(process.env, envVarSchema);

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

export default config; // 匯出共用

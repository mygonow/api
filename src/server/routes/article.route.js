import express from 'express';
import articleCtrl from '../controllers/article.controller';

const router = express.Router();

router.route('/get/:tables')
  .get(articleCtrl.articleGet); /** 取得 Article 所有值組 */
router.route('/post/:tables')
  .post(articleCtrl.articlePost); /** 新增 Article 值組 */

router.route('/put/:tables/:address_ID')
  .put(articleCtrl.articlePut); /** 修改 Article 值組 */
router.route('/delete/:tables/:address_ID')
  .delete(articleCtrl.articleDelete); /** 刪除 Article 值組 */


export default router;

const Router = require('koa-router')
const router = new Router(); // 实例化路由
const {greenFmt} = require('color7log'); // 实例化路由
const rp = require('request-promise');

// 加密模块
const crypto = require("crypto");
const URLSafeBase64 = require('urlsafe-base64');



router.get('/api/getList', async (ctx, next) => {
    greenFmt(ctx.query, '-')
});

router.post('/api/getList', async (ctx, next) => {
    greenFmt(ctx.request.body, '=')
    ctx.request.body.app_id = '5d42ad9eb60c4845d88c7086';
    var options = {
        method: 'POST',
        uri: '某个接口地址',
        form: ctx.request.body,
        json: true
    };
    await rp(options).then((data) => {
        greenFmt(data, '-1')
        ctx.response.body = data
    }).catch((err) => {
        greenFmt(err, '-2')
        ctx.response.body = {status: 1, msg: err}
    });
});

router.post('/api/getRegist', async (ctx, next) => {
    greenFmt(ctx.request.body, '=')
    ctx.response.body = {
        "outpatient_waitlist": [
            {
                "episode_uid": " 180125144830001",
                "registerdate": "2018-08-01",
                "age": "21 岁",
                "gender": "男"
            },
            {
                "episode_uid": " 180125144830015",
                "registerdate": "2018-08-05",
                "age": "21 岁",
                "gender": "男"
            }
        ]
    };
});

router.post('/api/getEnc', (ctx, next) => {
    const app_secret = '83455f62cd914b63a189f2c5b80bfa84'
    const data = ctx.request.body
    data.timestamp = parseInt(new Date()/1000)

    greenFmt(data, '=')

    var datajson = JSON.stringify(data);
    var cryptkey = crypto.createHash('sha256').update(app_secret, 'utf8').digest().slice(0, 16);
    var iv = crypto.randomBytes(16);
    var encipher = crypto.createCipheriv('aes-128-cbc', cryptkey, iv);
    encipher.setAutoPadding(auto_padding=true);
    var encdata = Buffer.concat([encipher.update(datajson, 'utf8'), encipher.final()]);
    var enc = Buffer.concat([iv, encdata]);
    ctx.response.body = URLSafeBase64.encode(enc).toString('hex');
})

module.exports = router

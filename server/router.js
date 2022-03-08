const Router = require('koa-router')
const router = new Router(); // 实例化路由
const {autoC} = require('color7log'); // 实例化路由
const rp = require('request-promise');
const request = require( 'request' );
// 加密模块
const crypto = require("crypto");
const URLSafeBase64 = require('urlsafe-base64');

// const nodeExcel = require("excel-export");

router.get('/api/getList', async (ctx, next) => {
    autoC(ctx.query, '-')
    ctx.response.body = 22222
});

router.get('/api/getRegist', async (ctx, next) => {
    // autoC(ctx.request, '=')
    ctx.response.body = {msg: 2121}
});

router.get('/api/exportExcel', async (ctx, next) => {
    res = ctx.res
    var conf ={};
    conf.name = "mysheet";
    conf.cols = [{
        caption:'姓名',
        type:'string'
    },{
        caption:'性别',
        type:'string'
    }, {
        caption:'年龄',
        type:'number'
        }
    ];
    conf.rows = [['小名','男',24],['小红','女','20'],['小军','未知','33']];
    var result = nodeExcel.execute(conf);//将所有数据写入nodeExcel中
    res.setHeader('Access-Control-Allow-Origin', '*');//设置响应
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    // res.setHeader('Content-Type', 'application/vnd.ms-execl');
    res.setHeader("Content-Disposition", "attachment; filename=user.xlsx");

    let data = new Buffer(result,'binary'); // 关键代码

    ctx.response.body = data
});

router.get('/api/test', async (ctx, next) => {

    // 需要处理转发接口返回的数据的逻辑
    await new Promise( resolve => {
        var r = request({
            url: 'http://192.168.0.122:3000/api/getRegist',
            method: 'GET'
        }, function(error, response, body) {
            // autoC(error, response, body)
            // body = 888
            resolve(body)
        })
        console.log(r, 'rrrr')
    }).then(data => {
        console.log(data, 33333)
        ctx.response.body = data
    })

    // 接口直接返回数据的逻辑
    const res = request({
        url: 'http://192.168.0.122:3000/api/getRegist',
        method: 'GET'
    }, function(error, response, body) {
        // 这里面的代码逻辑都没用
        body = 888
        autoC(body ,33)
    })
    ctx.response.body = res
});

router.post('/api/getList', async (ctx, next) => {
    let xml =
    `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.atlas.com/">
        <soapenv:Header/>
        <soapenv:Body>
            <ws:queryDepartInfo>
                <arg0>{level:"1",departNo:"11",key:"20190902pcg@atlas"}</arg0>
            </ws:queryDepartInfo>
        </soapenv:Body>
    </soapenv:Envelope>`

    // <ws:queryDoctorInfoById>
    //     <arg0>{deptId:"16",doctorDate:"2019-09-02",key:"20190902pcg@atlas"}</arg0>
    // </ws:queryDoctorInfoById>

    var options = {
      url: 'http://etjk360.cn:7090/BusinessWebService/RadiusAuditPort',
      method: 'POST',
      body: xml,
      headers: {
        'Content-Type':'text/xml;charset=utf-8'
      }
    };
    // autoC(ctx.request.body, '=')
    // ctx.request.body.app_id = '5d42ad9eb60c4845d88c7086';
    // var options = {
    //     method: 'POST',
    //     uri: '某个接口地址',
    //     form: ctx.request.body,
    //     json: true
    // };
    await rp(options).then((data) => {
        // 解析xml
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser({explicitArray: false, trim: true});
        parser.parseString(data, (err, res) => {
            autoC(res, '-')
            ctx.response.body = res['S:Envelope']['S:Body']['ns2:queryDepartInfoResponse']['return']
        });
    }).catch((err) => {
        autoC(err, '+')
        ctx.response.body = {status: 1, msg: err}
    });
});

router.post('/api/getEnc', (ctx, next) => {
    const app_secret = '83455f62cd914b63a189f2c5b80bfa84'
    const data = ctx.request.body
    data.timestamp = parseInt(new Date()/1000)

    autoC(data, '=')

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

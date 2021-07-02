<template>
    <div class="main">
        <header>
            <svg t="1562669017537" class="icon-close" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1979" width="200" height="200"><path d="M940.7 840.7L602.2 502.3l319.1-319.1c25.8-25.8 25.8-64.5 0-90.2s-64.5-25.8-90.2 0L512 412.1 192.9 93c-25.8-25.8-64.5-25.8-90.2 0s-25.8 64.5 0 90.2L423.1 501 83.3 840.7c-25.8 25.8-25.8 64.5 0 90.2 12.9 12.9 25.8 19.3 45.1 19.3s32.2-6.4 45.1-19.3l340.2-340.2L856.9 931c12.9 12.9 25.8 19.3 45.1 19.3s32.2-6.4 38.7-19.3c25.7-25.8 25.7-64.5 0-90.3z" p-id="1980" fill="#ffffff"></path></svg>
            选择院区
        </header>
        <content>
            <div class="tip-txt">选择就诊院区</div>
            <div class="list">
                <a href="">
                    <div>智能导诊</div>
                    <div class="middle-txt">
                        <p>111</p>
                    </div>
                    <div class="list-foot">
                        <img src="../assets/img/position.png">
                        <span>地址号</span>
                    </div>
                </a>
            </div>
            <a href="">
                <div class="list">
                    <div>智能导诊</div>
                    <div class="middle-txt">
                        <p>222</p>
                    </div>
                    <div class="list-foot">
                        <img src="../assets/img/position.png">
                        <span>地址号</span>
                    </div>
                </div>
            </a>
        </content>
        <v-select class="text"></v-select>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String
    },
    created() {
        // this.axios.get('/api/test', {
        //     id: 123,
        //     name: 'Henry',
        //     sex: 1,
        //     phone: 55555555
        // }).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.log(error);
        // });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
    /*max-width: 800px;*/
    /*margin: 0 auto;*/
    line-height: 1.5;
    font-size: 18px;
    font-family: PingFangSC-Regular;
    color: #fff;
    user-select: none;
}
header{
    position: relative;
    height: 63px;
    padding-top: 25px;
    background: #54bbfe;
    text-align: center;
}
div, header{
    box-sizing: border-box;
}
.icon-close{
    position: absolute;
    width: 20px;
    height: 20px;
    left: 16px;
    top: 28px;
}

.tip-txt{
    padding: 12px 16px;
    background: #fff;
    font-size: 15px;
    color: #8492A6;
}
.list{
    padding: 16px;
    margin: 16px 16px 0;
    background: #54bbfe;
    /*box-shadow:0px 2px 6px 0px rgba(0,0,0,0.1);*/
    border-radius:8px;
}
.middle-txt{
    margin-bottom: 10px;
}
.middle-txt:before{
    display: block;
    content: '';
    width: 228px;
    margin-top: 21px;
    border-top: 1px solid #E9ECEF;
}
.middle-txt p{
    float: right;
    margin-top: -13px;
    font-size: 12px;
}
.list-foot *{
    font-size: 13px;
    vertical-align: middle;
}
.text {
    color: #333;
}

</style>

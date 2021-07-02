<template>
    <div class="main">
    </div>
</template>

<script>
export default {
    name: 'Home',
    component: [],
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

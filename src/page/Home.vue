<template>
    <div class="main">
        <HelloWorld msg="Welcome to Your Vue.js App" @click="clickEvent"/>
        </script>
        <button @click="downloadExcel">下载</button>
        <v-select class="text"></v-select>
        <iframe style="width: 0;height: 0;" name="download"></iframe> / 设置a的打开区域为ifram 内 防止部分浏览器跳转页面
    </div>
</template>
<script>
import HelloWorld from '@/components/Hello.vue'
export default {
    name: 'Home',
    components: {HelloWorld},
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

    },
    methods: {
        clickEvent(){
            console.log('事件触发')
        },
        downloadExcel() {
            console.log
            // this.axios.get('/console.log(this)api/getList', {
            //     id: 123,
            //     name: 'Henry',
            //     sex: 1,
            //     phone: 55555555
            // }).then(function (response) {
            //     console.log(response.data);
            // }).catch(function (error) {
            //     console.log(error);
            // });
            this.axios.get('/api/exportExcel', {
                responseType: "blob",//指定响应类型
                onDownloadProgress:(ProgressEvent) => {//用来计算下载量（实际项目中可以用来显示下载进度）
                    // let total = item.fileLength;
                    console.log(ProgressEvent);
                    let load = ProgressEvent.loaded;
                    console.log(load);
                }
            }).then(res => {
                console.log(res, 3)
                const blob = res.data;
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = (e) => {
                    console.log('')
                    const a = document.createElement('a');
                    a.download = `文件.xlsx`;
                    // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\";   filename=\"20181211191944.zip\"",
                    a.href = e.target.result;
                    // document.body.appendChild(a);
                    a.click();
                    // document.body.removeChild(a);
                };

                // var a = document.createElement('a')
                // a.download = '机构列表.xlsx'
                // a.href = URL.createObjectURL(res.data)
                // a.target = 'download'
                // a.click();
                // URL.revokeObjectURL(a.href)

                // const reader = new FileReader();
                // reader.readAsDataURL(res.blob);
                // reader.onload = (e) => {
                //   const a = document.createElement('a');
                //   // a.download = `文件名称.zip`;
                //   // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
                //   a.href = e.target.result;
                //   document.body.appendChild(a);
                //   a.click();
                //   document.body.removeChild(a);
                // };

                // if (res.status === 0) {
                //     var a = document.createElement('a')
                //     a.download = '机构列表.xlsx'
                //     a.href = res // 绑定a标签
                //     a.target = 'download'
                //     a.click() // 模拟点击实现下载
                //     setTimeout(function () { // 延时释放
                //         URL.revokeObjectURL(res) // 用URL.revokeObjectURL()来释放这个object URL
                //     }, 100)
                // }
            })
        }
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

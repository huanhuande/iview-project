<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">

        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button @click="handleStart">Start iView</Button>
                    <Button @click="handleRouter">跳转到</Button>
                    <Button @click="handleRouter1">跳转到menu</Button>
                    <Button @click="handleRouter2">跳转到test</Button>

                </h2>
            </Col>
        </Row>

    </div>


</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            handleRouter(){
                this.$router.push('/about');
            },
            handleRouter1(){
                this.$router.push('/menu');
            },
            handleRouter2(){
                this.$router.push('/test');
            }
        }
    }
</script>

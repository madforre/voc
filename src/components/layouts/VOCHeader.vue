<template>
    <div id="headerWrap">
        <header>
            <div class="logoWrap">
                <h1>
                    <img id="logo" alt="logo" title="logo" src="../../assets/logo_green.svg">
                </h1>
            </div>
            <div class="titleWrap">
                <h2>고객의 소리</h2>
            </div>
        </header>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    @import "../../assets/_mixins";
    #headerWrap {
        box-sizing: border-box;
        margin: 0 auto;
        width: 320px;
        padding: 10px 40px 10px 40px;
        @media screen and (min-width: 320px) and (max-width: 768px) {
            padding: 20px 80px 20px 80px;
        }
        header {
            .after-clear();
            margin: 50px 0 30px 0;
            @media screen and (min-width: 320px) and (max-width: 768px) {
                margin: 20px 0 10px 0;
            }
            .logoWrap {
                h1 {
                    img#logo {
                        float: left;
                        display: block;
                        height: 38px;
                        @media screen and (min-width: 320px) and (max-width: 768px) {
                            height: 28px;
                        }
                    }
                }
            }
            .titleWrap {
                h2 {
                    font-size: 32px;
                    line-height: 38px;
                    font-weight: bold;
                    color: #555;
                    @media screen and (min-width: 320px) and (max-width: 768px) {
                        font-size: 24px;
                        line-height: 28px;
                    }
                }
            }
        }

    }

</style>
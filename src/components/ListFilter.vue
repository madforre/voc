<template>
    <div id="filterWrap">
        <button class="filter-btn" type="button">필터</button>
        <div class="orderWrap">
            <span class="asc active">오름차순</span>
            <span class="desc">내림차순</span>
        </div>
    </div>
</template>

<script>
    // import resource from '../constants/resource';
    // const { CATEGORY } = resource;
    export default {
        name: 'ListFilter',
        props: {
        }
    }
</script>

<style lang="less" scoped>
#filterWrap {
    display: flex;
    margin: 0 auto;

    button.filter-btn  {
        display: block;
        margin-left: 15px;
        width: 70px;
        height: 40px;
        background: #00c854;
        border: 0;
        color: white;
        font-size: 18px;
        font-weight: 500;
    }

    .orderWrap {
        margin-left: auto;
        span {
            cursor: pointer;
            font-size: 18px;
            line-height: 40px;
            font-weight: 500;

            &.asc {
                margin-right: 20px;
            }

            &.desc {
                margin-right: 15px;
            }

            &.active {
                color: red;
            }
        }
    }
    @media screen and (min-width: 320px) and (max-width: 768px) {

        button.filter-btn {
            width: 50px;
            height: 30px;
            font-size: 13px;
        }
        .orderWrap {
            span {
                font-size: 12px;
                line-height: 30px;
            }
        }

    }
}
</style>
<template>
    <div id="filterWrap">
        <nav>
            <button class="filter-btn" type="button" @click="openFilter">필터</button>
            <div class="orderWrap">
                <span class="asc active">오름차순</span>
                <span class="desc">내림차순</span>
            </div>
        </nav>
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal">
            <h3 slot="header">카테고리 선택</h3>
            <div slot="body">
                <div class="check-box-wrap">
                    <div v-for="(item, index) in box" :key="index" class="check-box">
                        <label :for="item.name">{{item.name}}</label>
                        <input type="checkbox" :id="item.name" v-model="item.checked">
                    </div>
                    <br>
                    <span class="checked">선택됨: {{checkedNames}} </span>
                </div>
            </div>
            <span slot="footer" @click="closeFilter" class="exit">
              확인
            </span>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
    name: 'ListFilter',
    data() {
        return {
            showModal: false,
            box: [
                { name: "apple", checked: true },
                { name: "banana", checked: true },
                { name: "coconut", checked: true },
            ],
        }
    },
    computed: {
        checkedNames () {
            return this.box.filter(item => item.checked).map(name => name.name)
        }
    },
    props: [],
    mounted() {
    },
    methods: {
        async openFilter() {
            this.showModal = await !this.showModal;
            const inputs = await document.querySelectorAll('input.check-box');
            await console.log(inputs);
        },
        closeFilter() {
            this.showModal = !this.showModal;

            const checked = "hi";
            this.$emit('updateList', checked)
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style lang="less" scoped>
#filterWrap {
    nav {
        display: flex;
        margin: 0 auto;
    }

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

    .check-box-wrap {
        label {
            color: #00c854;
            margin-right: 5px;
        }
        .check-box {
            display: inline-block;
            margin: 10px;
        }
        .checked {
            color: black;
            display: block;
            text-align: center;
            font-size: 12px;
        }
    }


    .exit {
        cursor: pointer;
    }
}
</style>
<template>
    <div id="filterWrap">
        <nav>
            <button class="filter-btn" type="button" @click="openFilter">필터</button>
            <div class="orderWrap">
                <span class="asc active" @click="handleOrder">오름차순</span>
                <span class="desc" @click="handleOrder">내림차순</span>
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
                    <br>
                    <span>{{required}}</span>
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
            required: '',
        }
    },
    computed: {
        checkedNames () {
            return this.box.filter(item => item.checked).map(item => item.name)
        },
        checkedNo () {
            return this.box.filter(item => item.checked).map(item => item.no);
        }
    },
    props: ["box", "asc"],
    mounted() {
    },
    methods: {
        openFilter() {
            this.showModal = !this.showModal;
        },
        closeFilter() {
            if (this.checkedNames.length > 0) {
                this.required = '';
                this.showModal = !this.showModal;
                this.$emit('updateList', this.checkedNo)
            } else {
                this.required = '카테고리를 선택해주세요.';
            }
        },
        handleOrder(e) {
            const c = e.target.className;
            let asc = this.asc;
            if (c === "asc") {
                if (!c.match(/active/)) {
                    document.querySelector('.asc').setAttribute("class", "asc active");
                    document.querySelector('.desc').setAttribute("class", "desc");
                    asc = true;
                }
            } else if (c === "desc") {
                if (!c.match(/active/)) {
                    document.querySelector('.desc').setAttribute("class", "desc active");
                    document.querySelector('.asc').setAttribute("class", "asc");
                    asc = false;
                }
            }
            this.$emit('orderList', asc)
        },

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
            font-weight: bold;

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
            cursor: pointer;
        }
        .check-box {
            display: inline-block;
            margin: 10px;

            input {
                cursor: pointer;
            }
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
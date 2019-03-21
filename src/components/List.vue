<template>
    <div id="listWrap">
        <div class="list-group" v-for="(item, $index) in voc" :key="$index">
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-4 color" v-if="item.category_no == 1">apple</h5>
                    <h5 class="mb-4 color" v-if="item.category_no == 2">banana</h5>
                    <h5 class="mb-4 color" v-if="item.category_no == 3">coconut</h5>
                    <small class="color">{{item.no}}번째 외침</small>
                </div>
                <div class="d-flex w-100 justify-content-start">
                    <p class="mb-4">{{item.email}}</p>
                    <span class="ml-3 mr-3">|</span>
                    <p class="mb-4">{{item.updated_at}}</p>
                </div>
                <p class="mb-4 title">제목 : {{item.title}} / 여기서 부터는 text-overflow test  여기서 부터는 text-overflow test 여기서 부터는 text-overflow test 여기서 부터는 text-overflow test</p>
                <small class="body">내용 : {{item.contents}}</small>
            </a>
        </div>
        <!--<div v-for="(item, $index) in props.voc" :key="$index">-->
            <!--&lt;!&ndash; Hacker News item loop &ndash;&gt;-->
        <!--</div>-->
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>

        <div id="adsWrap" class="mt-2">
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
                <b-row no-gutters>
                    <b-col md="3" class="ml-3 mt-3 mr-3">
                        <b-card-img src="https://picsum.photos/400/400/?image=10" class="rounded-0 ads" />
                    </b-col>
                    <b-col md="8">
                        <b-card-body title="Horizontal Card">
                            <b-card-text>
                                This is a wider card with supporting text as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
    // import resource from '../constants/resource';
    // import axios from 'axios';
    // const { LIST } = resource;
    export default {
        data() {
            return {

            }
        },
        props: ['voc','ads'],
        created() {
        },
        mounted() {
        },
        methods: {

        },
    }
</script>

<style lang="less">
#listWrap {
    margin: 30px 15px 30px 15px;
    text-align: left;
    @media screen and (min-width: 320px) and (max-width: 768px) {
        margin: 20px 10px 20px 10px;
    }

    .list-group {
        padding: 0 0 15px 0;

        .list-group-item {
            box-shadow: 0 0 5px lightgreen;
            padding: 30px;
            .color {
                color: #00c854;
            }
            @media screen and (min-width: 320px) and (max-width: 768px) {
                font-size: 12px;
                padding: 20px;
            }
        }
        .title {
            font-weight: bold;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }

        .body {
            display: block;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }
    }

    #adsWrap {
        box-sizing: border-box;
        margin: 0 auto;
        height: auto;

        .ads {
            height: 200px;
        }
    }
}



</style>
<template>
    <div id="listWrap">
        <div class="list-item" v-for="(item, index) in voc" :key="index">
            <div class="list-group">
                <article>
                    <ol>
                        <li>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-4 color" v-show="item.category_no == 1">apple</h5>
                                    <h5 class="mb-4 color" v-show="item.category_no == 2">banana</h5>
                                    <h5 class="mb-4 color" v-show="item.category_no == 3">coconut</h5>
                                    <small class="color">{{index + 1 }}</small>
                                </div>
                                <div class="d-flex w-100 justify-content-start">
                                    <p class="mb-4">{{item.email}}</p>
                                    <span class="ml-3 mr-3">|</span>
                                    <p class="mb-4">{{item.updated_at}}</p>
                                </div>
                                <h3 class="mb-4 title">소리 제목 - {{item.title}} / 여기서부터는 text-overflow test 여기서부터는 text-overflow test 여기서부터는 text-overflow test 여기서부터는 text-overflow test</h3>
                                <small class="body">소리 내용 - {{item.contents}}</small>
                            </a>
                        </li>
                    </ol>
                </article>
            </div>

            <div id="adsWrap" class="mt-3" v-if="showAd(index)">
                <aside>
                    <a href="#">
                        <div class="ad-header">
                            <span>Sponsored</span>
                        </div>
                        <div class="ad-body">
             `               <div class="ad-image">
                                <img v-bind:alt="getAlt(index)" v-bind:src="getImage(index)"/>
                            </div>
                            <div class="ad-detail">
                                <div class="ad-title">
                                    <h3>{{getValue(index, 'title')}} / 여기서부터는 text-overflow test 여기서부터는 text-overflow test 여기서부터는 text-overflow test </h3>
                                </div>
                                <div class="ad-contents">
                                    <p>{{getValue(index, 'contents')}}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
    import resource from '../constants/resource';
    const { IMAGE_PATH } = resource;

    export default {
        data() {
            return {
                n: 4,

            }
        },
        props: ['voc','ads'],
        created() {
        },
        mounted() {
        },
        methods: {
            showAd(idx) {
                if ((idx + 1) % this.n === 0) {
                    return true;
                }
            },
            getImage(idx) {
                const path = IMAGE_PATH + this.ads[(idx + 1) / this.n - 1]['img'];
                if (path) return path
            },
            getAlt(idx) {
                if ((idx + 1) % this.n === 0) {
                    const alt = "ad_" + this.ads[(idx + 1) / this.n - 1]['title'];
                    if (alt) return alt;
                }
            },
            getValue(idx, key) {
                if ((idx + 1) % this.n === 0) {
                    const value = this.ads[(idx + 1) / this.n - 1][key];
                    if (value) return value;
                }
            },
        },
    }
</script>

<style lang="less">
@import "../assets/_mixins";
.list-item {
    margin: 20px 15px 20px 15px;
    text-align: left;
    @media screen and (min-width: 320px) and (max-width: 768px) {
        margin: 20px 10px 20px 10px;
    }

    .list-group {
        margin: 0 0 15px 0;
        padding: 15px;
        box-shadow: 0 0 3px #00c854;
        border: 1px solid #ddd;

        .list-group-item {
            border: 0;
            .color {
                color: green;
            }
            @media screen and (min-width: 320px) and (max-width: 768px) {
                font-size: 14px;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
        }
    }

    #adsWrap {
        box-sizing: border-box;
        width: 100%;
        box-shadow: 0 0 3px #00c854;
        border: 1px solid #ddd;
        @media screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 14px;
        }

        a {
            display: block;
            padding: 30px;
            .ad-header {
                color: darkgreen;
            }


            .ad-body {
                box-sizing: border-box;
                margin: 20px 0 0 0;
                .after-clear();

                .ad-image {
                    box-sizing: border-box;
                    width: 320px;
                    float: left;

                    img {
                        display: block;
                        max-width: 100%;
                    }

                    @media screen and (min-width: 769px) and (max-width: 900px) {
                        float: none;
                        width: 75%;
                        margin: 10px auto 0 auto;
                    }

                    @media screen and (min-width: 320px) and (max-width: 768px) {
                        width: 100%;
                    }

                }



                .ad-detail {
                    box-sizing: border-box;
                    max-width: 480px;
                    padding: 10px 0 0 30px;
                    float: left;

                    .ad-title {
                        h3 {
                            margin: 0 0 20px 0;
                            font-weight: bold;
                        }
                    }

                    .ad-contents {
                        p {
                            font-size: 14px;
                        }
                    }

                    @media screen and (min-width: 320px) and (max-width: 900px) {
                        min-width: 320px;
                        max-width: 100%;
                        margin: 20px 0 0 0;
                        padding: 0 0 0 0;

                        .ad-title {
                            h3 {
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }

                        .ad-contents {
                            p {
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }

            }

        }

    }
}



</style>
<template>
    <div id="listWrap">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-4">카테고리명</h5>
                    <small>number</small>
                </div>
                <div class="d-flex w-100 justify-content-start">
                    <p class="mb-4">이메일</p>
                    <span class="ml-3 mr-3">|</span>
                    <p class="mb-4">작성일</p>
                </div>
                <p class="mb-4 title">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="body">Donec id elit non mi porta.</small>
            </a>
        </div>
    </div>
</template>

<script>
// import resource from '../constants/resource';
// const { LIST } = resource;
export default {
    name: 'VOCList',
    props: {
    },
    created: () => {

    }
}

</script>

<style lang="less" scoped>
#listWrap {
    margin-top: 30px;

    .list-group {
        .title {
            font-weight: bold;
        }
    }
}

</style>
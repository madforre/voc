<template>
    <div id="adsWrap" class="mt-2">
        <b-card no-body class="overflow-hidden" style="max-width: 100%">
            <b-row no-gutters>
                <b-col md="3">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0" />
                </b-col>
                <b-col md="9">
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
</template>

<script>
// import resource from '../constants/resource';
// const { ADS } = resource;
export default {
    props: {
    }
}
</script>

<style lang="less" scoped>
    #adsWrap {
        margin: 0 auto;

    }

</style>
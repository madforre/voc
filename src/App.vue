<template>
  <div id="app">
    <VOCHeader/>
    <ListFilter v-on:updateList="updateList" v-on:orderList="orderList" :box="check_box" :asc="asc"/>
    <List :voc="voc" :ads="ads"/>
    <infinite-loading ref="infiniteLoading" identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// components
import VOCHeader from './components/layouts/VOCHeader';
import ListFilter from './components/ListFilter';
import List from './components/List';

// constants
import resource from './constants/resource';
const { LIST, CATEGORY, ADS } = resource;

// axios
import axios from 'axios';

export default {
  data() {
    return {
      page: 1,
      voc: [],
      ads: [],
      asc: true,
      category_no: [],
      check_box: [],
      infiniteId: +new Date(),
    }
  },
  created() {
    this.initData();
  },
  mounted() {
  },
  methods: {
    initData() {
      this.fetchCategory();
    },
    async fetchCategory() {
      const request = await axios.get(CATEGORY)
              .then(response => response.data.list)
              .catch(error => error);
      if (request.length > 0) {
        for (let i = 0; i < request.length; i++) {
          request[i]['checked'] = true;
          this.check_box.push(request[i]);
        }
      }
      this.category_no = this.check_box.filter(item => item.checked).map(item => item.no);
    },
    updateList(category) {
      this.category_no = category;
      this.changeType();
    },
    orderList(boolean) {
      this.asc = boolean;
      this.changeType();
    },
    async fetchAds(page) {
      const query_string = `page=${page}&limit=2`;
      const request = await axios.get(ADS + "?" + query_string)
              .then(response => response.data.list)
              .catch(error => error);
      if (request.length > 0) {
        for (let i = 0; i < request.length; i++) {
          this.ads.push(request[i]);
        }
      } else {
        const none = {
          contents: '',
          created_at: '',
          img: '',
          no: '',
          title: '',
          updated_at: ''
        };
        this.ads.push(none);
        this.ads.push(none);
      }
    },
    async infiniteHandler($state) {
      await this.fetchAds(this.page);
      await axios.get(LIST, {
        params: {
          page: this.page,
          ord: this.asc ? 'asc' : 'desc',
          category: this.category_no,
        },
      }).then(({ data }) => {
        console.log(data.list);
        if (data.list.length) {
          this.page += 1;
          this.voc.push(...data.list);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    changeType() {
      this.page = 1;
      this.voc = [];
      this.ads = [];
      this.infiniteId += 1;
      this.$nextTick(() => {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },
  },
  components: {
    VOCHeader,
    ListFilter,
    List
  },
}
</script>

<style lang="less">
#app {
  @import "assets/_mixins";
  margin: 0 auto;
  width: 900px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  @media screen and (min-width: 769px) and (max-width: 900px) {
    width: 90%;
    max-width: 768px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
    min-width: 320px;
  }
}
</style>
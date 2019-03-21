<template>
  <div id="app">
    <VOCHeader/>
    <ListFilter/>
    <List :voc="voc" :ads="ads"/>
  </div>
</template>

<script>
import VOCHeader from './components/layouts/VOCHeader';
import ListFilter from './components/ListFilter';
import List from './components/List';
import resource from './constants/resource';
import axios from 'axios';
const { LIST, ADS } = resource;
export default {
  data() {
    return {
      voc: [],
      ads: []
    }
  },
  created() {
    this.initData();
  },
  mounted() {
  },
  methods: {
    initData() {
      this.fetchVOC();
      this.fetchAds();
    },
    async fetchVOC() {
      const query_string = `page=1&ord=asc`;
      const request = await axios.get(LIST + "?" + query_string)
              .then(response => response.data.list)
              .catch(error => error);
      if (request.length > 0) {
        for (let i = 0; i < request.length; i++) {
          this.voc.push(request[i]);
        }
      }
    },
    async fetchAds() {
      const query_string = `page=1&limit=2`;
      const request = await axios.get(ADS + "?" + query_string)
              .then(response => response.data.list)
              .catch(error => error);
      if (request.length > 0) {
        for (let i = 0; i < request.length; i++) {
          this.ads.push(request[i]);
        }
      }
    }
  },
  components: {
    VOCHeader,
    ListFilter,
    List
  }
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

  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 90%;
    min-width: 320px;
  }
}
</style>
<template>
  <div>
    <h2>{{name}}</h2>
    <!-- <b-jumbotron header="{name}" lead="Bootstrap v4 Components for Vue.js 2">
    </b-jumbotron> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      name: ''
    }
  },
  mounted () {
    browser.runtime.sendMessage({})
    this.name=browser.i18n.getMessage('extName')
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>

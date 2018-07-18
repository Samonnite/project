<template>
    <div id="index">
      <official-accounts></official-accounts>
      <header-bar></header-bar>
    </div>
</template>

<script>
import OfficialAccounts from '../components/OfficialAccounts'
import HeaderBar from '../components/HeaderBar'
export default {
  name: 'Index',
  data () {
    return {}
  },
  components: {OfficialAccounts, HeaderBar}
}
</script>

<style lang="scss" scoped>

</style>

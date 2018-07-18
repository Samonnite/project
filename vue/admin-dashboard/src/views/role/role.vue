<template>
  <div class="role">
    <el-table
      :data="items"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="角色名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { requestRole } from '@/api/role'
export default {
  data () {
    return {
      items: []
    }
  },
  created: function () {
    var roleParams = {
      page: 1
    }
    requestRole(roleParams).then(res => {
      let {errno, data, msg} = res
      if (errno) {
        this.$message({
          message: msg,
          type: 'error'
        })
      } else {
        this.items = data.items
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

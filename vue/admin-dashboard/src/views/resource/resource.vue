<template>
  <div class="resource">
    <el-table
      :data="items"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        >
      </el-table-column>
      <el-table-column
        prop="module"
        label="module"
        >
      </el-table-column>
      <el-table-column
        prop="controller"
        label="controller"
        >
      </el-table-column>
      <el-table-column
        prop="action"
        label="action"
       >
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="200">
      </el-table-column>
      <el-table-column
        prop="relation"
        label="操作"
        >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleRelation(scope.row)">角色关联
        </el-button>
      </template>
      </el-table-column>
    </el-table>
      <el-dialog
        title="角色关联"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <el-transfer v-model="occupy" :data="roles"></el-transfer>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAttach">确 定</el-button>
        </span>
      </el-dialog>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="page_size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total_items">
    </el-pagination>
  </div>
</template>

<script>
import { requestResource, requestRelation, requestAttach } from '@/api/resource'
export default {
  data () {
    return {
      items: [],
      currentPage: 1,
      total_items: 0,
      page: 1,
      page_size: 10,
      dialogVisible: false,
      roles: [],
      occupy: [],
      resource_id: 0
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleCurrentChange (page) {
      this.page = page
      this.getList()
    },
    handleSizeChange (pageSize) {
      this.page_size = pageSize
      this.getList()
    },
    getList () {
      var roleParams = {
        page: this.page,
        page_size: this.page_size
      }
      requestResource(roleParams).then(res => {
        let { errno, data, msg } = res
        if (errno) {
          this.$message({
            message: msg,
            type: 'error'
          })
        } else {
          this.items = data.items
          this.total_items = data.total_items
          this.page_size = data.limit
        }
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    handleRelation (row) {
      this.resource_id = row.id
      var relationParams = {
        resource_id: row.id
      }
      requestRelation(relationParams).then(res => {
        let { errno, data, msg } = res
        if (errno) {
          this.$message({
            message: msg,
            type: 'error'
          })
        } else {
          var roles = []
          for (let role of data.roles) {
            roles.push({
              key: role.id,
              label: role.name,
              disabled: false
            })
          }
          this.roles = roles
          this.occupy = data.occupy
          this.dialogVisible = true
        }
      })
    },
    handleAttach () {
      var params = {
        resource_id: this.resource_id,
        role_ids: this.occupy
      }
      requestAttach(params).then(res => {
        let { errno, msg } = res
        if (errno) {
          this.$message({
            message: msg,
            type: 'error'
          })
        } else {
          this.$message({
            message: msg,
            type: 'success'
          })
          this.dialogVisible = false
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.resource {
  min-height: 800px;
  background: #fff;
}
</style>

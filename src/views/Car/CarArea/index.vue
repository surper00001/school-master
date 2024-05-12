<template>
  <div class="building-container">

    <div class="create-container">
      <el-button type="primary">添加区域</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table style="width: 100%">
        <el-table-column type="id" label="序号" />
        <el-table-column prop="name" label="区域名称" />
        <el-table-column prop="floors" label="车位数（个）	" />
        <el-table-column prop="area" label="	面积（㎡）" />
        <el-table-column prop="propertyFeePrice" label="	计费规则" />
        <el-table-column prop=" buildingStatus" label="	备注" />
        <el-table-column prop="Authorization" label="操作" fixed="right" width="180">
          <template>
            <el-button size="mini" type="text">编辑</el-button>
            <el-button size="mini" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination class="pagination" :page-sizes="[100, 200, 300, 400]" :page-size="100"
        layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>


  </div>
</template>

<script>
export default {
  name: 'CarArea',
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" >
.create-container{
  align-items: center;
  border-bottom: 1px solid rgb(237, 237, 237, .9);
  padding-bottom: 20px;
}
.pagination{
  float: right;
}

</style>
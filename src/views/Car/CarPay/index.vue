<template>
  <div class="building-container">
    <div class="search-container">
      
        <span class="search-label">车牌号码：</span>
      <el-input clearable placeholder="请输入内容" class="search-main" style="width: 260px" />
    
   
      <span class="select-label">缴纳费用：</span>
      <el-select class="select-main" style="width: 260px"> </el-select>
      <el-button type="primary" class="search-btn">查询</el-button>
    </div>

     
    
    <!-- 表格区域 -->
    <div class="table">
      <el-table style="width: 100%">
        <el-table-column type="id" label="序号" />
        <el-table-column prop="name" label="车牌号码" />
        <el-table-column prop="floors" label="收费类型	" />
        <el-table-column prop="area" label="	停车总时长" />
        <el-table-column prop="propertyFeePrice" label="	缴纳费用（元）" />
        <el-table-column prop=" buildingStatus" label="		缴纳状态" />
        <el-table-column prop=" buildingStatus" label="		缴纳方式" />
        <el-table-column prop=" buildingStatus" label="		缴纳时间" />
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
.pagination{
  float: right;
}
.search-container{
  margin: 20px 0;
  align-items: center;
  border-bottom: 1px solid rgb(237, 237, 237, .9);
  padding-bottom: 20px;
}

.select-main, .search-main {
  margin-right:36px ;
}


</style>
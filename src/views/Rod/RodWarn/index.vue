<template>
  <div class="building-container">
    <div class="search-container">
      <span class="search-label">一体杆名称：</span>
      <el-input clearable placeholder="请输入一体杆名称" class="search-main" />
      <span class="search-label">一体杆编号：</span>
      <el-input clearable placeholder="请输入一体杆编号" class="search-main" />
      
    </div>
    <div class="search-container line">
      <span class="search-label">处置状态：</span>
      <el-select clearable placeholder="请输入一体杆" class="search-main" >
        <el-option label="全部" value="all" />
      </el-select>
      <el-button type="primary" class="search-btn">查询</el-button>
    </div>
   
   
    <!-- 表格区域 -->
    <div class="table">
      <el-table style="width: 100%" :data="list" >
        <el-table-column type="id" label="序号" />
        <el-table-column prop="name" label="	一体杆名称" />
        <el-table-column prop="floors" label="一体杆编号" />
        <el-table-column prop="area" label="	故障类型" />
        <el-table-column prop="propertyFeePrice" label="	处置状态" />
        <el-table-column prop=" buildingStatus" label="告警时间" />
     
       
      </el-table>
    </div>
    <div>
      <el-pagination class="pagination"
        
        :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
        layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>


    </div>


  </div>

</template>

<script>

</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;

  ;
  padding-bottom: 20px;

  .search-label {
    width: 100px;
  }

  .search-main {
    width: 220px;
    margin-right: 10px;
  }
}
.line{
  border-bottom: 1px solid rgb(237, 237, 237, .9);
}

.create-container {
  margin: 10px 0px;
}

.page-container {
  padding: 4px 0px;
  text-align: right;
  
}
.pagination {
  float: right;
}

.form-container {
  padding: 0px 80px;
}

</style>
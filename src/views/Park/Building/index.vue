<template>
  <div class="building-container">
    <div class="search-container">
      <span class="search-label">楼宇名称：</span>
      <el-input clearable placeholder="请输入内容" class="search-main" v-model="params.name"/>
      <el-button type="primary" class="search-btn">查询</el-button>
    </div>
    <div class="create-container">
      <el-button type="primary">添加楼宇</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table style="width: 100%" :data="list" >
        <el-table-column type="index" label="序号" :index="indexMethod" />
        <el-table-column prop="name" label="楼宇名称" />
        <el-table-column prop="floors" label="层数" />
        <el-table-column prop="area" label="在管面积(m²)" />
        <el-table-column prop="propertyFeePrice" label="物业费(元/m²)" />
        <el-table-column prop="status" label="状态" :formatter="formatStatus" />
        <el-table-column prop="demoFlag" label="操作" fixed="right" width="180">
          <template>
            <el-button size="mini" type="text">编辑</el-button>
            <el-button size="mini" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 页码设置 -->
    <!-- :current-page当前的页码  -->
    <!--  layout页面样式 -->
    <div>
      <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[4, 8, 12, 16]"
      :page-size="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    </div>


  </div>

</template>

<script>
import { getbuildingListAPI } from '@/api/building'
export default {
  name: "building",
  data() {
    return {
   
      params: {
        "id": 0,
        "name": '',
        "floors": 0,
        "area": 0,
        "propertyFeePrice": 0,
        "Authorization": '',
        "code": 0,
        "msg": "string",
        "status":0,
        "demoFlag":0,
       "page" : 1,
        "pageSize": 4,
      
        
      },
      list: [],
      "total": 0,
      
      
     

    }
  },
  created() {
    this.getbuildingList()
  },
  methods: {
    async getbuildingList() {
     const res = await getbuildingListAPI(this.params)
     this.list=res.data.rows
     this.total=res.data.total
      console.log(res)

    },

    formatStatus(row, column, cellValue, index) {
      const MAP = {
        0: '空置中',
        1: '租赁中'
      }
      return MAP[cellValue]
    },
    // 页面处理
  handleSizeChange(val){
    this.params.pageSize=val
    this.getbuildingList()
    console.log(val)

  },
  handleCurrentChange(val){
    this.params.page=val
    this.getbuildingList()
    console.log(val)
  },
  indexMethod(index){
    return (this.params.page - 1) * this.params.pageSize + index + 1

  }
  
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(237, 237, 237, .9);
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

.create-container {
  margin: 10px 0px;
}

.page-container {
  padding: 4px 0px;
  text-align: right;
}

.form-container {
  padding: 0px 80px;
}

.pagination {
  float: right;
}
</style>
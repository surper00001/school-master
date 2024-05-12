<template>
  <h1>物业费管理</h1>
  <div class="building-container">
    <div class="search-container">
      <span class="search-label">楼宇名称：</span>
      <el-input clearable placeholder="请输入内容" class="search-main" />
      <el-button type="primary" class="search-btn">查询</el-button>
    </div>
    <div class="create-container">
      <el-button type="primary">添加楼宇</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table style="width: 100%" >
        <el-table-column type="id" label="序号" />
        <el-table-column prop="name" label="楼宇名称" />
        <el-table-column prop="floors" label="层数" />
        <el-table-column prop="area" label="在管面积(m²)" />
        <el-table-column prop="propertyFeePrice" label="物业费(元/m²)" />
        <el-table-column prop=" buildingStatus" label="状态" />
        <el-table-column prop="Authorization" label="操作" fixed="right" width="180">
          <template>
            <el-button size="mini" type="text">编辑</el-button>
            <el-button size="mini" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination class="pagination" 
        :page-sizes="[100, 200, 300, 400]" :page-size="100"
        layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>


    </div>


  </div>

</template>


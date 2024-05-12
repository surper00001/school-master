<script>
import EchartsView from './components/EchartsView.vue';
export default {
  components: { EchartsView },
  data() {
    return {
      ruleForm: {

        region: '',
      },
      // 数据
      // 提示框定义是否显示
      dialogVisible: false,
      rules: {

        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    // 点击实现跳转到告警页面
    moreHandler() {
      this.$router.replace('/pole/waring')

    },
    // 点击实现跳转到添加企业
    addEnterprise() {
      this.$router.replace('/park/enterprise')
    },
    // 点击实现跳转到员工管理
    addStaff() {
      this.$router.replace('/sys/user')
    },
    // 关闭弹框
    closeDialog() {
      this.dialogVisible = false
    },
    // 打开弹框
    addBill() {
      this.dialogVisible = true
    },
    // 确认添加
    async confirmAdd() {
      // await createEmployeeAPI(this.addForm)
      this.dialogVisible = false
      // this.getEmployeeList()
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }



  }

}

</script>

<template>
  <div class="databoard-container">

    <div class="container-left">
      <div class="header-left">

        <table class="table-left">

          <thead>
            <tr>
              <td> 园区数据</td>
            </tr>
          </thead>
          <tr class="list">
            <td>年度累计收费（元）</td>
            <td>入驻企业总数（个）</td>
            <td>月卡车辆总数（辆）</td>
            <td>一体杆总数（台）</td>
          </tr>

          <tbody>
            <tr class="acount">
              <td>20054071.03</td>
              <td>5</td>
              <td>9</td>
              <td>48</td>

            </tr>

          </tbody>
        </table>

      </div>
      <div class="e-charts">

        <EchartsView />
      </div>
      <div class="footer-left">
        <p>合同临期提醒</p>
        <br>
        <div class="table">
          <el-table style="width: 100%" :data="list">
            <el-table-column type="id" label="序号" />
            <el-table-column prop="name" label="	一体杆名称" />
            <el-table-column prop="floors" label="一体杆编号" />
            <el-table-column prop="area" label="	故障类型" />
            <el-table-column prop="propertyFeePrice" label="	处置状态" />
            <el-table-column prop=" buildingStatus" label="告警时间" />


          </el-table>
        </div>
        <div>
          <el-pagination class="pagination" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]"
            :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>


        </div>



      </div>
    </div>
    <div class="container-right">
      <div class="header-right">
        <table class="table-right">

          <thead>
            <tr>
              <td>快捷入口 </td>
            </tr>
          </thead>
          <tr>
            <td @click="addEnterprise"><img src="@/assets/add-enterprise.png" alt=""></td>
            <td @click="addStaff"><img src="@/assets/employee-manage.png" alt=""></td>
            <td @click="addBill"><img src="@/assets/add-bill.png" alt=""></td>
            <td><img src="@/assets/data-screen.png" alt=""></td>
          </tr>

          <tbody>
            <tr>
              <td @click="addEnterprise">添加企业</td>
              <td @click="addStaff">员工管理</td>
              <td @click="addBill">添加账单</td>
              <td>数据大屏</td>

            </tr>

          </tbody>
        </table>
      </div>
      <div class="footer-right">
        <p>设备告警派单</p>
        <div class="footer-right-img"><img src="@/assets/workbench.png" alt=""></div>

      </div>
      <el-button type="primary" round style="width: 80%; margin:auto " @click="moreHandler">更多<i
          class="el-icon-arrow-right"></i></el-button>
    </div>
    <el-dialog title="添加租户" :visible="dialogVisible" width="680px" @close="closeDialog" @open="openDialog">
      <!-- 表单接口 -->
      <div class="form-container" >
        <el-form ref="addForm" label-width="80px" label-position="top" class="form-massage">

          <el-form-item label="选择租户" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域"style="width: 500px;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>

          </el-form-item>
          <el-form-item label="租赁楼宇" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域"style="width: 500px;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>

          </el-form-item>
          <el-form-item label="交费周期">

            <el-date-picker v-model="value1" type="datetimerange" start-placeholder="开始日期" end-placeholder="结束日期"
              :default-time="['12:00:00']" style="width: 500px;">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="交费金额" prop="name" style="width: 500px;">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="交费方式" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width: 500px;"></el-select>
          </el-form-item>




        </el-form>
      </div>
      <template #footer>
        <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="confirmAdd">确 定</el-button>
      </template>
    </el-dialog>
  </div>

</template>

<style scoped lang="scss">
.databoard-container {
  width: 100%;

  background-color: #F4F6F8;
  display: flex;
}

.container-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 64%;
  float: left;
}

.container-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 32%;
  height: 50%;
  float: right;
}


.container-left>div,
.container-right>div {
  width: 100%;
  margin: 10px;
  background-color: #fff;
}

table {
  width: 90%;
  height: 90%;
  margin: 20px;
}

.header-left,
.header-right {
  height: 220px;

}

img {
  width: 50%;
  height: 50%;
}

.e-charts {
  height: 400px;
  background-color: #fff;

}

.footer-letf {
  height: 400px;
  background-color: #fff;



}

.footer-right {
  height: 300px;
  background-color: #fff;


}

.table-left {
  height: 100%;
}

.table-right {
  height: 100%;
  padding: 20px;

}

.list {
  height: 20%;
  color: #919399;
}

.acount {
  height: 80%;
  font-size: 28px;
}

.pagination {
  float: right;
}

.table {
  padding: 30px;
  margin: 10px;
}

.footer-right-img {
  margin-left: 40px;
  margin-top: 40px;
  width: 80%;
  height: 80%;
  align-items: center;
  text-align: center;

}
.form-massage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
</style>

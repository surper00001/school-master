<template>
    <div class="container">
        <p>{{ title }}</p>
        <div class="echart" id="lineDemo" ref="chart"></div>
    </div>
</template>

<script>
export default {
  name: 'index',

  data() {
      return {
          title: '年度收入统计',
          option: {
              legend: {
                  data: ['bar', 'bar2']
              },
              tooltip: {      //echarts提示框配置
                  //   trigger: //触发类型，可选值有 'item'（数据项图形触发）和 'axis'（坐标轴触发）。默认为 'item'。
                  //   formatter: //提示框显示内容格式化函数，可以自定义提示框的显示内容。例如：{a}：{b}。
                  //   position:// 提示框位置，可选值有 'auto'（自动计算位置）、'inside'（数据项内部）、'insideLeft'（数据项左侧）、'insideRight'（数据项右侧）、'insideTop'（数据项顶部）、'insideBottom'（数据项底部）。
                  //   backgroundColor: //提示框背景颜色。
                  //   borderColor: //提示框边框颜色。
                  //   borderWidth:0.1 //提示框边框宽度。
                  //   padding: //提示框内边距。
                  //   shadowColor: //提示框阴影颜色。
                  //   shadowBlur: //提示框阴影模糊大小。
                  //   shadowOffsetX: //提示框阴影水平偏移。
                  //   shadowOffsetY: //提示框阴影垂直偏移。
                  //   textStyle: //提示框文本样式，包括字体大小、颜色等。
                  //   extraCssText:// 附加的 CSS 样式。
              },




              xAxis: {
                  type: 'category',
                  data: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  

                  {
                      data: [2000, 3000, 6500, 3800, 4200, 2000, 4000, 5000, 5250, 3800, 4200, 2000],
                      type: 'bar',
                      stack: 'x',
                      color: ['#4C56FF'],
                      barWidth: '20%',
                      barCategoryGap: '600%'
                  },
                  {
                      data: [200, 300, 650, 380, 420, 200, 400, 500, 525, 380, 420, 200],
                      type: 'bar',
                      stack: 'x',
                      color: ['#D1E4FF'],

                  }


              ]


          }
      }
  },

  watch: {},

  created() {
  },

  mounted() {
      let chartDom = document.getElementById('lineDemo')
      let myChart = this.$echarts.init(chartDom)
      myChart.clear()
      myChart.setOption(this.option)
  },

  methods: {}
};
</script>

<style scoped>
.echart {
    width: 80%;
    height: 300px;

}
</style>
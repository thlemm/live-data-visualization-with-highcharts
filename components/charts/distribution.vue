<template>
  <v-layout>
    <v-container>
      <highcharts :options="chartOptions" ref="histogram" />
    </v-container>
  </v-layout>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart 
  },
  props: {
    distData: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    moranI: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      chartOptions: {
        credits: {
          enabled: false
        },
        title: '',
        chart: {
          height: 200
        },
        legend: {
          visible: false
        },
        xAxis: [
          {
            min: -1,
            max: 1,
            type: 'linear',
            title: {
              text: 'I'
            },
            labels: {
              style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
              }
            },
            plotLines: [{
              color: '#ca2644',
              width: 2,
              value: 0
            }]
          },
          {
            type: 'category',
            visible: false
          }
        ],
        yAxis: {
          min: 0,
          title: {
              text: ''
          },
          labels: {
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          },
        },
        plotOptions: {
          series: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
          }
        },
        series: [{
          type: 'spline',
          showInLegend: false,  
          data: [],
          xAxis: 0
        },{
          type: 'column',
          showInLegend: false,
          color: '#c4dfda',
          data: [{ x: 0, y: 0, id: 'id-0'},{ x: 1, y: 0, id: 'id-1'},{ x: 2, y: 0, id: 'id-2'},{ x: 3, y: 0, id: 'id-3'},{ x: 4, y: 0, id: 'id-4'},{ x: 5, y: 0, id: 'id-5'},{ x: 6, y: 0, id: 'id-6'},{ x: 7, y: 0, id: 'id-7'},{ x: 8, y: 0, id: 'id-8'},{ x: 9, y: 0, id: 'id-9'},{ x: 10, y: 0, id: 'id-10'},{ x: 11, y: 0, id: 'id-11'},{ x: 12, y: 0, id: 'id-12'},{ x: 13, y: 0, id: 'id-13'},{ x: 14, y: 0, id: 'id-14'},{ x: 15, y: 0, id: 'id-15'},{ x: 16, y: 0, id: 'id-16'},{ x: 17, y: 0, id: 'id-17'},{ x: 18, y: 0, id: 'id-18'},{ x: 19, y: 0, id: 'id-19'},{ x: 20, y: 0, id: 'id-20'},{ x: 21, y: 0, id: 'id-21'},{ x: 21, y: 0, id: 'id-22'},{ x: 21, y: 0, id: 'id-23'},{ x: 21, y: 0, id: 'id-24'},{ x: 21, y: 0, id: 'id-25'},{ x: 21, y: 0, id: 'id-26'},{ x: 21, y: 0, id: 'id-27'},{ x: 21, y: 0, id: 'id-28'},{ x: 21, y: 0, id: 'id-29'},{ x: 21, y: 0, id: 'id-30'},{ x: 21, y: 0, id: 'id-31'},{ x: 21, y: 0, id: 'id-32'},{ x: 21, y: 0, id: 'id-33'},{ x: 21, y: 0, id: 'id-34'},{ x: 21, y: 0, id: 'id-35'},{ x: 21, y: 0, id: 'id-36'},{ x: 21, y: 0, id: 'id-37'},{ x: 21, y: 0, id: 'id-38'},{ x: 21, y: 0, id: 'id-39'},{ x: 21, y: 0, id: 'id-40'},],
          xAxis: 1
        }]
      }
    }
  },
  mounted () {
  },
  watch: {
    distData () {
      this.$refs["histogram"].chart.xAxis[0].options.plotLines[0].value = this.moranI
      this.$refs["histogram"].chart.xAxis[0].update()

      this.$refs["histogram"].chart.series[1].setData(this.distData, true, true, true);
    }
  }
}
</script>

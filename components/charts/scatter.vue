<template>
  <v-layout>
    <v-container>
      <highcharts ref="scatterplot" :options="chartOptions" />
    </v-container>
  </v-layout>
</template>

<script>
import { Chart } from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart
  },
  props: {
    scatterData: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    lineData: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    slope: {
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
        chart: {
          type: 'scatter',
          zoomType: 'xy',
          height: 370
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          title: {
            enabled: true,
            text: 'y'
          },
          startOnTick: true,
          endOnTick: true,
          plotLines: [{
            color: '#000000',
            width: 2,
            value: 0
          }]
        },
        yAxis: {
          title: {
            text: 'Wy'
          },
          startOnTick: true,
          endOnTick: true,
          plotLines: [{
            color: '#000000',
            width: 2,
            value: 0
          }]
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: '#d67385'
                }
              }
            },
            states: {
              hover: {
                marker: {
                  enabled: false
                }
              }
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x} y, {point.y} Wy'
            }
          },
          line: {
            marker: {
              enabled: false
            }
          }
        },
        series: [{
          type: 'line',
          showInLegend: false,
          color: '#559b8e',
          data: [{ x: 0, y: 0, id: 'id-0' }, { x: 0, y: 0, id: 'id-1' }]
        }, {
          type: 'scatter',
          showInLegend: false,
          color: 'rgba(223, 83, 83, .5)',
          data: []
        }]
      }
    }
  },
  watch: {
    lineData () {
      this.$refs.scatterplot.chart.series[0].setData(this.lineData, true, true, true)
    },
    scatterData () {
      this.$refs.scatterplot.chart.series[1].setData(this.scatterData, true, true, true)
    }
  }
}
</script>

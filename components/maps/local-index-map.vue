<template>
  <v-layout>
    <v-container>
      <highcharts ref="map" :constructor-type="'mapChart'" :options="mapOptions" class="map" />
    </v-container>
  </v-layout>
</template>

<script>
import { Chart } from 'highcharts-vue'
import Highcharts from 'highcharts'
import json from '@/static/taxi_zones.json'

export default {
  components: {
    highcharts: Chart
  },
  props: {
    moranData: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    pvaluesLocal: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      mapData: undefined,
      mapOptions: {
        credits: {
          enabled: false
        },
        chart: {
          height: 722
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        colorAxis: {
          min: -5,
          max: 20,
          tickInterval: 2,
          stops: [[0, '#006165'], [0.16, '#639D9F'], [0.225, '#f7f7f7'], [0.28, '#C7949C'], [0.4, '#B0636E'], [0.6, '#983141'], [1, '#800013']],
          labels: {
            format: '{value}'
          }
        },
        legend: {
          title: {
            text: 'Lokaler erweiterter Moran-Koeffizient',
            style: 'serif'
          },
          align: 'right',
          verticalAlign: 'top',
          y: 600,
          floating: true,
          borderWidth: 0,
          backgroundColor: 'white'
        },
        tooltip: {
          headerFormat: '<b>LISA</b><br>',
          pointFormat: 'value: {point.value}<br>zone: {point.properties.zone} ({point.properties.LocationID})'
        },
        series: [{
          mapData: Highcharts.geojson(json),
          data: [[1, 0], [15, 0.5], [16, 4], [17, 10], [18, 15], [19, -2]],
          // data: [{LocationID: 1, value: 0.5},{LocationID: 15, value: 1},{LocationID: 16, value: 3},{LocationID: 17, value: 5}],
          keys: ['LocationID', 'value'],
          joinBy: 'LocationID',
          name: 'NYC',
          borderWidth: 0.5,
          dataLabels: {
            enabled: false,
            format: '{point.properties.LocationID}'
          }
        }]
      }
    }
  },
  watch: {
    moranData () {
      // eslint-disable-next-line dot-notation
      this.$refs['map'].chart.series[0].setData(this.moranData, false, true, true)

      // var i
      // for (i=0; i<263; i++) {
      //   if (this.pvaluesLocal[i][1] <= 0.01) {
      //     this.updateBorder(i)
      //   }
      // }
      // eslint-disable-next-line dot-notation
      this.$refs['map'].chart.redraw()
    }
  },
  mounted () {
    // this.$refs["map"].chart.series[1].update({
    //     borderWidth: 3,
    //     borderColor: '#FFFFFF'
    //   })
  },
  methods: {
    updateBorder (val) {
      // eslint-disable-next-line dot-notation
      this.$refs['map'].chart.series[0].data[val].update({
        borderWidth: 0.5,
        borderColor: '#000000'
      }, false)
    }
  }
}
</script>

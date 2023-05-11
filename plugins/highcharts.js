import Vue from 'vue'
import Highcharts from "highcharts"
import Maps from "highcharts/modules/map"
import ExportingHighcharts from "highcharts/modules/exporting"
import ExportingOfflineHighcharts from "highcharts/modules/offline-exporting"
import HighchartsVue from 'highcharts-vue'

// ExportingHighcharts(Highcharts)
// ExportingOfflineHighcharts(Highcharts)
Maps(Highcharts)
Vue.use(HighchartsVue, { Highcharts: Highcharts })

<template>
  <div id="wrapper">
 <sideBar></sideBar>
     <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
       <!-- Main Content -->
      <div id="content">
      <navbar>    
      </navbar>
       <div class="container-fluid">
           <div id="content">
             <!-- Content Row -->
             <h1 class="h3 mb-2 text-gray-800">Cuentas Por Cobrar</h1>
            <div class="row">

              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Por Cobrar</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{sumarTotalCobrar}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{sumarTotalCobrarUS}}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Vencido</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{sumarTotalVencido}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{sumarTotalVencidoUS}}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Por Vencer</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{sumarTotalPorVencer}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{sumarTotalPorVencerUS}}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pending Requests Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Dudosa</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{sumarTotalDudosa}}</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{sumarTotalDudosaUS}}</div>
                      </div>
                      <div class="col-auto">
                        <i class="fa fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Row -->
            <div class="row">
            </div>
        </div>
        <!-- /.container-fluid -->
          </div>
          <el-container>
            <el-main>
                <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Dashboard">
          <el-row :gutter="24">
            <el-col :span="24">
            <el-card shadow="hover" class="highcharts-figure">
              <highcharts :options="chartOptions1"></highcharts>
              <p class="highcharts-description"></p>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card shadow="hover" class="highcharts-figure">
              <highcharts :options="chartOptions2"></highcharts>
              <p class="highcharts-description"></p>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card shadow="hover" class="highcharts-figure">
              <highcharts :options="chartOptions3"></highcharts>
              <p class="highcharts-description"></p>
            </el-card>
          </el-col>  
          </el-row>
          </el-tab-pane>
          <el-tab-pane label="Resumen">
      <el-tabs v-model="activeNameDaily">
                      <el-tab-pane label="Soles" name ="first">
                        <div v-loading="loading">
                          <el-table :data="items_Soles" 
                          :summary-method="getSummaries"
                                  show-summary
                                  :default-sort="{prop: 'neto_cobrar', order: 'descending'}"
                                  style="width: 100%"
                                  size="small">
                            <el-table-column prop="razon_social" label="Razón Social" sortable></el-table-column>
                            <el-table-column prop="neto_cobrar" label="Neto Por Cobrar S/" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_cuenta" label="A Cuenta S/" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_saldo" label="Por Cobrar S/" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_por_vencer_soles" label="Por Vencer S/" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_vencido_soles" label="Vencido S/" align="center" sortable></el-table-column>
                          <el-table-column prop="neto_dudosa_soles" label="Dudosa S/" align="center" sortable></el-table-column>
                          </el-table>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="Dólares" name ="second">
                        <div v-loading="loading">
                          <el-table :data="items_Dolares" 
                          :summary-method="getSummaries"
                                  show-summary
                                  :default-sort="{prop: 'neto_cobrar_dolares', order: 'descending'}"
                                  style="width: 100%"
                                  size="small">
                            <el-table-column prop="razon_social" label="Razón Social" sortable></el-table-column>
                            <el-table-column prop="neto_cobrar_dolares" label="Neto Por Cobrar US$" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_cuenta_dolares" label="A Cuenta US$" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_saldo_dolares" label="Por Cobrar US$" align="center" sortable></el-table-column>
                          <el-table-column prop="neto_por_vencer_dolares" label="Por Vencer US$" align="center" sortable></el-table-column>
                            <el-table-column prop="neto_vencido_dolares" label="Vencido US$" align="center" sortable></el-table-column>
                          <el-table-column prop="neto_dudosa_dolares" label="Dudosa US$" align="center" sortable></el-table-column>
                          </el-table>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
          </el-tab-pane>
        </el-tabs>
            </el-main>  
      </el-container>
  </div>
  </div>
</div>
</template>
<style>
.el-container {
   position: relative;
   height: 100%;
   width: 100%;
  }
.box {
    position: relative;
    border-radius: 4px;
    padding: 5px;
    margin: 5px 0;
    height: 200px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
}
  .text {
    font-size: 18px;
  }

  .item {
    margin-bottom: 18px;
  }

 .main-container {
   text-align: center;
   margin-top: 400px;
   min-height: 50vh;
 }

 .highcharts-figure, .highcharts-data-table table {
    min-width: 320px; 
    max-width: 660px;
    margin: 1em auto;
}

.highcharts-data-table table {
	font-family: Verdana, sans-serif;
	border-collapse: collapse;
	border: 1px solid #EBEBEB;
	margin: 10px auto;
	text-align: center;
	width: 100%;
	max-width: 600px;
}
.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}
.highcharts-data-table th {
	font-weight: 600;
    padding: 0.5em;
}
.highcharts-data-table td, .highcharts-data-table th, .highcharts-data-table caption {
    padding: 0.5em;
}
.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}
.highcharts-data-table tr:hover {
    background: #f1f7ff;
}
</style>

<script>
import axios from "axios";
import {  Navbar,  SideBar } from '@/layouts/components'

export default {
  name: "AccountsReceivableIndex",
  components: {      
    Navbar,
    SideBar
    },
  data() {
    return {
      loading: false,      
      items_Soles: [],  
      items_Dolares: [],      
      value:"",
      value1:"",
      activeNameDaily: 'first',
      dialogTableVisible: false,
      total_facturado : 0,
      total_pagado: 0,
      total_cobrar: 0,
      total_por_vencer: 0,
      total_vencido: 0,
      total_dudosa: 0,
      total_facturado_dolares : 0,
      total_pagado_dolares: 0,
      total_cobrar_dolares: 0,
      total_por_vencer_dolares: 0,
      total_vencido_dolares: 0,
      total_dudosa_dolares:0,    
      data_1: [],  
      data_2: [],  
      data_3: [],  
      chartOptions1: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: true,
          type: 'pie'
        },    
        title: {
          text: 'Cobranzas Vencidas'
        },    
        tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
                showInLegend: true
            }
        },
        series: [{
          name: '',
          colorByPoint: true,
          data: []
        }]
      },
      chartOptions2: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: true,
          type: 'pie'
        },
        title: {
          text: 'Cobranzas Por Vencer'
        },
        tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
                showInLegend: true
            }
        },
        series: [{
          name: '',
          colorByPoint: true,
          data: []
        }]
      },
      chartOptions3: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: true,
          type: 'pie'
        },
        title: {
          text: 'Cobranzas Dudosa'
        },
        tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
                showInLegend: true
            }
        },
        series: [{
          name: '',
          colorByPoint: true,
          data: []
        }]
      },
      title: ''
    };
  },
  async created() {    
     this.getAccounts_Soles(["19/06/2020", "19/06/2020"]);
     this.getAccounts_Dolares(["19/06/2020", "19/06/2020"]);
     this.fetchDataAccountExpired();
     this.fetchDataAccountToPay();
     this.fetchDataAccountIndefinite();
  },  
  methods: {
    fetchDataAccountExpired() {
      let self = this;
      axios.get('http://104.248.8.139/dashboardReceivable/accountExpired/')
      .then(response => {
      self.data_1 = response.data
      var DataX_1 = []
      var dataJSON = this.data_1
      for (var i = 0; i < dataJSON.length; i++) {
                DataX_1.push({
                  name: dataJSON[i].razon_social,
                  y: dataJSON[i].neto_vencido_soles
                });
            }
      this.chartOptions1.series[0].data = DataX_1
      })
    },
    fetchDataAccountToPay() {
      let self = this;
      axios.get('http://104.248.8.139/dashboardReceivable/accountToPay/')
      .then(response => {
      self.data_2 = response.data
      var DataX_2 = []
      var dataJSON = this.data_2
      for (var i = 0; i < dataJSON.length; i++) {
                DataX_2.push({
                  name: dataJSON[i].razon_social,
                  y: dataJSON[i].neto_porvencer_soles
                });
            }
      this.chartOptions2.series[0].data = DataX_2
      })
    },
    fetchDataAccountIndefinite() {
      let self = this;
      axios.get('http://104.248.8.139/dashboardReceivable/accountIndefinite/')
      .then(response => {
      self.data_3 = response.data
      var DataX_3 = []
      var dataJSON = this.data_3
      for (var i = 0; i < dataJSON.length; i++) {
                DataX_3.push({
                  name: dataJSON[i].razon_social,
                  y: dataJSON[i].neto_dudosa_soles
                });
            }
      this.chartOptions3.series[0].data = DataX_3
      })
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getAccounts_Soles(value) { 
      if (value == undefined) return;
      this.value = value; 
      let self = this;
      self.loading = true;
      self.$store.state.services.accountsReceivableService
        .getAll(value[0], value[1], "01")
        .then(r => {
          self.loading = false;
          self.items_Soles = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getAccounts_Dolares(value) { 
      if (value == undefined) return;
      this.value = value; 
      let self = this;
      self.loading = true;
      self.$store.state.services.accountsReceivableService
        .getAll(value[0], value[1], "02")
        .then(r => {
          self.loading = false;
          self.items_Dolares = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total : ";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] =
            " " +
            values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0).toFixed(2);
        } else {
          sums[index] = "";
        }
      });

      return sums;
    }
  },
  computed : {
    sumarTotalFacturado () {
        var datosJSON = this.items_Soles;
          for(let i of datosJSON){
              this.total_facturado = this.total_facturado + i.neto_cobrar;
          }
         return this.total_facturado.toFixed(2)
    },
    sumarTotalPagado () {
        var datosJSON = this.items_Soles;
          for(let i of datosJSON){
              this.total_pagado = this.total_pagado + i.neto_cuenta;
          }
         return this.total_pagado.toFixed(2)
    },
    sumarTotalPorVencer () {
        var datosJSON = this.items_Soles;
          for(let i of datosJSON){
              this.total_por_vencer = this.total_por_vencer + i.neto_por_vencer_soles;
          }
         return this.total_por_vencer.toFixed(2)
    },
    sumarTotalVencido () {
        var datosJSON = this.items_Soles;
          for(let i of datosJSON){
              this.total_vencido = this.total_vencido + i.neto_vencido_soles;
          }
         return this.total_vencido.toFixed(2)
    },
    sumarTotalCobrar () {
        var datosJSON = this.items_Soles;
          for(let i of datosJSON){
              this.total_cobrar = this.total_cobrar + i.neto_saldo;
          }
         return this.total_cobrar.toFixed(2)
    },
    sumarTotalDudosa () {
        var datosJSON = this.items_Soles;
          for(let i of datosJSON){
              this.total_dudosa = this.total_dudosa + i.neto_dudosa_soles;
          }
         return this.total_dudosa.toFixed(2)
    },
    sumarTotalFacturadoUS () {
        var datosJSON = this.items_Dolares;
          for(let i of datosJSON){
              this.total_facturado_dolares = this.total_facturado_dolares + i.neto_cobrar_dolares;
          }
         return this.total_facturado_dolares.toFixed(2)
    },
    sumarTotalPagadoUS () {
        var datosJSON = this.items_Dolares;
          for(let i of datosJSON){
              this.total_pagado_dolares = this.total_pagado_dolares + i.neto_cuenta_dolares;
          }
         return this.total_pagado_dolares.toFixed(2)
    },
    sumarTotalCobrarUS () {
        var datosJSON = this.items_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_dolares = this.total_cobrar_dolares + i.neto_saldo_dolares;
          }
         return this.total_cobrar_dolares.toFixed(2)
    },
    sumarTotalPorVencerUS () {
        var datosJSON = this.items_Dolares;
          for(let i of datosJSON){
              this.total_por_vencer_dolares = this.total_por_vencer_dolares + i.neto_por_vencer_dolares;
          }
         return this.total_por_vencer_dolares.toFixed(2)
    },
    sumarTotalVencidoUS () {
        var datosJSON = this.items_Dolares;
          for(let i of datosJSON){
              this.total_vencido_dolares = this.total_vencido_dolares + i.neto_vencido_dolares;
          }
         return this.total_vencido_dolares.toFixed(2)
    },  
    sumarTotalDudosaUS () {
        var datosJSON = this.items_Dolares;
          for(let i of datosJSON){
              this.total_dudosa_dolares = this.total_dudosa_dolares + i.neto_dudosa_dolares;
          }
         return this.total_dudosa_dolares.toFixed(2)
    },    
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    },
  },    
};
</script>
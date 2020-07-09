<template>
<el-tabs type="border-card">
  <el-tab-pane label="Vendedor">
<el-row :gutter="20">
  <el-col :span="12"><div>
    <span>Opciones :</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="-"
      start-placeholder="Fecha Inicio"
      end-placeholder="Fecha Fin"
      format="dd/MM/yyyy"
      value-format ="dd/MM/yyyy"
      :picker-options="pickerOptions"
      @change="getAll(value1)">
    </el-date-picker>
  </div>
  </el-col>
    <el-col :span="12"><div>
    
  </div>
  </el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="24">
    <div v-loading="loading">
     <el-table v-loading="loading"
    :data="data"
    :row-class-name="tableRowClassName"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px"
    >
    <el-table-column
      label="Vendedor"
      prop="vendedor">
    </el-table-column>
    <el-table-column
      label="Venta Total S/."
      sortable
      prop="total_soles">
    </el-table-column>
    <el-table-column
      label="Venta Total $"
      sortable
      prop="total_dolares">
    </el-table-column>
    <el-table-column
      align="right">
       <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Filtrar por:"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="dialogTableVisible = true">Detalle</el-button>
      </template> 
    </el-table-column>
  </el-table>
  </div>
  </el-col>
</el-row>
<el-row :gutter="20">
    <el-button type="primary" icon="el-icon-download">Descargar</el-button>
    <el-dialog title="Detalle de Ventas - Vendedor" :visible.sync="dialogTableVisible">
  <el-table>
    <el-table-column label="Fecha" width="100"></el-table-column>
    <el-table-column label="Documento" width="150"></el-table-column>
    <el-table-column label="Cliente" width="200"></el-table-column>
    <el-table-column label="SubTotal"></el-table-column>
    <el-table-column label="I.G.V."></el-table-column>
    <el-table-column label="Total S/."></el-table-column>
    <el-table-column label="Total $"></el-table-column>
  </el-table>
</el-dialog>
</el-row>
  </el-tab-pane>
  <el-tab-pane label="Dashboard">Producto
  </el-tab-pane>
</el-tabs>
</template>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
import Axios from 'axios';
export default {
  name: "SalesSellerIndex",
  data() {
    return {
      data: [],
      loading: false,
      search: '',
      value1: [new Date(), new Date()],
      dialogTableVisible: false,
      pickerOptions: {
          shortcuts: [{
            text: 'Hoy',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);}
          },
            {
            text: 'Los Últimos 7 días',
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start,end]);}
          },
          {
            text: 'Últimos 30 días',
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start,end]);}
          },
          {
            text: 'Este Mes',
            onClick(picker) {
              const start = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
              const end = new Date();
              picker.$emit('pick', [start,end]);
            }
          },
          {
            text: 'Este Año',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start,end]);
            }
          },
          {
            text: 'Rango Personalizado',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              picker.$emit('pick', [start,end]);
            }
          }
          ]
        },
      total : 0,
      totalProductos: 0
    };
  },
  created() {
     let self = this;
       self.getAll(self.$route.params.value1);
  },
  methods: {
      tableRowClassName({row, rowIndex}) {
        //   console.log(row);
        if (rowIndex === 1) {
          return 'warning-row';
        } 
        // else (rowIndex === 2) {
        //   return 'success-row';
        // }
        return '';
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    getAll(value1) {
      if(value1 == undefined) return;
      this.value1 = value1;     
      let self = this;
      self.loading = true;
      self.$store.state.services.salesSellerService
        .getAll(value1[0],value1[1])
        .then(r => {
          self.loading = false;
          self.data = r.data;
        }).catch(r => {
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
            sums[index] = 'Total de Ventas: ';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = ' ' + values.reduce((prev, curr) => {
              const value = Number(curr).toFixed(2);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = '';
          }
        });

        return sums;
      }
  },
   computed: {
        // sumarTotalSoles () {
        //     var datosJSON = this.data;
        //       for(let i of datosJSON){
        //           this.total = this.total + i.total;
        //       }
        //     return this.total.toFixed(2)
        // },
        // sumarTotalProductos(){
        //     var datosJSON = this.data;
        //       for(let i of datosJSON){
        //           this.totalProductos = this.totalProductos + i.productos;
        //       }
        //     return this.totalProductos.toFixed(2)
        // }
    }
  }
</script>
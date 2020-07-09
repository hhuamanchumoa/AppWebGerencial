
  <template>
  <div>
    <h2>Análisis de Ventas - Punto de Venta</h2>



    <div>
      <el-tabs type="border-card">
        <el-tab-pane label="Hoy">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-tabs v-model="activeNameDaily" @tab-click="handleClickDaily">
                <el-tab-pane label="Sucursal" name="first">
                  <div v-loading="loading1">
                    <el-table
                      :data="items_Dayli_Store"
                      :summary-method="getSummaries"
                      show-summary
                      :default-sort="{prop: 'total_soles', order: 'descending'}"
                      style="width: 100%"
                      size="small"
                    >
                      <el-table-column align="left" width="100">
                        <template slot-scope="scope">
                          <el-button 
                             fixed
                            size="mini"
                            type="primary"
                            @click="dialogTableVisible = true"
                          ><i class="el-icon-more"></i></el-button>
                        </template>
                      </el-table-column>
                      <el-table-column prop="sucursal" label="Sucursal" sortable></el-table-column>
                      <el-table-column prop="tickets" label="N° Tickets" align="center"></el-table-column>
                      <el-table-column prop="ticket_Promedio" label="Ticket Promedio"></el-table-column>
                      <el-table-column prop="total_soles" label="Total S/" align="center" sortable></el-table-column>
                      <el-table-column prop="total_soles_anterior" label="Ayer S/." align="center" sortable></el-table-column>
                    </el-table>
                    <el-dialog
                      title="Detalle de Ventas Diarias - Sucursal "
                      :visible.sync="dialogTableVisible"
                    >
                      <el-table>
                        <el-table-column label="Fecha" width="100"></el-table-column>
                        <el-table-column label="Documento" width="150"></el-table-column>
                        <el-table-column label="Cliente" width="200"></el-table-column>
                        <el-table-column label="SubTotal"></el-table-column>
                        <el-table-column label="I.G.V."></el-table-column>
                        <el-table-column label="Total S/."></el-table-column>
                      </el-table>
                    </el-dialog>
                  </div>
                </el-tab-pane>

                <el-tab-pane label="Vendedor" name="second">
                  <div v-loading="loading2">
                    <el-table
                      :data="items_Dayli_Seller"
                      :summary-method="getSummaries"
                      show-summary
                      :default-sort="{prop: 'total_soles', order: 'descending'}"
                      style="width: 100%"
                      size="small"
                    ><el-table-column align="left" width="100">
                        <template slot-scope="scope">
                          <el-button 
                             fixed
                            size="mini"
                            type="primary"
                            @click="dialogTableVisible = true"
                          ><i class="el-icon-more"></i></el-button>
                        </template>
                      </el-table-column>
                      <el-table-column prop="vendedor" label="Vendedor" sortable></el-table-column>
                      <el-table-column prop="tickets" label="N° Tickets" align="center"></el-table-column>
                      <el-table-column prop="ticket_Promedio" label="Ticket Promedio" align="center"></el-table-column>
                      <el-table-column prop="total_soles" label="Total S/ " align="center" sortable></el-table-column>
                      <el-table-column prop="" label="Total S/ - Anterior" align="center" sortable></el-table-column>
                    </el-table>
                     <el-dialog
                      title="Detalle de Ventas Diarias - Vendedor"
                      :visible.sync="dialogTableVisible"
                    >
                      <el-table>
                        <el-table-column label="Fecha" width="100"></el-table-column>
                        <el-table-column label="Documento" width="150"></el-table-column>
                        <el-table-column label="Cliente" width="200"></el-table-column>
                        <el-table-column label="SubTotal"></el-table-column>
                        <el-table-column label="I.G.V."></el-table-column>
                        <el-table-column label="Total S/."></el-table-column>
                      </el-table>
                    </el-dialog>
                  </div>
                </el-tab-pane>
              </el-tabs>

              <div></div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Últimos 7 Días">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-tabs v-model="activeNameWeekly" @tab-click="handleClickWeekly">
                <el-tab-pane label="Sucursal" name="third">
                  <el-collapse v-model="weekFormat" @change="getWeeklyStore(weekFormat)">
                      <el-collapse-item v-for="item in week" :key="item" v-bind:title="item" v-bind:name="item">
                        <div v-loading="loading3">
                          <el-table
                            :data="items_Weekly_Store"
                            :summary-method="getSummaries"
                            show-summary
                            :default-sort="{prop: 'total_soles', order: 'descending'}"
                            style="width: 100%"
                            size="small"
                          >
                            <el-table-column align="left" width="100">
                              <template slot-scope="scope">
                                <el-button 
                                  fixed
                                  size="mini"
                                  type="primary"
                                  @click="dialogTableVisible = true"
                                ><i class="el-icon-more"></i></el-button>
                              </template>
                            </el-table-column>
                            <el-table-column prop="sucursal" label="Sucursal" sortable></el-table-column>
                            <el-table-column prop="tickets" label="N° Tickets" align="center"></el-table-column>
                            <el-table-column prop="ticket_Promedio" label="Ticket Promedio"></el-table-column>
                            <el-table-column prop="total_soles" label="Total Soles" align="center" sortable></el-table-column>
                            <el-table-column prop="total_dolares" label="Total Dolares" align="center" sortable></el-table-column>
                          </el-table>
                          <el-dialog
                            title="Detalle de Ventas - Sucursal "
                            :visible.sync="dialogTableVisible"
                          >
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
                        </div>
                  </el-collapse-item>
                </el-collapse>
                </el-tab-pane>

                <el-tab-pane label="Vendedor" name="four">
                                    <el-collapse v-model="weekFormat" @change="getWeeklySeller(weekFormat)">
                      <el-collapse-item v-for="item in week" :key="item" v-bind:title="item" v-bind:name="item">
                        <div v-loading="loading4">
                          <el-table
                            :data="items_Weekly_Seller"
                            :summary-method="getSummaries"
                            show-summary
                            :default-sort="{prop: 'total_soles', order: 'descending'}"
                            style="width: 100%"
                            size="small"
                          >
                            <el-table-column align="left" width="100">
                              <template slot-scope="scope">
                                <el-button 
                                  fixed
                                  size="mini"
                                  type="primary"
                                  @click="dialogTableVisible = true"
                                ><i class="el-icon-more"></i></el-button>
                              </template>
                            </el-table-column>
                            <el-table-column prop="vendedor" label="Vendedor" sortable></el-table-column>
                            <el-table-column prop="tickets" label="N° Tickets" align="center"></el-table-column>
                            <el-table-column prop="ticket_Promedio" label="Ticket Promedio"></el-table-column>
                            <el-table-column prop="total_soles" label="Total Soles" align="center" sortable></el-table-column>
                            <el-table-column prop="total_dolares" label="Total Dolares" align="center" sortable></el-table-column>
                          </el-table>
                          <el-dialog
                            title="Detalle de Ventas - Vendedor "
                            :visible.sync="dialogTableVisible"
                          >
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
                        </div>
                  </el-collapse-item>
                </el-collapse>
                </el-tab-pane>
              </el-tabs>

              
            </el-col>
          </el-row>
         
        </el-tab-pane>
        <el-tab-pane label="Ventas Generales">
              <el-row :gutter="20">
      <el-col :span="12">
        <div>
          <span>Opciones :</span>
          <el-date-picker
            v-model="value3"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="-"
            start-placeholder="Fecha Inicio"
            end-placeholder="Fecha Fin"
            format="dd/MM/yyyy"
            value-format="dd/MM/yyyy"
            :picker-options="pickerOptions"
            @change="getAllSales(value3)"
          ></el-date-picker>
        </div>
      </el-col>
    </el-row>
        <el-row :gutter="20">
            <el-col :span="24">
            <div v-loading="loading5">
                          <el-table
                            :data="items_Sales_Store"
                            :summary-method="getSummaries"
                            show-summary
                            :default-sort="{prop: 'total_soles', order: 'descending'}"
                            style="width: 100%"
                            size="small"
                          >
                            <el-table-column align="left" width="100">
                              <template slot-scope="scope">
                                <el-button 
                                  fixed
                                  size="mini"
                                  type="primary"
                                  @click="dialogTableVisible5 = true"
                                ><i class="el-icon-more"></i></el-button>
                              </template>
                            </el-table-column>
                            <el-table-column prop="sucursal" label="Sucursal" sortable></el-table-column>
                            <el-table-column prop="tickets" label="N° Tickets" align="center"></el-table-column>
                            <el-table-column prop="ticket_Promedio" label="Ticket Promedio"></el-table-column>
                            <el-table-column prop="total_soles" label="Total Soles" align="center" sortable></el-table-column>
                          </el-table>
                          <el-dialog
                            title="Detalle de Ventas"
                            :visible.sync="dialogTableVisible"
                          >
                            <el-table>
                              <el-table-column label="Fecha" width="100"></el-table-column>
                              <el-table-column label="Documento" width="150"></el-table-column>
                              <el-table-column label="Cliente" width="200"></el-table-column>
                              <el-table-column label="SubTotal"></el-table-column>
                              <el-table-column label="I.G.V."></el-table-column>
                              <el-table-column label="Total S/."></el-table-column>
                            </el-table>
                          </el-dialog>
                        </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="Cuadros Comparativos">
<el-row :gutter="20">
            <el-col :span="24">
          <div>
<el-table style="width: 100%">
            <el-table-column prop="" label="Año"></el-table-column>
            <el-table-column prop="" label="Enero"> </el-table-column>
            <el-table-column prop="" label="Febrero"></el-table-column>
                 <el-table-column prop="" label="Marzo"> </el-table-column>
            <el-table-column prop="" label="Abril"></el-table-column>
                 <el-table-column prop="" label="Mayo"> </el-table-column>
            <el-table-column prop="" label="Junio"></el-table-column>
                 <el-table-column prop="" label="Julio"> </el-table-column>
            <el-table-column prop="" label="Agosto"></el-table-column>
                 <el-table-column prop="" label="Setiembre"> </el-table-column>
            <el-table-column prop="" label="Octubre"></el-table-column>
                 <el-table-column prop="" label="Noviembre"> </el-table-column>
            <el-table-column prop="" label="Diciembre"></el-table-column>
          </el-table>
            </div>
           </el-col>
          </el-row>
        </el-tab-pane>


          
        
        <el-tab-pane label="DashBoard"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
import Axios from "axios";
export default {
  name: "SalesIndex",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      items_Dayli_Store: [],
      items_Dayli_Seller: [],
      items_Weekly_Store: [],
      items_Weekly_Seller: [],
      items_Sales_Store: [],
      items_Sales_Seller: [],
      items_Sales_General: [],
      activeNameDaily: "first",
      activeNameWeekly: "third",
      dialogTableVisible: false,
      search: "",
      value1: "",
      value2: "",
      value3: [new Date(), new Date()],
      value4: "",
      week: ["12/03/2020","11/03/2020","10/03/2020","09/03/2020","08/03/2020","07/03/2020","06/03/2020"],
      weekFormat: [
        {
          title : '',
          name: ''
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "Últimos 30 días",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Este Mes",
            onClick(picker) {
              const start = new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                1
              );
              const end = new Date();
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Este Año",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Rango Personalizado",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  created() {
    let self = this;
    self.getDailyStore(["12/03/2020", "12/03/2020"]);
    self.getDailySeller(["12/03/2020", "12/03/2020"]);
    self.getWeeklyStore(self.$route.params.value2);
    self.getWeeklySeller(self.$route.params.value2);
    self.getAllSales(self.$route.params.value3[0],self.$route.params.value3[1])
  },
  methods: {
    getDailyStore(value1) {
      //  console.log(value1);
      if (value1 == undefined) return;
      this.value1 = value1;
      let self = this;
      self.loading1 = true;
      self.$store.state.services.salesService
        .getAllStore(value1[0], value1[1])
        .then(r => {
          self.loading1 = false;
          self.items_Dayli_Store = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getDailySeller(value1) {
      // console.log("VENTAS DIARIA VENDEDOR");
      if (value1 == undefined) return;
      this.value1 = value1;
      let self = this;
      self.loading2 = true;
      self.$store.state.services.salesService
        .getAllSeller(value1[0], value1[1])
        .then(r => {
          self.loading2 = false;
          self.items_Dayli_Seller = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getWeeklyStore(value2) {
        // console.log(value2[1]);
      if (value2 == undefined) return;
      this.value2 = value2;
      let self = this;
      self.loading3 = true;
      self.$store.state.services.salesService
        .getAllStore(value2[1], value2[1])
        .then(r => {
          self.loading3 = false;
          self.items_Weekly_Store = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getWeeklySeller(value2) {
      if (value2 == undefined) return;
      this.value2 = value2;
      let self = this;
      self.loading4 = true;
      self.$store.state.services.salesService
        .getAllSeller(value2[1], value2[1])
        .then(r => {
          self.loading4 = false;
          self.items_Weekly_Seller = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getAllSales(value3) {
      console.log(value3);
      if(value3 == undefined) return;
      this.value3 = value3;     
      let self = this;
      self.loading5 = true;
      self.$store.state.services.salesService
        .getAllStore(value3[0],value3[1])
        .then(r => {
          self.loading5 = false;
          self.items_Sales_Store = r.data;
        }).catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getAllComparative(value4) {
      console.log(value4);
      if(value4 == undefined) return;
      this.value4 = value4;     
      let self = this;
      self.loading6 = true;
      self.$store.state.services.salesService
        .getAllStore(value4[0],value4[1])
        .then(r => {
          self.loading6 = false;
          self.items_Sales_Store = r.data;
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
          sums[index] = "Total : ";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] =
            " " +
            values.reduce((prev, curr) => {
              const value = Number(curr).toFixed(2);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
        } else {
          sums[index] = "";
        }
      });

      return sums;
    },
    handleClickDaily(tab, event) {
      console.log(tab, event);
    },
    handleClickWeekly(tab, event) {
      console.log(tab, event);
    },
    weekLabel(){
      let current = new Date();
      console.log(current)
      if(current.getDay() == 0){//En los casos en que es domingo, restar como si fuera septimo dia y no cero
          current.setDate(((current.getDate() - 7) + 1));
      }else{
          current.setDate(((current.getDate() - current.getDay()) + 1));
      }
      for (let i = 0; i < 7; i++) {
          this.week.push(new Date(current));
          current.setDate(current.getDate()+1);
      }
      this.week.forEach((w) => {
          this.weekFormat.push(moment(w).format('DD/MM/YYYY'));
      });
      return this.weekFormat;
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
};
</script>
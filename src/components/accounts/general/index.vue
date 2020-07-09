<template>
<div id="wrapper">
   <sideBar></sideBar>
    <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
           <!-- Main Content -->
        <div id="content">
        <navbar></navbar>
            <div class="container-fluid">
              <h1 class="h3 mb-2 text-gray-800">Cuentas Por Cobrar</h1>
 <!-- Content Row -->
                  <div class="row">
                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                      <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Por Cobrar</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoCobrar_Saldo}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoCobrar_Saldo}}</div>
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
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoCobrar_Vencido}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoCobrar_Vencido_US}}</div>
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
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoCobrar_Por_Vencer}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoCobrar_Por_Vencer_US}}</div>
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
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoCobrar_Dudosa}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoCobrar_Dudosa_US}}</div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-calendar fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              <h1 class="h3 mb-2 text-gray-800">Cuentas Por Pagar</h1>
 <!-- Content Row -->
                  <div class="row">
                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                      <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Por Pagar</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoPagar_Saldo}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoPagar_Saldo_US}}</div>
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
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoPagar_Vencido}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoPagar_Vencido_US}}</div>
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
                              <div class="h5 mb-0 font-weight-bold text-gray-800">S/. {{totalNetoPagar_Por_Vencer}}</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">US$. {{totalNetoPagar_Por_Vencer_US}}</div>
                            </div>
                            <div class="col-auto">
                              <i class="fa fa-calendar fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div> 
        </div>
      </div>
</div>
</template>
<style>
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
</style>

<script>

import axios from "axios";
import {  Navbar,  SideBar } from '@/layouts/components'

export default {
  name: "AccountsGeneralIndex",
  components: {
      Navbar,
      SideBar
    },
  data() {
    return {
      loading: false,      
      items_Cobrar_Soles: [],  
      items_Cobrar_Dolares: [],  
      items_Pagar_Soles: [],  
      items_Pagar_Dolares: [],
      value:"",
      value1:"",   
      total_cobrar : 0,
      total_cobrar_cuenta: 0,
      total_cobrar_saldo: 0,
      total_cobrar_por_vencer: 0,
      total_cobrar_vencido: 0,
      total_cobrar_dudosa: 0,
      total_cobrar_dolares : 0,
      total_cobrar_cuenta_dolares: 0,
      total_cobrar_saldo_dolares: 0,
      total_cobrar_por_vencer_dolares: 0,
      total_cobrar_vencido_dolares: 0,
      total_cobrar_dudosa_dolares:0,

      total_pagar : 0,
      total_pagar_cuenta: 0,
      total_pagar_saldo: 0,
      total_pagar_por_vencer: 0,
      total_pagar_vencido: 0,     
      total_pagar_dolares : 0,
      total_pagar_cuenta_dolares: 0,
      total_pagar_saldo_dolares: 0,
      total_pagar_por_vencer_dolares: 0,
      total_pagar_vencido_dolares: 0,
     

      height: 300     
    };
  },
  created() {
     let self = this;
     self.getAccountsReceivable_Soles(["19/06/2020", "19/06/2020"]);
     self.getAccountsReceivable_Dolares(["19/06/2020", "19/06/2020"]);
     self.getAccountsPay_Soles(["19/06/2020", "19/06/2020"]);
     self.getAccountsPay_Dolares(["19/06/2020", "19/06/2020"]);
  },  
  methods: {
    getAccountsReceivable_Soles(value) { 
      if (value == undefined) return;
      this.value = value; 
      let self = this;
      self.loading = true;
      self.$store.state.services.accountsReceivableService
        .getAll(value[0], value[1], "01")
        .then(r => {
          self.loading = false;
          self.items_Cobrar_Soles = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getAccountsReceivable_Dolares(value) { 
      if (value == undefined) return;
      this.value = value; 
      let self = this;
      self.loading = true;
      self.$store.state.services.accountsReceivableService
        .getAll(value[0], value[1], "02")
        .then(r => {
          self.loading = false;
          self.items_Cobrar_Dolares = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getAccountsPay_Soles(value) {       
      if (value == undefined) return;
      this.value = value; 
      let self = this;
      self.loading = true;
      self.$store.state.services.accountsPayService
        .getAll(value[0], value[1], "01")
        .then(r => {
          self.loading = false;
          self.items_Pagar_Soles = r.data;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    getAccountsPay_Dolares(value) {       
      if (value == undefined) return;
      this.value = value; 
      let self = this;
      self.loading = true;
      self.$store.state.services.accountsPayService
        .getAll(value[0], value[1], "02")
        .then(r => {
          self.loading = false;
          self.items_Pagar_Dolares = r.data;          
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    } 
  },
  computed : {
    totalNetoCobrar () {
        var datosJSON = this.items_Cobrar_Soles;
          for(let i of datosJSON){
              this.total_cobrar = this.total_cobrar + i.neto_cobrar;
          }
         return this.total_cobrar.toFixed(2)
    },
    totalNetoCobrar_Cuenta () {
        var datosJSON = this.items_Cobrar_Soles;
          for(let i of datosJSON){
              this.total_cobrar_cuenta = this.total_cobrar_cuenta + i.neto_cuenta;
          }
         return this.total_cobrar_cuenta.toFixed(2)
    },
    totalNetoCobrar_Saldo () {
        var datosJSON = this.items_Cobrar_Soles;
          for(let i of datosJSON){
              this.total_cobrar_saldo = this.total_cobrar_saldo + i.neto_saldo;
          }
         return this.total_cobrar_saldo.toFixed(2)
    },
    totalNetoCobrar_Vencido () {
        var datosJSON = this.items_Cobrar_Soles;
          for(let i of datosJSON){
              this.total_cobrar_vencido = this.total_cobrar_vencido + i.neto_vencido_soles;
          }
         return this.total_cobrar_vencido.toFixed(2)
    },
    totalNetoCobrar_Por_Vencer () {
        var datosJSON = this.items_Cobrar_Soles;
          for(let i of datosJSON){
              this.total_cobrar_por_vencer = this.total_cobrar_por_vencer + i.neto_por_vencer_soles;
          }
         return this.total_cobrar_por_vencer.toFixed(2)
    },
    totalNetoCobrar_Dudosa () {
        var datosJSON = this.items_Cobrar_Soles;
          for(let i of datosJSON){
              this.total_cobrar_dudosa = this.total_cobrar_dudosa + i.neto_dudoda_soles;
          }
         return this.total_cobrar_dudosa.toFixed(2)
    },
    totalNetoCobrar_US () {
        var datosJSON = this.items_Cobrar_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_dolares = this.total_cobrar_dolares + i.neto_cobrar_dolares;
          }
         return this.total_cobrar_dolares.toFixed(2)
    },
    totalNetoCobrar_Cuenta_US () {
        var datosJSON = this.items_Cobrar_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_cuenta_dolares = this.total_cobrar_cuenta_dolares + i.neto_cuenta_dolares;
          }
         return this.total_cobrar_cuenta_dolares.toFixed(2)
    },
    totalNetoCobrar_Saldo_US () {
        var datosJSON = this.items_Cobrar_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_saldo_dolares = this.total_cobrar_saldo_dolares + i.neto_saldo_dolares;
          }
         return this.total_cobrar_saldo_dolares.toFixed(2)
    },
    totalNetoCobrar_Vencido_US () {
        var datosJSON = this.items_Cobrar_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_vencido_dolares = this.total_cobrar_vencido_dolares + i.neto_vencido_dolares;
          }
         return this.total_cobrar_vencido_dolares.toFixed(2)
    },
    totalNetoCobrar_Por_Vencer_US () {
        var datosJSON = this.items_Cobrar_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_por_vencer_dolares = this.total_cobrar_por_vencer_dolares + i.neto_por_vencer_dolares;
          }
         return this.total_cobrar_por_vencer_dolares.toFixed(2)
    },  
    totalNetoCobrar_Dudosa_US () {
        var datosJSON = this.items_Cobrar_Dolares;
          for(let i of datosJSON){
              this.total_cobrar_dudosa_dolares = this.total_cobrar_dudosa_dolares + i.neto_dudosa_dolares;
          }
         return this.total_cobrar_dudosa_dolares.toFixed(2)
    },

    totalNetoPagar () {
        var datosJSON = this.items_Pagar_Soles;
          for(let i of datosJSON){
              this.total_pagar = this.total_pagar + i.neto_pagar;
          }
         return this.total_pagar.toFixed(2)
    },
    totalNetoPagar_Cuenta () {
        var datosJSON = this.items_Pagar_Soles;
          for(let i of datosJSON){
              this.total_pagar_cuenta = this.total_pagar_cuenta + i.neto_cuenta;
          }
         return this.total_pagar_cuenta.toFixed(2)
    },
    totalNetoPagar_Saldo () {
        var datosJSON = this.items_Pagar_Soles;
          for(let i of datosJSON){
              this.total_pagar_saldo = this.total_pagar_saldo + i.neto_saldo;
          }
         return this.total_pagar_saldo.toFixed(2)
    },
    totalNetoPagar_Vencido () {
        var datosJSON = this.items_Pagar_Soles;
          for(let i of datosJSON){
              this.total_pagar_vencido = this.total_pagar_vencido + i.neto_vencido_soles;
          }
         return this.total_pagar_vencido.toFixed(2)
    },
    totalNetoPagar_Por_Vencer () {
        var datosJSON = this.items_Pagar_Soles;
          for(let i of datosJSON){
              this.total_pagar_por_vencer = this.total_pagar_por_vencer + i.neto_por_vencer_soles;
          }
         return this.total_pagar_vencido.toFixed(2)
    },
    totalNetoPagar_US () {
        var datosJSON = this.items_Pagar_Dolares;
          for(let i of datosJSON){
              this.total_pagar_dolares = this.total_pagar_dolares + i.neto_pagar_dolares;
          }
         return this.total_pagar_dolares.toFixed(2)
    },
    totalNetoPagar_Cuenta_US () {
        var datosJSON = this.items_Pagar_Dolares;
          for(let i of datosJSON){
              this.total_pagar_cuenta_dolares = this.total_pagar_cuenta_dolares + i.neto_cuenta_dolares;
          }
         return this.total_pagar_cuenta_dolares.toFixed(2)
    },
    totalNetoPagar_Saldo_US () {
        var datosJSON = this.items_Pagar_Dolares;
          for(let i of datosJSON){
              this.total_pagar_saldo_dolares = this.total_pagar_saldo_dolares + i.neto_saldo_dolares;
          }
         return this.total_pagar_saldo_dolares.toFixed(2)
    },
    totalNetoPagar_Vencido_US () {
        var datosJSON = this.items_Pagar_Dolares;
          for(let i of datosJSON){
              this.total_pagar_vencido_dolares = this.total_pagar_vencido_dolares + i.neto_vencido_dolares;
          }
         return this.total_pagar_vencido_dolares.toFixed(2)
    },
    totalNetoPagar_Por_Vencer_US () {
        var datosJSON = this.items_Pagar_Dolares;
          for(let i of datosJSON){
              this.total_pagar_por_vencer_dolares = this.total_pagar_por_vencer_dolares + i.neto_por_vencer_dolares;
          }
         return this.total_pagar_por_vencer_dolares.toFixed(2)
    }  
  }
};
</script>
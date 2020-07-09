<template >
<el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
     <template c>
         <el-submenu :index="i.toString()" v-if="item.children !== undefined">
              <template slot="title"> 
                 <i :class="'fa fa-' + item.icon"></i>
                 <span>{{ item.text }}</span>
              </template>
             <el-menu-item-group title="Opciones">
                 <el-menu-item v-for="child, c in item.children" :index="(i.toString() + c)" @click="redirect(child.path)">
                     <i :class="'fa fa-' + child.icon"></i> <span>{{ child.text }}</span>
                 </el-menu-item>
             </el-menu-item-group>    
         </el-submenu>
         <el-menu-item index="2" v-if="item.children === undefined" @click="redirect(item.path)">
             <i :class="'fa fa-' + item.icon"></i>
             <span>{{ item.text }}</span>
         </el-menu-item>
     </template>
</el-menu>
</template>



<script>
  export default {
    name: "NavegationMenu",
    data: () => ({
    loading : false,
    items: [
      {
        icon: "line-chart",
        text: "Análisis Comercial",
        children: [
          { icon: "file", text: "Ventas", path: "/sales" }
          ]
      },
      {
        icon: "area-chart",
        text: "Análisis Contable",
         children: [
            { icon: "list", text: "Resumen", path: "/accountsGeneral" },
          { icon: "list", text: "Cuentas Por Cobrar", path: "/accountsReceivable" },
          { icon: "list", text: "Cuentas Por Pagar", path: "/accountsPay" },
          { icon: "list", text: "Dashboard", path: "/accountsDashboard" }
        ]
      },
      {
        icon: "wrench",
        text: "Configuración",
        children: [
          { icon: "list", text: "Opción 1", path: "/configuration/opcion1" },
          { icon: "list", text: "Opción 2", path: "/configuration/opcion2" }
        ]
      },
      {
        icon: "user",
        text: "Usuario",
        children: [
         { icon: "plus", text: "Agregar", path: "/user/add" },
         { icon: "list", text: "Listar", path: "/user" }
        ]
      }
    ],
    isCollapse : true
  }),
     methods: {
      redirect(path) {
      if(path === undefined) return;
      this.$router.push(path);
    },
      handleOpen(key, keyPath) {
              console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
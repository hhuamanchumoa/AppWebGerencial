<template>
<div>
    <h2>{{ pageTitle }}</h2>
    <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm">
      <el-form-item label="Nombre" prop="firstName">
        <el-input v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Apellido" prop="lastName">
        <el-input v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Acerca de mí" prop="firstName">
        <el-input type="textarea" v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="save" type="primary">Guardar</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
  name: "UserCreateOrUpdate",
  data() {
    return {
      loading: false,
      form: {
        userId: 0,
        firstName: null,
        lastName: null
       
      },
      rules: {
        firstName: [
          { required: true, message: "Debe ingresar un nombre" },
          { min: 3, message: "Debe contener como mínimo 3 caracteres" }
        ],
        lastName: [{ required: true, message: "El apellido es requerido" }]
        
      }
    };
  },
  computed: {
    pageTitle() {
      return this.form.userId === 0 ? "Nuevo Usuario" : "Actualizar Usuario";
    }
  },
  created() {
     let self = this;
     self.get(self.$route.params.id);
  },
  methods: {
    get(id) {
      if(id == undefined) return;
      let self = this;
      self.loading = true;
      self.$store.state.services.userService
        .get(id)
        .then(r => {
          self.loading = false;
          self.form.userId = r.data.id;
          self.form.firstName = r.data.firstName;
          self.form.lastName = r.data.lastName;
        })
        .catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    },
    save() {
      let self = this;
      self.$refs["ruleForm"].validate(valid => {
        if (valid) {
          self.loading = true;
          if(self.form.userId > 0) {
            self.$store.state.services.userService
            .update(self.form)
            .then(r => {
              self.loading = false;
              self.$router.push('/user');
            })
            .catch(r => {
              self.$message({
                message: "Ocurrió un error inesperado",
                type: "error"
              });
            });
          } else {
            self.$store.state.services.userService
              .add(self.form)
              .then(r => {
                self.loading = false;
                self.$router.push('/user');
              })
              .catch(r => {
                self.$message({
                  message: "Ocurrió un error inesperado",
                  type: "error"
                });
              });
          }
        }
      });
    }
  }
};
</script>
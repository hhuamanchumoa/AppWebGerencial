<template>
  <div class="login">
    
    <el-card>
      <logo></logo>
      <h2 style="text-align: center;">Inicia Sesión</h2>
      <el-form
        class="login-form"
        v-loading="loading"
        :model="form"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="form.username" 
          placeholder="Ingresa tu Usuario">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="Ingresa tu Contraseña"
            type="password"            
            show-password
          >
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            @click="login"
            >Login</el-button>
        </el-form-item>
        <a class="forgot-password" href="">Olvidaste tu Contraseña</a>
      </el-form>
    </el-card>
  </div>
</template>
<script>

import  Logo from '@/components/Logo'
export default {
  name: "LoginIndex",
  components : {
      Logo
  },
  data() {
    return {
      validCredentials: {
        username: "lightscope",
        password: "lightscope"
      },
      form: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Ingresa tu Usuario."
          }         
        ],
        password: [
          { 
            required: true, 
            message: "Ingresa tu Contraseña." 
            }
        ]
      }
    };
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      let self = this;
      let valid = await self.$refs["ruleForm"].validate();
      if (!valid) {
        return;
      }
    //    console.log(self.form)
       
       this.loading = true;
       self.$store.state.services.userService
        .login(self.form)
        .then(r => {
          self.loading = false;
          console.log(r)         
         this.$message.success("Login successfull");
          self.$router.push('/');
        })
        .catch(r => {
            console.log(r.error)
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
      // await this.simulateLogin();
    //    this.loading = false;
    //   if (this.model.username === this.validCredentials.username && this.model.password === this.validCredentials.password) 
    //   {
        
    //   } else {
    //     this.$message.error("Username or password is invalid");
    //   }
    }
  }
};
</script>

<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 320px;
}
.login-button {
  width: 100%;
  margin-top: 40px;
}
.forgot-password {
  margin-top: 10px;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
.login .el-card {
  width: 400px;
  display: flex;
  justify-content: center;
}
</style>



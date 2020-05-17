<template>
  <div id="app">
    <div>
      <p>按钮组件</p>
      <div class="row">
        <i-button type="success">成功按钮</i-button>
        <i-button type="info">消息按钮</i-button>
        <i-button type="danger">危险按钮</i-button>
        <i-button type="warning">警告按钮</i-button>
        <i-button type="primary">主要按钮</i-button>
      </div>
      <div class="row">
        <i-button type="success" plain>成功按钮</i-button>
        <i-button type="info" plain>消息按钮</i-button>
        <i-button type="danger" plain>危险按钮</i-button>
        <i-button type="warning" plain>警告按钮</i-button>
        <i-button type="primary" plain>主要按钮</i-button>
      </div>
      <div class="row">
        <i-button type="success" plain round>成功按钮</i-button>
        <i-button type="info" plain round>消息按钮</i-button>
        <i-button type="danger" plain round>危险按钮</i-button>
        <i-button type="warning" plain round>警告按钮</i-button>
        <i-button type="primary" plain round>主要按钮</i-button>
      </div>
      <div class="row">
        <i-button type="success" icon="scanQR" plain circle></i-button>
        <i-button type="info" plain circle icon="scanQR"></i-button>
        <i-button type="danger" plain circle icon="scanQR"></i-button>
        <i-button type="warning" plain circle icon="scanQR" @click="warning"></i-button>
        <i-button type="primary" plain circle icon="scanQR" disabled @click="primary"></i-button>
      </div>
      <div class="dialog">
        <p>dialog组件</p>
        <i-button @click="opendialog">打开对话框</i-button>
        <i-dialog title="温馨提示" :visible.sync="visible">
          <ul>
            <li>hello</li>
            <li>world</li>
            <li>how are you</li>
          </ul>
          <template v-slot:footer>
            <i-button type="success">确定</i-button>
            <i-button>取消</i-button>
          </template>
        </i-dialog>
      </div>
      <div class="input">
        <h3>input组件</h3>
        <i-input :value="uname" v-model="uname" clearable></i-input>
        <i-input :value="password" v-model="password" type="password" showPassword></i-input>
      </div>
      <div class="switch">
        <h3>switch组件</h3>
        <i-switch activeColor="lightgreen" inactiveColor="red" v-model="switchCheck"></i-switch>
      </div>
      <div class="radio">
        <h3>radio组件</h3>
        <i-radio v-model="radio" label="1">yes</i-radio>
        <i-radio v-model="radio" label="0">no</i-radio>
        <i-radio-group v-model="radiogroup">
          <i-radio label="0">渝中区</i-radio>
          <i-radio label="1">渝北区</i-radio>
          <i-radio label="2">江北区</i-radio>
        </i-radio-group>
      </div>
      <div class="checkbox">
        <h4>checkbox组件</h4>
        <i-checkbox-group v-model="checkboxGroup">
          <i-checkbox label="渝中"></i-checkbox>
          <i-checkbox label="渝北"></i-checkbox>
        </i-checkbox-group>
      </div>
      <div class="form">
        <h4>form 表单组件</h4>
        <i-form :model="form">
          <i-form-item label="uname" >
            <i-input v-model="form.uname" placeholder="请输入用户名"></i-input>
          </i-form-item>
          <i-form-item label="password">
            <i-input v-model="form.password" placeholder="请输入密码"></i-input>
          </i-form-item>
        </i-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      plain: true,
      visible: false,
      uname: "",
      password: "",
      switchCheck: false,
      radio: "1",
      radiogroup: "0",
      checkboxGroup: [],
      form:{
        uname:'',
        password:''
      }
    };
  },
  methods: {
    primary() {
      console.log(123);
    },
    warning() {
      console.log("warning");
    },
    opendialog() {
      this.visible = true;
    }
  },
  watch: {
    uname: {
      handler(newvalue, oldvalue) {
        console.log(this.uname);
      }
    }
  }
};
</script>

<style lang="scss">

</style>

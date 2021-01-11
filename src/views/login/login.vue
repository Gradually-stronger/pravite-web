<template>
  <div>
    <div id="login" v-show="registerShow === false">
      <Form :form="form">
        <FormItem
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 6 }"
          label="用户名"
        >
          <Input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '请输入用户名' }]
              }
            ]"
          />
        </FormItem>
        <FormItem
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 6 }"
          label="密码"
        >
          <Input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }]
              }
            ]"
          />
        </FormItem>
        <Button :style="{ marginLeft: '17vw' }" type="primary" @click="submit">
          登陆
        </Button>
        <Button @click="register" :style="{ marginLeft: '5vw' }">注册</Button>
      </Form>
    </div>
    <div id="login" v-show="registerShow === true">
      <Form :form="registerForm">
        <FormItem
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 6 }"
          label="用户名"
        >
          <Input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: '请输入用户名' }]
              }
            ]"
          />
        </FormItem>
        <FormItem
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 6 }"
          label="密码"
        >
          <Input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }]
              }
            ]"
          />
        </FormItem>
        <FormItem
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 6 }"
          label="确认密码"
        >
          <Input
            v-decorator="[
              'newpassword',
              {
                rules: [{ required: true, message: '请重复输入密码' }]
              }
            ]"
          />
        </FormItem>
        <FormItem
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 6 }"
          label="验证码"
        >
          <Input
            v-decorator="[
              'code',
              {
                rules: [{ required: true, message: '请输入验证码' }]
              }
            ]"
          />
        </FormItem>
        <Button
          :style="{ marginLeft: '17vw' }"
          type="primary"
          @click="register"
        >
          去登陆
        </Button>
        <Button @click="registerSub" :style="{ marginLeft: '5vw' }"
          >注册</Button
        >
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Input, Button } from "ant-design-vue";
const { Item: FormItem } = Form;
export default {
  components: { Form, FormItem, Input, Button },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
    this.registerForm = this.$form.createForm(this, {
      name: "normal_register"
    });
  },
  data() {
    return {
      registerShow: false
    };
  },
  methods: {
    submit() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          this.$api.signUp(values).then(res => {
            console.log(res);
          });
        }
      });
    },
    register() {
      this.registerShow = !this.registerShow;
    },
    registerSub() {
      this.registerForm.validateFields((errors, values) => {
        if (!errors) {
          console.log(values);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  top: calc((100% - 300px) / 2);
  left: calc((100% - 800px) / 2);
  width: 1101px;
  height: 520px;
  position: absolute;
}
</style>

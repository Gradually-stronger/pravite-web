<template>
  <div id="login">
    <Form :form="form">
      <FormItem :labelCol="{ span: 6 }" :wrapperCol="{ span: 6 }" label="账号">
        <Input
          v-decorator="[
            'name',
            {
              rules: [{ required: true, message: '请输入账号' }]
            }
          ]"
        />
      </FormItem>
      <FormItem :labelCol="{ span: 6 }" :wrapperCol="{ span: 6 }" label="密码">
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
      <Button :style="{ marginLeft: '5vw' }">注册</Button>
    </Form>
  </div>
</template>

<script>
import { Form, Input, Button } from "ant-design-vue";
const { Item: FormItem } = Form;
export default {
  components: { Form, FormItem, Input, Button },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  data() {
    return {};
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

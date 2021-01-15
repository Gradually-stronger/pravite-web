module.exports = {
  lintOnSave: false,
  // devServer 实际上就是 webpack-dev-server 这个包
  devServer: {
    // proxy 设置代理的配置项
    // 配置文档：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {
      // '/api' 表示 代理规则
      // 在 Vue 组件中使用 axios 发送请求的时候： axios.get('/api/xxx')
      // 也就是你的请求地址需要以当前规则（比如：/api）开头，那么，本次请求才会被代理
      // 如果某一个接口不需要被代理，就可以直接： axios.get('http://localhost:8080/api/xxx')
      // 这样配置后，最终的得到的接口地址为： http://localhost:8080/api/xxx
      "/api": {
        // 目标服务器地址，也就是接口服务器的真实地址
        target: "http://193.112.205.103:8819",
        // 跨域时一般都设置该值 为 true
        changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        // 重写接口路由
      }
    }
  }
};

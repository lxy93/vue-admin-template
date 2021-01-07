//导出一个axios实例，且这个实例要有请求拦截器、响应拦截器
import axios from 'axios'
const service = axios.create() // 创建实例
service.interceptors.request.use() // 请求拦截器
service.interceptors.response.use() // 响应拦截器
export default service // 导出实例

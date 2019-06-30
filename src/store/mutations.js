export default {
  changeCity (state, city) {
    state.city = city
    try {
      // localStorage 把数据存储在内存中，再次刷新页面不变化
      localStorage.city = city
    } catch (e) {}
  }
}

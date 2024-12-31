interface PerformanceState {
  pageLoadTime: number;
  resourceLoadTimes: Array<{ url: string; time: number }>;
}

export const usePerformanceStore = defineStore('performance', {
  state: (): PerformanceState => ({
    pageLoadTime: 0,
    resourceLoadTimes: [],
  }),
  actions: {
    // 记录页面加载时间
    recordPageLoadTime(time: number) {
      this.pageLoadTime = time;
    },
    // 记录资源加载时间
    recordResourceLoadTime(url: string, time: number) {
      this.resourceLoadTimes.push({ url, time });
    },
    // 重置性能数据
    resetPerformanceData() {
      this.$reset();
    },
  },
});
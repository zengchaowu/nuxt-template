
interface GlobalState {
  theme: 'light' | 'dark';
}

export const useGlobalStore = defineStore('global', () => {
  const theme = ref<GlobalState["theme"]>('light');
  function $reset() {
    theme.value = 'light';
  }
  return { theme, $reset }
});
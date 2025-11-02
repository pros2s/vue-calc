import { computed } from 'vue';

export const useInitialDate = (initialDate: string | undefined) =>
  computed(() => {
    if (initialDate) {
      const [y = 0, m = 0, d = 0] = initialDate.split('-').map(Number);
      return new Date(y, m - 1, d);
    }
    return new Date();
  });

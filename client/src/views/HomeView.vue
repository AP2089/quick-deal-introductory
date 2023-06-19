<template>
  <BaseLayout>
    <WelcomList />
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import { WelcomList } from '@/modules/welcom';

export default {
  name: 'HomeView',
  components: {
    BaseLayout,
    WelcomList
  }
}
</script>
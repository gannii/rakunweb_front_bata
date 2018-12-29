<template>
  <div>
    <div id="wrap">
      <AppHeader></AppHeader>
      <nuxt/>
      <AppFooter></AppFooter>
    </div>
    <AppMenu></AppMenu>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppMenu from '@/components/AppMenu.vue';

/*
if (process.browser) {
  require('~/assets/js/script.js');
}
*/

export default {

  components: {
    AppHeader,
    AppFooter,
    AppMenu
  }

};
</script>
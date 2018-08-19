<template lang="pug">
    nav
      router-link(to="/transactions") All
      router-link(to="/withdrawals") Withdrawals
      router-link(to="/additions") Additions
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
<style lang="sass" src="styles/application.sass">
  router-link
    padding: 16px // test
</style>

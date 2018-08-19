<template lang="pug">
    .container
      .row.justify-content-between
        //- for the future feature
        .allTransaction your balance 1235
        Navbar
      router-view
</template>

<script>

  import Navbar from 'components/Navbar'

  export default {
    name: 'Landing',
    components: {
      Navbar,
    },
  }

</script>

<style lang="sass" src="./styles.sass" scoped>
</style>

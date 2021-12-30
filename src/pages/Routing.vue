<template>
  <div>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push({name: 'quizList', params: {explain: 3}});
  },
  
}

</script>

<style>
</style>
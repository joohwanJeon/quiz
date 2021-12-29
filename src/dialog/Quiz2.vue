<template>
  <v-card :color="isSolved ? 'red' : color" 
          :disabled="isSolved" 
          @click="goNext()"
          dark>
    <v-card-title rd-title></v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn style="visibility:hidden" icon>
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    'isSolved'
  ],
  components: {
  },
  created() {
    console.log(this.isSolved);
  },
  data() {
    return {
      borads: [],
      color: "#385F73",
    }
  },
  methods: {
    canClose() {
      return true;
    },
    goNext() {
      this.$router.push('hrefTargetChange')
    }
  },
}

</script>

<style>
</style>
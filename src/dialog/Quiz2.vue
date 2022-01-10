<template>
  <v-card :color="isSolved ? 'red' : color" 
          :disabled="isSolved" 
          @click="goNext()"
          height="150px"
          dark>
    <v-card-title rd-title></v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="hint" style="visibility:hidden" icon>
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
  },
  data() {
    return {
      borads: [],
      color: "#385F73",
    }
  },
  methods: {
    hint() {
      console.log('_self: 현재 창');
      console.log('_???: 새 창');
      console.log('_parent: 부모 프레임');
      console.log('_top: 최상위 프레임');
    },
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
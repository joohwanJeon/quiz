<template v-slot:activator="{ on, attrs }">
  <div style="color: white;">
    asdf
    <v-card :color="color" dark 
      v-on="on"
      v-bind="attrs"
    >
      <v-card-title rd-title></v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn style="visibility:hidden" icon>
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  // props: [
  //   'isPersistent',
  //   'maxWidth'
  // ],
  // methods: {
  //   dialogClose() {
  //     this.$emit('success');
  //     this.dialog = false;
  //   },
  // }
  // ,
  // data() {
  //   return {
  //     dialog: false,
  //     color: "#385F73",
  //   }
  // },
  // created() {
    
  // },
}

</script>

<style>
</style>
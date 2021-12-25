<template>
    <v-dialog
      v-model="dialog"
      :persistent="isPersistent"
      :max-width="maxWidth"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card :color="color" dark 
          v-on="on"
          v-bind="attrs"
          :class="{'none': isSolved}"
          :disabled="isSolved"
        >
          <v-card-title rd-title></v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn style="visibility:hidden" icon>
              <v-icon>mdi-help</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
      <slot name="content" :dialogClose="dialogClose"></slot>
    </v-dialog>
</template>

<script>
export default {
  props: [
    'isPersistent',
    'maxWidth',
    'isSolved'
  ],
  methods: {
    dialogClose() {
      this.$emit('success');
      this.dialog = false;
    },
  }
  ,
  data() {
    return {
      dialog: false,
      color: "#385F73",
    }
  },
  created() {
    
  },
}

</script>

<style>
.none {
  background-color: red !important;
}
</style>
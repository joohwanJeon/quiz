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
          height="150px"
        >
          <v-card-title rd-title></v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hint" style="visibility:hidden" icon>
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
    'isSolved',
    'index',
  ],
  methods: {
    dialogClose() {
      this.$emit('success');
      this.dialog = false;
    },
    hint() {
      if(this.index === 1) {
        console.log('vue파일은 html, javascript, css가 한파일에 들어있다.');
        console.log('파일 내 전체 검색 : ctrl + shift + f');
      }
      if(this.index === 3) {
        console.log('SQL Injection');
      }
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
  background-color: #F44336 !important;
}
</style>
<template>
  <v-container>
    <v-row style="margin:100px">
      <v-col v-for="(board, index) in boards" :key="index" cols="4">
        <v-card style="margin:auto" width="300px" @click="goDetail(board.id)">
          <v-img v-if="board.checked" src='../assets/color-blue.png'></v-img>
          <v-img v-if="!board.checked" src='../assets/color-red.png'></v-img>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [
    'boards'
  ],
  methods: {
    goDetail(id, target = '_self') {
      window.open(`/boardDetail?id=${id}`, target);
    }
  },
}

</script>

<style>
</style>
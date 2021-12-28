<template>
  <v-container>
    <v-row style="margin:100px">
      <v-col v-for="(board, index) in boards" :key="index" cols="4">
        <!-- <router-link :to="{name: 'boardDetail', query: {id: board.id}}"> -->
          <v-card style="margin:auto" width="300px" @click="goDetail(board.id)">
            <v-img :src="board.image"></v-img>
              <v-card-title>{{board.title}}</v-card-title>
          </v-card>
        <!-- </router-link> -->
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
<template>
  <div class="image">
    <v-container>
      <v-img :src="board.image" max-height="450px" contain></v-img>
      {{board.title}}
    </v-container>
  </div>
</template>

<script>
import * as boardService from '../service/boardService'
export default {
  name: 'boardDetail',
  props: [
    'boardId'
  ],
  async created() {
    this.board = await boardService.getBoard(this.boardId);
  },
  methods: {
  },
  data() {
    return {
      board: {},
    }
  },
}
</script>

<style>
.image {
  background-size : auto;
  min-height: 100vh;
  background-repeat : round;
  background-image: url('https://i.pinimg.com/236x/e2/72/df/e272dfe05cc64b0e88a8fd5a602dedbf.jpg');
  opacity: 0.6;
}
</style>
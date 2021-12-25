<template>
  <div class="image">
    <v-container>
      <v-img :src="board.image" max-height="450px" contain></v-img>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'boardDetail',
  props: [
    'boardId'
  ],
  created() {
    //todo
    //boardId로 게시글 상세 조회

    //todo
    //boardId로 이 게시글이 정답인지 확인
  },
  methods: {
  },
  data() {
    return {
      board: {id:1,title:"제목1",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"}
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
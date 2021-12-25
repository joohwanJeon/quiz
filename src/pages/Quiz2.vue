<template>
  <div>
    <BoardList :boards="boards" />
    <v-btn color="primary" @click="viewMore">더보기</v-btn>
  </div>
</template>

<script>
import BoardList from '../component/BoardList'
export default {
  name: 'Answer',
  components: {
    BoardList
  },
  created() {
    this.boards = [{id:1,title:"제목1",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"},{id:2,title:"제목2",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"},{id:3,title:"제목3",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"},{id:4,title:"제목4",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"},{id:5,title:"제목5",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"},{id:6,title:"제목6",image:"https://ez.lotteacademy.co.kr/courseImage//migration/368/L017677.png"}];
  },
  methods: {
    viewMore() {
      this.boards = this.boards.concat(this.boards);
    }
  },
  data() {
    return {
      boards: [],
    }
  },
}
</script>

<style>
</style>
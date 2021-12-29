<template>
  <div>
    <BoardList :boards="boards" :dialog="dialog"/>
    <v-btn color="primary" @click="viewMore">더보기</v-btn>
  </div>
</template>

<script>
import BoardList from '../component/BoardList'
import * as boardService from '../service/boardService'
export default {
  name: 'Answer',
  components: {
    BoardList
  },
  async created() {
    this.boards = await boardService.getBoardList(true);
    this.allBoards = await boardService.getBoardList(null, true);
  },
  methods: {
    async viewMore() {
      this.boards = await boardService.getBoardList();
    }
  },
  data() {
    return {
      boards: [],
      allBoards: [],
    }
  },
  computed: {
    dialog() {
      return this.allBoards.filter(v => !v.checked).length === 1;
    }
  }
}
</script>

<style>
</style>
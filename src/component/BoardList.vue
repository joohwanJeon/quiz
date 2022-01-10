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

    <ExplainDialog v-if="dialog">
      <template v-slot="{dialogClose}">
        <v-card width="63%" style="margin:auto">
          <v-card-title>
            어때, 불편하지?<br>
            의외로 이렇게 사용자의 두통을 유발하는 사이트들이 아직도 많다.<br>
            하지만 사용자가 FrontEnd Developer라면, 이야기가 달라지겠지?<br>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialogClose()"
            >
              닫기
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </ExplainDialog>
  </v-container>
</template>

<script>
import ExplainDialog from './ExplainDialog'
import * as userService from '../service/userService'
export default {
  components: {
    ExplainDialog
  },
  props: [
    'boards',
    'dialog'
  ],
  methods: {
    async goDetail(id, target = '_self') {
      const temp = target;
      window.open(`/boardDetail?id=${id}`, target);
      if(this.isAnswer(temp, target)) {
        await userService.updateUser({quiz2: 999})
        this.$router.push({name: 'quizList', params: {explain: 2}});
        // this.$EventBus.$emit('successHandler2');
      }
    },
    isAnswer(a, b) {
      return a !== b;
    }
  },
}

</script>

<style>
</style>
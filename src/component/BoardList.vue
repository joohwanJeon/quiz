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
        <v-card>
          <v-card-title style="text-align: center" class="text-h5">
            권한 체크: 프론트, 서버 필요
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
export default {
  components: {
    ExplainDialog
  },
  props: [
    'boards',
    'dialog'
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
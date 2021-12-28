<template>
  <QuizDialog v-on:success="$emit('success')" :isSolved="isSolved" :isPersistent=true maxWidth="600px">
    <template v-slot:content="{dialogClose}">
      <v-card>
        <v-card-title style="text-align: center" class="text-h5">
          팝업을 닫으세요
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="canClose() ? dialogClose() : null"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </QuizDialog>
</template>

<script>
import QuizDialog from '../component/QuizDialog';

export default {
  name: 'quiz1',
  components: {
    QuizDialog
  },
  props: [
    'isSolved'
  ],
  created() {
  },
  methods: {
    canClose() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));

      if(this.userInfo) {
        return this.userInfo.permission === '00';
      }
      return false;
    }
  },
  data() {
    return {
      userInfo: undefined
    }
  }
}

</script>

<style>
</style>
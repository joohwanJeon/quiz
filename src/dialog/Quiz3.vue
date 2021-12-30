<template>
  <QuizDialog v-on:success="$emit('success')" :isSolved="isSolved" maxWidth="800px">
    <template v-slot:content>
      <v-card style="background-color: darkslategray">
        <v-card-title style="text-align: center" class="text-h5">
          내정보
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search"
            single-line
            hide-details
            style="max-width: 200px; "
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="data"
          disable-sort
          dark
          hide-default-footer
          outlined
        ></v-data-table>
      </v-card>

      <v-card style="margin:auto; margin-top:30px; max-width:500px;">
        <v-card-title>
          아이디가 programerhz인 사용자의 비밀번호는?
        </v-card-title>
        <v-text-field
          v-model="answer"
          style="max-width:200px; margin:auto"
          ></v-text-field>
      </v-card>
    </template>
  </QuizDialog>
</template>

<script>
import QuizDialog from '../component/QuizDialog';
import * as quizService from '../service/quizService'
import * as userService from '../service/userService'
export default {
  name: 'quiz3',
  components: {
    QuizDialog
  },
  props: [
    'isSolved',
  ],
  async created() {
    this.data = await quizService.getMyData();
    if(this.data.length > 0) {
      this.headers = Object.keys(this.data[0]).map(v => {
        return {
          text: v,
          value: v,
          align: 'center'
        }
      });
    }
  },
  methods: {

  },
  watch: {
    async search(newVal) {
      this.data = await quizService.searchData(newVal);
    },
    async answer(newVal) {
      if(newVal === process.env.VUE_APP_QUIZ3_ANSWER) {
        await userService.updateUser({quiz3: 999})
        this.$router.push('routing');
      }
    }
  },
  data() {
    return {
      data: [],
      search: '',
      headers: [],
      answer: '',
    }
  }
}

</script>

<style>
</style>
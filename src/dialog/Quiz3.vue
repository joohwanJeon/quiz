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
            style="max-width: 200px; visibility: hidden"
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
    </template>
  </QuizDialog>
</template>

<script>
import QuizDialog from '../component/QuizDialog';
import * as quizService from '../service/quizService'

export default {
  name: 'quiz3',
  components: {
    QuizDialog
  },
  props: [
    'isSolved'
  ],
  async created() {
    this.data = await quizService.searchData();
    // this.data = await quizService.getMyData();
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
  data() {
    return {
      data: [],
      search: '',
      headers: [],
      items: [],

    }
  }
}

</script>

<style>
</style>
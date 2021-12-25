<template>
  <v-container class="center" fluid>
    <v-row class="row-center">
      <v-col cols="4">
        <Quiz1 :isSolved="isSolved" v-on:success="successHandler1"/>
        <Explain1 v-if="isSolved"/>
      </v-col>
      <v-col cols="4">
        <Quiz2 />
        <!-- <Explain1 v-if="isSolved"/> -->
      </v-col>
      <!-- <v-col cols="4">
        <Quiz3 v-on:success="test3"/>
      </v-col>
      <v-col cols="4">
        <Quiz4 v-on:success="test4"/>
      </v-col>
      <v-col cols="4">
        <Quiz5 v-on:success="test5"/>
      </v-col> -->
    </v-row>
  </v-container>


</template>

<script>
import Quiz1 from '../dialog/Quiz1'
import Quiz2 from '../dialog/Quiz2'
// import Quiz3 from '../dialog/Quiz3'
// import Quiz4 from '../dialog/Quiz4'
// import Quiz5 from '../dialog/Quiz5'
import Explain1 from '../dialog/Explain1'

export default {
  name: 'QuizList',
  components: {
    Quiz1,
    Explain1,
    Quiz2,
    // Quiz3,
    // Quiz4,
    // Quiz5,
  },
  data() {
    return {
      isSolved: false,
    }
  },
  methods: {
    goNext() {
      console.log('test');
    },
    successHandler1() {
      this.isSolved = true;
    },
    successHandler2() {
      console.log('2번문제 해결');
    },
    test2() {
      console.log(2);

    }
  }
}

</script>

<style scoped>
.row-center {
  width:60%;
  margin: auto;
}
.center {
  display: grid;
  align-items: center;
  min-height: 100vh;
}
</style>
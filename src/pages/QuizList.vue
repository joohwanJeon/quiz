<template>
  <v-container class="center" fluid>
    <v-row class="row-center">
      <v-col cols="4">
        <Quiz1 :isSolved="isSolved(1)" v-on:success="successHandler1"/>
        <Explain1 v-if="explain1"/>
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
import * as userService from '../service/userService'

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
  created() {
    this.getUser();
  },
  data() {
    return {
      user: {},
      explain1: false
    }
  },
  methods: {
    goNext() {
      console.log('test');
    },
    async getUser() {
      this.user = await userService.getUser();
    },
    isSolved(n) {
      return eval('this.user.quiz' + n) === 999;
    },
    async successHandler1() {
      await userService.updateUser({quiz1: 999});
      this.getUser();
      this.explain1 = true;
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
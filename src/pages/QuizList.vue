<template>
  <v-container class="center" fluid>
    <v-row class="row-center">
      <v-col cols="4">
        <Quiz1 :isSolved="isSolved(1)" v-on:success="successHandler1"/>
        <Explain1 v-if="explain1"/>
      </v-col>
      <v-col cols="4">
        <Quiz2 :isSolved="isSolved(2)"/>
        <Explain2 v-if="explain2"/>
      </v-col>
      <v-col cols="4">
        <Quiz3 :isSolved="isSolved(3)"/>
        <Explain3 v-if="explain3"/>
      </v-col>
    </v-row>
  </v-container>


</template>

<script>
import Quiz1 from '../dialog/Quiz1'
import Quiz2 from '../dialog/Quiz2'
import Quiz3 from '../dialog/Quiz3'
import Explain1 from '../dialog/Explain1'
import Explain2 from '../dialog/Explain2'
import Explain3 from '../dialog/Explain3'
import * as userService from '../service/userService'

export default {
  name: 'QuizList',
  components: {
    Quiz1,
    Explain1,
    Quiz2,
    Explain2,
    Quiz3,
    Explain3
  },
  created() {
    this.getUser();
    this.$EventBus.$on('successHandler2', () => {
      this.explain2 = true;
      console.log('successHandler2', this.explain2);
    })
  },
  data() {
    return {
      user: {},
      explain1: false,
      explain2: false,
      explain3: false,
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
<template>
  <v-container class="center" fluid>
    <v-row class="row-center">
      <v-col cols="4">
        <Quiz1 :isSolved="isSolved(1)" v-on:success="successHandler1"/>
      </v-col>
      <v-col cols="4">
        <Quiz2 :isSolved="isSolved(2)"/>
      </v-col>
      <v-col cols="4">
        <Quiz3 :isSolved="isSolved(3)"/>
      </v-col>
    </v-row>

    <Explain1 v-if="explain1"/>
    <Explain2 v-if="explain2"/>
    <Explain3 v-if="explain3"/>
    <Ending v-if="theEnd"/>

  </v-container>


</template>

<script>
import Quiz1 from '../dialog/Quiz1'
import Quiz2 from '../dialog/Quiz2'
import Quiz3 from '../dialog/Quiz3'
import Explain1 from '../dialog/Explain1'
import Explain2 from '../dialog/Explain2'
import Explain3 from '../dialog/Explain3'
import Ending from '../dialog/Ending'
import * as userService from '../service/userService'
import * as quizService from '../service/quizService'

export default {
  name: 'QuizList',
  components: {
    Quiz1,
    Explain1,
    Quiz2,
    Explain2,
    Quiz3,
    Explain3,
    Ending
  },
  async created() {
    await this.getUser();

    const params = this.$route.params;
    if(Object.keys(params).length > 0) {
      if(params.explain === 2) {
        this.explain2 = true;
      }
      if(params.explain === 3) {
        this.explain3 = true;
      }
    }
    // this.$EventBus.$on('successHandler2', () => {
    //   this.explain2 = true;
    //   console.log('successHandler2', this.explain2);
    // })
    this.$EventBus.$on('explainDialogClosed', async () => {
      await this.getUser;
      if(this.checkClear()) {
        this.theEnd = true;
      }
    })
  },
  data() {
    return {
      user: {},
      explain1: false,
      explain2: false,
      explain3: false,
      theEnd: false,
    }
  },
  methods: {
    checkClear() {
      return quizService.checkClear(this.user.quiz1, this.user.quiz2, this.user.quiz3);
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
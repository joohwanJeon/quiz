<template>
  <div>
    <!-- <img width="100%" src="../assets/main.png"> -->
    <div style="position:absolute; top:45%; width:100%; text-align: center; color:white">
      <p>
        개발자가 된 것을 축하한다. 
        이번 이벤트는 런닝맨 개발자 버전이다.
      </p>
      <p>
        지금부터 너의 실력을 테스트하겠다. 
        각 문제에서 제공하는 힌트를 조합해서 정답을 맞춰라.
      </p>
      <p>
        힌트는 어디에나 있다.
      </p>
      <p>
        그럼 행운을 빈다.
      </p>

      <div>
        <v-btn small @click="buttonClicked(text)" v-for="text in quizText" :key="text">{{text}}</v-btn>
      </div>
      <v-btn @click="goQuiz" color="primary" :disabled="disabled">시작하기</v-btn>

      <p hidden>
        최종 정답 주소: '/answer'
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      disabled: true,
      answer: process.env.VUE_APP_BASE_URL,
      inputText: '',
      quizText: ['주','부','전','태'],
    }
  },
  methods: {
    buttonClicked(text) {
      this.inputText += text;
      if(this.answer.slice(0, this.inputText.length) !== this.inputText) {
        this.inputText = '';
        return ;
      }
      if(this.inputText === this.answer) {
        this.disabled = false;
      }
    },
    goQuiz() {
      const userInfo = {
        name: 'khj',
        accountPermssion: '01'
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.$router.push('quizList');
    },
  }
}
</script>
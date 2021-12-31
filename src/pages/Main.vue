<template>
  <div>
    <!-- <img width="100%" src="../assets/main.png"> -->
    <div style="position:absolute; top:45%; width:100%; text-align: center; color:white">
      <h3>FrontEnd Developer 김희진 초대장</h3>
      <div v-for="sentence in sentences" :key="sentence">
        <span v-for="(word, index) in sentence" :key="index">{{word === ' '? '&nbsp;' : test(word)}}</span>

      </div>
      <div>
        <v-btn small @click="buttonClicked(text)" v-for="text in quizText1" :key="text">{{text}}</v-btn>
      </div>
      <div>
        <v-btn small @click="buttonClicked(text)" v-for="text in quizText2" :key="text">{{text}}</v-btn>
      </div>
      <div>
        <v-btn small @click="buttonClicked(text)" v-for="text in quizText3" :key="text">{{text}}</v-btn>
      </div>
      <v-btn @click="goQuiz" color="primary" :disabled="disabled">시작하기</v-btn>

      <p hidden>
        최종 정답 주소: '/answer'
      </p>
    </div>
  </div>

</template>

<script>
import * as userService from '../service/userService'
export default {
  name: 'Main',
  data() {
    return {
      disabled: true,
      answer: process.env.VUE_APP_START_ANSWER,
      inputText: '',
      quizText1: ['가','사','전','태'],
      quizText2: ['환','퉤','해','헤'],
      quizText3: ['희','랑','진','주'],
      sentences: [''],
    }
  },
  created() {
    this.setDelay('지금부터 너의 개발 능력을 테스트 하겠다.', 2000);
    this.setDelay('힌트는 어디에나 있다.', 4000);
    this.setDelay('그럼 행운을 빈다.', 6000);
  },
  methods: {
    setDelay(sentence, time) {
      setTimeout(() => {
        this.sentences.push(sentence);
      }, time)
    },
    test(word) {
      return word === '\n' ? '<div></div>' : word
    },
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
    async goQuiz() {
      const userInfo = await userService.setUser(this.inputText);
      localStorage.setItem('userInfo', JSON.stringify({id: userInfo.id, permission: userInfo.permission}));
      this.$router.push('quizList');
    },
  }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Finger+Paint);

body {
  background: black;
  overflow: hidden;
  font: 5vw/100vh "Finger Paint";
  text-align: center;
  color: transparent;
  backface-visibility: hidden;
}

span {
  display: inline-block;
  text-shadow: 0 0 0 whitesmoke;
  animation: smoky 5s 3s both;
}

span:nth-child(even){
  animation-name: smoky-mirror;
}

@keyframes smoky {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform:
      translate3d(15rem,-8rem,0)
      rotate(-40deg)
      skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@keyframes smoky-mirror {
  60% {
    text-shadow: 0 0 40px whitesmoke; }
  to {
    transform:
      translate3d(18rem,-8rem,0)
      rotate(-40deg) 
      skewX(-70deg)
      scale(2);
     text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@for $item from 1 through 23 {
  span:nth-of-type(#{$item}){ 
    animation-delay: #{(3 + ($item/10))}s; 
  }
} 
</style>
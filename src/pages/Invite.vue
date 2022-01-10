<template>
  <div>
    <div style="position:absolute; top:45%; width:100%; text-align: center; color:white">
      <h5 style="font-family: 'Dongle', sans-serif; font-size: 2em" v-if="test1">FrontEnd Developer 김희진 초대장</h5>
      <h4 style="font-family: 'Dongle', sans-serif; font-size: 3em" v-if="test2">FrontEnd Developer 김희진 초대장</h4>
      <h3 style="font-family: 'Dongle', sans-serif; font-size: 4em" v-if="test3">FrontEnd Developer 김희진 초대장</h3>
      <h2 style="font-family: 'Dongle', sans-serif; font-size: 6em" v-if="test4">FrontEnd Developer 김희진 초대장</h2>
      <h1 @click="go" style="font-family: 'Dongle', sans-serif; font-size: 8em" v-if="test5">FrontEnd Developer 김희진 초대장</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      test1 : false,
      test2 : false,
      test3 : false,
      test4 : false,
      test5 : false,
    }
  },
  created() {
    this.delay1();
    this.delay2();
    this.delay3();
    this.delay4();
    this.delay5();
  },
  methods: {
    go() {
      this.$router.push('/main')
    },
    delay1() {
      setTimeout(() => {
        this.test1 = true;
      }, 1000)
    },
    delay2() {
      setTimeout(() => {
        this.test1 = false;
        this.test2 = true;
      }, 2000)
    },
    delay3() {
      setTimeout(() => {
        this.test1 = false;
        this.test2 = false;
        this.test3 = true;
      }, 3000)
    },
    delay4() {
      setTimeout(() => {
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = true;
      }, 4000)
    },
    delay5() {
      setTimeout(() => {
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = true;
      }, 5000)
    },
  }
}
</script>
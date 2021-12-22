<template>
  <v-app>
    <v-container fluid style="padding:0">
      <router-view class="main" />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
};

//eslint-disable-next-line
console.log('%c\n                                                                        ,,\n                                                                       /  ,\n                                                                      /   /\n                                                                     /   /\n                                                                    /   /\n     __________________________                                    /   /\n    ⎢                         ⎥                                   /   /\n    ⎢     울 냥이 화이팅♡    ⎥                                  /   /\n    ⎢____    _________________⎥                                 /   /\n          \\/    ,      ,,                                      /   /\n               /%c@%c\\____/%c@%c \\                                ____/   /\n              /           \\                         _____/        /__\n        /\" \\ / •    •      \\                     __/             /  %c@@%c\"\\\n        \\    %c@@%c  ㅅ  %c@@%c     /___             ___/                /    _/\n       /\" \\   \\                 \\__________/                    |__/ \"\\\n       \\   \\                                                   /      /\n        \\    \\  __                                                  _/\n         \\                                                       __/\n           \\_                                             ______/\n              \\ ___                                    __/\n                    \\__                             __/\n                        \\_____                _____/\n                              \\______________/\n\n',"font-weight: bold;","font-weight: bold; color: #ff7777","font-weight: bold;","font-weight: bold; color: #ff7777","font-weight: bold;","font-weight: bold; color: #ff7777","font-weight: bold;","font-weight: bold; color: #ff7777","font-weight: bold;","font-weight: bold; color: #ff7777","font-weight: bold;")
</script>
<style>
.main {
  margin:auto;
  height: 100vh;
  background-position: center;
  background-repeat : no-repeat;
  background-size : cover;
  background-image: url('./assets/main.png');
}
</style>
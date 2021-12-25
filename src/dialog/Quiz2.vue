<template>
  <router-link to="/hrefTargetChange">
    <v-card :color="color" dark>
      <v-card-title rd-title></v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn style="visibility:hidden" icon>
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </router-link>
  <!-- <QuizDialog v-on:success="$emit('success')" :isSolved="isSolved">
    dialog Body 대체 영역
    <template v-slot:content="{dialogClose}">
      <v-card>
        <v-card-title style="text-align: center" class="text-h5">
          게시글
        </v-card-title>
        <v-card width="400px" @click="$router.push('/')">
          <v-card-title>
            게시글1
          </v-card-title>
        </v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="canClose()&&dialogClose()"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </QuizDialog> -->
</template>

<script>
export default {
  props: [
    'isSolved'
  ],
  components: {
  },
  created() {
  },
  data() {
    return {
      borads: [],
      color: "#385F73",
    }
  },
  methods: {
    canClose() {
      return true;
    }
  },
}

</script>

<style>
</style>
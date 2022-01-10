<template>
  <ExplainDialog>
    <template v-slot="{dialogClose}">
      <v-card width="1000px" style="margin:auto">
        <v-card-title>
          2단계 통과!
        </v-card-title>
        <v-card-text style="font-size: 1em">
          기특한 녀석!!! 2단계는 쉽지 않았을텐데, 잘 해냈구나&#128525;<br>
          이번문제의 목적은 개발자 도구를 통한 디버깅실력을 테스트하고, 페이지의 history관리의 중요성을 알려주기 위함이다.<br>
          개발자 도구를 통해 소스코드의 흐름을 찾아가고 breakpoint를 적절히 활용할 수 있길 바란다.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogClose()"
          >
            닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </ExplainDialog>
</template>

<script>
import ExplainDialog from '../component/ExplainDialog';

export default {
  name: 'quiz1',
  components: {
    ExplainDialog
  },
}
</script>
<template>
  <ExplainDialog>
    <template v-slot="{dialogClose}">
      <v-card width="1000px" style="margin:auto">
        <v-card-title>
          3단계 통과!!!!
        </v-card-title>
        <v-card-text style="font-size: 1em">
          &#128561;&#128561;이 문제를 맞출 줄이야&#128561;&#128561;!!<br>
          이 문제는 OWASP에서 발표하는 보안 취약점 중, 항상 상위권에 위치하는 취약점의 예시이다.<br>
          조회 조건이 SQL문에 삽입 될 것을 예측하고, 개발자가 의도하지 않은 SQL문이 실행하게 하는 것이다.<br>
          이 공격이 성공할 경우, DATABASE를 통채로 날려버리거나 개인정보 유출의 심각한 문제를 야기할 수 있다.<br>
          따라서, 서버에서 조회조건에 대한 유효성 검사가 필수적으로 이루어져야한다.
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
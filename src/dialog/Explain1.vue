<template>
  <ExplainDialog>
    <template v-slot="{dialogClose}">
      <v-card width="1000px" style="margin:auto">
        <v-card-title style="text-align: center" class="text-h5">
          1단계 통과
        </v-card-title>
        <v-card-text style="font-size: 1em">
          잘했다.&#128526;<br>
          사용자 권한 같이 중요한 정보를 프론트에서만 확인 할 경우, 지금처럼 일반 사용자 권한을 관리자 권한으로 수정할 수 있다.<br>
          프론트에서는 중요한 정보를 로컬스토리지에 저장하지 말아야하고, 서버에서도 2중으로 검사를 하는 로직을 구현해야 한다.
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
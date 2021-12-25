<template>
  <ExplainDialog>
    <template v-slot="{dialogClose}">
      <v-card>
        <v-card-title style="text-align: center" class="text-h5">
          권한 체크: 프론트, 서버 필요
        </v-card-title>
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
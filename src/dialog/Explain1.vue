<template>
  <ExplainDialog>
    <template v-slot="{dialogClose}">
      <v-card>
        <v-img src="https://raw.githubusercontent.com/joohwanJeon/quiz/master/src/assets/angry.gif" width="50%"
        ></v-img>
        <v-card-title style="text-align: center" class="text-h5">
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
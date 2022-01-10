<template>
  <ExplainDialog :isPersistent=true>
    <template v-slot="{dialogClose}">
      <v-card width="800px" style="margin:auto">
        <v-card-title style="text-align: center" class="text-h5">
          마무리
        </v-card-title>
        <v-card-text style="font-size: 1em">
          히이이이이읶!!!!!! 이걸 다 푼거야!?!? ▷ㅁ◁<br>
          에고고고고!!! 고생 많아따 내사룽!!♡<br>
          금방 만들거라고 생각했는디, 생각보다 오래걸려가지구!!!!<br>
          어제 데이트도 못하구 마니 서운해찌!!!!!!!<br>
          미안 미아내잉 ㅠㅠ 나도 울 애기 너무너무 보고싶은데,,<br>
          아기 말대로 아기 만나서 카페에서 하면되는데, 피곤한것두 맞구! 혹시나 아기한테 들킬수도이짜나..!!<br>
          근데 요즘 내가 안만나줘서 서운했던건 다 풀려찌!?!!?<br>
          이 쫘아아아시가 내가 얼매나 사랑하믄 취준때보다도 열띠미해써!!ㅋㅋㅋ<br>
          근데 진짜 문제 잘 푼거 너무 대견하구♡♡♡<br>
          넘 고생 마나떠♡♡♡♡♡♡<br>
          고생한 우리애기를 위해서 소정의 상품을 준비했으니까!<br>
          어서 찐 행복 웃음 내놔! ㅋㅋㅋㅋ<br>
          (어제 너가 만나서 머 어뜨케 행복하게 해줄건데! 물어볼때 입 근질거려서 혼나따!! ㅋㅋㅋ)<br>
          <br>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogClose()"
          >
            서운함 다 녹이기
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
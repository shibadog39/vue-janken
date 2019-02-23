<template>
  <div id="fight">
    <div class="header">
      <div>links</div>
    </div>
    <div class="main">
      <div>{{resultMsg}}</div>
      <div>button
        <button v-for="option in options" @click="handleSelect" :value="option.id" :key="option.id">{{option.name}}</button>
      </div>
      <div>gazou</div>
    </div>
  </div>
</template>

<script>
import Hands from '../util/Hands'
let hands = new Hands();

export default {
  name: "fight",
  data() {
    return {
      resultMsg: "sakurai",
      options: hands.OPTIONS
    };
  },
  methods: {
    handleSelect: function(e){
      let selectedHand = hands.getById(e.target.value);
      console.log("おれ:" + selectedHand.name);
      let ramdomHand = hands.getByRandom();
      console.log("あいて:" + ramdomHand.name);
      this.judgeResult(selectedHand.id, ramdomHand.id);
      },
    judgeResult: function(user, cp){
      //https://qiita.com/mpyw/items/3ffaac0f1b4a7713c869
      //0 = 引き分け,1 = 負け,2 = 勝ち
      switch ((user - cp +3) % 3){
        case 0:
          this.resultMsg = "あいこ"
          break;
        case 1:
          this.resultMsg = "君のまけ"
          break;
        case 2:
          this.resultMsg = "君のかち"
          break;
      }
    }  
  }
};
</script>

<style scoped>
</style>

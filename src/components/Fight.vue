<template>
  <div id="fight">
    <div class="main">
      <div>
        <button @click="fightAgain" v-bind:disabled="!finishSelection">もう一度！</button>
        <hr>
        <div>{{resultMsg}}</div>
        <button class="hands" v-bind:class="{'selected-btn': option.id==selectedId}" v-for="option in options" @click="handleSelect" :value="option.id" :key="option.id" v-bind:disabled="finishSelection">{{option.name}}</button>
      </div>
      <div>
        <img :src="randomHand.img" alt="hand img" width="100" height="100">
      </div>
    </div>
    <div class="score">
      <ul>
        <li v-for="(item, index) in scores" :key="index">{{item}}</li>
      </ul>
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
      resultMsg: "いざじんじょうに！",
      selectedId: 0,
      finishSelection: false,
      options: hands.OPTIONS,
      randomHand: hands.getByRandom(),
      intervalId: null
    };
  },
  created: function() {
    this.startFight();
  },
  computed: {
    scores() { return this.$store.getters.scores}
  },
  methods: {
    handleSelect: function(e){
      clearInterval(this.intervalId);
      this.selectedId = e.target.value
      this.finishSelection = true
      this.judgeResult(this.selectedId, this.randomHand.id);
      this.saveScore();
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
    },
    saveScore: function(){
      this.scores.push(this.scores.length + 1 + "回戦: " + this.resultMsg);
      this.$store.commit('updateScores', this.scores)
    },
    startFight: function() {
      this.intervalId = setInterval(this.displayImg,1000/10);
    },
    fightAgain: function(){
      this.selectedId = 0
      this.finishSelection = false
      this.resultMsg = "いざじんじょうに！"
      this.startFight();
    },
    displayImg: function() {
      this.randomHand = hands.getByRandom();
    }
  }
};
</script>

<style scoped>
.selected-btn {
  border: 2px solid black;
}
</style>

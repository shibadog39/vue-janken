<template>
  <div id="game">
    <div v-if="resultMessage" class="result">
      <h2>{{ resultMessage }}</h2>
      <div>
        <button v-on:click="start">もういちど</button>
      </div>
    </div>

    <div class="imgArea">
      <img v-bind:src="src" alt>
    </div>
    <ul>
      <li>
        <button v-on:click="onSelected" class="button" type="button" value="0">グー</button>
      </li>
      <li>
        <button v-on:click="onSelected" class="button" type="button" value="1">チョキ</button>
      </li>
      <li>
        <button v-on:click="onSelected" class="button" type="button" value="2">パー</button>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: "game",
  props: ["scores"],
  data() {
    return {
      src: require("../assets/janken_choki.png"),
      imgList: [
        require("../assets/janken_gu.png"),
        require("../assets/janken_choki.png"),
        require("../assets/janken_pa.png")
      ],
      timer: null,
      resultMessage: ""
    };
  },
  created() {
    this.start();
  },
  methods: {
    changeImg(number) {
      // 画像の切替
      if (number && Math.abs(number) <= this.imgList.length) {
        this.src = this.imgList[number];
      } else {
        var num = Math.floor(Math.random() * this.imgList.length);
        this.src = this.imgList[num];
      }
    },
    start() {
      this.reset();
      this.timer = setInterval(() => {
        this.changeImg();
      }, 1000 / 12);
    },
    onSelected(e) {
      clearInterval(this.timer);

      let button = e.target;
      let randomNum = parseInt(this.imgList.indexOf(this.src), 10);
      let userNum = parseInt(button.value, 10);
      let decision = this.decisionJanken(userNum, randomNum);

      var btns = document.querySelectorAll(".button");
      for (let btn of btns) {
        btn.setAttribute("disabled", true);
      }

      if (decision == 1) {
        this.resultMessage = "かち";
      } else if (decision == 2) {
        this.resultMessage = "ひきわけ";
      } else {
        this.resultMessage = "まけー";
      }
      this.$parent.$data.scores.push({ message: this.resultMessage });

      button.classList.add("is-selected");
    },
    reset() {
      var btns = document.querySelectorAll(".button");
      for (let btn of btns) {
        btn.removeAttribute("disabled");
        btn.classList.remove("is-selected");
      }
      this.resultMessage = "";
    },
    decisionJanken(userHand, cpHand) {
      //Hand グー 0, チョキ 1, パー 2
      let result = 0; // 0 は負け, 1は勝ち,2は引き分け

      if (userHand == cpHand) {
        result = 2;
      } else if (cpHand - userHand == 1 || cpHand - userHand == -2) {
        result = 1;
      }
      return result;
    }
  }
};
</script>
<style scoped>
/* CSS 省略 */
</style>

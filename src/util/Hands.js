export default class Hands {

  get OPTIONS(){
    return [
      { "id": '1', "name": 'グー', "img": require("../assets/janken_gu.png") },
      { "id": '2', "name": 'チョキ', "img": require("../assets/janken_choki.png") },
      { "id": '3', "name": 'パー', "img": require("../assets/janken_pa.png") }
    ];
  }

  getById(id){
    return this.OPTIONS.find(function(hand){
      return hand.id == id;
    });
  }

  getByRandom(){
    return this.OPTIONS[Math.floor(Math.random()*this.OPTIONS.length)]
  }
}

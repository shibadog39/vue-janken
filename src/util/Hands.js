export default class Hands {

  get OPTIONS(){
    return [
      { "id": '1', "name": 'グー' },
      { "id": '2', "name": 'チョキ' },
      { "id": '3', "name": 'パー' }
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

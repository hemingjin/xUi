import Card from './src/card';

Card.install = function(Vue) {
    Vue.component(Card.name, card);
}

export default Card;
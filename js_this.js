var fruit = {
    name: 'Pear',
    color: 'yellow',
    isSweet: true,
    get showfruit(){
        return `${'The'} ${this.name}  ${'is'} ${this.color} ${'in color.'}`}
}
console.log(fruit.showfruit);
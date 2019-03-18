new Vue({
    el: '#app',
    data:{
        title: 'Learning Vue',
        name: 'Evan',
        url: 'https://www.youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.name}, `
        }
    }
})
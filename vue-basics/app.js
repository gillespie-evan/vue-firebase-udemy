new Vue({
    el: '#app',
    data:{
        title: 'Learning Vue',
        name: 'Evan',
        url: 'https://www.youtube.com'
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.name}, `
        }
    }
})
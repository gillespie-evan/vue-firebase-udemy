new Vue({
    el: '#app',
    data:{
        title: 'Learning Vue',
        wage: 10
       
    },
    methods: {
        changeWage(amount){
            this.wage += amount
        }
        
    }
})
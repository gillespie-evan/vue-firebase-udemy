<template>
  <div id="app">
    <h1>{{ title }}</h1>
  <Navbar />
  <AllFriends :friends="friends" />
  <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
  components:{
    Navbar,
    OnlineFriends,
    AllFriends
  },
  data () {
    return {
      title: 'First Vue app, wee!',
      friends: [
            { name: 'Billy', online: true },
            { name: 'Bob', online: false },
            { name: 'John', online: true },
            { name: 'Mario', online: false },
        ]
    }
  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>

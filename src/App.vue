<template>
    <div id="app">
        <home></home>
    </div>
</template>
<script>
import Home from './components/Home'
export default {
    name: 'app',
    components: {
        Home
    }
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    margin: 0;
    padding: 0;
}

.el-loading {
    background-color: rgba(0, 0, 0, 0) !important;
}
</style>

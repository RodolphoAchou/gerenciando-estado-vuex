<template>
    <div>
        <h1>Counter: {{ counter }}</h1>
        <button @click="decrement" >Decrement</button>
        <button @click="increment" >Increment</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data: () => ({
        counter: 0
    }),
    methods: {
        decrement(){
            this.counter --
        },
        increment(){
            this.counter ++
        },
    }
}
</script>
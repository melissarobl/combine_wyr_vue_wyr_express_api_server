<script setup>
import { ref, watch } from 'vue' //declare reactive state

//props are what is shared by parent with child
defineProps({
  question: String,
  answer1: String,
  answer2: String,
})


const emit = defineEmits([
    'answer-selected'
])
//emit is what is sent to parent by child

const choice = ref(null)
//leave choice constant open to receive choice made by user

// function choiceMade() {
//   //emit even to tell parent that user has made choice.
//   emit('answer-selected', choice.value)
//  * have to add v-on:change="choiceMade" to each input below if using this
// }
// this takes care of returning all the data, functions, computed properties, so return statement not needed.

//watch for the choice made and emit the information to parent on event
watch(choice, () => {
  emit('answer-selected', choice.value)
    })
</script>



<template>  <!--this is the HTML that VUE can use. Similar to <div id="app"> seen previously--> <!--'v-on:' is same as @click -->

  <div id="wyr">
    <h2>Make your choice!</h2>

    <p>{{ question }}</p>
    <!-- 'question' is a prop provided by parent (app.vue) -->

      <div>
        <!-- this value attribute is the HTML value, for what data an input stores -->
        <input v-model="choice" v-bind:value="answer1" type="radio" id="answer-1">
        <label for="answer-1">{{ answer1 }}</label>

        <!-- this value attribute is the HTML value, for what data an input stores -->
        <input v-model="choice" v-bind:value="answer2" type="radio" id="answer-2">
        <label for="answer-2">{{ answer2 }}</label>
      </div>
  </div>

</template>

<style scoped>
#wyr {
  background-color: greenyellow;
}

p{
  font-family: "Courier New"
}

</style> <!-- 'scope' meaning CSS here will apply to one component, not the entire page! -->

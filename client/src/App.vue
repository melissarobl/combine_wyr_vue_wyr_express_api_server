<script setup>

import { ref, onMounted } from 'vue' //declare reactive state //onMounted allows you to call a function when component is first loaded
import wyrService from "./services/wyrService.js";

import WouldYouRather from './components/WouldYouRather.vue'


//declare reactive data for question, want to use API info, so set to empty strings
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

// this will store the user's answer once they made a choice (also reactive data)
const userSelection = ref('')


onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    //expect data to be something like
    //{"question":"Have a cat-sized elephant or an elephant-sized cat?",
    // "answer1":"Cat-sized elephant",
    // "answer2":"Elephant-sized cat"}

    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2

    //set API data to reactive data

  })
})

function updateUserSelection(userChoice){
  userSelection.value = `Thanks! You Chose: ${userChoice}`
}
//what is in choice.value in child will end up as the argument, userChoice
// then userChoice will be set as userSelection.value and can be used by parent

</script>

<template>

  <div id="app-component">

    <h1>Hello! Would You Rather...</h1>

    <!--sets the text for the data in the questions and answers and sends to child. V-bind is one-way. If question changed in parent, change sent to child.
    Doesn't have to be reactive data, could be regular string, but in this case it is reactive. Has to be a string, though
    since that is what child is expecting based on Props info entered-->
    <WouldYouRather
        v-bind:question="wyrQuestion"
        v-bind:answer1="wyrAnswer1"
        v-bind:answer2="wyrAnswer2"
        v-on:answer-selected="updateUserSelection"
    ></WouldYouRather>
    <!--when answer-selected is received, updateUserSelection event is called -->

    <p> {{ userSelection }}</p>

    <!--userSelection can be displayed because it is made available through function updateUserSelection -->


  </div>

</template>


<style scoped>

#app-component {
  font-size: 1.5em;
  background-color: #535bf2;
  padding: 35px;
}

p{
  font-family: Gabriola;
  font-size: 30px;
  color: blanchedalmond;
}
</style>

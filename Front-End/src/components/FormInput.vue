<script setup>
defineProps(["label", "modelValue", "passwordField"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="inputContainer">
    <p>
      {{ label }}
    </p>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="passwordField ? 'password' : 'text'"
    />
  </div>
</template>

<style scoped>
.errors {
  font-size: 0.5em;
}
.inputContainer {
  width: 100%;
  position: relative;
}

input {
  padding: 5px 10px;
  font-size: 1.15em;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none;
  font-family: inherit;
}

input[type="password"] {
  font-family: Verdana;
  letter-spacing: 0.125em;
}

input:focus-visible {
  outline: 1px solid gray;
}
</style>

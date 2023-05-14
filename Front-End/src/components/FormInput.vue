<script setup>
defineProps(["label", "modelValue"]);
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
      type="text"
    />
  </div>
</template>

<style scoped>
.inputContainer {
  width: 100%;
}

input {
  padding: 5px 10px;
  font-size: 1.15em;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none;
}

input:focus-visible {
  outline: 1px solid gray;
}
</style>

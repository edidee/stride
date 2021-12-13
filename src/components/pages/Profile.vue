<template>
  <div class="m-2 p-4">
    <img
      :src="$store.state.user.photoURL"
      class="w-24 rounded-full shadow-md"
    />
    <p><b>Name: </b> {{ $store.state.user.displayName }}</p>
    <p><b>Email: </b> {{ $store.state.user.providerData[0].email }}</p>
  </div>
</template>

<script>
export default {};
</script>

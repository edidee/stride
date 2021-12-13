<template>
  <div class="flex h-full">
    <!-- CODE START HERE -->
    <!-- Filler -->
    <div
      class="
        w-1/5
        h-screen
        flex-col flex
        items-center
        justify-center
        bg-blue-300
      "
    ></div>
    <!-- End Filler -->

    <!-- Navbar -->
    <div
      class="
        fixed
        w-1/5
        h-screen
        flex-col flex
        items-center
        justify-between
        bg-blue-300
      "
    >
      <p class="text-5xl font-extrabold">
        <span>S<span class="hidden md:inline lg:inline">tride</span>.</span>
      </p>
      <div class="flex flex-col space-y-2 mt-10">
        <router-link to="/" class="flex space-x-2 justify-center items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="md:h-5 lg:h-5 md:w-5 lg:w-5 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
          </span>
          <p class="hidden md:inline lg:inline">Home</p>
        </router-link>
        <router-link
          to="/stat"
          class="flex space-x-2 justify-center items-center"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="md:h-5 lg:h-5 md:w-5 lg:w-5 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
              /></svg
          ></span>
          <p class="hidden md:inline lg:inline">Stats</p>
        </router-link>
        <router-link
          v-if="$store.state.user != null"
          to="/me"
          class="flex space-x-2 justify-center items-center"
        >
          <span>
            <img
              :src="$store.state.user.photoURL"
              class="md:h-6 lg:h-6 md:w-6 lg:w-6 w-11 rounded-full shadow-md"
            />
          </span>
          <p class="hidden md:inline lg:inline">Profile</p>
        </router-link>
      </div>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>

    <!-- PAgeView -->
    <div class="w-4/5">
      <router-view />
    </div>
    <!-- END HERE -->
  </div>
</template>

<script>
export default {};
</script>

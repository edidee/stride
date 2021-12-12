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
      <p class="text-5xl font-extrabold"><span>S<span class="hidden md:inline lg:inline">tride</span>.</span></p>
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
        <router-link to="/stat" class="flex space-x-2 justify-center items-center">
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
        <button
          @click="launchMono"
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
                fill-rule="evenodd"
                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clip-rule="evenodd"
              /></svg
          ></span>
          <p class="hidden md:inline lg:inline">Account</p>
        </button>
        <!--router-link to="/" class="flex space-x-2 justify-center items-center">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              /></svg
          ></span>
          <p>Profile</p>
        </!router-link-->
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
import { Mono } from "mono-node";
import store from "./store";

// set the secret key
const monoClient = new Mono({
  secretKey: "test_sk_2leTB5EhetRgEqMt6gsO",
});

export default {
  methods: {
    launchMono() {
      const options = {
        onSuccess: function (response) {
          // get account id for connection
          function accIdCallback(err, results) {
            // Handle errors
            if (err) {
              console.log(err);
            }
            if (results) {
              console.log(results.id);
              store.commit("setid", results.id);
              monoClient.account.getAccountInformation(
                { accountId: results.id },
                (err, res) => {
                  store.commit("setaccount", res.account);
                }
              );

              monoClient.account.getAccountTransactions(
                {
                  accountId: results.id,
                  paginate: true,
                },
                (err, results) => {
                  store.commit("setstatement", results.data);
                }
              );
            }
          }

          monoClient.auth.getAccountId(response, accIdCallback);
        },

        onClose: function () {
          
        },
      };
      this.$launchMono(options);
    },
  },
};
</script>

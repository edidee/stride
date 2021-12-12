<template>
  <div class="h-screen">
    <p class="font-semibold text-xl p-4">Hi, {{ $store.state.account.name }}</p>
    <!-- Code starts here -->
    <center v-if="$store.state.monoid != 0" class="">
      <!-- Card -->
      <div class="rounded-lg shadow-lg w-3/4 mt-4 p-4">
        <center>
          <p class="text-3xl font-semibold">₦{{ $store.state.account.balance }}</p>
          <p class="uppercase text-sm text-blue-400 font-light">YOUR CURRENT BALANCE</p>
        </center>
        <!-- <div class="flex justify-between">
          <div class="text-left">
            <p class="text-green-500">INFLOW</p>
            <p>₦1000</p>
          </div>
          <div class="text-right">
            <p class="text-red-500">OUTFLOW</p>
            <p>₦800</p>
          </div>
        </div> -->
      </div>
      <!-- History -->
      <div class="w-3/4 mt-4">
      <p class="font-semibold text-xl text-left"> <span>How you spent your ₦₦ </span></p>
        <div
          :key="index"
          v-for="(item, index) in $store.state.statement"
          class="p-4 border-b-29 text-left border-blue-400 shadow-md rounded-md"
        >
          <!-- loop -->
          <p class="uppercase" :class="$store.state.statement[index]['type'] == 'credit' ? 'text-green-500' : 'text-red-500'">{{ $store.state.statement[index]["type"]}}</p>
          <p>₦{{ $store.state.statement[index]["amount"]}}</p>
          <p>{{ momentize($store.state.statement[index]["date"])}}</p>
        </div>
      </div>
    </center>
    <center class="flex h-full justify-center items-center" v-else>
      <div class="flex items-center justify-center">
        <p>Tap on '</p>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
              clip-rule="evenodd"
            /></svg
        ></span>
        <p>Account' to begin.</p>
      </div>
    </center>
    <!-- Code ends here -->
  </div>
</template>

<script>
import moment from 'moment'

export default {
    methods: {
        momentize(val){
            return moment(val).fromNow()
        }
    }
};
</script>

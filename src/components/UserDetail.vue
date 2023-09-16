<script setup lang="ts">
import { IUser } from "../utils/user.interface";

const { user, clickCount } = defineProps<{
  user: IUser;
  clickCount: number;
}>();
</script>

<template>
  <div class="p-8 shadow-lg mt-6 mx-4 text-center" v-if="user.id">
    <p class="font-bold text-lg pb-4">{{ user.name }}</p>
    <div class="shadow-sm mb-4 content-center">
      <img :src="user.picture" height="300" width="300" class="mx-auto" />
    </div>
    <p class="text-xs mb-2">Contact info</p>
    <p class="simple-text">{{ user.email }}</p>
    <p class="simple-text">{{ user.phone }}</p>

    <div class="bg-cyan-500 my-3 p-1 pt-2 rounded-md">
      <p class="simple-text text-white p-0 self-center">
        Click count: <b class="self-center">{{ clickCount }}</b>
      </p>
    </div>
  </div>
</template>

<style>
.simple-text {
  @apply font-light pb-3;
}
</style>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import UserItem from "./components/UserItem.vue";
import UserDetail from "./components/UserDetail.vue";
import { IUser } from "./utils/user.interface";
import { computed, onMounted, reactive } from "vue";
import { getUserData } from "./api/user.service";

const users: IUser[] = reactive([]);
const userDetails: IUser | {} = reactive({});
const countLog: Record<string, number> = reactive({});

onMounted(async () => {
  const data = await getUserData();
  users.push(...data);
});

const clickedUser = (idx: number) => {
  const user = users[idx];
  countLog[user.id] = countLog[user.id] ?? 0;
  countLog[user.id] += 1;
  Object.assign(userDetails, users[idx]);
};

const listData = computed(() =>
  users.map((d) => ({ id: d.id, name: `${d.name}` }))
);
</script>

<template>
  <div>
    <NavBar />
    <div class="md:flex md:flex-row">
      <div class="section h-12 md:h-full">
        <p class="text-sky-800 font-bold text-lg">User List</p>
        <p class="text-xs md:opacity-0 text-sky-800">
          (Scroll down to see details)
        </p>
        <br class="h-2" />
        <UserItem
          v-for="(user, index) in listData"
          :name="user.name"
          :index="index"
          :selected="(userDetails as IUser).id === user.id"
          @click="clickedUser(index)"
        />
      </div>
      <div class="section">
        <UserDetail
          :user="(userDetails as IUser)"
          :clickCount="countLog[(userDetails as IUser).id]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  @apply basis-1/2 h-1/2 p-5 md:p-10;
}
</style>

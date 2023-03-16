<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    active-text-color="red"
    background-color="black"
    text-color="white"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <RouterLink to="/"><el-menu-item index="0"><img src="./heartbeat.png" alt="Logo"  width="150" height="55"></el-menu-item></RouterLink>
    <h1>Cardiomyopathy</h1>
    <div class="flex-grow" />
    <RouterLink to="/"><el-menu-item index="1">Home</el-menu-item></RouterLink>
    <el-sub-menu index="2">
      <template #title>About</template>
      <RouterLink to="/help"> <el-menu-item index="2-1">Help</el-menu-item></RouterLink>
      <RouterLink to="/News"><el-menu-item index="2-2">News Feed</el-menu-item></RouterLink>
    </el-sub-menu>
    <div class="Modals" @keyup.esc.stop="closeModal()">
    <el-container>
      <el-button  @click="showModal()" color="transparent"
       >Login
      </el-button>
      <modal :is-modal-visible="isModalVisible" @close-modal="closeModal()">
        <login></login>
      </modal>
    </el-container>
  </div>
    <div class="search">
    <el-input
      v-model="input2"
      placeholder="Search"
      :prefix-icon="Search"
    />
  </div>
  </el-menu>
  
  <router-view />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Modal from "./views/Modal.vue";
import Login from "./views/Login.vue";
import { Search } from '@element-plus/icons-vue'
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const input1 = ref('')
const input2 = ref('')


const isModalVisible = ref(false);

function showModal() {
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
h1{

  color: black;
  font-size: 35px;
}
.search{

  font-size: 30px;
  size: 100px;
  

}
.Modals{


  align-items: center;
  width: auto;
  height: auto;
  margin-top: .8%;
  margin-right: .25%;
  position: relative;
  
}




</style>
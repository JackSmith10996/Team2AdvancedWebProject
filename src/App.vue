<template>
  <header class="navbar">
    <a><RouterLink to="/"><img src="./heartbeat.png" alt="Logo"  width="120" height="55" ></RouterLink></a>
    <h2>Cardiomyopathy</h2>
    <a><RouterLink to="/">Home</RouterLink></a> 
    <a><RouterLink to="/help">Help</RouterLink></a>
    <a><RouterLink to="/News">News Feed</RouterLink></a>  
    <a><RouterLink to="/Login" v-if="!user">Login</RouterLink></a>
    <button class = "logout" color= "transparent"  @click = "logout" v-if="user">Logout {{user}}</button>
    <div class="search">
    <input
      v-model="input2"
      placeholder="Search"
    />
    </div>
  </header>
  <router-view 
  :user="user"
  @logout="logout"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import {
  firebaseAuthentication,
  onAuthStateChanged,
  signOut,
} from "./firebase/database";

const user = ref();
const errorLogout = ref(null);
const input2 = ref('');
onAuthStateChanged(firebaseAuthentication, (currentUser) => {
  if (currentUser) {
    user.value = currentUser.displayName;

  }
})
const router = useRouter();

 
function logout() {
  signOut(firebaseAuthentication).then(
    () => {
      user.value = '';
      router.push("login");
    },
    (error) => {
      errorLogout.value = error.message;
    }
  );
}
</script>

<style>

h1{

  color: black;
  font-size: 35px;
}

.search{

  font-size: 30px;
  size: 100px;
  padding-top: 10px;
 
  

}
.logout{

  margin-top: 10px;


}

header{
  

  color: black;
}
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: white;
  font-family: Arial;
  

}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 30px;
  text-decoration: none;
}

</style>
<script setup>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const errorFirebase = ref(null);
const auth = getAuth();
const router = useRouter();

function ResetPass(){
  const info = {
    email: email.value,
  };
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      errorFirebase.value = errorMessage;
    });
}
</script>

<template>
  <el-form label-width="50px" @submit.prevent>
    <h2>Forgotten Password</h2>

    <el-form-item label="Email">
      <el-input
        type="email"
        placeholder="email"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="success" style="margin: auto" @click="ResetPass">
        Reset Password
      </el-button>
    </el-form-item>
  </el-form>
</template>
<style>



</style>
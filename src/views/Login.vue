<script setup>
import { ref } from 'vue';
import { firebaseAuthentication, signInWithEmailAndPassword } from "@/firebase/database";
import { useRouter } from "vue-router";

defineEmits(["login-clicked"]);

const email = ref("");
const password = ref("");

const router = useRouter();

function login() {
  const info = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword( firebaseAuthentication, info.password )
    .then(
      (userCredential) => {
        const user = userCredential.user;
        router.push("/");
      },
      (error) => {
        errorFirebase.value = error.message;
      }
    );
}
</script>

<template>
  <el-form label-width="120px" class="demo-ruleForm" @click.stop>
    <h2>Login</h2><br>

    <el-form-item label="Email">
      <el-input
        type="email"
        placeholder="email"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        v-model="password"
      ></el-input>
    </el-form-item>

    <div v-if="errorFirebase">
      <el-button plain type="danger" disabled icon="el-icon-error">
        {{ errorFirebase }}
      </el-button>
    </div>

    <el-form-item>
      <el-button type="primary" style="margin: auto; margin-right: 5px;" @click="login">
        Login
      </el-button>
      <a href="#">Reset Password</a>
    </el-form-item>
  </el-form>
</template>

<style></style>

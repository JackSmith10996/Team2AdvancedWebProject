<script setup lang="ts">
import { ref } from 'vue';

const email = ref("");
const password = ref("");
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

    <el-form-item>
      <el-button type="primary" style="margin: auto; margin-right: 5px;">Login</el-button>
      <a href="#">Reset Password</a>
    </el-form-item>
  </el-form>
</template>

<style></style>

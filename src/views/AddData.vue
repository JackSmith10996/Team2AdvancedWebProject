<script setup>
import { ref} from "vue";
import { useRouter } from "vue-router";
import { doc , setDoc} from "firebase/firestore";
import { firebaseFireStore } from "@/firebase/database";


const ledv = ref("");
const lesv = ref("");
const lsv = ref("");
const lvef = ref("");
const lvmass = ref("");
const redv = ref("");
const resv = ref("");
const rsv = ref("");
const rvef = ref("");


const router = useRouter();

const addDataToFirestore = async () => {
  try {
    const data = {
      ledv: parseFloat(ledv.value),
      lesv: parseFloat(lesv.value),
      lsv: parseFloat(lsv.value),
      lvef: parseFloat(lvef.value),
      lvmass: parseFloat(lvmass.value),
      redv: parseFloat(redv.value),
      resv: parseFloat(resv.value),
      rsv: parseFloat(rsv.value),
      rvef: parseFloat(rvef.value)
    };

    const randomId = Math.floor(Math.random() * 1000000);
    const docRef = doc(firebaseFireStore,"MyCardiomyopathy",randomId.toString());
    await setDoc(docRef, data);
    console.log("Data added to Firestore successfully!");
    console.log(data); 
    console.log(randomId);
    router.push("/");
  } catch (error) {
    console.error("Error adding data to Firestore: ", error);
  }
}
</script>


<template>
    <div class="addData-section">
      <el-form label-width="95px" class="demo-ruleForm" @submit.prevent>
        <h2 id="heading">Add Data</h2><br>
        <el-form-item label="ledv">
  <el-input
    type="text"
    placeholder="ledv"
    required
    autocomplete="off"
    v-model="ledv"
  ></el-input>
</el-form-item>
<el-form-item label="lesv">
  <el-input
    type="text"
    placeholder="lesv"
    required
    autocomplete="off"
    v-model="lesv"
  ></el-input>
</el-form-item>
<el-form-item label="lsv">
  <el-input
    type="text"
    placeholder="lsv"
    required
    autocomplete="off"
    v-model="lsv"
  ></el-input>
</el-form-item>
<el-form-item label="lvef">
  <el-input
    type="text"
    placeholder="lvef"
    required
    autocomplete="off"
    v-model="lvef"
  ></el-input>
</el-form-item>
<el-form-item label="lvmass">
  <el-input
    type="text"
    placeholder="lvmass"
    required
    autocomplete="off"
    v-model="lvmass"
  ></el-input>
</el-form-item>
<el-form-item label="redv">
  <el-input
    type="text"
    placeholder="redv"
    required
    autocomplete="off"
    v-model="redv"
  ></el-input>
</el-form-item>
<el-form-item label="resv">
  <el-input
    type="text"
    placeholder="resv"
    required
    autocomplete="off"
    v-model="resv"
  ></el-input>
</el-form-item>
<el-form-item label="rsv">
  <el-input
    type="text"
    placeholder="rsv"
    required
    autocomplete="off"
    v-model="rsv"
  ></el-input>
</el-form-item>
<el-form-item label="rvef">
  <el-input
    type="text"
    placeholder="rvef"
    required
    autocomplete="off"
    v-model="rvef"
  ></el-input>
</el-form-item>
        
        
  
        <el-form-item>
          <el-button type="danger" @click="addDataToFirestore">Submit</el-button>
          <router-link :to="{ name: 'Home' }">
            <el-button id="cancel-btn">Cancel</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </template>
  

<style>
.addData-section{
  display: inline-block;
  margin-left: 35%;
  margin-top: 2%;
}

#heading{
    margin-left: 40%;
}

#cancel-btn{
    margin-left: 20%;
}
</style>

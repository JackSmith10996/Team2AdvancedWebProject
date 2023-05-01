<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { doc , setDoc, updateDoc, serverTimestamp } from "firebase/firestore";


// data variables
const ledv = ref("");
const lesv = ref("");
const lsv = ref("");
const lvef = ref("");
const lvmass = ref("");
const redv = ref("");
const resv = ref("");
const rsv = ref("");
const rvef = ref("");

const data = {
    ledv: ledv,
    lesv: lesv,
    lsv: lsv,
    lvef: lvef,
    lvmass: lvmass,
    redv: redv,
    resv: resv,
    rsv: rsv,
    rvef: rvef
}

await setDoc(doc(db, "MyCardiomyopathy", /*User ID*/), data);

const docRef = doc(database, "MyCardiomyopathy", /*User ID*/)

const updateData = await updateDoc(docRef, {
    ledv: ledv,
    lesv: lesv,
    lsv: lsv,
    lvef: lvef,
    lvmass: lvmass,
    redv: redv,
    resv: resv,
    rsv: rsv,
    rvef: rvef
});

const updateTimestamp = await updateDoc(docRef, {
    timestamp: serverTimestamp()
});

const router = useRouter();

</script>

<template>
    <el-form label-width="95px" class="demo-ruleForm" @submit.prevent>
    <h2>Add Data</h2>

        <el-form-item label="ledv">
            <el-input
            type="text"
            placeholder="ledv"
            required
            autocomplete="off"
            v-model="levd"
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
      <el-button type="danger" @click="updateData">Submit</el-button>
      <router-link :to="{ name: 'Home' }"
        ><el-button>Cancel</el-button></router-link
      >
    </el-form-item>
        
    </el-form>

</template>

<style></style>

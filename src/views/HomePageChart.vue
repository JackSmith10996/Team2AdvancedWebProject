<script setup>
import {ref} from "vue"

const chartOptions = ref({
        chart:{
          height: "350",
          type:"line",
          zoom:{
            enabled:false,
          },      
        },
    dataLabels:{

        enabled: false,
    },
    stroke:{

        curve: "straight",
    },
    title: {
      text: "Cardiomyopathy diagnoses compared to age",
      align: "left",
    },
    grid: {
        row: {
            colors: ["red,black"],
            opacity: 0.5,
        },
    },
    xaxis: {
        categories:["0-18","18-20","21-25","26-30","31-35","36-40","41-45","46-50","51-55","56-59","60+"],
        title:{
            text:"Age",
        },
    },
    yaxis: {
        title:{
        text:"Number of Diagnoses'",
        },
    },
    legend:{
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY:-25,
        offsetX: -5,
    },
    });

    const series = ref([
        {
            name: "Number of diagnoses'(K)",
            data:[10,15,30,55,105,112,135,160,200,250,350],
        },
    ]);

</script>
<template>
    <div>
        <apexchart
        postion = "center"
        type="line"
        height="350"
        width="500"
        :options = "chartOptions"
        :series="series"
        ></apexchart>
    </div>
    <div>
        <apexchart
        type="bar"
        height="350"
        width="500"
        :options = "chartOptions"
        :series="series"
        ></apexchart>
    </div>
</template>
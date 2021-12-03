<template>
  <div class="text-center">
      <button class="btn btn-primary" @click="getWeatherData()">Get Weather Api</button>
      <div>
          {{weatherData}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            weatherData: []
        }
    },
    methods: {
        getWeatherData(){
            this.$axios.get(this.$api.WEATHER_GET)
            .then((res) => {
                console.log(res)
                this.weatherData = res.data;
            })
        }
    }
}
</script>

<style>

</style>
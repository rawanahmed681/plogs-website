<template>
    <div class="meal-details">
      <h1>{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" alt="Meal Image" />
      <p>{{ meal.strInstructions }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        meal: null 
      };
    },
    methods: {
      fetchMealDetails() {
        const mealId = this.$route.params.id;
  
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
          .then(response => response.json())
          .then(data => {
            this.meal = data.meals[0]; 
          })
          .catch(error => console.error('Error fetching meal details:', error));
      }
    },
    mounted() {
      this.fetchMealDetails(); 
    }
  };
  </script>
  
  <style scoped>
  .meal-details {
    text-align: center;
    margin: 40px auto;
  }
  
  img {
    width: 60%;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #333;
    line-height: 1.6;
  }
  </style>
  
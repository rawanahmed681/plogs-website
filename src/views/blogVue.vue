<template>
  <div class="blog">
    <h1>Latest Blog Articles</h1>
    <p>Get updated with the latest meals and insights from the world of culinary arts.</p>
    
    <div class="blog-list">
      <div v-for="meal in meals" :key="meal.idMeal" class="blog-item">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="blog-image" />
        <h2>{{ meal.strMeal }}</h2>
        <p>{{ meal.strInstructions.slice(0, 150) }}...</p> 
        <router-link :to="'/meal/' + meal.idMeal">Read More</router-link> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meals: [] 
    };
  },
  methods: {
    fetchMeals() {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => {
          this.meals = data.meals; 
        })
        .catch(error => console.error('Error fetching meals:', error));
    }
  },
  mounted() {
    this.fetchMeals(); 
  }
};
</script>

<style scoped>
.blog {
  text-align: center;
  margin: 40px auto;
}

.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.blog-item {
  width: 30%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

h2 {
  margin: 20px 0 10px;
}

p {
  color: #555;
}

a {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #ff6b6b;
  font-weight: bold;
}
</style>

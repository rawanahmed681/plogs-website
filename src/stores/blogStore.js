// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     meals: [] // Initialize meals state
//   },
//   mutations: {
//     SET_MEALS(state, meals) {
//       state.meals = meals; // Set meals data
//     }
//   },
//   actions: {
//     fetchMeals({ commit }) {
//       // Fetch the meal data from TheMealDB API and commit it to the state
//       fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a') // Replace 'a' with the desired letter or modify for your needs
//         .then(response => response.json())
//         .then(data => {
//           commit('SET_MEALS', data.meals); // Commit the meals to the Vuex store
//         })
//         .catch(error => console.error('Error fetching meals:', error));
//     }
//   },
//   getters: {
//     meals: state => state.meals // Create a getter to access meals state
//   }
// });

<template>
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Recetas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          class="bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105"
          v-for="recipe in recipes" 
          :key="recipe.id">
          <h5 class="text-xl font-semibold mb-2">{{ recipe.name }}</h5>
          <p class="text-gray-700 mb-4">Instrucciones: {{ recipe.instructions }}</p>
          <ul class="list-disc pl-5">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              {{ ingredient.name }}: {{ ingredient.pivot.quantity }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/services/api.js';
  
  export default {
    name: 'RecipesComponent',
    data() {
      return {
        recipes: []
      };
    },
    methods: {
      async fetchRecipes() {
        try {
          const response = await apiClient.get('/kitchen/recipes');
          this.recipes = response.data;
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      }
    },
    created() {
      this.fetchRecipes();
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí */
  </style>
  
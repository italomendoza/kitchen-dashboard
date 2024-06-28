<template>
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Ingredientes Disponibles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          class="bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105"
          v-for="ingredient in ingredients" 
          :key="ingredient.id">
          <h5 class="text-xl font-semibold mb-2">{{ ingredient.name }}</h5>
          <p class="text-gray-700">Cantidad: {{ ingredient.quantity }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ingredientsApiClient } from '@/services/api.js';
  
  export default {
    name: 'IngredientsComponent',
    data() {
      return {
        ingredients: []
      };
    },
    methods: {
      async fetchIngredients() {
        try {
          const response = await ingredientsApiClient.get('/ingredients/available');
          this.ingredients = response.data;
        } catch (error) {
          console.error('Error fetching ingredients:', error);
        }
      }
    },
    created() {
      this.fetchIngredients();
    }
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí */
  </style>
  
<template>
    <div class="flex justify-center mt-6">
      <button 
        @click="placeOrder" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Orden
      </button>
    </div>
  </template>
  
  <script>
  import { kitchenApiClient } from '@/services/api.js';

  export default {
    name: 'NuevaOrdenComponent',
    methods: {
      async placeOrder() {
        try {
          const response = await kitchenApiClient.post('/kitchen/prepare-dish');
          console.log('Order placed:', response.data);
          window.location.reload();
        } catch (error) {
          console.error('Error placing order:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Puedes agregar estilos personalizados */
  </style>
  
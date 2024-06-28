<template>
    <div class="flex justify-center mt-6">
      <button 
        @click="restockInventory" 
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Abastecer Bodega
      </button>
    </div>
  </template>
  
  <script>
  import { ingredientsApiClient } from '@/services/api.js';
  
  export default {
    name: 'RestockInventoryComponent',
    methods: {
      async restockInventory() {
        try {
          const response = await ingredientsApiClient.post('/ingredients/run-job');
          console.log('Inventory restocked:', response.data);
          // Puedes manejar la respuesta según sea necesario
        } catch (error) {
          console.error('Error restocking inventory:', error);
          // Manejar errores, mostrar mensajes, etc.
        }
      }
    }
  };
  </script>
  
  <style>
  /* Estilos personalizados si es necesario */
  </style>
  
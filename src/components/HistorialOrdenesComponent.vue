<template>
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-6">Historial de Órdenes</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">ID de Receta</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Nombre del Plato</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orderHistory" :key="order.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ order.recipe.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ order.dish_name }}</td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ order.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/services/api.js';
  
  export default {
    name: 'OrderHistoryComponent',
    data() {
      return {
        orderHistory: []
      };
    },
    methods: {
      async fetchOrderHistory() {
        try {
          const response = await apiClient.get('/kitchen/order-history');
          this.orderHistory = response.data;
        } catch (error) {
          console.error('Error fetching order history:', error);
        }
      }
    },
    created() {
      this.fetchOrderHistory();
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados específicos del componente */
  </style>
  
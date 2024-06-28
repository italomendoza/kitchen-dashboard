<template>
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-6">Órdenes Pendientes</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">ID de Orden</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Plato</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in pendingOrders" :key="order.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ order.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ order.dish }}</td>
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
    name: 'PendingOrdersComponent',
    data() {
      return {
        pendingOrders: []
      };
    },
    methods: {
      async fetchPendingOrders() {
        try {
          const response = await apiClient.get('/kitchen/orders-in-preparation');
          this.pendingOrders = response.data;
        } catch (error) {
          console.error('Error fetching pending orders:', error);
        }
      }
    },
    created() {
      this.fetchPendingOrders();
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente de órdenes pendientes */
  </style>
  
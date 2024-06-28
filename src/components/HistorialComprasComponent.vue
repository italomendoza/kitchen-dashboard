<template>
    <div class="container mx-auto mt-8">
      <h2 class="text-2xl font-bold mb-6">Historial de Compras</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">#</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Ingrediente</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Cantidad</th>
              <th class="px-6 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="purchase in purchaseHistory" :key="purchase.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ purchase.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ purchase.ingredient_name }}</td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ purchase.quantity }}</td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">{{ purchase.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/services/api.js';
  
  export default {
    name: 'PurchaseHistoryComponent',
    data() {
      return {
        purchaseHistory: []
      };
    },
    methods: {
      async fetchPurchaseHistory() {
        try {
          const response = await apiClient.get('/ingredients/purchase-history');
          this.purchaseHistory = response.data;
        } catch (error) {
          console.error('Error fetching purchase history:', error);
        }
      }
    },
    created() {
      this.fetchPurchaseHistory();
    }
  };
  </script>
  
  <style scoped>
  /* Your scoped styles here */
  </style>
  
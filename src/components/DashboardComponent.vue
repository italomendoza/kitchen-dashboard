<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div class="sm:col-span-2">
      <NuevaOrdenComponent @orderCreated="fetchPendingOrders" />
      <RestockInventoryComponent />
      
    </div>
    <IngredientesComponent />
    <RecetasComponent />
    <div class="sm:col-span-2">
      <HistorialComprasComponent />
      
    </div>
    <HistorialOrdenesComponent />
    <OrdenesPendientesComponent />
  </div>
</template>

<script>
import NuevaOrdenComponent from './NuevaOrdenComponent.vue';
import RestockInventoryComponent from './RestockInventoryComponent.vue';
import IngredientesComponent from './IngredientesComponent.vue';
import RecetasComponent from './RecetasComponent.vue';
import OrdenesPendientesComponent from './OrdenesPendientesComponent.vue';
import HistorialOrdenesComponent from './HistorialOrdenesComponent.vue';
import HistorialComprasComponent from './HistorialComprasComponent.vue';

export default {
  components: {
    NuevaOrdenComponent,
    RestockInventoryComponent,
    IngredientesComponent,
    RecetasComponent,
    OrdenesPendientesComponent,
    HistorialOrdenesComponent,
    HistorialComprasComponent
  }
};
</script>

import { createRouter, createWebHashHistory } from "vue-router";

import HomeComponent from "@/components/HomeComponent.vue";
import ProductDetail from "@/components/ProductDetails.vue";
import StockComponent from "@/components/StockComponent.vue";
import WareHouseComponent from "@/components/WareHouseComponent.vue";
const routes = [
    { path: '/', name: 'ProductCatalog', component: HomeComponent },
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: route => ({ productId: Number(route.params.id) }), // Ensure `productId` is passed as a prop
    },
    { path: '/stock', name: 'StockComponent', component: StockComponent },
    { path: '/WarehouseManagement', name: 'WareHouseComponent', component: WareHouseComponent },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
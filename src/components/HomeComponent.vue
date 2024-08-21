<template>
    <v-container fluid>
        <v-row>
            <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4" lg="3">
                <v-card @click="navigateToProductDetail(product.id)" class="product-card">
                    <v-img :src="imagePaths[product.id - 1]" :alt="product.name" height="200px"></v-img>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>${{ product.price.toFixed(2) }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="primary">Add to Cart</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import apple from '../assets/products/apple.jpg';
import almondMilk from '../assets/products/almondMilk.jpg';
import bread from '../assets/products/bread.jpg';
import chicken from '../assets/products/chicken.jpg';
import chocolate from '../assets/products/chocolate.jpg';
import tomato from '../assets/products/tomato.jpg';
import greenOlivesOil from '../assets/products/greenOlivesOil.jpg';
import greenTea from '../assets/products/greenTea.jpg';
import pasta from '../assets/products/pasta.jpg';
import yogurt from '../assets/products/yogurt.jpg';

export default {
    name: 'ProductCatalog',
    data() {
        return {
            products: [],
            imagePaths: [
                apple,
                bread,
                almondMilk,
                chicken,
                greenOlivesOil,
                chocolate,
                tomato,
                yogurt,
                pasta,
                greenTea,
            ]
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const products = await response.json();
                this.products = products;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        navigateToProductDetail(productId) {
            this.$router.push({ name: 'ProductDetail', params: { id: productId } });
        }
    },
    created() {
        this.fetchProducts();
    }
};
</script>

<style scoped>
.v-container {
    padding-top: 20px;
}

.v-card {
    transition: box-shadow 0.3s ease;
}

.v-card:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}

.product-card {
    cursor: pointer;
}
</style>

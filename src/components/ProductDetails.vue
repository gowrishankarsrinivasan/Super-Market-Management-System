<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card v-if="product">
                    <v-img :src="defaultImage" :alt="product.name" height="400px"></v-img>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>${{ product.price.toFixed(2) }}</v-card-subtitle>
                    <v-card-text>
                        <p><strong>Description:</strong> {{ product.description }}</p>
                        <p><strong>Category:</strong> {{ product.category }}</p>
                        <p><strong>Brand:</strong> {{ product.brand }}</p>
                        <p><strong>Stock:</strong> {{ product.stock }}</p>
                        <p><strong>Weight:</strong> {{ product.weight }}</p>
                        <p><strong>Dimensions:</strong> {{ product.dimensions.length }} x {{ product.dimensions.width }}
                            x {{ product.dimensions.height }}</p>
                        <p><strong>SKU:</strong> {{ product.sku }}</p>
                        <p><strong>Barcode:</strong> {{ product.barcode }}</p>
                        <p><strong>Date Added:</strong> {{ new Date(product.dateAdded).toLocaleDateString() }}</p>
                        <p><strong>Tags:</strong> <v-chip v-for="tag in product.tags" :key="tag">{{ tag }}</v-chip></p>
                    </v-card-text>
                </v-card>
                <v-alert v-else type="error">Product not found</v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import defaultImage from '../assets/products/apple.jpg'; // Import a default image

export default {
    name: 'ProductDetail',
    props: {
        productId: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            product: null,
            defaultImage: defaultImage,
        };
    },
    async created() {
        await this.fetchProductDetails();
    },
    methods: {
        async fetchProductDetails() {
            try {
                console.log('Fetching details for product ID:', this.productId); // Log productId
                const url = `http://localhost:3000/products/${this.productId}`;
                console.log('Fetch URL:', url); // Log URL
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched data:', data); // Log fetched data
                // Directly assign data if it's a single product object
                this.product = data;
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
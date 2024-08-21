<template>
    <v-data-table :custom-filter="filterOnlyCapsText" :headers="headers" :items="items" :search="search"
        item-value="name">
        <template v-slot:top>
            <v-text-field v-model="search" class="pa-2" label="Search (UPPER CASE ONLY)"></v-text-field>
        </template>
    </v-data-table>
</template>

<script>
export default {
    data: () => ({
        search: '',
        headers: [
            {
                text: 'Name',
                align: 'start',
                value: 'name',  // 'value' should match the property name in the item
            },
            {
                text: 'Stock',
                align: 'end',
                value: 'stock',  // 'value' should match the property name in the item
            },
            {
                text: 'Reorder Point',
                align: 'end',
                value: 'reorderPoint',  // 'value' should match the property name in the item
            },
            {
                text: 'Date Added',
                align: 'end',
                value: 'dateAdded',  // 'value' should match the property name in the item
            }
        ],
        items: [],
    }),
    created() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                const product = await response.json();
                this.items = product;
            } catch (error) {
                console.error('Failed to fetch products:', error.message);
            }
        },
        filterOnlyCapsText(value, query) {
            return value != null &&
                query != null &&
                typeof value === 'string' &&
                value.toUpperCase().indexOf(query) !== -1;
        },
    },
}
</script>

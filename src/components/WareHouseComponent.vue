<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-data-table :headers="headers" :items="warehouseData" class="elevation-1">
                    <template v-slot:[`item.stock`]="{ item }">
                        <v-chip :color="getStockColor(item.stock)">
                            {{ item.stock }}
                        </v-chip>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'WarehouseManagement',
    data() {
        return {
            headers: [
                { text: 'Warehouse Name', value: 'warehouseName' },
                { text: 'Product Name', value: 'productName' },
                { text: 'Stock', value: 'stock' },
            ],
            warehouseData: [
                {
                    warehouseName: 'Main Warehouse',
                    productName: 'Organic Apples',
                    stock: 120,
                },
                {
                    warehouseName: 'East Coast Warehouse',
                    productName: 'Organic Apples',
                    stock: 50,
                },
                {
                    warehouseName: 'West Coast Warehouse',
                    productName: 'Organic Apples',
                    stock: 75,
                },
                {
                    warehouseName: 'Main Warehouse',
                    productName: 'Almond Milk',
                    stock: 300,
                },
                {
                    warehouseName: 'East Coast Warehouse',
                    productName: 'Almond Milk',
                    stock: 100,
                },
                {
                    warehouseName: 'West Coast Warehouse',
                    productName: 'Almond Milk',
                    stock: 150,
                },
                {
                    warehouseName: 'Main Warehouse',
                    productName: 'Whole Grain Bread',
                    stock: 250,
                },
                {
                    warehouseName: 'East Coast Warehouse',
                    productName: 'Whole Grain Bread',
                    stock: 60,
                },
                {
                    warehouseName: 'West Coast Warehouse',
                    productName: 'Whole Grain Bread',
                    stock: 120,
                },
                {
                    warehouseName: 'Main Warehouse',
                    productName: 'Organic Bananas',
                    stock: 200,
                }
            ]

        };
    },
    methods: {
        getStockColor(stock) {
            return stock < 50 ? 'red' : 'green';
        },
    },
};
</script>
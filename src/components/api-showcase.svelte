<div class="col-span-1 md:col-span-2 lg:col-span-3" in:fly={{y: 20, duration: 400, delay: 400}}>
    <Card.Root
        class="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl"
    >
        <Card.Header class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 pb-8">
            <div class="flex items-center gap-2">
                <div class="rounded-full bg-green-500/20 p-2">
                    <ServerIcon class="h-5 w-5 text-green-500" />
                </div>
                <Card.Title>FastAPI Integration</Card.Title>
            </div>
            <Card.Description>Real-time data from FastAPI backend</Card.Description>
        </Card.Header>
        <Card.Content class="p-6 pt-8">
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <h3 class="text-lg font-medium">Product Catalog</h3>
                    <Button
                        variant="outline"
                        size="sm"
                        class="flex items-center gap-1"
                        on:click={fetchProducts}
                        disabled={loading}
                    >
                        {#if loading}
                            <LoaderIcon class="h-4 w-4 animate-spin" />
                            <span>Loading...</span>
                        {:else}
                            <RefreshCwIcon class="h-4 w-4" />
                            <span>Refresh</span>
                        {/if}
                    </Button>
                </div>

                {#if error}
                    <Alert.Root variant="destructive">
                        <Alert.Icon>
                            <AlertCircleIcon class="h-4 w-4" />
                        </Alert.Icon>
                        <Alert.Title>Error</Alert.Title>
                        <Alert.Description>
                            {error}
                            <Button
                                variant="link"
                                class="text-destructive h-auto p-0 underline"
                                on:click={fetchProducts}
                            >
                                Try again
                            </Button>
                        </Alert.Description>
                    </Alert.Root>
                {/if}

                {#if products && products.length > 0}
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {#each products as product (product.id)}
                            <Card.Root class="overflow-hidden">
                                <div class="p-4">
                                    <div class="flex items-start gap-3">
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            class="h-16 w-16 rounded-md object-cover"
                                        />
                                        <div class="flex-1">
                                            <h4 class="font-medium">{product.name}</h4>
                                            <p class="text-muted-foreground text-sm">
                                                {product.category}
                                            </p>
                                            <div class="mt-1 flex items-center justify-between">
                                                <span class="font-bold"
                                                    >${product.price.toFixed(2)}</span
                                                >
                                                <Badge
                                                    class="border-green-200 bg-green-50 text-green-700"
                                                >
                                                    In Stock
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-muted-foreground mt-3 text-sm">
                                        {product.description}
                                    </p>
                                    <div class="mt-3">
                                        <Button variant="outline" size="sm" class="w-full">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </Card.Root>
                        {/each}
                    </div>
                {:else if !loading && !error}
                    <div class="flex flex-col items-center justify-center py-8 text-center">
                        <PackageIcon class="text-muted-foreground mb-4 h-12 w-12" />
                        <h3 class="text-lg font-medium">No Products Found</h3>
                        <p class="text-muted-foreground mt-1 max-w-md">
                            There are no products available at the moment. Click the refresh button
                            to try again.
                        </p>
                    </div>
                {/if}

                {#if loading}
                    <div class="flex flex-col items-center justify-center py-8 text-center">
                        <LoaderIcon class="text-primary mb-4 h-12 w-12 animate-spin" />
                        <h3 class="text-lg font-medium">Loading Products</h3>
                        <p class="text-muted-foreground mt-1 max-w-md">
                            Fetching product data from the FastAPI backend...
                        </p>
                    </div>
                {/if}
            </div>
        </Card.Content>
    </Card.Root>
</div>

<script>
import {AlertCircleIcon, LoaderIcon, PackageIcon, RefreshCwIcon, ServerIcon} from 'lucide-svelte'
import {fly} from 'svelte/transition'

import * as Alert from '$ui/alert/index.js'
import {Badge} from '$ui/badge/index.js'
// Import UI components with correct paths
import {Button} from '$ui/button/index.js'
import * as Card from '$ui/card/index.js'

// State
let products = $state([])
let loading = $state(false)
let error = $state('')

// Fetch products from the FastAPI backend
async function fetchProducts() {
    loading = true
    error = ''

    try {
        const response = await fetch('/api/products')

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`)
        }

        products = await response.json()
    } catch (err) {
        console.error('Failed to fetch products:', err)
        error = 'Failed to load products. Please check if the FastAPI server is running.'
    } finally {
        loading = false
    }
}

fetchProducts()
</script>

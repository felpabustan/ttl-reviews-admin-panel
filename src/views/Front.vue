<template>
    <div>
        <!-- Hero Banner -->
        <div class="hero bg-blue-500 text-white p-8 text-center">
            <h1 class="text-4xl font-bold mb-4">Welcome to Our B2B Review Management Solution</h1>
            <p class="text-xl mb-6">Manage your product reviews efficiently and effectively.</p>
            <router-link to="/get-started" class="bg-white text-blue-500 px-4 py-2 rounded">Get Started</router-link>
        </div>

        <div class="container mx-auto p-4">
            <!-- Features Section -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-xl font-semibold mb-2">Create Reviews</h2>
                    <p class="mb-4">Add new reviews for your products to engage with your customers.</p>
                </div>

                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-xl font-semibold mb-2">Read Reviews</h2>
                    <p class="mb-4">View all the reviews submitted by your customers.</p>
                </div>

                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-xl font-semibold mb-2">Update Reviews</h2>
                    <p class="mb-4">Edit existing reviews to keep the information up-to-date.</p>
                </div>

                <div class="bg-white p-4 rounded shadow">
                    <h2 class="text-xl font-semibold mb-2">Delete Reviews</h2>
                    <p class="mb-4">Remove reviews that are no longer relevant or appropriate.</p>
                </div>
            </div>

            <!-- Testimonials Section -->
            <div class="my-8">
                <h2 class="text-2xl font-bold mb-4">Testimonials</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded shadow">
                        <p class="mb-4">"This tool has revolutionized the way we manage our product reviews!"</p>
                        <p class="font-semibold">- John Doe, CEO of ExampleCorp</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <p class="mb-4">"A must-have for any business looking to improve customer engagement."</p>
                        <p class="font-semibold">- Jane Smith, Marketing Director at SampleBiz</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <p class="mb-4">"Easy to use and incredibly effective."</p>
                        <p class="font-semibold">- Bob Johnson, Product Manager at TechCo</p>
                    </div>
                </div>
            </div>

            <!-- Pricing Section -->
            <div class="my-8">
                <h2 class="text-2xl font-bold mb-4">Pricing</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Basic Plan</h3>
                        <p class="mb-4">$19/month</p>
                        <p class="mb-4">Includes basic review management features.</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Pro Plan</h3>
                        <p class="mb-4">$49/month</p>
                        <p class="mb-4">Includes advanced features and priority support.</p>
                    </div>
                    <div class="bg-white p-4 rounded shadow">
                        <h3 class="text-xl font-semibold mb-2">Enterprise Plan</h3>
                        <p class="mb-4">Contact us for pricing</p>
                        <p class="mb-4">Custom solutions for large businesses.</p>
                    </div>
                </div>
            </div>

            <!-- Documentation Link -->
            <div class="my-8 text-center">
                <router-link to="/documentation" class="text-blue-500 hover:underline text-xl">Developer Documentation</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontPage'
}
</script>

<style scoped>
.container {
    max-width: 1200px;
}
.hero {
    background-image: url('/path/to/your/hero-image.jpg');
    background-size: cover;
    background-position: center;
}
</style>
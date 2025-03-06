<template>
    <div>
        <!-- Hero Section -->
        <div class="flex flex-col lg:flex-row gap-5 justify-center items-center py-12 my-8">
            <div class="lg:w-2/4 flex flex-col gap-10">
                <div class="lg:text-right text-center space-y-5">
                    <h3 class="text-darkpurple font-bold text-4xl lg:text-5xl xl:text-6xl">
                        Display Trusted Reviews on Your Website
                    </h3>
                    <h6 class="font-light text-xl text-4xl">
                        Integrate the TTL App to showcase authentic reviews directly on your site.
                    </h6>
                    <div>
                        <RouterLink to="/register" class="inline-block bg-purple-900 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="w-1/3">
                <img src="https://triedtestedloved.sg/wp-content/uploads/2025/01/ttl-cta-image-01.png">
            </div>
        </div>

        <!-- Call to Action -->
        <div class="ttl-call-to-action w-full flex flex-col-reverse xl:flex-row flex-nowrap gap-5 justify-center py-12 px-4 my-8 shadow-lg border-gray-50 rounded-xl bg-white">
            <div class="h-full w-full xl:w-1/3 p-6 text-center xl:text-right">
                <h2 class="text-5xl font-bold">Your customers can shop with confidence! The badge of authentic feedback!</h2>
            </div>
            <div class="grid grid-cols-3 gap-5 items-center w-full max-w-6xl mx-auto">
                <div><img src="https://mapletreemedia.com/wp-content/uploads/2024/12/ttl-badge-01.webp" class="max-w-full h-auto mx-auto" alt="TTL Badge 1"></div>
                <div><img src="https://mapletreemedia.com/wp-content/uploads/2024/12/ttl-badge-02.webp" class="max-w-full h-auto mx-auto" alt="TTL Badge 2"></div>
                <div><img src="https://mapletreemedia.com/wp-content/uploads/2024/12/ttl-badge-03.webp" class="max-w-full h-auto mx-auto" alt="TTL Badge 3"></div>
            </div>
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
</style>

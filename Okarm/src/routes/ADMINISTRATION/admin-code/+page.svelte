<div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="text-center p-8 rounded-lg shadow-md bg-white w-96">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
            ADMINISTRATORS ONLY
        </h1>
        <div class="flex items-center space-x-4">
            <input
                type="text"
                name="admin-code"
                id="admin-code"
                placeholder="ADMIN CODE"
                class="border-2 border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
            />
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-md transition duration-200"
                on:click={SubmitAdminCode}
            >
                Submit
            </button>
        </div>
    </div>
</div>

<script>
    let SubmitAdminCode = () => {
        // Your submit logic here
    };
</script>
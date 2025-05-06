<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">
        NEW CASE
    </h1>
    <button on:click={NEWCASE} class="px-6 py-3 bg-blue-500 text-white rounded-full text-5xl hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-900">CREATE</button>
</div>

{#if $newcase}
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                New Case Details
                            </h3>
                            <div class="mt-2">
                                <label for="chassisNumber" class="block text-gray-700 text-sm font-bold mb-2">Chassis Number:</label>
                                <input type="text" id="chassisNumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

                                <label for="customerName" class="block text-gray-700 text-sm font-bold mb-2 mt-4">Customer Name:</label>
                                <input type="text" id="customerName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">

                                <div>
                                    <label for="fileUpload" class="block text-gray-700 text-sm font-bold mb-2 mt-4">NECESSARY FILES</label>
                                    <div class="border rounded p-4">
                                        <p>JAAI Certificate</p>
                                        <input type="file" id="fileUpload" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                        <br/>
                                        <p>Vehicle GRADE Checked File</p>
                                        <input type="file" id="fileUpload" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                        <br/>
                                        <p>SHIPPING</p>
                                        <input type="file" id="fileUpload" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" class="transition-colors duration-200 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" on:click={() => newcase.set(false)}>
                        Cancel
                    </button>
                    <button type="button" class="transition-colors duration-200 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-300 text-base font-medium  text-black hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Create
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}

<script>
    import { writable } from "svelte/store";

    let newcase = writable(false)

    // brings up the modal for a new case
    let NEWCASE = ()=>{
        newcase.set(true)
    }
</script>
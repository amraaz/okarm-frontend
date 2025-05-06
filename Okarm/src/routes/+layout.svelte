<script>
	import { app, initializeFirebase } from "$lib/firebase";
	import { userStore } from '$lib/userStore';
	import { onMount } from 'svelte';
    import '../app.css';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
    let { children } = $props();

	let name = writable("pussio")
	let disableBackbutton = writable(false)
	

    let backButton = () => {
        window.history.back();
		if (window.history.state == "/"){
			disableBackbutton.set(true)
		}
    };

	onMount( async ()=>{
		
        if (browser){
			initializeFirebase()
            const user = await userStore.checkAuthState()
            name.set(user.name)
		}
	})
</script>

<div class="flex flex-col min-h-screen">
    <main class="flex-grow">
        {@render children()}
    </main>

    <footer class="bg-gray-100 border-t border-gray-300 py-4 text-center sticky bottom-0">
        <div class="inline-flex rounded-md shadow-sm" role="group">
            <p class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-200 hover:text-gray-800 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                {$name}
            </p>
            <a href="/" class="px-4 py-2 text-sm font-medium text-blue-500 bg-white border border-gray-200  hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Home
            </a>
            <button onclick={backButton} disabled={$disableBackbutton} class="px-4 py-2 text-sm font-medium {$disableBackbutton ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-blue-500 bg-white hover:bg-blue-500 hover:text-white'} border border-gray-200 rounded-r-md focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Back
            </button>
        </div>
    </footer>
</div>


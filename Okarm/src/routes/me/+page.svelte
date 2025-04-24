<div>
    <h1>ACCOUNT :  <p>[ {$name} ]</p> </h1>
</div>



<script>
	import { app, initializeFirebase } from "$lib/firebase";
    import { getAuth, browserSessionPersistence } from "firebase/auth";
	import { onMount } from "svelte";
    import { redirect } from '@sveltejs/kit';
    import { writable } from 'svelte/store';
	import { userStore } from "$lib/userStore";
	import { browser } from "$app/environment";


    let name = writable("")
    let email = writable("")
    
    // name obtained from the underlying userStore user state.
    
    
    onMount(async ()=>{
        if (browser){
            initializeFirebase()
            const user = await userStore.checkAuthState()
            name.set(user.name)
            email.set(user.email)
        }

    })


</script>
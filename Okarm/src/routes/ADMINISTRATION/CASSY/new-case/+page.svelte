<div>
    <h1>
        NEW CASE
    </h1>
    <button onclick={NEWCASE()} >+</button>
</div>



<script>
	import { writable } from "svelte/store";



    let newcase = writable(false)

    // brings up the modal for a new case
    let NEWCASE = ()=>{
        newcase.set(true)
    }
</script>
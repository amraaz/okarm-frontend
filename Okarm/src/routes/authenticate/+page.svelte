  <div class="flex items-center justify-center h-screen">
  <button class="
    border-black 
    border-4
  hover:border-transparent 
  hover:bg-pink-200 
  hover:text-black
  active:bg-pink-400  
  text-black
  font-bold 
  py-4 
  px-8 
  rounded-full 
  text-2xl 
  transition-colors 
  duration-200"
    on:click={googlePopUp}
  >
  Choose Google Account
  </button>
</div>



<script>
	import { browser } from "$app/environment";
	import { app } from "$lib/firebase";
  import { getAuth, setPersistence, browserLocalPersistence, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { redirect } from '@sveltejs/kit';
  import { goto } from "$app/navigation";
	import { userStore } from "$lib/userStore";
  


    const auth = getAuth(app);
    let providerGoogle = new GoogleAuthProvider()


    let googlePopUp = ()=>{
        // setPersistence(auth, browserSessionPersistence)
            // In memory persistence will be applied to the signed in Google user
            // even though the persistence was set to 'none' and a page redirect
            // occurred.

            if (browser) {
              setPersistence(auth, browserLocalPersistence)
                .then(() => {
                    // Existing and future Auth states are now persisted in the current session only.
                    // Closing the window would clear any existing state even if a user forgets to sign out.
                    // ...

                    // New sign-in will be persisted with session persistence.
                    // Setting this after auth() creates the main Firebase Auth instance.
                    return signInWithPopup(auth, providerGoogle);
                })
                .then((result) => {   
                var credential = GoogleAuthProvider.credentialFromResult(result);

                // This gives you a Google Access Token. You can use it to access the Google API.
                //   var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // IdP data available in result.additionalUserInfo.profile.
                  // router.push("/auth/connect-spotify")
                // redirect("/me")

                console.log(user.displayName)
                userStore.set({
                  name : user.displayName,
                  email : user.email,
                })
                goto("/me")
            

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                console.log(errorMessage)
                alert("ERROR CONNECTING GOOGLE ACCOUNT "+errorMessage)
                // ...
            });
            }
            
    }
    

</script>




import { writable } from 'svelte/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirebase } from './firebase';
import { browser } from '$app/environment';

function createUserStore() {
    const initialUser = {
        name: '$no name set$',
        email: '$no email set$',
    };

    const { subscribe, set, update } = writable(initialUser);

    let auth; // Declare auth outside the checkAuthState function

    const checkAuthState = () => {
        return new Promise((resolve) => {
            if (browser) {
                // Initialize Firebase if it hasn't been already
                initializeFirebase();
                auth = getAuth(); // Get the auth instance *after* initialization
            }

            if (!browser) {
                resolve(initialUser); // Resolve with initial user if not in browser
                return;
            }

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, update the store
                    set({
                        name: user.displayName,
                        email: user.email,
                    });
                    resolve({ name: user.displayName, email: user.email });
                } else {
                    // No user is signed in, reset to initial state
                    set(initialUser);
                    resolve(initialUser);
                }
            });
        });
    };

    return {
        subscribe,
        set,
        update,
        checkAuthState,
    };
}

export const userStore = createUserStore();
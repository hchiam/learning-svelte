// let's store things in one place, instead of inside individual components

import {writable} from 'svelte/store';

export const someProperty = writable('some value stored in a central store');

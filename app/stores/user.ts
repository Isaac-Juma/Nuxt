import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

    // state
    state: () => ({
        user: 'Isaac Juma otieno',
        loggin: true
    }),

    // action
    actions: {
        update(newName: string) {
            this.user = newName
        }
    }
})

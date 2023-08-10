import { defineStore } from 'pinia'

export const useIndexStore = defineStore('IndexStore', {

    state: () => {
        return {
            modalIsVisible: false,
        }
    },
    getters: {
        modalShow: state => {
            return state.modalIsVisible;
        },
    },
    actions: {
        updateModalVisibility(state, value) {
            state.modalIsVisible = value;
        },
    }
});
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
        updateModalVisibility(value) {
            this.modalIsVisible = value;
        },
    }
});
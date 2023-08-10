<script setup>
    import {computed, reactive} from "vue";
    import { useIndexStore } from '/src/store/index.js';

    const store = useIndexStore();

    const state = reactive({
        isClosed: false
    });

    // METHODS
    const close = () => {
        state.isClosed = true;

        setTimeout(() => {

            store.updateModalVisibility(false);
            state.isClosed = false;

        }, 300);
    }

    //COMPUTED
    const isVisible = computed(() => {
        return store.modalShow;
    });
            
</script>

<template>
    <div class="modal-holder" :class="{ 'is-closed': state.isClosed }" v-if="isVisible">
        <div class="modal-backdrop" @click="close()"></div>

        <div class="modal">
            <div class="modal-close" @click="close()"><span></span></div>
            <div class="modal-body">
                <h2>Video<br /> coming soon...</h2>
            </div> <!-- end.modal-body -->
        </div> <!-- end.modal -->
    </div> <!-- end.modal-holder -->
</template>


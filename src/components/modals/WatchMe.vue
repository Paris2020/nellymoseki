<script setup>
    import {computed, reactive} from "vue";
    import { useIndexStore } from './store/index';

    const store = useIndexStore();

    const props = defineProps('modal');
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
        return store.getters['modalShow'];
    });
            
</script>

<template>
    <div class="modal-holder" :class="{ 'is-closed': state.isClosed }" v-if="isVisible">
        <div class="modal-backdrop" @click="close()"></div>

        <div class="modal">
            <div class="modal-close" @click="close()"><span></span></div>
            <div class="modal-body">
                <div class="modal-left">
                    <h2>Video coming soon...</h2>
                </div> <!-- end.modal-left -->
            </div> <!-- end.modal-body -->
        </div> <!-- end.modal -->
    </div> <!-- end.modal-holder -->
</template>


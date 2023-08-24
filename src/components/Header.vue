<script setup>
    import { useIndexStore } from '../store/index';

    const store = useIndexStore();
    
    const openModal = () => {
        store.updateModalVisibility(true);
    }
</script>

<template>
    <header class="header">
        <div class="wrapper">

            <div class="profile-pic">
                <img src="/images/profile.png" width="250" alt="Photo by @siede.lee">
            </div>

            <h4>Salut! I'm Nelly &#128081 <br />Founder: <strong><a href="https://www.mosekiwebagency.co.za" target="_blank">Moseki Web Agency</a></strong></h4>

            <h1>Building digital<br />products, brands and<br />experience.</h1>
            <a href="#" class="btn large unclear" @click="openModal">Watch me!</a>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import Icon from "../components/global/Icon.vue";

    const date = ref(new Date().getFullYear());
</script>

<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="copyright">
                <p>Copyright &copy; {{ date }} All rights reserved</p>
            </div>
            <div class="social-links">
                <a href="https://www.instagram.com/paris2020_/" target="_blank"><icon name="instagram"></icon></a>
                <a href="https://github.com/Paris2020/" target="_blank"><icon name="github"></icon></a>
                <a href="https://www.linkedin.com/in/nelly-moseki-11a93170/" target="_blank"><icon name="linkedIn"></icon></a>
            </div>
        </div>
    </footer>
</template>
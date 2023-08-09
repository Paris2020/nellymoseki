<script setup>
    import { ref } from 'vue';
    import Icon from "../components/global/Icon.vue";

    const date = ref(new Date().getFullYear());
</script>

<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="copyright">
                <p>
                    <a href="/">Copyright &copy; {{ date }} All rights reserved</a>
                </p>
            </div>
            <div class="social-links">
                <a href="/" target="_blank"><icon name="facebook"></icon></a>
                <a href="/" target="_blank"><icon name="instagram"></icon></a>
                <a href="/" target="_blank"><icon name="linkedIn"></icon></a>
            </div>
        </div>
    </footer>
</template>
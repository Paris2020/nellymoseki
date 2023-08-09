<script setup>
    import Icon from "../components/global/Icon.vue";
</script>

<template>
    <section class="about">
        <h2>Collaborate with brands and agencies<br /> to create impactful results.</h2>
        <div class="wrapper">

            <div class="cards">
                <div class="card">
                    <icon name="consultation"></icon>
                    <dl>
                        <dt>Consultation</dt>
                        <dd>Helping you identify areas of agreement on a number of issues and areas or the overall strategic approach.</dd>
                    </dl>
                </div>
                <div class="card">
                    <icon name="development"></icon>
                    <dl>
                        <dt>development</dt>
                        <dd>Bringing your vision to life with the latest technology and design trends.</dd>
                    </dl>
                </div>
                <div class="card">
                    <icon name="testing"></icon>
                    <dl>
                        <dt>Testing</dt>
                        <dd>Ensuring your tests have unique global states.</dd>
                    </dl>
                </div>
                <div class="card">
                    <icon name="deployment"></icon>
                    <dl>
                        <dt>Deployment</dt>
                        <dd>Getting your applications to you in the most efficient way.</dd>
                    </dl>
                </div>
                <div class="card">
                    <icon name="seo"></icon>
                    <dl>
                        <dt>SEO</dt>
                        <dd>Improving the quality and quantity of website traffic to a website.</dd>
                    </dl>
                </div>
            </div>

            <div class="contact">
                <div class="wrapper">
                    <h2>Tell me about your<br /> next project</h2>
                    <a href="/" class="btn large clear">Get in touch <icon name="email"></icon></a>
                </div>
            </div>
        </div>
    </section>
</template>
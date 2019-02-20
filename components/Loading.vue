<template>
    <section>
        <div class="loading">
        <img src="/images/engines_logo_animation_white.svg" />
        </div>
    </section>
</template>

<style>

.loading {
    width: 100vw;
    height: 100vh;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}

.loading img {
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -200px;
}
</style>

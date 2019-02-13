<template>
<header>
    <nav class="header">
        <ul>
            <li>Asection</li>
            <li>Bsection</li>
            <li>Csection</li>
        </ul>
    </nav>
</header>
</template>

<style>
header {
    background-color: #fff;
    width: 60px;
    height: 100vh;
    z-index: 10;
    cursor: pointer;
    position: fixed;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all  0.3s ease;
}

header:hover {
    background-color: pink;  
}
nav li { display: inline-block; }

.nav {
    background: #000;
    display: none;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 98;
}

.nav__wrap {
    align-items: center;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%
}

.ul {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
}

.nav li, .nav li a { color: #fff; }


</style>
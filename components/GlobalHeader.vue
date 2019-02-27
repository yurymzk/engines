<template>
<header>
  <div class="logo">
    <a class="logo-home">
        <img src="/images/ew_enlogo_icon.png">
    </a>
    <a class="logo-trigger">
      ▽
    </a>
  </div>
    <nav class="header">
        <ul>
            <li class="section"><a href="#GameSection"><img src="/images/en_icon_game_01.png">game</a></li>
            <li class="section"><a href="#KidsSection"><img src="/images/en_icon_kids_01.png">kids</a></li>
            <li class="section"><a href="#SolutionSection"><img src="/images/en_icon_solution_01.png">solution</a></li>
            <li class="section"><a href="#AboutSection"><img src="/images/en_icon_about_01.png">about</a></li>
        </ul>
    </nav>
</header>
</template>

<style>
.logo {
  height: 40%;
  cursor: pointer;
  text-align: center;
}

.logo-home {
  display: block;
  background-color: #000;
  height : 90%;
}
.logo-trigger {
    display: block;
    transition: all .4s;

    background-color : #333;
    height : 10%;
}


header {

    width: 10vw;
    height: 100vh;
    z-index: 10;
    position: fixed;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all  0.3s ease;
}


nav {
    display: none;
    background-color: gray;

    height: 100vh;
}

nav ul {

    padding: 0;
    list-style-type: none;
}

nav li {
    margin: 0;
    padding: 10px;
    text-align: center;
    color: white;
}

nav li.logo {
    height: 80px;
    vertical-align: middle;
    background-color: black;

}

nav li.section img {
    width: 7vw;
}
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

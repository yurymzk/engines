<template>
<header>
  <div class="logo">
    <a class="logo-home" href="#container">
        <img src="/images/ew_enlogo_icon.png">
    </a>
  </div>
  <div>
      <a class="logo-trigger">
      <i class="fas fa-angle-down fa-2x"></i>
    </a>
  </div>
    <nav class="header">
        <ul>
            <li class="section"><a href="#GameLink"><img src="/images/en_menu_game_01.png"></a></li>
            <li class="section"><a href="#KidsLink"><img src="/images/en_menu_kids_01.png"></a></li>
            <li class="section"><a href="#SolutionLink"><img src="/images/en_menu_solu_01.png"></a></li>
            <li class="section"><a href="#CompanyLink"><img src="/images/en_menu_company_01.png"></a></li>
        </ul>
    </nav>
</header>
</template>

<style>
.logo {
  height: 15%;
  cursor: pointer;
  text-align: center;
  transition: all 1s ease 0s;
}

.logo-home {
  background-color: #000;
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-home img {
      width: 50px;
}

.logo-change-height {
  height: 40%;
  transition: all 1s ease 0s;
}

.logo-trigger {
    display: block;
    transition: all .4s;
    text-align: center;
    background-color : #333;
    height : 10%;
    color: white;
    cursor: pointer;
}

.rotate {
  transform: rotate(180deg);
  transition: all 1s ease 0s;
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
    background-color: rgba(0,0,0,0.5);

    height: 100vh;
}

nav ul {

    padding: 0;
    padding-top: 10px;
    list-style-type: none;
}

nav li {
    margin: 0;
    padding: 0;
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

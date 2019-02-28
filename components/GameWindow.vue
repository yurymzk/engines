<template>
    <div id="GameWindow">
        <div class="backgroundTR"></div>

        <div class="image"></div>
        <div class="infomation">
            <div class="title"></div>
            <div class="tag"></div>
            <div class="text"></div>
            <div class="web"></div>
        </div>
    </div>
    </template>


<style>
#GameWindow {
    width: 400px;
    height: 600px;
    position: relative;
    background-image: linear-gradient(-45deg,white 25%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 50%,white 50%, white 75%, rgba(0, 0, 0, 0) 75%,  rgba(0, 0, 0, 0));
    background-size:8px 8px;
    margin: 30px;
    z-index: 2;

}

#GameWindow .backgroundTR {
    width: 400px;
    height: 600px;
    position: relative;
    right: 10px;
    bottom: 10px;
   background-color: blueviolet;

}
</style>

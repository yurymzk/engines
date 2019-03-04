<template>
    <div id="GameWindow">
        <div class="backgroundTR">

        <div class="image"></div>
        <div class="infomation">
            <div class="title">タイトル{{ value.title }}</div>
            <div class="tag">たぐ{{ value.tag }}</div>
            <div class="text">テキスト{{ value.text }}</div>
            <div class="web">web{{ value.web }}</div>

        </div>
        </div>
    </div>
    </template>

<script>
export default {
  props: ['value']
}
</script>



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

#GameWindow .image{

  height: 50%;

}
</style>

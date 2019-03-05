<template>
    <!-- character -->
    <div id="main_chara">
      <img src="/images/GIF_kids_chr.gif" />
    </div>
</template>

<style>
#main_chara {
  position:absolute ;
  z-index: 15;
  bottom: 30px;
  left: 110vw;
}

/* キャラクター */
#main_chara img {
    width: 100px;
    transform: scale(-1, 1);
}

/* アニメーション */
.flyOut {
    transition: 3s;
    -webkit-transition: 3s;
/*    transform: translateX(1000px);
    -webkit-transform: translateX(1000px); */
}

</style>

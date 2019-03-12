<template>
    <div id="SolutionSection">
    <div class="background">
      <div class="SolutionBackImg1"><img src="/images/en_back_sol.png"></div>
      <div class="SolutionBackImg2"><img src="/images/en_back_sol_typo.png"></div>
            <div class="SolutionWindowWrapper">
            <div class="titleBox">
              <div class="SolutionImg3"><img src="/images/en_img_sol_04.png"></div>
              <div class="SolutionImg4"><img src="/images/en_img_sol_03.png"></div>
                <p>「君はほんとはすごいんだ！！」を伝えたい</p>
                <p>キッズプロジェクト</p>
                <p>ダミー文章</p>

            </div>

            <div class="SolutionBox">
                    <div class="SolutionImg1"><img src="/images/en_img_sol_01.png"></div>
                    <div class="SolutionImg2"><img src="/images/en_img_sol_02.png"></div>
            </div>
        </div>

    </div>

    <div class="SolutionIcon" id="SolutionLink"><img src="/images/en_icon_solution_01.png"></div>



    </div>
</template>

<style>
#SolutionSection {
    height: 100vh;
    width: 130vw;
    position: relative;
}

#SolutionSection .background {
    position: absolute;
    width: 110vw;
    height: 100vh;
    margin-left: 24vw;

    background-color: #D3D3D3;
    transform:skew(-7deg);
        -webkit-transform: skew(-7deg);
	       -moz-transform: skew(-7deg);
	         -o-transform: skew(-7deg);
}

#SolutionSection .SolutionWindowWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
	   -moz-transform: skew(7deg);
	     -o-transform: skew(7deg);
}

#SolutionSection .SolutionIcon {
    position: absolute;
    top: 30%;
    left: 18vw;
    margin-left: -13vw;
    padding-left: 13vw;
}

#SolutionSection .SolutionBackImg1 {
    position: absolute;
    margin-top: -8%;
    left: 95px;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
    -moz-transform: skew(7deg);
      -o-transform: skew(7deg);
}
#SolutionSection .SolutionBackImg2 {
    position: absolute;
    bottom: 40px;
    right: 340px;
    transform:skew(7deg);
    -webkit-transform: skew(7deg);
    -moz-transform: skew(7deg);
      -o-transform: skew(7deg);
}

#SolutionSection .titleBox {
    width: 23vw;
    min-width: 400px;
    height: 76vh;
    max-height: 560px;
    background-color: gray;
}

#SolutionSection .SolutionImg1 img,
#SolutionSection .SolutionImg2 img{
    height: 76vh;
    max-height: 560px;
}

#SolutionSection .SolutionImg3 {
    margin : 1vw;
}

#SolutionSection .SolutionImg3 img {
    margin : 1vw;
    width: 80%;
}
#SolutionSection .SolutionImg4 img{
    width: 20%;
    margin: 2vh;
}

#SolutionSection .SolutionBox {
    width: 50vw;
    height: 76vh;
    margin: 0 4vw;
    display: flex;
}
</style>


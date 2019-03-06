<template>
    <div id="SolutionSection">
    <div class="background">
      <div class="SolutionBackImg1"><img src="/images/en_back_sol.png"></div>
      <div class="SolutionBackImg2"><img src="/images/en_back_sol_typo.png"></div>
            <div class="SolutionWindowWrapper">
            <div class="titleBox">
                <p>「君はほんとはすごいんだ！！」を伝えたい</p>
                <p>キッズプロジェクト</p>
                <p>ダミー文章</p>
                <div class="button"></div>

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
    width: 120vw;
    position: relative;
}

#SolutionSection .background {
    position: absolute;
    width: 110vw;
    height: 100vh;
    margin-left: 388px;

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
    left: 295px;
    margin-left: -200px;
    padding-left: 200px;
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
    width: 400px;
    height: 600px;
    background-color: gray;
}

#SolutionSection .SolutionBox {
    width: 800px;
    height: 600px;
    margin: 0 40px;
    display: flex;
}
</style>


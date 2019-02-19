<template>
    <div id="SolutionSection">
    <div class="background">
        <div class="SolutionWindowWrapper">
            <div class="titleBox">
                <p>「君はほんとはすごいんだ！！」を伝えたい</p>
                <p>キッズプロジェクト</p>
                <p>ダミー文章</p>
                <div class="button"></div>

            </div>

            <div class="SolutionBox"></div>
        </div>

    </div>

    <div class="SolutionIcon"><img src="/images/en_icon_solution_01.png"></div>



    </div>
</template>

<style>
#SolutionSection {
    background-color: white;
    height: 100vh;
    width: 2500px;
    position: relative;
}

#SolutionSection .background {
    position: absolute;
    width: 1740px;
    height: 100vh;
    margin-left: -18px;

    background-color: lightgray;
    transform:skew(18deg);
    -webkit-transform: skew(18deg);
	   -moz-transform: skew(18deg);
	     -o-transform: skew(18deg);
}

#SolutionSection .SolutionWindowWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform:skew(-18deg);
        -webkit-transform: skew(-18deg);
	       -moz-transform: skew(-18deg);
	         -o-transform: skew(-18deg);}

#SolutionSection .SolutionIcon {
    position: absolute;
    top: 30%;
    left: -160px;
}

#SolutionSection .titleBox {
    background-color: gray;
}

#SolutionSection .SolutionBox {
    width: 800px;
    height: 600px;
    background-color: white;
    margin: 0 40px;
}
</style>


<template>
    <div id="CompanySection">
        <div class="background">
            <div class="CompanyWindowWrapper">
                <div class="CompanyBox">
                    <dl>
                        <dt>社名</dt><dd>株式会社エンジンズ／ENGINES　Inc</dd>
                        <dt>本社所在地</dt><dd>〒541-0044大阪市中央区伏見町2-2-6青山ビル４F</dd>
                        <dt>開発拠点</dt><dd>大阪</dd>
                        <dt>設立</dt><dd>2005年12月8日</dd>
                        <dt>資本金</dt><dd>300万円</dd>
                        <dt>役員</dt><dd>楠本　征則（代表取締役）、足立　靖</dd>
                        <dt>取引銀行</dt><dd>三菱UFJ銀行　江坂支店</dd>
                        <dt>従業員数</dt><dd>30名（専属契約者含む）</dd>
                        <dt>事業内容</dt><dd>
                            ・ゲーム（オンライン・モバイル等・家庭用）、PC等のソフトウェアの企画・開発・運営・コンサルティング<br>
                            ・アミューズメントコンテンツ（業務用ゲーム・パチンコ／パチスロ液晶演出映像）の企画・開発<br>
                            ・商業デザイン（企業ロゴ・雑誌広告／販促ツール／WEB／商品用副教材・インダストリアルデザイン）の企画・制作<br>
                            ・コンテンツ、キャラクターデザイン・イラストレーションの企画制作<br>
                            ・書籍・出版／映像・音楽／広告・宣伝にかかわる企画制作・コンサルティング<br>
                        </dd>
                    </dl>
                </div>
                <GoogleMap />
            </div>
            <div class="CompanyIcon" id="CompanyLink"><img src="/images/en_icon_company_01.png"></div>
        </div>
    </div>
</template>

<script>
import GoogleMap from '~/components/GoogleMap.vue'
export default {
    components : {
        GoogleMap
    }
}
</script>

<style>
#CompanySection {
    background-color: white;
    height: 100vh;
    width: 100vw;
    position: relative;
}

#CompanySection .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-left: 200px;

}
#CompanySection .CompanyWindowWrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    align-self: flex-start;
}

#CompanySection .CompanyBox {
    width: 40em;
    padding-right: 2em;
    font-size: 0.8em;
}
#CompanySection dl {
    text-align: left;
}

#CompanySection dt {
    position: absolute;
    left: 0;
    width : 5em;
    padding-top: 10px;
}

#CompanySection dd {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 7em;
    border-bottom: solid 1px #ccc;
}

#CompanySection .CompanyIcon {
    position: absolute;
    top: 30%;
    left: -310px;
    margin-left: -200px;
    padding-left: 200px;
}

</style>

<template>
    <div class="md-stepper-horizontal timeline-container">
        <div class="md-step">
            <div class="md-step-circle"><span>1</span></div>
            <div class="md-step-title">
                <div>28 Jul - 4 Sep 2019</div>
                <div>Open Registration</div>
            </div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>
        <div class="md-step">
            <div class="md-step-circle"><span>2</span></div>
            <div class="md-step-title">
                <div>7 Sep - 21 Sep 2019</div>
                <div>Preliminary Phase</div>
            </div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>
        <div class="md-step">
            <div class="md-step-circle"><span>3</span></div>
            <div class="md-step-title">
                <div>18 Oct 2019</div>
                <div>Semifinalist Announcement</div>
            </div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>
        <div class="md-step">
            <div class="md-step-circle"><span>4</span></div>
            <div class="md-step-title">
                <div>1 Nov - 3 Nov 2019</div>
                <div>Main Event</div>
            </div>
            <div class="md-step-bar-left"></div>
            <div class="md-step-bar-right"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompetitionTimeline",
        props: []
    }
</script>

<style scoped>
    .md-stepper-horizontal {
        display:block;
        margin:0 auto;
    }
    .md-stepper-horizontal .md-step {
        display:table-cell;
        position:relative;
        padding:24px;
    }
    .md-stepper-horizontal .md-step:active {
        border-radius: 15% / 75%;
    }
    .md-stepper-horizontal .md-step:first-child:active {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .md-stepper-horizontal .md-step:last-child:active {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .md-stepper-horizontal .md-step:first-child .md-step-bar-left,
    .md-stepper-horizontal .md-step:last-child .md-step-bar-right {
        display:none;
    }
    .md-stepper-horizontal .md-step .md-step-circle {
        width:30px;
        height:30px;
        margin:0 auto;
        border-radius: 50%;
        text-align: center;
        line-height:30px;
        font-size: 16px;
        font-weight: 600;
        color:#111111;
        border: 1px solid #111111;
    }
    .md-stepper-horizontal .md-step.active .md-step-circle {
        background-color: #111111;
        color: var(--v-primary-base);
        font-weight: bold;
    }
    .md-stepper-horizontal .md-step.done .md-step-circle *,
    .md-stepper-horizontal .md-step.editable .md-step-circle * {
        display:none;
    }
    .md-stepper-horizontal .md-step.editable .md-step-circle {
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
    .md-stepper-horizontal .md-step .md-step-title {
        margin-top:16px;
        color: #111111;
    }
    .md-stepper-horizontal .md-step .md-step-title {
        text-align: center;
    }
    .md-stepper-horizontal .md-step.active .md-step-title {
        font-weight: bold;
    }
    .md-stepper-horizontal .md-step.active.done .md-step-title,
    .md-stepper-horizontal .md-step.active.editable .md-step-title {
        font-weight:600;
    }
    .md-stepper-horizontal .md-step .md-step-bar-left,
    .md-stepper-horizontal .md-step .md-step-bar-right {
        position:absolute;
        top:36px;
        height:1px;
        border-top:1px solid #111111;
    }
    .md-stepper-horizontal .md-step .md-step-bar-right {
        right:0;
        left:50%;
        margin-left:20px;
    }
    .md-stepper-horizontal .md-step .md-step-bar-left {
        left:0;
        right:50%;
        margin-right:20px;
    }

    .timeline-container{
        min-width:100%;
    }

    @media screen and (max-width: 960px) {
        .timeline-container{
            display: block;
            overflow-x: scroll;
        }
    }
</style>
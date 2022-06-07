const shadowGroup = document.getElementById('shadow-group');
const hangGroup = document.getElementById('hang-group');
const pipeGroup = document.getElementById('pipe-group');

const ropeGruop = document.getElementById('rope-group');
const ropeKnotUp = document.getElementById('rope-knot-up');
const ropeKnotDown = document.getElementById('rope-knot-down');
const ropeLoop = document.getElementById('rope-loop');
const ropeLine = document.getElementById('rope-line');

const armGroup = document.getElementById('arm-group');
const armUp = document.getElementById('arm-up');
const armDown = document.getElementById('arm-down');
const armBracket = document.getElementById('arm-bracket');

const boxGroup = document.getElementById('box-group');
const boxMain = document.getElementById('box-main');
const boxLeft = document.getElementById('box-left');
const boxRight = document.getElementById('box-right');

pipeGroup.style.opacity = "0";
ropeGruop.style.opacity = "0";
armGroup.style.opacity = "0";
shadowGroup.style.opacity = "0";
boxGroup.style.opacity = "0";

function step1() {
    pipeGroup.style.opacity = "1";
    pipeGroup.classList.add("step-01");
}

function step2() {
    armGroup.style.opacity = "1";
    armDown.classList.add("step-02");
    armUp.classList.add("step-02");
    armBracket.classList.add("step-02");
}

function step3() {
    ropeGruop.style.opacity = "1";
    ropeLoop.classList.add("step-03");
    ropeLine.classList.add("step-03");
    ropeKnotDown.classList.add("step-03");
    ropeKnotUp.classList.add("step-03");
}

function step4() {
    pipeGroup.classList.add("step-04");
}

function step5() {
    shadowGroup.classList.add("step-05");
}

function step6() {
    armDown.classList.add("step-06");
}

function step7() {
    armUp.classList.add("step-07");
}

function step8() {
    armBracket.classList.add("step-08");
}

function step9() {
    ropeLine.classList.add("step-09");
}

function step10() {
    ropeKnotUp.classList.add("step-10");
}

function step11() {
    ropeKnotDown.classList.add("step-11");
}

function step12() {
    ropeLoop.classList.add("step-12");
}
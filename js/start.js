const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endpoint = 10;
const result = document.querySelector("#result");
const select = [];

function calculationResult(){
    var pointArray = [
        {name: 'angel',value:0,key:1}
        {name: 'cheer',value:0,key:2}
        {name: 'computer',value:0,key:3}
        {name: 'give_love',value:0,key:4}
        {name: 'cheer',value:0,key:5}
        {name: 'glasses',value:0,key:6}
        {name: 'lazy',value:0,key:7}
        {name: 'shiny',value:0,key:8}
        {name: 'smart',value:0,key:9}
        {name: 'study&sleep',value:0,key:10}
        {name: 'wathcing',value:0,key:11}
    ]
    for(let i = 0; i< endpoint;i++){
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j<target.length;j++){
            for(let k=0; k<pointArray.length;k++){
                pointArray[k].value +=1;
            }
        }
    }
}
function goResult(){
    qna.style.WebkitAnimation = "fadeOut 0.8s";
    qna.style.animation = "fadeOut 0.8s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.8s";
        result.style.animation = "fadeIn 0.8s";
        setTimeout(()=> {
            qna.style.display = "none";
            result.style.display = "block";
        },350)})
        console.log(select);
        setResult();
}

function addAnswer(answerText,qIndex,index){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-5');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        // 모두 사라지게 하기 위해서 answerList를 만듬
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.8s";
            main.style.animation = "fadeOut 0.8s"
            children[i].style.display = 'none';
        }
        select[qIndex] = index;
        goNext(++qIndex)
    }, false);
}
function goNext(qIndex){
    if(qIndex +1==endpoint){
        goResult();
        return;
    }
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIndex].q;
    for(let i in qnaList[qIndex].a){
        addAnswer(qnaList[qIndex].a[i].answer, qIndex,i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endpoint)*(qIndex+1) + '%';

}
function begin(params) {
    main.style.WebkitAnimation = "fadeOut 0.8s";
    main.style.animation = "fadeOut 0.8s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.8s";
        qna.style.animation = "fadeIn 0.8s";
        setTimeout(()=> {
             main.style.display = "none";
             qna.style.display = "block";
        },350)
        let qIndex = 0;
        goNext(qIndex);
    }, 350);
}


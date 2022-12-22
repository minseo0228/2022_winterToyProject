const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        // 모두 사라지게 하기 위해서 answerList를 만듬
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
    }, false);
}
function goNext(qIndex){
    var q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIndex].q;
    for(let i in qnaList[qIndex].a){
        addAnswer(qnaList[qIndex].a[i].answer);
    }

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
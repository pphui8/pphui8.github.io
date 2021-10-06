var head = [
    "通过此次的学习，我第一次通过实际动手操作学习与体会到了如何使用topic来分析并解决问题，在实际的操作中体会到了如何运用学到的知识解决有关topic的问题。",
    "经过这次有关的topic实验，我个人得到了不少的收获，一方面加深了我对课本理论的认识，另一方面也提高了实验操作能力，现在我总结了以下的体会和经验。",
    "通在做topic的实验前，我以为不会难做，但直到做完测试实验时，我才知道其实并不容易做，但学到的知识与难度成正比，使我受益匪浅。"
]
var body = [
    "在此次的实验中，我使用了detail来分析与解决遇到的问题，通过实际动手来解决这些问题，并成功地体会到了此些知识的实际内涵，这对我的提升非常之大。",
    "经过了这次的学习，我不仅学会了如何使用detail来分析与解决问题，更学会了如何将这些知识学以致用，在亲自的行动中收获到了怎样去运用这些知识，再通过认真地学习思考与总结，使我最终融会贯通。",
    "刚开始做实验的时候，由于自己的理论知识基础不好，在实验过程遇到了许多的难题，也使我感到理论知识的重要性。但是我并没有气垒，在实验中发现问题，自己看书，独立思考，最终解决问题，从而也就加深我对课本理论知识的理解，达到了“双赢”的效果。",
    "课我们做实验绝对不能人云亦云，要有自己的看法，这样我们就要有充分的准备，若是做了也不知道是个什么实验，那么做了也是白做。",
    "在这次实验中，我学到很多东西，加强了我的动手能力，并且培养了我的独立思考能力。特别是在做实验报告时，因为在做数据处理时出现很多问题，如果不解决的话，将会很难的继续下去。"
]
var ending = [
    "此次的实验，使我受益匪浅，在接下来的学习生活中，我将时刻铭记此次实验的收获，保持对知识的渴望，继续学习。",
    "通过这次topic的实验，使我学到了不少实用的知识，更重要的是，做实验的过程，思考问题的方法，这与做其他的实验是通用的，真正使我受益匪浅。",
    "在此次关于topic的实验中，我学到了不少实用的知识，在实践中认识到了许多课本上所没有点名的知识点，使我受益匪浅。",
    "通过此次实验的亲身实践，让我懂得了很多一些课本上没有的知识，拓宽了我的眼界，使我认识到这门课程在实际的应用中是那么的广泛。",
    "通过这次topic的实验，使我学到了不少实用的知识，更重要的是，做实验的过程，思考问题的方法，这与做其它的实验是通用的，真正使我受益匪浅."
]

//生成从minNum到maxNum的随机数
function randomNum(Num) { 
    return parseInt(Math.random() * Num);
}

function getArticle() {
    //获取主题
    var topic = document.getElementById("topic").value;
    //console.log(topic);
    //获取知识点
    var detail = document.getElementById("detail").value;
    //console.log(detail);

    //组合
    var ahead = head[randomNum(head.length)];
    //console.log(ahead);
    ahead = ahead.replace(/topic/g, topic);
    //console.log(ahead);

    var tmp = randomNum(body.length);
    var tmp2 = randomNum(body.length);
    while(tmp == tmp2) {
        tmp2 = randomNum(body.length);
    }
    var abody = body[tmp];
    abody = abody.replace(/detail/g, detail);
    var bbody = body[tmp2];
    bbody = bbody.replace(/detail/g, detail);
    //console.log(abody);
    //console.log(bbody);

    var aending = ending[randomNum(ending.length)];
    aending = aending.replace(/topic/g, topic);
    //console.log(aending);

    var result = ahead + abody + bbody + aending;
    //输出
    document.getElementById("out").value = result;
}

function addExample() {
    document.getElementById("topic").value = "并行运算";
    document.getElementById("detail").value = "OpenMP、cpp的并行编程";
}
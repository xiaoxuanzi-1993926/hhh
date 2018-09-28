let text=document.querySelector(".three textarea");
let input=document.querySelector("input");
let num=document.querySelector(".num");
let btn=document.querySelector(".body-right-box>a");
let ul=document.querySelector(".body-left>ul");
let li=document.querySelector(".body-left>ul>li")
console.log(btn,ul,li);

//1.实时监测textarea中的字数变化
text.oninput=function () {
    // console.log(this.value.length);
    let textnum=this.value.length;
    num.innerHTML=textnum;
}
//2.当点击提交时，将右侧内容添加在左侧列表中
btn.onclick=function () {
    if (input.value!=="" && text.value!==""){
    let name=input.value;
    let con=text.value;
    // console.log(name, con);
    //模板字符串
    let str=`<li>
                 <div class="b-l-l"><i class="iconfont icon-touxiang"></i></div>
				 <div class="b-l-r">
				 <ul>
					<li>${name}</li>
					<li>2018-01-04 16:18:53</li>
				</ul>

				</div>
                 <p>${con}</p>
			  </li>`;
    //innerHTML--可识别标签
    ul.innerHTML+=str;
    //清空右侧留言内容和字数识别
    input.value="";
    text.value="";
    num.innerHTML=0;
    }else{
        alert("不能为空")
    }
}

//事件委派（鼠标移入每个li进行样式变化）
  ul.onmouseover=function (e) {
      let event=e.target;
      //判断节点名称和类名列表
      if(event.nodeName==="LI" && event.classList.contains('list')){
      event.style.background="#ccc";
      }
  }
ul.onmouseout=function (e) {
    let event=e.target;
    if(event.nodeName==="LI"){
    event.style.background="#fff";
    }
}


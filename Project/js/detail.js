function Menu(){
    this.arr=[
        ["大家电","生活电器","厨房电器","健康护理","电脑整机","电脑配件","数码配件","时尚影音"," 智能设备"," 电子教育"],
        ["米面油","干货/调味","酒类","休闲食品","饮料/冲调","地方特产","茗茶","生鲜食品"],
        ["干货","蔬菜","水果","副食","其他"],
        ["农业物资","农机","农药"],
        ["手机通讯","手机配件","外设产品","办公用品","网络产品"],
        ["面部护肤","洗发护发","身体护肤","口腔护理","女性护理","香水彩妆"],
        ["家具灯具","洗护清洁","家装软饰","家纺"],
        ["珠宝首饰","礼品","钟表","服装店用品"],
        ["流行男鞋","精品男包","休闲鞋子","帽子"],
        ["尿裤湿巾","喂养用品","洗护用品","童装童鞋"],
        ["旅游团购"]
    ];
    // 绑定元素
    this.list=document.querySelector(".list")
    
    this.li=document.querySelectorAll(".list li")
    this.listright=document.querySelector(".list-right")
    this.liright=document.querySelector(".list-right li")
    this.nav_l=document.querySelector(".nav_l")
    this.addEvent();
    // this.display();
}
    Menu.prototype.addEvent=function(){

        var that=this;
        this.nav_l.onclick=function(){
            that.list.style.display="block";
        }
        // console.log(1);
        // 遍历li
        for(var i=0;i<this.li.length;i++){

            this.li[i].onmouseover=function(){

                for(var j=0;j<that.li.length;j++){
                    that.li[j].style.background="";
                    that.listright.style.display="block";

                    // for(var p=0;p<that.arr.length;p++){
                    //     // arr[i]
                    //     for(var q=0;q<that.arr[p].length;q++){
                    //        that.li[j].innerHTML= that.arr[p]
                    //        var str="";
                    //        str=str+`<li>${that.arr[p][q]}</li>`;
                    //        that.listright.innerHTML=str;
                    // }
                    // // console.log(that.arr[p]);
                    // }

                    for(var p=0;p<that.arr.length;p++){
                        // console.log(1);
                        this.li[p].onmouseover=function(){ 
                            for(var q=0;q<that.arr.length;q++){
                        console.log(that.arr[p])
                    }
                }
                }
    
                   


                }

            }
            this.li[i].onmouseout=function(){
                for(var j=0;j<that.li.length-1;j++){
                    that.li[j].style.background="";
                    that.listright.style.display="none";
                }
            } 
        }
                for(var i=0;i<this.li.length-1;i++){
            this.listright.onmouseover=function(){
                    that.listright.style.display="block";
            }
            this.listright.onmouseout=function(){                   
                    that.listright.style.display="none";
            }
        }
        
    }
    Menu.prototype.display=function(){
        // 遍历数组中得到数组arr中的每一项
        

    }


new Menu()


// 查看物品详细细节（放大镜）
function Magnifier(){
    // 选元素
    this.sBox=document.querySelector(".s_box");
    this.bBox=document.querySelector(".b_box");
    this.look=document.querySelector(".s_box span");
    this.bImg=this.bBox.children[0];
    // 绑定事件
    this.init();
}

Magnifier.prototype.init=function(){
    var that = this;
    this.sBox.onmouseover=function(){
        that.show();
        this.onmousemove=function(eve){
            var e = eve || window.event;
            that.move({
                x:e.pageX - this.offsetLeft,
                y:e.pageY - this.offsetTop
            })
        }
}
    this.sBox.onmouseout=function(){
        that.hide()
    }
}

Magnifier.prototype.show=function(){
this.look.style.display="block";
this.bBox.style.display="block";
}

Magnifier.prototype.hide=function(){
    this.look.style.display="none";
    this.bBox.style.display="none";
    }
 
Magnifier.prototype.move=function(pos){
    var l = pos.x-this.look.offsetWidth/2;
    var t = pos.y-this.look.offsetHeight/2;
    // 边界限定
    if(l<0) l=0;
    if(t<0) t=0;

    if(l>this.sBox.offsetWidth-this.look.offsetWidth){
    (l=this.sBox.offsetWidth-this.look.offsetWidth);
    }

    if(t>this.sBox.offsetHeight-this.look.offsetHeight){(t=this.sBox.offsetHeight-this.look.offsetHeight);
    }
    this.look.style.left = l + "px";
    this.look.style.top = t + "px";
    
var x = l/(this.sBox.offsetWidth-this.look.offsetWidth);
var y = t/(this.sBox.offsetHeight-this.look.offsetHeight);

this.bImg.style.left=-x *(this.bImg.offsetWidth-this.bBox.offsetWidth)+"px";
this.bImg.style.top=-y *(this.bImg.offsetHeight-this.bBox.offsetHeight)+"px";

}

new Magnifier();



class Hover{
    constructor(){
        this.ul=$(".dd");
        this.init();
    }

    init(){
        var that = this;
        $(".dd").find("li").hover(function(){
    $(this).addClass("bord")
    $(this).css({borderColor:"red"})
    console.log($(this))
        },function(){
            $(this).removeClass("bord");
            console.log($(this))
    $(this).css({borderColor:"#ccc"})

                })
    }

}

new Hover();




class Tab{
    constructor(){
        this.ali = document.querySelectorAll(".box .options li")
        this.amsg = document.querySelectorAll(".cont .msg");
    this.init()
    }
    init(){
        var that=this;
        for(var  i=0;i<this.ali.length;i++){
            this.ali[i].index=i;
            this.ali[i].onclick=function(){
                for(var j=0;j<that.ali.length;j++){
                    that.ali[j].className="";
                    that.amsg[j].style.display="none";
                }

                this.className="active";
                that.amsg[this.index].style.display="block";
            }
        }
    }

}
 
new Tab();

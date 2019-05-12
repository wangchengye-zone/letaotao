function Banner(){
   
    // 1.选元素
    this.imgbox = document.querySelector(".imgbox");
    this.img = this.imgbox.children;
    this.left = document.querySelector(".left");
    this.right = document.querySelector(".right")
    this.index = 0;
    this.init();

}
Banner.prototype.init = function(){
    // 设置样式
  
    this.imgbox.style.width = this.img.length * this.img[0].offsetWidth + "px";
    // 绑定事件
    this.addEvent();
}
Banner.prototype.addEvent=function(){
    var that=this;
    

    this.left.onclick=function(){
        // console.log(1);
        // 计算索引
        that.changeIndex(1);
    }
    this.right.onclick=function(){
        that.changeIndex(2);
    }
}
    Banner.prototype.changeIndex=function(type){
        // 判断点击的是哪一个键左还是右
        if(type==1){
            if(this.index == 0){
                // console.log(1)
                // 当banner在第一张的时候，左键到达最后一张
                this.imgbox.style.left=-(this.img.length-1) * this.img[0].offsetWidth + "px";
                this.index = this.img.length-2;
                console.log(1);
            }else{
                this.index-- 
            }
        }else{
            if(this.index == this.img.length-1){
                // 在切换到第二张的之前瞬间强行将imgbox拉到真正第一张的位置
                this.imgbox.style.left=0;
                this.index=1
            }else{
                this.index++;
                console.log(this.index);
            }
        }
        this.display();
    }
    Banner.prototype.display=function(){
        // 显示图片
        move(this.imgbox,{left:-this.img[0].offsetWidth*this.index})
    }

// 菜单栏功能
function Menu(){
    // this.data={
    //    digital: ["大家电","生活电器","厨房电器","健康护理","电脑整机","电脑配件","数码配件","时尚影音"," 智能设备"," 电子教育"],
    //     food: ["米面油","干货/调味","酒类","休闲食品","饮料/冲调","地方特产","茗茶","生鲜食品"],
    //     products: ["干货","蔬菜","水果","副食","其他"],
    //     meterial: ["农业物资","农机","农药"],
    //     phone: ["手机通讯","手机配件","外设产品","办公用品","网络产品"],
    //     face: ["面部护肤","洗发护发","身体护肤","口腔护理","女性护理","香水彩妆"],
    //     furniture: ["家具灯具","洗护清洁","家装软饰","家纺"],
    //     jewelry: ["珠宝首饰","礼品","钟表","服装店用品"],
    //     shoes: ["流行男鞋","精品男包","休闲鞋子","帽子"],
    //     baby: ["尿裤湿巾","喂养用品","洗护用品","童装童鞋"],
    //     travel: ["旅游团购"]
    // };

    // let arrData = [];
    // let index = 0;
    // for(let i in this.data){
    //     let str="";
    //     for(let j=0;j<this.data[i][j].length;j++){
           
    //             str+=`<li><a href="#">${this.data[i][j]}</a></li> `
            
    //     }
    //     arrData.push(str);
    // }






































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
        // this.nav_l.onmouseover=function(){
        //     that.list.style.display="block";
        // }
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

                //     for(var p=0;p<that.arr.length;p++){
                //         // console.log(1);
                //         this.li[p].onmouseover=function(){ 
                //             for(var q=0;q<that.arr.length;q++){
                //         console.log(that.arr[p])
                //     }
                // }
                // }
    
                   


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


new Banner();

class Index{
    constructor(){
        this.li=document.querySelectorAll(".hello li");
      console.log(this.li[0])
        this.span=document.querySelector(".chu .hi");
        this.exit=document.querySelector(".exit");
        this.getData();
        this.addEvent();
        console.log(this.span)
    }
    getData(){
        this.data = localStorage.getItem("data");
        if(this.data == null){
            this.data=[];
        }else{
            this.data = JSON.parse(this.data);
        }
        this.proving();
    }
        proving(){
            for(var i=0;i<this.data.length;i++){
                if(this.data[i].onoff == 1){
                    this.li[0].style.display="none";
                    this.li[1].style.display="block";
                    this.span.innerHTML = this.data[i].user;
                    console.log(this.data[i].user);
                    this.successUser=this.data[i].user;
                    return;
                }
            }
            this.li[0].style.display="block";
            this.li[1].style.display="none";
            this.span.innerHTML="";
        }
        addEvent(){
            var that = this;
            this.exit.onclick= function(){
                if(that.successUser){
                    for(var i=0;i<that.data.length;i++){
                        if(that.data[i].user===that.successUser){
                            that.data[i].onoff=0;
                            localStorage.setItem("data",JSON.stringify(that.data));
                            that.proving();
                        }
                    }
                }
            }
        }
}
new Index();




class receiveData{
    constructor(){

        this.init();
    }
    init(){

    }
}
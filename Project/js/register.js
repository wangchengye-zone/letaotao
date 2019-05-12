// // 注册
// class Register{
// constructor(){
//     this.url="http://www.icodeilife.cn/ctrl/register.php";
//     this.btn=$(".please");
//     this.user=$(".f2");
//     this.pass=$(".pass");
//     this.bomb=$(".bomb");
//     // console.log(1);
//     this.init();
// }
//     init(){

//         var that=this;
//         this.btn.mouseover(function(){
//             that.load(0)
//         })
//     }
//     load(){
//         var that = this;
//         $.ajax({
//             url:this.url,
//             data:{
//                 tel:this.user.val(),
//                 pass:this.pass.val()
//             },
//             success:function(res){
//                 switch(res){
//                     case "0":
//                     console.log(0)
//                     that.bomb.html("你的名字太火了");break;
//                     case "1":
//                     console.log(1)

//                     that.bomb.html("恭喜你注册成功");
//                     setTimeout(()=>{
//                         location.href="login.html";
//                     },3000);break;
//                     case "2":
//                     console.log(2)

//                     that.bomb.html("你的数据不全");break;

//                 }
//             }
//         })
//     }
// }

// new Register();


class Register{
    constructor(){
        this.user = document.querySelector(".f2");
        this.pass = document.querySelector(" .pass");
        this.btn=document.querySelector(".please");
        this.bomb=document.querySelector(".bomb");
        this.init();
        //遍历数组看是否存在cookie
        this.getData();
        console.log(this.bomb);
    }
        init(){
            var that = this;
            this.btn.onclick = function(){
                // 点击注册按钮并设置cookie
                that.setData();
            }
        }

        getData(){
            // data是localStorage库的数组名,
            this.data=localStorage.getItem("data");
            // 读取localStorage,如果有就解析数组，如果没有就给一个空数组，方便操作
            if(this.data == null){
                this.data = [];
            }else{
                this.abc = JSON.parse(this.data);
            }
        }
        setData(){
            if(this.data.length ==0){

                // 第一次注册
                this.data.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.bomb.innerHTML="注册成功";
                localStorage.setItem("data",JSON.stringify(this.data))
            }else{
                // 如果不是第一次注册，就需要判断这次注册是否重名，如果重名就不执行
                for(var i=0;i<this.data.length;i++){
                    if(this.data[i].user == this.user.value){
                        this.bomb.innerHTML ="重名了";
                        return;
                    }
                }
                // 如果执行了，表示没重名，那就再增加一个
                this.data.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
                this.bomb.innerHTML="注册成功";
                localStorage.setItem("data",JSON.stringify(this.data))

            }
        }


}
new Register();
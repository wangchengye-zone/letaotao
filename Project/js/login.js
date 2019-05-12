
// class Login{
//     constructor(){
//         this.url = "http://www.icodeilife.cn/ctrl/login.php";
//         this.btn = $(".please");
//         this.bomb = $(".bomb");
//         this.user = $(".myuser .user");
//         this.pass = $(".mypass .pass");
        
//         this.init()
//         this.getCookie();
//     }

//     init(){      
//         var that = this;
//         this.btn.click(function(){
//             if($(".check").checked="checked"){
//                 that.setCookie();
//             }
//             that.bomb.show();          
//             that.load()
//         })
//     }

//     setCookie(){
//         setCookie("user",this.user.val(),{expires:2})
//         setCookie("pass",this.pass.val(),{expires:2})
//     }

//     getCookie(){
//         this.user.val(getCookie("user"));
//         this.pass.val(getCookie("pass"))
//     }

//     load(){
//         var that = this;
//         $.ajax({
//             url:this.url,
//             data:{
//                 user:this.user.val(),
//                 pass:this.pass.val()
//             },
//             success:function(res){
//                 switch(res){
//                     case "0":
//                     that.bomb.html("用户名密码不符");
//                     break;
//                     case "1":
//                     that.bomb.html("请重新登录");break;
                   
//                     default:
//                     that.bomb.html("登录成功，正在跳转");
//                     that.res = JSON.parse(res);
//                     that.display();
                  
//                 }
//             }
//         })
//     }

//     display(){
//         setTimeout(() => {
//             location.href="index.html";
            
//         }, 3000);
//     }

// }
// new Login();


class Login{
    constructor(){
        this.user = document.querySelector(".myuser .user");
        this.pass = document.querySelector(".mypass .pass");
        this.btn=document.querySelector(".please");
        this.bomb=document.querySelector(".bomb");
        this.init();
        this.getData();       
    }

    init(){
        var that=this;
        this.btn.onclick=function(){
        //    点击时登录时验证是否存在于本地localStorage中
            that.proving();
        }
    }

        // 获取本地localstorage
    getData(){
        this.data=localStorage.getItem("data");
        // 读取localStorage，如果有就解析成数组，没有就给出一个空数组，方便操作
        if(this.data == null){
            this.data = [];
        }else{
            this.data = JSON.parse(this.data)
        }
    }

    proving(){
        for(var i=0;i<this.data.length;i++){
            if(this.data[i].user ==this.user.value && this.data[i].pass== this.pass.value){
                this.bomb.innerHTML="登陆成功，3秒后跳转";
                this.data[i].onoff = 1;
                localStorage.setItem("data",JSON.stringify(this.data));
                
                setTimeout(() => {
                   location.href="index.html"; 
                }, 3000);
                return;
            }
        }
        this.bomb.innerHTML="用户名密码不符";
    }

}
new Login();
(function() {
    var Fload = function(options) {      
        //默认参数
        var defaults = {
            content:'加载中',    
        };
        this.options=Object.assign({}, defaults, options);//合并参数
        this.idStr='Fload'+new Date().getTime();//id唯一
        this.init(); //初始化
    };
    //初始化
    Fload.prototype.init = function() {
        let loadE = document.createElement("div"); //创建元素      
        //基础样式 需引入单独的css,若也写入js中消耗大
        loadE.className = "Fmask";
        loadE.id = this.idStr;

        let loadE2 = document.createElement("div"); //创建元素   
        loadE2.className = "FmaskCon";      
        loadE2.innerHTML = this.options.content;//参数

        loadE.appendChild(loadE2);//插入元素 
        document.body.appendChild(loadE);//插入元素

    };

    //初始化
    Fload.prototype.clear = function() {
        let loadE = document.getElementById(this.idStr); 
        document.body.removeChild(loadE);//删除元素
    }

    window.Fload = Fload;

})();
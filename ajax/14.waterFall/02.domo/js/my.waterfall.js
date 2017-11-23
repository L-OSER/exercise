//添加插件
$.fn.extend({
    waterfall:function(){
        //console.log('自己写的瀑布流插件')
        
        // 步骤1
        /*
              为了计算 获取一些 必须知道的值值
              容器的宽度 .itms的 宽度
              子元素的宽度 .child().width()
              每一行放置的元素个数
              计算间距
         */
        //定义$_变量方便 观察
        var $_this = this;
        //父盒子宽度
        var totalWidth =$_this.width();

        //子元素的宽度
        var itemsWidth = $_this.children('.item').width();

        //每一行的个数4.1 4.9
        var colNum = Math.floor(totalWidth / itemsWidth);

        //间距 (总宽度 - 个数*子元素宽度) / (个数- 1)
        var margin = (totalWidth - itemsWidth*colNum) / (colNum - 1);

        //步骤2:
        /*
            1 准备一个 数组 数组元素的个数 跟 每一行的个数一致
                 里面是默认值(比如是10或者margin)

            2 循环我们的 所有 .item 子元素
                 获取子元素的高度
                 通过我们在步骤1中定义的 数组 获取 最小的值
                 根据获取的 最小索引值 计算top 以及left

            3 修改步骤1中定义的 数组 对应的索引的值 即可
         */
        
        // 步骤2.1 准备高度数组
        //高度数组
        var heightArr = [];
        //循环为 高度数组 赋值 初始值
        for (var i =0; i <colNum; i++) {
               heightArr[i]=margin;
        };

        // 步骤2.2 循环子元素 获取数组中最小的索引
             // 修改当前循环的元素的 top 以及 left值
        //jq中 循环数组的方法
        $_this.children('.item').each(function(index, el) {
            // console.log(index+'||'+el)
            
            //获取 当前循环的 子元素高度
            var currentHeight = $(el).height();
            // console.log(currentHeight)

            //计算 该元素 放在哪个位置
            //先假设 索引值为0 的是最小值 
            var minIndex = 0;
            var minHeight = heightArr[0];
            for (var i = 0; i < heightArr.length; i++) {
                // 替换一下
                if (heightArr[i] < minHeight) {
                     minHeight = heightArr[i] ;
                     minIndex = i;
                };
            };
                //循环完毕 最小的 高度 以及 最小的 索引值
                
                //设置给 当前循环的 子元素 即可
                //top高度 为计算出来的 最小高度
                //left 左间距 为 宽度*索引 + 索引*间距
                $(el).css({
                    top:minHeight,
                    left:minIndex*itemsWidth+minIndex*margin
                });

                //步骤2.3 修改 步骤1中 创建的 高数数组
                //修改 minIndex 对应的值即可
                minHeight+= currentHeight;//加上自己的高度
                minHeight+= margin;//为了美观 把间距 加上去

                //赋值给 高度数组即可
                heightArr[minIndex] = minHeight;

        });


        //步骤3 
        /*
            修改 父盒子的 高度 即可
            // 获取 高度数组中 最大的值

            // 修改父盒子的高度为 计算出来的 最大值即可
        */
        //
         var maxHeight = 0;
         for (var i = 0; i < heightArr.length; i++) {
             if (heightArr[i] > maxHeight) {
                //将更大的值 保存起来
                maxHeight = heightArr[i];
             };
         };
         //循环完毕以后 最大值就有了 
         $_this.height(maxHeight);




















    }
});
### 递归：通过函数体来进行的循环
#### 递归的思维要点：
<ul>
  <li> 1. 不要人肉进行递归</li>
  <li> 2. 找到最近最简方法，将其拆分成可重复解决的问题</li>
  <li> 3. 数学归纳法思维</li>
</ul>

 #### 递归的模版：
 ```javascript
  const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return 
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed   
}
 ```

 
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

 ### 分治：大问题拆分成子问题，找重复性，比递归多一步，将子问题合成在一起
```python
def divide_conquer(problem, param1, param2,...):
  # recursion terminator
  if problem is None:
    print_result
    return
  # prepare data
  data = prepare_data(problem)
  subproblems = split_problem(problem, data)
  # conquer subproblems
  subresult1 = self.divide_conquer(subproblems[0], p1, ...)
  subresult2 = self.divide_conquer(subproblems[1], p2, ...)
  subresult3 = self.divide_conquer(subproblems[2], p1, ...)
  ...
  # process and generate the final result
  result = process_result(subresult1, subresult2, subresult3, ...)

  # revert the current level states
```



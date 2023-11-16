# 从小到大排序

## 解答
> [代码笔记](https://zmx2321.github.io/blog_code/algorithm/other/example/base/arr_charu)

```js
let array = [9, 4, 3, 2, 1, 8, 3, 6, 7, 0, 1];

function sortNumber(a, b){
	return a - b
}

console.log(array);
console.log(array.sort(sortNumber));
```
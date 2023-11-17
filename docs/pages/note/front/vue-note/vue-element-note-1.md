# element-ui工作积累

## 39. element-ui中禁用某些日期
```js
// 季报
quarterlyPicker(startMonth, endMonth) {
    console.log("季报");
    let startMonthArr = startMonth.split("-");
    let endMonthArr = endMonth.split("-");

    // 开始月份
    this.pickerOptionsStartDate = {
        disabledDate(time) {
        return (time.getTime() !== new Date(startMonthArr[0], 1) - 8.64e7) && 
                (time.getTime() !== new Date(startMonthArr[0], 4) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 7) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 10) - 8.64e7);
        },
    };

    // 结束月份
    this.pickerOptionsEndDate = {
        disabledDate(time) {
        return (time.getTime() !== new Date(startMonthArr[0], 3) - 8.64e7) && 
                (time.getTime() !== new Date(startMonthArr[0], 6) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 9) - 8.64e7) &&
                (time.getTime() !== new Date(startMonthArr[0], 12) - 8.64e7);
        },
    };
},

this.quarterlyPicker(this.generatingReportData.startMonth, this.generatingReportData.endMonth);
```

## 40. 下拉框禁用
```js
/*<el-form-item label="转审" prop="transferId">
<el-select v-model="approvalOperationData.transferId" placeholder="请选择被转审人" clearable>
    <el-option v-for="(item, index) in userList" :label="item.label" :value="item.value" :key="index" :disabled="item.disabled"></el-option>
</el-select>
</el-form-item>*/

this.userList.find(userItem=> {
    if(row.createUser === userItem.value) {
        userItem.disabled = true;
    }
});
```

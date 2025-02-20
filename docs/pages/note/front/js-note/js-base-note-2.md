# js中的时间

## 时间戳
```js
// 设置时间戳
getNowFormate(time) {
    time = new Date();
    let year = time.getFullYear(); // 年
    let month = time.getMonth() + 1;  // 月
    let date = time.getDate();  // 日
    let hour = time.getHours();  // 时
    let minute = time.getMinutes();  // 分
    let second = time.getSeconds();  // 秒

    // 加上0
    month < 10 ? month=`0${month}` : month;  // 月
    date < 10 ? date=`0${date}` : date;  // 日
    hour < 10 ? hour=`0${hour}` : hour;  // 时
    minute < 10 ? minute=`0${minute}` : minute;  // 分
    second < 10 ? second=`0${second}` : second;  // 秒

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

getNowFormate();  // 默认当前时间
```

## 定义类供出各个时间格式
```js
// 时间戳
export class getTimestamp {
    constructor() {
        let timeStamp = new Date();

        this.year = timeStamp.getFullYear();  // 年
        this.month = timeStamp.getMonth() + 1;  // 月
        this.date = timeStamp.getDate();  // 日

        this.day = timeStamp.getDay();  // 获取当前星期几

        this.hour = timeStamp.getHours();  // 时
        this.minute = timeStamp.getMinutes();  // 分
        this.second = timeStamp.getSeconds();  // 秒

        // 日期
        this.weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        // 小于十位加0
        this.month = (this.month< 10) ? '0' + this.month: this.month= this.month;
        this.date = (this.date< 10) ? '0' + this.date: this.date= this.date;

        this.hour = (this.hour< 10) ? '0' + this.hour: this.hour= this.hour;
        this.minute = (this.minute< 10) ? '0' + this.minute: this.minute= this.minute;
        this.second = (this.second< 10) ? '0' + this.second: this.second= this.second;
    }

    // 获取当前年月日时分秒
    nowDateTime() {
        return `${this.year}-${this.month}-${this.date} ${this.hour}:${this.minute}:${this.second}`;
    }

    // 获取当前年月日
    nowDate() {
        return `${this.year}-${this.month}-${this.date}`;
    }

    // 获取当前星期
    nowWeek() {
        return this.weekday[this.day]
    }

    // 任意时间戳改变格式 - 年月日时分秒
    formatDateTime = time=> {
        let timeStamp = new Date(time);
        let year = timeStamp.getFullYear(); // 年
        let month = timeStamp.getMonth() + 1;  // 月
        let date = timeStamp.getDate();  // 日
        let hour = timeStamp.getHours();  // 时
        let minute = timeStamp.getMinutes();  // 分
        let second = timeStamp.getSeconds();  // 秒
    
        // 加上0
        month < 10 ? month=`0${month}` : month;  // 月
        date < 10 ? date=`0${date}` : date;  // 日
        hour < 10 ? hour=`0${hour}` : hour;  // 时
        minute < 10 ? minute=`0${minute}` : minute;  // 分
        second < 10 ? second=`0${second}` : second;  // 秒
    
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`
    }

    // 任意时间戳改变格式 - 年月日
    formatDate = time=> {
        let timeStamp = new Date(time);
        let year = timeStamp.getFullYear(); // 年
        let month = timeStamp.getMonth() + 1;  // 月
        let date = timeStamp.getDate();  // 日
    
        // 加上0
        month < 10 ? month=`0${month}` : month;  // 月
        date < 10 ? date=`0${date}` : date;  // 日
    
        return `${year}-${month}-${date}`
    }

    // 时间戳年月日返回之前一天
    formatYsetDate = time=> {
        // console.log(time);
        let timeStamp = new Date(time).getTime();  // 传入时间的时间戳
        // console.log("timeStamp", timeStamp);

        // 一天的时间戳
        let oneDayTimeStamp = 24*60*60*1000; 
        // console.log("oneDayTimeStamp", oneDayTimeStamp);

        // 获取昨天的时间戳
        let yestDateStamp = timeStamp - oneDayTimeStamp;
        // console.log(yestDateStamp);

        // 改变时间戳
        let yestDate = this.formatDate(yestDateStamp);
        // console.log(yestDate);

        return yestDate;
    }

    // UTC时间格式转换
    UTCtoNormal(value) {
        // console.log("UTC时间格式转换");

        if (value == '') {
            return ''
        }
    
        // utc时间转换
    　　return moment(value).format('YYYY-MM-DD HH:mm:ss');
    }

    // 时间戳年月日返回之前一天
    formatYsetDate = time=> {
        // console.log(time);
        let timeStamp = new Date(time).getTime();  // 传入时间的时间戳
        // console.log("timeStamp", timeStamp);

        // 一天的时间戳
        let oneDayTimeStamp = 24*60*60*1000; 
        // console.log("oneDayTimeStamp", oneDayTimeStamp);

        // 获取昨天的时间戳
        let yestDateStamp = timeStamp - oneDayTimeStamp;
        // console.log(yestDateStamp);

        // 改变时间戳
        let yestDate = this.formatDate(yestDateStamp);
        // console.log(yestDate);

        return yestDate;
    }

    // 根据时间判断某天前的日期
    calDate = (n, time)=> {
        // console.log(time);
        let timeStamp = new Date(time).getTime();  // 传入时间的时间戳
        // console.log("timeStamp", timeStamp);

        // 一天的时间戳
        let someDayTimeStamp = n*24*60*60*1000; 
        // console.log("oneDayTimeStamp", oneDayTimeStamp);

        // 获取昨天的时间戳
        let someDateStamp = timeStamp - someDayTimeStamp;
        // console.log(someDateStamp);

        // 改变时间戳
        let someDate = this.formatDate(someDateStamp);
        // console.log(someDate);

        return someDate;
    }

    // 计算某天后n天的日期
    calNextDate = (n, time)=> {
        let timeStamp = new Date(time).getTime();  // time的时间戳

        let someDayTimeStamp = n*86400000; 

        let someDateStamp = timeStamp + someDayTimeStamp;

        let someDate = this.formatDate(someDateStamp);

        return someDate;
    }
}

console.log("获取当前年月日时分秒", new util.getTimestamp().nowDateTime());
console.log("获取当前年月日", new util.getTimestamp().nowDate());
console.log("获取当前星期", new util.getTimestamp().nowWeek());
console.log("new Date('2020-1-1').getTime()", new Date('2020-1-1').getTime());
console.log("任意时间戳改变格式[1577808000000]", new util.getTimestamp().formatDate(1577808000000));
```

## js获取一天中每隔15分钟的时间
```js
var m = 0;
var n = 0;
var arr=[];
for(var i=0;i<96;i++){
    n+=15;
    if(n>45){
        n = 0;
        m+=1
    }
    arr.push((m>9?m:"0"+m)+":"+(n>9?n:"0"+n));
}
console.log(arr)
```

## 判断每月多少天
```js
const getDays = (year, month)=> {
    let days = [31,28,31,30,31,30,31,30,30,31,30,31] 
    if ( (year % 4 ===0) && (year % 100 !==0 || year % 400 ===0) ) {
        days[1] = 29
    }
　　return days[month]  
}
```

## 时间相关遍历 - 天、月
```js
// 15分钟
export const getTime15min = rq=> {
    var m = 0;
    var n = 0;
    var arr = [];

    for(var i=0;i<95;i++){
        n+=15;
        if(n>45){
            n = 0;
            m+=1
        }
        arr.push(rq + "T" + (m>9?m:"0"+m)+":"+(n>9?n:"0"+n))
    }

    arr.unshift(rq + "T00:00")

    return arr;
};

// 月
export const getTimeMonth = rq=> {
    let arr = [];

    let timeStamp = new Date(rq);
    // console.log(timeStamp)

    let year = timeStamp.getFullYear();  // 年

    for(let i=1; i<=12; i++) {
        arr.push(`${year}-${(i>9?i:"0"+i)}-01`)
    }

    return arr;
};

// 旬 每个月的 1号、11号、21号
export const getTimeTenDay = rq=> {
    let arr = [];

    let timeStamp = new Date(rq);

    let year = timeStamp.getFullYear();  // 年

    for(let i=1; i<=12; i++) {
        arr.push(`${year}-${(i>9?i:"0"+i)}-01`)
        arr.push(`${year}-${(i>9?i:"0"+i)}-11`)
        arr.push(`${year}-${(i>9?i:"0"+i)}-21`)
    }

    return arr;
};

const getDays = (year, month)=> {
    let days = [31,28,31,30,31,30,31,31,30,31,30,31] 

    if ( (year % 4 ===0) && (year % 100 !==0 || year % 400 ===0) ) {
            days[1] = 29
    }

　　return days[month]  
}

// 日
export const getTimeDay = rq=> {
    let arr = [];

    let timeStamp = new Date(rq);

    let year = timeStamp.getFullYear();  // 年

    for(let i=1; i<=12; i++) {
        for(let j=1; j<=getDays(year, i-1); j++) {
            arr.push(`${year}-${(i>9?i:"0"+i)}-${(j>9?j:"0"+j)}`)
        }
    }

    return arr;
};

// 小时
export const getTimeHover = rq=> {
    var m = 0;
    var n = 0;
    var arr = [];

    for(var i=0;i<23;i++){
        n+=60;
        if(n>45){
            n = 0;
            m+=1
        }
        arr.push(rq + "T" + (m>9?m:"0"+m)+":"+(n>9?n:"0"+n))
    }

    arr.unshift(rq + "T00:00")

    return arr;
};

// 年区间
export const getYearArr = (start,end)=> {
    console.log(start,end)

    var result = [];
    //使用传入参数的时间
    var startTime = new Date(start);
    var endTime = new Date(end);
    while(endTime - startTime>=0 ) {
        //获取年份
        let year = startTime.getFullYear();
        //加入数组
        result.push(year);
        //更新日期
        startTime.setFullYear(startTime.getFullYear()+1);
    }
    return result;
};

// 日区间
export const getTimeDayArr = (stime,etime)=> {
    // console.log(rq);

    //初始化日期列表，数组
    var diffdate = new Array();
    var i=0;
    //开始日期小于等于结束日期,并循环
    while(stime<=etime){
        diffdate[i] = stime;
        
        //获取开始日期时间戳
        var stime_ts = new Date(stime).getTime();
        // console.log('当前日期：'+stime   +'当前时间戳：'+stime_ts);
        
        //增加一天时间戳后的日期
        var next_date = stime_ts + (24*60*60*1000);
        
        //拼接年月日，这里的月份会返回（0-11），所以要+1
        var next_dates_y = new Date(next_date).getFullYear()+'-';
        var next_dates_m = (new Date(next_date).getMonth()+1 < 10)?'0'+(new Date(next_date).getMonth()+1)+'-':(new Date(next_date).getMonth()+1)+'-';
        var next_dates_d = (new Date(next_date).getDate() < 10)?'0'+new Date(next_date).getDate():new Date(next_date).getDate();
 
        stime = next_dates_y+next_dates_m+next_dates_d;
        
        //增加数组key
        i++;
    }

    return diffdate
    // console.log(diffdate);
};

// 月
export const getmonthArr = (start,end)=> {
    var result = [];  
	var s = start.split("-");  
	var e = end.split("-");  
	var min = new Date();  
	var max = new Date();  
	min.setFullYear(s[0],s[1]);  
	max.setFullYear(e[0],e[1]);  
	  console.log(e[0]+"---- "+e[1]);
	var curr = min;  
	while(curr <= max){  
	    var month = curr.getMonth();  
	    //month=month==0?12:month;
	    console.log(month);
	    var str=curr.getFullYear()+"-"+(month);
	    var s=curr.getFullYear()+"-0";
	    if(str==s){
	    	str=curr.getFullYear()+"-12";
	    }
	    result.push(str);  
	    curr.setMonth(month+1);
	}  
	return result;  

};
```

## 获取两个日期中间的年或月或日的数组
```js
//获取两日期之间日期列表函数
function getdifflist(start_time,end_time,type){ // type 为 days(天) , months(月), years(年)
    var dateArray = [];     // dateArray 起止日期中间的所有日期列表
    var currentDate = moment(start_time);    //起止日期
    var stopDate = moment(etime);       //截止日期
    //开始日期小于等于结束日期,并循环
    while(currentDate <= stopDate){
        if (type==='days') dateArray.push( moment(currentDate).format('YYYY-MM-DD') );  //两个日期间的所有日期,图一
        if (type==='months') dateArray.push( moment(currentDate).format('YYYY-MM') );   //两个月份间的所有月份,图二
        if (type==='years') dateArray.push( moment(currentDate).format('YYYY') );       //两个年份间的所有年份,图三
        currentDate = moment(currentDate).add(1, type); //根据类型+1
    }
    return dateArray;
}

getdifflist("2021-03-07","2021-03-09","days")
getdifflist("2021-01","2021-06","months")
```

## utc转北京
```js
formatDateTime(time) {
    let timeStamp = new Date(time);
    let year = timeStamp.getFullYear(); // 年
    let month = timeStamp.getMonth() + 1;  // 月
    let date = timeStamp.getDate();  // 日
    let hour = timeStamp.getHours();  // 时
    let minute = timeStamp.getMinutes();  // 分
    let second = timeStamp.getSeconds();  // 秒

    // 加上0
    month < 10 ? month=`0${month}` : month;  // 月
    date < 10 ? date=`0${date}` : date;  // 日
    hour < 10 ? hour=`0${hour}` : hour;  // 时
    minute < 10 ? minute=`0${minute}` : minute;  // 分
    second < 10 ? second=`0${second}` : second;  // 秒

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
},

this.mnbdData[i].createtime = this.formatDateTime(this.mnbdData[i].createtime)
```

## 日期字符串获取小时
```js
let str = "2020-07-27 09:00:00";

let res = str.split(":")[0].split(" ")[1].split("")[1];
console.log(res);
```

## 获取前几天
```js
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 7);
const queryParams = ref({
    createStartEnd: [currentDate, new Date()]
})
```
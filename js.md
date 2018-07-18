## js获取当天日期
```
function getFormatDate() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() +
        1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    return year + "-" + month + "-" + date;
}
var str = getFormatDate();
```

## js将汉字转化成数字
```
function _convert(str) {
    var arr = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    for (var i = 0; i < arr.length; i++) {
        str = str.replace(new RegExp(arr[i], "g"), (i));
    }
    if (str.length == 3) {
        str = str.split('0');
        str = str[0] + str[1]
    }
    return str;
}
```

## js数字前自动加零
```
function PrefixInteger(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}
```
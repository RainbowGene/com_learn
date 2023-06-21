

//1.对比时间
const starttime = '2019-01-01 09:00:00'
const endtime = '2019-10-12 13:49:00'
const a = starttime > endtime   //  a  :  false

//2.格式化金钱
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
const money = ThousandNum(20191012)     // 20,191,012

//3,生成随机ID
const RandomId = len => Math.random().toString(36).substr(3, len)
const id = RandomId(10) //随机生成十位数id

//4,生成随机HEX色值
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor();

//5,生成星级评分
const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(4);
console.log(start)

//操作URL查询参数
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"
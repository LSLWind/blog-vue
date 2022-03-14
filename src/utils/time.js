export function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear(); //得到年份
    const month = now.getMonth() + 1;//得到月份
    const date = now.getDate();//得到日期
    return year + '/' + month + '/' + date
}
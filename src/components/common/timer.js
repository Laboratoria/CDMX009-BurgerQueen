function timer(date){
    let sec = date.seconds.toString()
    let nanosec = (date.nanoseconds/1000000).toString()
    let dateTime = sec+nanosec
    //let time = new Date(parseInt(dateTime))
    //console.log(time)
    let d = Date.now() - parseInt(dateTime);
    //console.log(Date.now(), d);
    let days = d/(3600*24*1000);
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;
    //console.log(days, hours, minutes, seconds);
    let timer = {'days': Math.floor(days),
                 'hours': Math.floor(hours),
                 'minutes': Math.floor(minutes),
                 'seconds': Math.floor(seconds),                       
                }
    //console.log(timer)
    return timer;
}

export default timer; 
      
      
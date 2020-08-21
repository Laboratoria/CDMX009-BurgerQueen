function timer(date){
    let sec = date.seconds.toString()
    let nanosec = (date.nanoseconds/1000000).toString()
    let dateTime = sec+nanosec
    let d = Date.now() - parseInt(dateTime);
    let days = d/(3600*24*1000);
    let hours = (days - Math.floor(days)) * 24;
    let minutes = (hours - Math.floor(hours)) * 60;
    let seconds = (minutes - Math.floor(minutes)) * 60;
    
    return {'days': Math.floor(days),
            'hours': Math.floor(hours),
            'minutes': Math.floor(minutes),
            'seconds': Math.floor(seconds),                       
           }
 
}

export default timer; 
      
      
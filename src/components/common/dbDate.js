function dbDate(date){
    let sec = date.seconds.toString()
    let nanosec = (date.nanoseconds/1000000).toString()
    let dateTime = sec+nanosec
    let time = new Date(parseInt(dateTime))
    return time.toLocaleTimeString()
}

  export default dbDate;
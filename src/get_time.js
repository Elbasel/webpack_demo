

function getTime() {
    // Get currne time string
    const timeNow = new Date()

    let hours = timeNow.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    if (hours < 10) hours = '0' + hours;


    let minutes = timeNow.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;


    return `${hours}:${minutes} ${ampm}`


}
export default getTime;
const getCreatedTimeStamp = () => {
    const currTimestamp = new Date();

    const month = currTimestamp.toLocaleString('default', { month: 'short' });
    const day = currTimestamp.getDate();
    const year = currTimestamp.getFullYear();
    const currDateString = `${month} ${day}, ${year}`;

    const hour = currTimestamp.getHours() < 10 ? `0${currTimestamp.getHours()}` : currTimestamp.getHours();
    const minutes = currTimestamp.getMinutes() < 10 ? `0${currTimestamp.getMinutes()}` : currTimestamp.getMinutes();
    const seconds = currTimestamp.getSeconds() < 10 ? `0${currTimestamp.getSeconds()}` : currTimestamp.getSeconds();
    const currTimeString = `${hour}:${minutes}:${seconds}`;

    return({ currDateString, currTimeString });
}

export { getCreatedTimeStamp };
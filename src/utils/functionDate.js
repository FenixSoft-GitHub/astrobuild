export const FormatDate = (date) => {
    const event = new Date(date);
    const newDate = event.toDateString();
    return newDate;
}

export const FormatDateWithoutYear = (date) => {
    const event = new Date(date);
    const newDate = event.toDateString().slice(0, -4);
    return newDate;
}
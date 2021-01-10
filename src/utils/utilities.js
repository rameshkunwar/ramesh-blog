import moment from 'moment'

export const ConvertDateToMonthYear = (givenDate) => {
    var momentObj = moment(givenDate)
    if(!momentObj.isValid()){
        throw new Error(`Can't convert to Year Month, invalid date supplied. Supplied date: ${givenDate}`)
    }
    const datetimeObj = new Date(givenDate)
    const monthInNumber = datetimeObj.getMonth();
    const year = datetimeObj.getFullYear();

    const monthAsString = moment().month(monthInNumber).format("MMMM");

    return `${monthAsString} ${year}`
}
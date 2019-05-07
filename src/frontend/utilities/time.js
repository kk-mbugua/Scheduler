
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);

export const  getMoment = (time)=> {
    const timeArray = time.split(":")
    const m = moment().set("hour", parseInt(timeArray[0])).set("minute", parseInt(timeArray[1])).set("second", 0)
    return m
}

export const getIntervals= (rawFrom, rawTo, step)=> {
    const from = getMoment(rawFrom)
    const to = getMoment(rawTo)

    const range = moment.range(from, to)
    const intervals = Array.from(range.by('minutes', { step: step }));
    return intervals.map(m => m.format('HH:mm'))
}

export const doesContain =(start, end, toCheck)=>{
    const range = moment.range(start, end);
    return range.contains(toCheck, { excludeEnd: true})
}

export const doesContainRange =(range_from, range_to, check_from, check_to)=>{
    range_from = getMoment(range_from)
    check_from = getMoment(check_from)
    check_to = getMoment(check_to)
    range_to = getMoment(range_to)
    const range = moment.range(range_from, range_to)
    const check = moment.range(check_from, check_to)

    return range.contains(check)
}

export const getMaxRange = (list)=>{
    let theRange = undefined
    list.forEach(l=>{
        const from = getMoment(l.from)
        list.forEach(l2=>{
            const to = getMoment(l2.to)
            const range = moment.range(from, to)
            if(theRange=== undefined ){
                theRange = range
            }
            if(range.valueOf() > theRange.valueOf()){
                theRange =  range
            }
        })
    })

    const toReturn = {from: theRange.start.format("HH:mm"), to:theRange.end.format("HH:mm") }
    return toReturn
}

export const diff = (a, b)=>{
    return getMoment(a).subtract(getMoment(b)).valueOf()
}

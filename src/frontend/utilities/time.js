
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

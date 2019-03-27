class Evaluate {
    constructor(workDay, employees) {
        this.workDay = workDay
        this.employees = employees
        this.metrics = [
            {metric: , weight: }
        ]
    }

    get scores () {
        let scores = []
        this.employees.forEach(employee => {

        });
        
        //score {employee: , score: }

    }

    get earliestTime() {
        return this.workDay.unfilledIntervals[0]
    }

    canWork(employee) {
        let b = true
        let time = this.earliestTime
        if (employee.availableTimes[workDay.name].indexOf(time) < 0) {
            b = false
        }

        return b
    }

    shiftLength() {
        // time in minutes
        let maxShiftLength = 240
        let minShiftLength = 60
        

    }

    get metrics() {
        let metrics = [
            {metric: this.shiftLength, weight: 1},

        ]
    }

}

module.exports = Evaluate

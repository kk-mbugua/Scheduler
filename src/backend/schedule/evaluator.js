const TimeSlot = require("./timeSlot");
const Employee = require("./employee");
const Shift = require("./shift");

class Evaluator {
  constructor(workDay, employees) {
    this.workDay = workDay;
    this.employees = this.employeesThatCanWork(employees);
    this.populateEmployeeScores();
  }

  getBestShift() {
    if (this.employees.length < 1) {
      const employee = new Employee("Can't fill");
      return new Shift(
        employee,
        this.workDay.location,
        this.workDay,
        this.startTime,
        this.workDay.unfilledIntervals[
          this.workDay.unfilledIntervals.indexOf(this.startTime) + 1
        ]
      );
    }

    const employee = this.bestEmployee;
    return this.makeShift(employee);
  }

  getEndTime(employee, startTime, maxShiftLength) {
    let endTime = startTime;
    let closingTime = this.workDay.to;

    while (endTime !== closingTime) {
      let prevTime = endTime;
      let nextIndex =
        employee.availableTimes[this.workDay.name].indexOf(endTime) + 1;
      endTime = employee.availableTimes[this.workDay.name][nextIndex];

      if (endTime === undefined) {
        endTime = prevTime;
        break;
      }

      const t1 = new TimeSlot(this.startTime, endTime);
      if (t1.duration > maxShiftLength) {
        endTime = prevTime;
        break;
      }

      const t = new TimeSlot(prevTime, endTime);
      if (t.duration > t.interval) {
        endTime = prevTime;
        break;
      }
    }

    return endTime;
  }

  makeShift(employee) {
    if (employee === undefined) {
      console.log("employee undefined");
    }
    const endTime = this.getEndTime(employee, this.startTime, 240);

    return new Shift(
      employee,
      this.workDay.location,
      this.workDay,
      this.startTime,
      endTime
    );
  }

  get bestEmployee() {
    let bestScore = -Infinity;
    let bestEmployee = undefined;

    this.employees.forEach(employee => {
      if (employee.totalScore > bestScore) {
        bestScore = employee.totalScore;
        bestEmployee = employee.employee;
      }
    });

    return bestEmployee;
  }

  populateEmployeeScores() {
    const metrics = this.runMetrics();

    metrics.forEach(metric => {
      const metricName = metric.name;
      const metricWeight = metric.weight;
      const metricScores = metric.scores;

      this.employees.forEach(employee => {
        const thisEmployee = metricScores.filter(metricScore => {
          return metricScore.employee === employee.employee;
        })[0];
        employee.weightedScores.push({
          metricName: metricName,
          metricScore: thisEmployee.score * metricWeight
        });
        employee.totalScore += thisEmployee.score * metricWeight;
      });
    });
  }

  get startTime() {
    return this.workDay.unfilledIntervals[0];
  }

  employeesThatCanWork(employees) {
    const workers = employees
      .filter(employee => {
        return (
          employee.availableTimes[this.workDay.name].indexOf(this.startTime) >=
          0
        );
      })
      .map(employee => {
        return { employee: employee, weightedScores: [], totalScore: 0 };
      });

    return workers;
  }

  standardize(scores) {
    const justScores = scores.map(score => {
      return score.rawScore;
    });

    let sum = 0;
    justScores.forEach(score => (sum += score));
    const mean = sum / justScores.length;

    let sqrSum = 0;
    justScores.forEach(score => (sqrSum += Math.pow(score - mean, 2)));
    const std = Math.sqrt(sqrSum / justScores.length);

    const zScores = scores.map(score => {
      if (score.rawScore - mean === 0) {
        return {
          employee: score.employee,
          score: 0
        };
      }
      return {
        employee: score.employee,
        score: Math.round(((score.rawScore - mean) / std) * 100) / 100
      };
    });
    return zScores;
  }

  metricShiftLength() {
    let scores = this.employees.map(employee => {
      let endTime = this.getEndTime(employee.employee, this.startTime, 240);
      const duration = new TimeSlot(this.startTime, endTime).duration;
      return { employee: employee.employee, rawScore: duration };
    });
    return this.standardize(scores);
  }

  metricDaysShiftCount() {
    let scores = this.employees.map(employee => {
      const shiftsToday = employee.employee.shifts.filter(shift => {
        return shift.workDay === this.workDay
      })
      return {employee: employee.employee, rawScore: shiftsToday.length}
    })
    return this.standardize(scores)
  }

  runMetrics() {
    return [
      { name: "shift length", weight: 1, scores: this.metricShiftLength() },
      { name: "day's shift count", weight: 2, scores: this.metricDaysShiftCount() }
    ];
  }
}

module.exports = Evaluator;

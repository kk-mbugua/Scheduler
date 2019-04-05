class Data {
    constructor() {
        this.advark = {
            name: "advark",
            monday : ["0000-1900"],
            tuesday : ["0000-2400"],
            wednesday : ["0000-2400"],
            thursday : ["0000-2400"],
            friday : ["0000-2400"],
            saturday : ["0000-2400"],
            sunday : ["0000-2400"],
            requestedHours: 15,
            isCommuter: false
        }
        this.tony = {
            name: "tony",
            monday : ["0000-1130", "1430-1630", "1745-2400"],
            tuesday : ["0000-1015", "1145-1315", "1430-2400"],
            wednesday : ["0000-1130", "1430-1630", "1745-2400"],
            thursday : ["0000-1015", "1145-1315", "1430-2400"],
            friday : ["0000-1315", "1430-1630", "1700-2400"],
            saturday : ["0000-2400"],
            sunday : ["0000-2400"],
            requestedHours: 8,
            isCommuter: true
        }
        this.lisa = {
            name: "lisa",
            monday : ["0000-0845", "1030-1430", "1600-1700"],
            tuesday : ["0000-1200", "1300-1445", "1700-2400"],
            wednesday : ["0000-0845", "1200-1700"],
            thursday : ["0000-0845", "1200-1300", "1425-1700"],
            friday : ["0000-0845", "1200-1430", "1600-2400"],
            saturday : ["0000-2400"],
            sunday : ["0000-2400"],
            requestedHours: 4,
            isCommuter: false
        }

        this.jenny = {
            name: "jenny",
            monday : ["1045-1445", "1630-1745", "1900-2000", "2100-2400"],
            tuesday : ["1315-1445"],
            wednesday : ["1145-1445", "1615-1800"],
            thursday : ["1300-1645"],
            friday : ["0000-2400"],
            saturday : ["0000-2400"],
            sunday : ["0000-2400"],
            requestedHours: 18,
            isCommuter: false
        }

        this.peaches = {
            name: "peaches",
            monday : ["0000-1000", "1145-1300", "1430-2400"],
            tuesday : ["0000-1000", "1145-1315", "1815-2400"],
            wednesday : ["0000-1015", "1145-1300", "1445-2400"],
            thursday : ["0000-1015", "1200-1545", "1845-2400"],
            friday : ["0800-2200"],
            saturday : ["0800-2200"],
            sunday : ["0800-2200"],
            requestedHours: 10,
            isCommuter: true
        }

        this.summer = {
            name: "summer",
            monday : ["0000-1300", "1430-1600", "1830-2400"],
            tuesday : ["0000-0845", "1015-1300", "1430-1615", "1830-2400"],
            wednesday : ["0000-1315", "1430-1630", "1900-2400"],
            thursday : ["0000-0845", "1015-1315", "1430-1630", "1830-2400"],
            friday : ["0000-1315", "1430-1600", "1700-2400"],
            saturday : ["0000-2400"],
            sunday : ["0000-2400"],
            requestedHours: 8,
            isCommuter: false
        }
        this.scooter = {
            name: "scooter",
            monday : ["0000-0845", "1200-1300", "1600-2400"],
            tuesday : ["0000-0845", "1145-1430", "1600-1630", "1745-2400"],
            wednesday : ["0000-0845", "1200-1300", "1430-2400"],
            thursday : ["0000-1015", "1145-1430", "1600-1630", "1800-2400" ],
            friday : ["0000-0845", "1200-1300", "1600-2400"],
            saturday : ["0000-2400"],
            sunday : ["0000-2400"],
            requestedHours: 15,
            isCommuter: false
        }
    }
}
module.exports = Data
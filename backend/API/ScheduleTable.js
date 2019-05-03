var express = require('express');
var ScheduleTable = require('../models/ScheduleTable');

var router = express.Router();

router.get('/', (tableKey, res) => {
  ScheduleTable.TableData(tableKey, (err, tableKey) => {
      if (err)
        return res.json(err);
      return res.json(tableKey);
    });
  
  });

router.post('/N', (req, res) => {
  var id = req.body.id;
  var schedule_id = req.body.schedule_id;
  var shiftperiod = req.body.shiftperiod;
  var monday = req.body.monday;
  var tuesday = req.body.tuesday;
  var wednesday = req.body.wednesday;
  var thursday = req.body.thursday;
  var friday = req.body.friday;
  attendance.newShift(id, schedule_id, shiftperiod, monday, tuesday, wednesday, thursday, friday, (err, result) => {
    if (err)
      return res.json(err);
    return res.json(result);
    });
  });

/*router.delete('/D', (res) => {
  ScheduleTable.clearTable((err) => {
        if (err)
          //return res.json(err);
        return console.log('delete');
      });
    
    });*/

module.exports = router ;
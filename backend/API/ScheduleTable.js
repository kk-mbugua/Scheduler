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

module.exports = router ;
const db = require('../database');

class ScheduleTable
{
  static TableData ( tableKey, callback ) {
    //const id = parseInt(tableKey)

    db.query('SELECT * FROM scheduledisplay WHERE schedule_id = 0', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);

      //callback.status(200).json(results.rows)
    })
  }

  
  static newShift( id, schedule_id, shiftperiod, monday, tuesday, wednesday, thursday, friday, callback )
  {
    const qstring = db.queryMaker( 'scheduledisplay' ).insert( { id, schedule_id, shiftperiod, monday, tuesday, wednesday, thursday, friday } ).toString()
    
    db.query( qstring, (err, res) =>  { 
      if (err.error)                        
        return callback(err);
      callback(res);
    })
  }
  
  static clearTable (callback) {
    db.query('DELETE FROM table_name', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

}

module.exports = ScheduleTable;
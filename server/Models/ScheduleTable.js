const db = require('../database');

class ScheduleTable
{
  /*static attendingIds( userKey, callback )
  {
    db.query( 'SELECT id FROM Events WHERE username = $1', [userkey],
              (err, res) => { if (err.error)
                                return callback(err);
                              callback(res);
                            } );
  }

  static retrieveAll (callback) {
    db.query('SELECT * from attendance', (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static retrieveAttending (event, callback) {
    db.query('SELECT * from attendance where event = $1 ', [event], (err, res) => {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }

  static insert( eventKey, userKey, transportation, notes, callback )
  {
    const qstring = db.queryMaker( 'Attendance' ).insert(
                    { eventKey, userKey, transportation, notes } ).toString()
    db.query( qstring,
              (err, res) => { if (err.error)
                                return callback(err);
                              callback(res);
                             } )
  }*/
  static TableData ( tableKey, callback ) {
    const id = parseInt(request.params.id)

    db.query('SELECT * FROM scheduledisplay WHERE schedule_id = 1', [id], (error, results) => {
      if (err.error)
        return callback(err);
      callback(res);

      //callback.status(200).json(results.rows)
    })
  }

}

module.exports = ScheduleTable;
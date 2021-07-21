const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const { Expo } = require("expo-server-sdk");
const expo = new Expo();


const app = express();
app.use(express.json({type:'application/json'}));
app.use(express.urlencoded({extended: true}));

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MTS',
});


app.get ('/data', function(req, res) {
    connection.getConnection(function (err, connection) {
        if(err) throw err;
        connection.query('SELECT * FROM `data` WHERE `test_name` = (SELECT `test_name` FROM `data` ORDER BY `id` DESC LIMIT 1)', function (error, results, fields) {
            if(error) throw error;
            res.send(results);
            res.end();
        });
    });
});

app.get('/names', (req, res) => {
    connection.getConnection(function (err, connection) {
        if(err) throw err;
        connection.query('SELECT DISTINCT(test_name) FROM data', function (error, results, fields) {
            if(error) throw error;
            res.send(results);
            res.status(400).end();
        });
    });
});

app.get('/finished', (req, res) => {
    let savedPushTokens = ['ExponentPushToken[5J9BkWMLVA_DTlFF2C71V0]'];
    const PORT_NUMBER = 3000;
      let notifications = [];
      for (let pushToken of savedPushTokens) {
        if (!Expo.isExpoPushToken(pushToken)) {
          console.error(`Push token ${pushToken} is not a valid Expo push token`);
          continue;
        }
    
        notifications.push({
          to: pushToken,
          sound: "default",
          title: 'Test Finished!',
          body: 'Check results in the app!',
          data: { withSome: 'data' }
        });
      }
    
      let chunks = expo.chunkPushNotifications(notifications);
    
      (async () => {
        for (let chunk of chunks) {
          try {
            let pushNot = await expo.sendPushNotificationsAsync(chunk);
            console.log(pushNot);
          } catch (error) {
            console.error(error);
          }
        }
      })();
});

app.get('/brokensample', (req, res) => {
    let savedPushTokens = ['ExponentPushToken[5J9BkWMLVA_DTlFF2C71V0]'];
    const PORT_NUMBER = 3000;
      let notifications = [];
      for (let pushToken of savedPushTokens) {
        if (!Expo.isExpoPushToken(pushToken)) {
          console.error(`Push token ${pushToken} is not a valid Expo push token`);
          continue;
        }
    
        notifications.push({
          to: pushToken,
          sound: "default",
          title: 'Broken Sample!',
          body: 'Check results in the app!',
          data: { withSome: 'data' }
        });
      }
    
      let chunks = expo.chunkPushNotifications(notifications);
    
      (async () => {
        for (let chunk of chunks) {
          try {
            let pushNot = await expo.sendPushNotificationsAsync(chunk);
            console.log(pushNot);
          } catch (error) {
            console.error(error);
          }
        }
      })();
});


app.delete('/delete/:testName', (req, res)=>{
    connection.getConnection( (err, connection) =>{
        connection.query('DELETE FROM data WHERE test_name = ?', [req.params.testName], (err, rows, fields) => {
            if (!err)
                res.send('Deleted successfully.');
            else
                console.log(err);
        });
    });
});

app.get('/data/:testName', (req, res)=>{
    connection.getConnection( (err, connection) =>{
        connection.query('SELECT * FROM data WHERE test_name = ?', [req.params.testName], (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        });
    });   
});


module.exports = app.listen(3000, () =>{
    console.log('data is on localhost 3000!')
});
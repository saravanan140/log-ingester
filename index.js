const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const logs = [];

app.post('/logs', (req, res) => {
  try {
    const log = req.body;
    if (!isValidLog(log)) {
      res.status(400).send('Invalid log format');
      return;
    }

    logs.push(log);
    console.log('Received log:', log);
    res.status(200).send('Log received successfully');
  } catch (error) {
    console.error('Error processing log:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/search', (req, res) => {
  try {
    const term = req.query.term.toLowerCase();
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    let results = logs.filter(log => JSON.stringify(log).toLowerCase().includes(term));

    if (startDate && endDate) {
      results = results.filter(log => log.timestamp >= startDate && log.timestamp <= endDate);
    }

    res.json(results);
  } catch (error) {
    console.error('Error searching logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

function isValidLog(log) {
  // Ensure log format validation logic remains the same
  return (
    log &&
    log.level &&
    log.message &&
    log.resourceId &&
    log.timestamp &&
    log.traceId &&
    log.spanId &&
    log.commit &&
    log.metadata &&
    log.metadata.parentResourceId
  );
}

app.listen(port, () => {
  console.log(`Log Ingestor is running on http://localhost:${port}`);
});

# Log Ingestor and Query Interface

This project provides a simple Log Ingestor system and a Query Interface for efficiently handling log data. The system allows users to ingest logs and query them based on various criteria.

## Table of Contents

- [Objective](#objective)
- [Requirements](#requirements)
- [Advanced Features (Bonus)](#advanced-features-bonus)
- [Sample Queries](#sample-queries)
- [Implementation](#implementation)
  - [Log Ingestor (Node.js)](#log-ingestor-nodejs)
  - [Query Interface (HTML/JS)](#query-interface-htmljs)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Objective

Develop a log ingestor system that can efficiently handle vast volumes of log data and offer a simple interface for querying this data using full-text search or specific field filters.

## Requirements

The requirements for the log ingestor and the query interface are specified below.

### Log Ingestor:

- Develop a mechanism to ingest logs in the provided format.
- Ensure scalability to handle high volumes of logs efficiently.
- Mitigate potential bottlenecks such as I/O operations, database write speeds, etc.
- Make sure that the logs are ingested via an HTTP server, which runs on port `3000` by default.

### Query Interface:

- Offer a user interface (Web UI or CLI) for full-text search across logs.
- Include filters based on:
  - level
  - message
  - resourceId
  - timestamp
  - traceId
  - spanId
  - commit
  - metadata.parentResourceId
- Aim for efficient and quick search results.

## Advanced Features (Bonus)

These features aren’t compulsory to implement; however, adding them might increase the chances of your submission being accepted.

- Implement search within specific date ranges.
- Utilize regular expressions for search.
- Allow combining multiple filters.
- Provide real-time log ingestion and searching capabilities.

## Sample Queries

The following are some sample queries that will be executed for validation.

- Find all logs with the level set to "error".
- Search for logs with the message containing the term "Failed to connect".
- Retrieve all logs related to resourceId "server-1234".
- Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z". (Bonus)


### Log Ingestor (Node.js)

The Log Ingestor is implemented using Node.js. See the [index.js](index.js) file for the server-side code.

### Query Interface (HTML/JS)

The Query Interface is implemented using HTML and JavaScript. See the [public/index.html](public/index.html) file for the client-side code.


## Usage

### Clone the repository:

  - git clone https://github.com/saravanan140/log-ingester.git

#### Install dependencies:
  - cd log-ingester
  - npm install

#### Run the Log Ingestor:
  - node index.js


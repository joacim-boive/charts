import React, {Component} from 'react';
import * as LineChart from 'britecharts/dist/umd/line.min'
import * as BrushChart from 'britecharts/dist/umd/brush.min'

import * as d3TimeFormat from 'd3-time-format'
import * as d3Selection from 'd3-selection'
import * as Tooltip from 'britecharts/src/charts/tooltip'

import 'britecharts/dist/css/britecharts.css'

const data = {
  "dataByTopic": [
    {
      "topic": 103,
      "dates": [
        {
          "date": "27-Jun-15",
          "value": 1,
          "fullDate": "2015-06-27T07:00:00.000Z"
        },
        {
          "date": "28-Jun-15",
          "value": 1,
          "fullDate": "2015-06-28T07:00:00.000Z"
        },
        {
          "date": "29-Jun-15",
          "value": 4,
          "fullDate": "2015-06-29T07:00:00.000Z"
        },
        {
          "date": "30-Jun-15",
          "value": 2,
          "fullDate": "2015-06-30T07:00:00.000Z"
        },
        {
          "date": "1-Jul-15",
          "value": 3,
          "fullDate": "2015-07-01T07:00:00.000Z"
        },
        {
          "date": "2-Jul-15",
          "value": 3,
          "fullDate": "2015-07-02T07:00:00.000Z"
        },
        {
          "date": "3-Jul-15",
          "value": 0,
          "fullDate": "2015-07-03T07:00:00.000Z"
        },
        {
          "date": "4-Jul-15",
          "value": 3,
          "fullDate": "2015-07-04T07:00:00.000Z"
        },
        {
          "date": "5-Jul-15",
          "value": 1,
          "fullDate": "2015-07-05T07:00:00.000Z"
        },
        {
          "date": "6-Jul-15",
          "value": 2,
          "fullDate": "2015-07-06T07:00:00.000Z"
        },
        {
          "date": "7-Jul-15",
          "value": 0,
          "fullDate": "2015-07-07T07:00:00.000Z"
        },
        {
          "date": "8-Jul-15",
          "value": 2,
          "fullDate": "2015-07-08T07:00:00.000Z"
        },
        {
          "date": "9-Jul-15",
          "value": 1,
          "fullDate": "2015-07-09T07:00:00.000Z"
        },
        {
          "date": "10-Jul-15",
          "value": 4,
          "fullDate": "2015-07-10T07:00:00.000Z"
        },
        {
          "date": "11-Jul-15",
          "value": 2,
          "fullDate": "2015-07-11T07:00:00.000Z"
        },
        {
          "date": "12-Jul-15",
          "value": 1,
          "fullDate": "2015-07-12T07:00:00.000Z"
        },
        {
          "date": "13-Jul-15",
          "value": 6,
          "fullDate": "2015-07-13T07:00:00.000Z"
        },
        {
          "date": "14-Jul-15",
          "value": 5,
          "fullDate": "2015-07-14T07:00:00.000Z"
        },
        {
          "date": "15-Jul-15",
          "value": 2,
          "fullDate": "2015-07-15T07:00:00.000Z"
        },
        {
          "date": "16-Jul-15",
          "value": 7,
          "fullDate": "2015-07-16T07:00:00.000Z"
        },
        {
          "date": "17-Jul-15",
          "value": 3,
          "fullDate": "2015-07-17T07:00:00.000Z"
        },
        {
          "date": "18-Jul-15",
          "value": 1,
          "fullDate": "2015-07-18T07:00:00.000Z"
        },
        {
          "date": "19-Jul-15",
          "value": 4,
          "fullDate": "2015-07-19T07:00:00.000Z"
        },
        {
          "date": "20-Jul-15",
          "value": 8,
          "fullDate": "2015-07-20T07:00:00.000Z"
        },
        {
          "date": "21-Jul-15",
          "value": 4,
          "fullDate": "2015-07-21T07:00:00.000Z"
        },
        {
          "date": "22-Jul-15",
          "value": 11,
          "fullDate": "2015-07-22T07:00:00.000Z"
        },
        {
          "date": "23-Jul-15",
          "value": 7,
          "fullDate": "2015-07-23T07:00:00.000Z"
        },
        {
          "date": "24-Jul-15",
          "value": 5,
          "fullDate": "2015-07-24T07:00:00.000Z"
        },
        {
          "date": "25-Jul-15",
          "value": 5,
          "fullDate": "2015-07-25T07:00:00.000Z"
        },
        {
          "date": "26-Jul-15",
          "value": 6,
          "fullDate": "2015-07-26T07:00:00.000Z"
        },
        {
          "date": "27-Jul-15",
          "value": 16,
          "fullDate": "2015-07-27T07:00:00.000Z"
        },
        {
          "date": "28-Jul-15",
          "value": 17,
          "fullDate": "2015-07-28T07:00:00.000Z"
        },
        {
          "date": "29-Jul-15",
          "value": 15,
          "fullDate": "2015-07-29T07:00:00.000Z"
        },
        {
          "date": "30-Jul-15",
          "value": 12,
          "fullDate": "2015-07-30T07:00:00.000Z"
        },
        {
          "date": "31-Jul-15",
          "value": 0,
          "fullDate": "2015-07-31T07:00:00.000Z"
        },
        {
          "date": "1-Aug-15",
          "value": 0,
          "fullDate": "2015-08-01T07:00:00.000Z"
        },
        {
          "date": "2-Aug-15",
          "value": 0,
          "fullDate": "2015-08-02T07:00:00.000Z"
        }
      ],
      "topicName": "San Francisco"
    },
    {
      "topic": 149,
      "dates": [
        {
          "date": "27-Jun-15",
          "value": 0,
          "fullDate": "2015-06-27T07:00:00.000Z"
        },
        {
          "date": "28-Jun-15",
          "value": 2,
          "fullDate": "2015-06-28T07:00:00.000Z"
        },
        {
          "date": "29-Jun-15",
          "value": 4,
          "fullDate": "2015-06-29T07:00:00.000Z"
        },
        {
          "date": "30-Jun-15",
          "value": 3,
          "fullDate": "2015-06-30T07:00:00.000Z"
        },
        {
          "date": "1-Jul-15",
          "value": 1,
          "fullDate": "2015-07-01T07:00:00.000Z"
        },
        {
          "date": "2-Jul-15",
          "value": 3,
          "fullDate": "2015-07-02T07:00:00.000Z"
        },
        {
          "date": "3-Jul-15",
          "value": 3,
          "fullDate": "2015-07-03T07:00:00.000Z"
        },
        {
          "date": "4-Jul-15",
          "value": 1,
          "fullDate": "2015-07-04T07:00:00.000Z"
        },
        {
          "date": "5-Jul-15",
          "value": 2,
          "fullDate": "2015-07-05T07:00:00.000Z"
        },
        {
          "date": "6-Jul-15",
          "value": 2,
          "fullDate": "2015-07-06T07:00:00.000Z"
        },
        {
          "date": "7-Jul-15",
          "value": 4,
          "fullDate": "2015-07-07T07:00:00.000Z"
        },
        {
          "date": "8-Jul-15",
          "value": 7,
          "fullDate": "2015-07-08T07:00:00.000Z"
        },
        {
          "date": "9-Jul-15",
          "value": 1,
          "fullDate": "2015-07-09T07:00:00.000Z"
        },
        {
          "date": "10-Jul-15",
          "value": 5,
          "fullDate": "2015-07-10T07:00:00.000Z"
        },
        {
          "date": "11-Jul-15",
          "value": 9,
          "fullDate": "2015-07-11T07:00:00.000Z"
        },
        {
          "date": "12-Jul-15",
          "value": 5,
          "fullDate": "2015-07-12T07:00:00.000Z"
        },
        {
          "date": "13-Jul-15",
          "value": 2,
          "fullDate": "2015-07-13T07:00:00.000Z"
        },
        {
          "date": "14-Jul-15",
          "value": 8,
          "fullDate": "2015-07-14T07:00:00.000Z"
        },
        {
          "date": "15-Jul-15",
          "value": 3,
          "fullDate": "2015-07-15T07:00:00.000Z"
        },
        {
          "date": "16-Jul-15",
          "value": 1,
          "fullDate": "2015-07-16T07:00:00.000Z"
        },
        {
          "date": "17-Jul-15",
          "value": 2,
          "fullDate": "2015-07-17T07:00:00.000Z"
        },
        {
          "date": "18-Jul-15",
          "value": 7,
          "fullDate": "2015-07-18T07:00:00.000Z"
        },
        {
          "date": "19-Jul-15",
          "value": 1,
          "fullDate": "2015-07-19T07:00:00.000Z"
        },
        {
          "date": "20-Jul-15",
          "value": 5,
          "fullDate": "2015-07-20T07:00:00.000Z"
        },
        {
          "date": "21-Jul-15",
          "value": 0,
          "fullDate": "2015-07-21T07:00:00.000Z"
        },
        {
          "date": "22-Jul-15",
          "value": 2,
          "fullDate": "2015-07-22T07:00:00.000Z"
        },
        {
          "date": "23-Jul-15",
          "value": 5,
          "fullDate": "2015-07-23T07:00:00.000Z"
        },
        {
          "date": "24-Jul-15",
          "value": 2,
          "fullDate": "2015-07-24T07:00:00.000Z"
        },
        {
          "date": "25-Jul-15",
          "value": 2,
          "fullDate": "2015-07-25T07:00:00.000Z"
        },
        {
          "date": "26-Jul-15",
          "value": 3,
          "fullDate": "2015-07-26T07:00:00.000Z"
        },
        {
          "date": "27-Jul-15",
          "value": 8,
          "fullDate": "2015-07-27T07:00:00.000Z"
        },
        {
          "date": "28-Jul-15",
          "value": 11,
          "fullDate": "2015-07-28T07:00:00.000Z"
        },
        {
          "date": "29-Jul-15",
          "value": 17,
          "fullDate": "2015-07-29T07:00:00.000Z"
        },
        {
          "date": "30-Jul-15",
          "value": 14,
          "fullDate": "2015-07-30T07:00:00.000Z"
        },
        {
          "date": "31-Jul-15",
          "value": 0,
          "fullDate": "2015-07-31T07:00:00.000Z"
        },
        {
          "date": "1-Aug-15",
          "value": 0,
          "fullDate": "2015-08-01T07:00:00.000Z"
        },
        {
          "date": "2-Aug-15",
          "value": 0,
          "fullDate": "2015-08-02T07:00:00.000Z"
        }
      ],
      "topicName": "Unknown Location with a super hyper mega very very very long name."
    },
    {
      "topic": 60,
      "dates": [
        {
          "date": "27-Jun-15",
          "value": 0,
          "fullDate": "2015-06-27T07:00:00.000Z"
        },
        {
          "date": "28-Jun-15",
          "value": 0,
          "fullDate": "2015-06-28T07:00:00.000Z"
        },
        {
          "date": "29-Jun-15",
          "value": 18,
          "fullDate": "2015-06-29T07:00:00.000Z"
        },
        {
          "date": "30-Jun-15",
          "value": 1,
          "fullDate": "2015-06-30T07:00:00.000Z"
        },
        {
          "date": "1-Jul-15",
          "value": 6,
          "fullDate": "2015-07-01T07:00:00.000Z"
        },
        {
          "date": "2-Jul-15",
          "value": 0,
          "fullDate": "2015-07-02T07:00:00.000Z"
        },
        {
          "date": "3-Jul-15",
          "value": 0,
          "fullDate": "2015-07-03T07:00:00.000Z"
        },
        {
          "date": "4-Jul-15",
          "value": 0,
          "fullDate": "2015-07-04T07:00:00.000Z"
        },
        {
          "date": "5-Jul-15",
          "value": 0,
          "fullDate": "2015-07-05T07:00:00.000Z"
        },
        {
          "date": "6-Jul-15",
          "value": 0,
          "fullDate": "2015-07-06T07:00:00.000Z"
        },
        {
          "date": "7-Jul-15",
          "value": 15,
          "fullDate": "2015-07-07T07:00:00.000Z"
        },
        {
          "date": "8-Jul-15",
          "value": 32,
          "fullDate": "2015-07-08T07:00:00.000Z"
        },
        {
          "date": "9-Jul-15",
          "value": 0,
          "fullDate": "2015-07-09T07:00:00.000Z"
        },
        {
          "date": "10-Jul-15",
          "value": 0,
          "fullDate": "2015-07-10T07:00:00.000Z"
        },
        {
          "date": "11-Jul-15",
          "value": 0,
          "fullDate": "2015-07-11T07:00:00.000Z"
        },
        {
          "date": "12-Jul-15",
          "value": 0,
          "fullDate": "2015-07-12T07:00:00.000Z"
        },
        {
          "date": "13-Jul-15",
          "value": 3,
          "fullDate": "2015-07-13T07:00:00.000Z"
        },
        {
          "date": "14-Jul-15",
          "value": 0,
          "fullDate": "2015-07-14T07:00:00.000Z"
        },
        {
          "date": "15-Jul-15",
          "value": 0,
          "fullDate": "2015-07-15T07:00:00.000Z"
        },
        {
          "date": "16-Jul-15",
          "value": 15,
          "fullDate": "2015-07-16T07:00:00.000Z"
        },
        {
          "date": "17-Jul-15",
          "value": 0,
          "fullDate": "2015-07-17T07:00:00.000Z"
        },
        {
          "date": "18-Jul-15",
          "value": 0,
          "fullDate": "2015-07-18T07:00:00.000Z"
        },
        {
          "date": "19-Jul-15",
          "value": 0,
          "fullDate": "2015-07-19T07:00:00.000Z"
        },
        {
          "date": "20-Jul-15",
          "value": 0,
          "fullDate": "2015-07-20T07:00:00.000Z"
        },
        {
          "date": "21-Jul-15",
          "value": 0,
          "fullDate": "2015-07-21T07:00:00.000Z"
        },
        {
          "date": "22-Jul-15",
          "value": 5,
          "fullDate": "2015-07-22T07:00:00.000Z"
        },
        {
          "date": "23-Jul-15",
          "value": 0,
          "fullDate": "2015-07-23T07:00:00.000Z"
        },
        {
          "date": "24-Jul-15",
          "value": 1,
          "fullDate": "2015-07-24T07:00:00.000Z"
        },
        {
          "date": "25-Jul-15",
          "value": 0,
          "fullDate": "2015-07-25T07:00:00.000Z"
        },
        {
          "date": "26-Jul-15",
          "value": 1,
          "fullDate": "2015-07-26T07:00:00.000Z"
        },
        {
          "date": "27-Jul-15",
          "value": 0,
          "fullDate": "2015-07-27T07:00:00.000Z"
        },
        {
          "date": "28-Jul-15",
          "value": 0,
          "fullDate": "2015-07-28T07:00:00.000Z"
        },
        {
          "date": "29-Jul-15",
          "value": 3,
          "fullDate": "2015-07-29T07:00:00.000Z"
        },
        {
          "date": "30-Jul-15",
          "value": 2,
          "fullDate": "2015-07-30T07:00:00.000Z"
        },
        {
          "date": "31-Jul-15",
          "value": 0,
          "fullDate": "2015-07-31T07:00:00.000Z"
        },
        {
          "date": "1-Aug-15",
          "value": 0,
          "fullDate": "2015-08-01T07:00:00.000Z"
        },
        {
          "date": "2-Aug-15",
          "value": 0,
          "fullDate": "2015-08-02T07:00:00.000Z"
        }
      ],
      "topicName": "Los Angeles"
    },
    {
      "topic": 81,
      "dates": [
        {
          "date": "27-Jun-15",
          "value": 0,
          "fullDate": "2015-06-27T07:00:00.000Z"
        },
        {
          "date": "28-Jun-15",
          "value": 0,
          "fullDate": "2015-06-28T07:00:00.000Z"
        },
        {
          "date": "29-Jun-15",
          "value": 1,
          "fullDate": "2015-06-29T07:00:00.000Z"
        },
        {
          "date": "30-Jun-15",
          "value": 0,
          "fullDate": "2015-06-30T07:00:00.000Z"
        },
        {
          "date": "1-Jul-15",
          "value": 0,
          "fullDate": "2015-07-01T07:00:00.000Z"
        },
        {
          "date": "2-Jul-15",
          "value": 0,
          "fullDate": "2015-07-02T07:00:00.000Z"
        },
        {
          "date": "3-Jul-15",
          "value": 0,
          "fullDate": "2015-07-03T07:00:00.000Z"
        },
        {
          "date": "4-Jul-15",
          "value": 0,
          "fullDate": "2015-07-04T07:00:00.000Z"
        },
        {
          "date": "5-Jul-15",
          "value": 0,
          "fullDate": "2015-07-05T07:00:00.000Z"
        },
        {
          "date": "6-Jul-15",
          "value": 0,
          "fullDate": "2015-07-06T07:00:00.000Z"
        },
        {
          "date": "7-Jul-15",
          "value": 0,
          "fullDate": "2015-07-07T07:00:00.000Z"
        },
        {
          "date": "8-Jul-15",
          "value": 0,
          "fullDate": "2015-07-08T07:00:00.000Z"
        },
        {
          "date": "9-Jul-15",
          "value": 1,
          "fullDate": "2015-07-09T07:00:00.000Z"
        },
        {
          "date": "10-Jul-15",
          "value": 0,
          "fullDate": "2015-07-10T07:00:00.000Z"
        },
        {
          "date": "11-Jul-15",
          "value": 1,
          "fullDate": "2015-07-11T07:00:00.000Z"
        },
        {
          "date": "12-Jul-15",
          "value": 1,
          "fullDate": "2015-07-12T07:00:00.000Z"
        },
        {
          "date": "13-Jul-15",
          "value": 0,
          "fullDate": "2015-07-13T07:00:00.000Z"
        },
        {
          "date": "14-Jul-15",
          "value": 2,
          "fullDate": "2015-07-14T07:00:00.000Z"
        },
        {
          "date": "15-Jul-15",
          "value": 3,
          "fullDate": "2015-07-15T07:00:00.000Z"
        },
        {
          "date": "16-Jul-15",
          "value": 0,
          "fullDate": "2015-07-16T07:00:00.000Z"
        },
        {
          "date": "17-Jul-15",
          "value": 0,
          "fullDate": "2015-07-17T07:00:00.000Z"
        },
        {
          "date": "18-Jul-15",
          "value": 0,
          "fullDate": "2015-07-18T07:00:00.000Z"
        },
        {
          "date": "19-Jul-15",
          "value": 2,
          "fullDate": "2015-07-19T07:00:00.000Z"
        },
        {
          "date": "20-Jul-15",
          "value": 7,
          "fullDate": "2015-07-20T07:00:00.000Z"
        },
        {
          "date": "21-Jul-15",
          "value": 0,
          "fullDate": "2015-07-21T07:00:00.000Z"
        },
        {
          "date": "22-Jul-15",
          "value": 1,
          "fullDate": "2015-07-22T07:00:00.000Z"
        },
        {
          "date": "23-Jul-15",
          "value": 2,
          "fullDate": "2015-07-23T07:00:00.000Z"
        },
        {
          "date": "24-Jul-15",
          "value": 0,
          "fullDate": "2015-07-24T07:00:00.000Z"
        },
        {
          "date": "25-Jul-15",
          "value": 0,
          "fullDate": "2015-07-25T07:00:00.000Z"
        },
        {
          "date": "26-Jul-15",
          "value": 0,
          "fullDate": "2015-07-26T07:00:00.000Z"
        },
        {
          "date": "27-Jul-15",
          "value": 1,
          "fullDate": "2015-07-27T07:00:00.000Z"
        },
        {
          "date": "28-Jul-15",
          "value": 2,
          "fullDate": "2015-07-28T07:00:00.000Z"
        },
        {
          "date": "29-Jul-15",
          "value": 2,
          "fullDate": "2015-07-29T07:00:00.000Z"
        },
        {
          "date": "30-Jul-15",
          "value": 6,
          "fullDate": "2015-07-30T07:00:00.000Z"
        },
        {
          "date": "31-Jul-15",
          "value": 0,
          "fullDate": "2015-07-31T07:00:00.000Z"
        },
        {
          "date": "1-Aug-15",
          "value": 0,
          "fullDate": "2015-08-01T07:00:00.000Z"
        },
        {
          "date": "2-Aug-15",
          "value": 0,
          "fullDate": "2015-08-02T07:00:00.000Z"
        }
      ],
      "topicName": "Oakland"
    },
    {
      "topic": 0,
      "topicName": "Other",
      "dates": [
        {
          "date": "27-Jun-15",
          "value": 3,
          "fullDate": "2015-06-27T07:00:00.000Z"
        },
        {
          "date": "28-Jun-15",
          "value": 9,
          "fullDate": "2015-06-28T07:00:00.000Z"
        },
        {
          "date": "29-Jun-15",
          "value": 6,
          "fullDate": "2015-06-29T07:00:00.000Z"
        },
        {
          "date": "30-Jun-15",
          "value": 11,
          "fullDate": "2015-06-30T07:00:00.000Z"
        },
        {
          "date": "1-Jul-15",
          "value": 7,
          "fullDate": "2015-07-01T07:00:00.000Z"
        },
        {
          "date": "2-Jul-15",
          "value": 10,
          "fullDate": "2015-07-02T07:00:00.000Z"
        },
        {
          "date": "3-Jul-15",
          "value": 5,
          "fullDate": "2015-07-03T07:00:00.000Z"
        },
        {
          "date": "4-Jul-15",
          "value": 10,
          "fullDate": "2015-07-04T07:00:00.000Z"
        },
        {
          "date": "5-Jul-15",
          "value": 8,
          "fullDate": "2015-07-05T07:00:00.000Z"
        },
        {
          "date": "6-Jul-15",
          "value": 10,
          "fullDate": "2015-07-06T07:00:00.000Z"
        },
        {
          "date": "7-Jul-15",
          "value": 6,
          "fullDate": "2015-07-07T07:00:00.000Z"
        },
        {
          "date": "8-Jul-15",
          "value": 14,
          "fullDate": "2015-07-08T07:00:00.000Z"
        },
        {
          "date": "9-Jul-15",
          "value": 12,
          "fullDate": "2015-07-09T07:00:00.000Z"
        },
        {
          "date": "10-Jul-15",
          "value": 17,
          "fullDate": "2015-07-10T07:00:00.000Z"
        },
        {
          "date": "11-Jul-15",
          "value": 9,
          "fullDate": "2015-07-11T07:00:00.000Z"
        },
        {
          "date": "12-Jul-15",
          "value": 9,
          "fullDate": "2015-07-12T07:00:00.000Z"
        },
        {
          "date": "13-Jul-15",
          "value": 9,
          "fullDate": "2015-07-13T07:00:00.000Z"
        },
        {
          "date": "14-Jul-15",
          "value": 11,
          "fullDate": "2015-07-14T07:00:00.000Z"
        },
        {
          "date": "15-Jul-15",
          "value": 16,
          "fullDate": "2015-07-15T07:00:00.000Z"
        },
        {
          "date": "16-Jul-15",
          "value": 6,
          "fullDate": "2015-07-16T07:00:00.000Z"
        },
        {
          "date": "17-Jul-15",
          "value": 7,
          "fullDate": "2015-07-17T07:00:00.000Z"
        },
        {
          "date": "18-Jul-15",
          "value": 8,
          "fullDate": "2015-07-18T07:00:00.000Z"
        },
        {
          "date": "19-Jul-15",
          "value": 4,
          "fullDate": "2015-07-19T07:00:00.000Z"
        },
        {
          "date": "20-Jul-15",
          "value": 9,
          "fullDate": "2015-07-20T07:00:00.000Z"
        },
        {
          "date": "21-Jul-15",
          "value": 5,
          "fullDate": "2015-07-21T07:00:00.000Z"
        },
        {
          "date": "22-Jul-15",
          "value": 7,
          "fullDate": "2015-07-22T07:00:00.000Z"
        },
        {
          "date": "23-Jul-15",
          "value": 7,
          "fullDate": "2015-07-23T07:00:00.000Z"
        },
        {
          "date": "24-Jul-15",
          "value": 10,
          "fullDate": "2015-07-24T07:00:00.000Z"
        },
        {
          "date": "25-Jul-15",
          "value": 8,
          "fullDate": "2015-07-25T07:00:00.000Z"
        },
        {
          "date": "26-Jul-15",
          "value": 13,
          "fullDate": "2015-07-26T07:00:00.000Z"
        },
        {
          "date": "27-Jul-15",
          "value": 18,
          "fullDate": "2015-07-27T07:00:00.000Z"
        },
        {
          "date": "28-Jul-15",
          "value": 14,
          "fullDate": "2015-07-28T07:00:00.000Z"
        },
        {
          "date": "29-Jul-15",
          "value": 30,
          "fullDate": "2015-07-29T07:00:00.000Z"
        },
        {
          "date": "30-Jul-15",
          "value": 33,
          "fullDate": "2015-07-30T07:00:00.000Z"
        },
        {
          "date": "31-Jul-15",
          "value": 0,
          "fullDate": "2015-07-31T07:00:00.000Z"
        },
        {
          "date": "1-Aug-15",
          "value": 0,
          "fullDate": "2015-08-01T07:00:00.000Z"
        },
        {
          "date": "2-Aug-15",
          "value": 0,
          "fullDate": "2015-08-02T07:00:00.000Z"
        }
      ]
    }
  ],
  "dataByDate": [
    {
      "date": "2015-06-27T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 1,
          "topicName": "San Francisco"
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 149,
          "value": 0,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 3,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-06-28T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 1,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 9,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-06-29T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 18,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 1,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 4,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 4,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 6,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-06-30T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 1,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 2,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 3,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 11,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-01T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 6,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 3,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 1,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 7,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-02T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 3,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 3,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 10,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-03T07:00:00.000Z",
      "topics": [
        {
          "name": 149,
          "value": 3,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 0,
          "topicName": "San Francisco"
        },
        {
          "name": 0,
          "value": 5,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-04T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 3,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 1,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 10,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-05T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 1,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 8,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-06T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 2,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 10,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-07T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 15,
          "topicName": "Los Angeles"
        },
        {
          "name": 149,
          "value": 4,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 0,
          "topicName": "San Francisco"
        },
        {
          "name": 0,
          "value": 6,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-08T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 32,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 2,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 7,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 14,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-09T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 1,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 1,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 1,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 12,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-10T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 4,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 5,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 17,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-11T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 1,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 2,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 9,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 9,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-12T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 1,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 1,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 5,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 9,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-13T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 3,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 6,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 9,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-14T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 2,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 5,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 8,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 11,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-15T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 3,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 2,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 3,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 16,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-16T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 15,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 7,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 1,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 6,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-17T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 3,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 7,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-18T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 1,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 7,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 8,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-19T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 2,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 4,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 1,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 4,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-20T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 7,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 8,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 5,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 9,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-21T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 4,
          "topicName": "San Francisco"
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 149,
          "value": 0,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 5,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-22T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 5,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 1,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 11,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 7,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-23T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 2,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 7,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 5,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 7,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-24T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 1,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 5,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 10,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-25T07:00:00.000Z",
      "topics": [
        {
          "name": 103,
          "value": 5,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 2,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 8,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-26T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 1,
          "topicName": "Los Angeles"
        },
        {
          "name": 103,
          "value": 6,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 3,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 0,
          "value": 13,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-27T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 1,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 16,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 8,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 18,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-28T07:00:00.000Z",
      "topics": [
        {
          "name": 81,
          "value": 2,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 17,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 11,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 0,
          "value": 14,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-29T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 3,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 2,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 15,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 17,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 30,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-30T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 2,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 6,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 12,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 14,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 33,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-07-31T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 0,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 0,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 0,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-08-01T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 0,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 0,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 0,
          "topicName": "Other"
        }
      ]
    },
    {
      "date": "2015-08-02T07:00:00.000Z",
      "topics": [
        {
          "name": 60,
          "value": 0,
          "topicName": "Los Angeles"
        },
        {
          "name": 81,
          "value": 0,
          "topicName": "Oakland"
        },
        {
          "name": 103,
          "value": 0,
          "topicName": "San Francisco"
        },
        {
          "name": 149,
          "value": 0,
          "topicName": "Unknown Location with a super hyper mega very very very long name."
        },
        {
          "name": 0,
          "value": 0,
          "topicName": "Other"
        }
      ]
    }
  ]
};

/*
 * The Brush chart wants an input like this one
 * @example
 * [
 *     {
 *         value: 1,
 *         date: '2011-01-06T00:00:00Z'
 *     },
 *     {
 *         value: 2,
 *         date: '2011-01-07T00:00:00Z'
 *     }
 * ]
 */
const brushDataAdapter = (dataLine) => {
  return dataLine.dataByDate.map(function(d){
    d.value = d.topics.reduce(function(acc, topic) {
      return acc + topic.value;
    },0);

    return d;
  })
};

const isInRange = (d0, d1, d) => {
  return new Date(d.date) >= d0 && new Date(d.date) <= d1;
};

const filterData = (d0, d1) => {
   const thisData = JSON.parse(JSON.stringify(data));

  thisData.dataByDate = thisData.dataByDate.filter(isInRange.bind(null, d0, d1));

  thisData.dataByTopic = thisData.dataByTopic.map((topic) => {
    topic.dates = topic.dates.filter(isInRange.bind(null, d0, d1));

    return topic;
  });

  return thisData;
};

const createBrushChart = (optionalColorSchema) =>{
    const brushChart = new BrushChart();
      const brushMargin = {top:0, bottom: 40, left: 50, right: 30};
    const brushContainer = d3Selection.select('.js-chart-brush-container');
    const containerWidth = brushContainer.node() ? brushContainer.node().getBoundingClientRect().width : false;

    if (containerWidth) {
      brushChart
        .width(containerWidth)
        .height(100)
        .margin(brushMargin)
        .on('customBrushEnd', function(brushExtent) {
          const format = d3TimeFormat.timeFormat('%m/%d/%Y');

          d3Selection.select('.js-start-date').text(format(brushExtent[0]));
          d3Selection.select('.js-end-date').text(format(brushExtent[1]));
          d3Selection.select('.js-date-range').classed('is-hidden', false);

          // Filter
          d3Selection.selectAll('.js-chart-line-container .line-chart').remove();
          createLineChart(optionalColorSchema ? optionalColorSchema : null, filterData(brushExtent[0], brushExtent[1]));
        });

      brushContainer.datum(brushDataAdapter(data)).call(brushChart);
    }
  };

const createLineChart = (optionalColorSchema, optionalData) =>{
  const container = d3Selection.select('.js-chart-line-container');
  const lineChart = new LineChart();
  const lineMargin = {top: 60, bottom: 50, left: 50, right: 30};

  const chartTooltip = new Tooltip();
  const containerWidth = container.node() ? container.node().getBoundingClientRect().width : false;

  if (containerWidth) {
    // LineChart Setup and start
    lineChart
      .isAnimated(true)
      .aspectRatio(0.7)
      .grid('horizontal')
      .tooltipThreshold(100)
      .width(containerWidth)
      .margin(lineMargin)
      .dateLabel('fullDate')
      .on('customMouseOver', chartTooltip.show)
      .on('customMouseMove', chartTooltip.update)
      .on('customMouseOut', chartTooltip.hide);

    if (optionalColorSchema) {
        lineChart.colorSchema(optionalColorSchema);
    }

    if (optionalData) {
        container.datum(optionalData).call(lineChart);
    } else {
    container.datum(data).call(lineChart);
    }

    // Tooltip Setup and start
    chartTooltip
    // In order to change the date range on the tooltip title, uncomment this line
    // .dateFormat(chartTooltip.axisTimeCombinations.HOUR .title('Quantity Sold')
      .topicsOrder(data.dataByTopic.map(function (topic) {
        return topic.topic;
      }));

    // Note that if the viewport width is less than the tooltipThreshold value,
    // this container won't exist, and the tooltip won't show up
    const tooltipContainer = d3Selection.select('.js-chart-line-container .metadata-group .hover-marker');
    tooltipContainer.datum([]).call(chartTooltip);
  }
};

class App extends Component {
    componentDidMount = () => {
      createLineChart();
      createBrushChart();
    };


    render() {
        return (
            <div className="App">
                <div className="britechart js-chart-line-container"/>
                <div className="britechart js-chart-brush-container"/>
            </div>
        );
    }
}

export default App;

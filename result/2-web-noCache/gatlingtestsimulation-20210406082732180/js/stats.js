var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31746",
        "ok": "31746",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9959",
        "ok": "9959",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7138",
        "ok": "7138",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8445",
        "ok": "8445",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13676",
        "ok": "13676",
        "ko": "-"
    },
    "percentiles3": {
        "total": "24398",
        "ok": "24398",
        "ko": "-"
    },
    "percentiles4": {
        "total": "26810",
        "ok": "26810",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 14,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 367,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.121",
        "ok": "12.121",
        "ko": "-"
    }
},
contents: {
"req_search-request-33fea": {
        type: "REQUEST",
        name: "search request",
path: "search request",
pathFormatted: "req_search-request-33fea",
stats: {
    "name": "search request",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "175",
        "ok": "175",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "31746",
        "ok": "31746",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11384",
        "ok": "11384",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7901",
        "ok": "7901",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9584",
        "ok": "9584",
        "ko": "-"
    },
    "percentiles2": {
        "total": "16026",
        "ok": "16026",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25766",
        "ok": "25766",
        "ko": "-"
    },
    "percentiles4": {
        "total": "28511",
        "ok": "28511",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 190,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.061",
        "ok": "6.061",
        "ko": "-"
    }
}
    },"req_search-request--d0341": {
        type: "REQUEST",
        name: "search request Redirect 1",
path: "search request Redirect 1",
pathFormatted: "req_search-request--d0341",
stats: {
    "name": "search request Redirect 1",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "24199",
        "ok": "24199",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8534",
        "ok": "8534",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5950",
        "ok": "5950",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7048",
        "ok": "7048",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11525",
        "ok": "11525",
        "ko": "-"
    },
    "percentiles3": {
        "total": "21005",
        "ok": "21005",
        "ko": "-"
    },
    "percentiles4": {
        "total": "23694",
        "ok": "23694",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 177,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.061",
        "ok": "6.061",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

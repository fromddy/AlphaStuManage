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
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7699",
        "ok": "7699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3231",
        "ok": "3231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1977",
        "ok": "1977",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3200",
        "ok": "3200",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4809",
        "ok": "4809",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6406",
        "ok": "6406",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7109",
        "ok": "7109",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 60,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 320,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30.769",
        "ok": "30.769",
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
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6217",
        "ok": "6217",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2732",
        "ok": "2732",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1986",
        "ok": "1986",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2334",
        "ok": "2334",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4722",
        "ok": "4722",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5725",
        "ok": "5725",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6107",
        "ok": "6107",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 16,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 135,
    "percentage": 68
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.385",
        "ok": "15.385",
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
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7699",
        "ok": "7699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3730",
        "ok": "3730",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1837",
        "ok": "1837",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3600",
        "ok": "3600",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5095",
        "ok": "5095",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6899",
        "ok": "6899",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7599",
        "ok": "7599",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 185,
    "percentage": 93
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.385",
        "ok": "15.385",
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

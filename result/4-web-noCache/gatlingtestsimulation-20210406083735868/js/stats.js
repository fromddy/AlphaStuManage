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
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19273",
        "ok": "19273",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5022",
        "ok": "5022",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3539",
        "ok": "3539",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4316",
        "ok": "4316",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6841",
        "ok": "6841",
        "ko": "-"
    },
    "percentiles3": {
        "total": "12009",
        "ok": "12009",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15313",
        "ok": "15313",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 351,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "19.048",
        "ok": "19.048",
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
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19273",
        "ok": "19273",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5810",
        "ok": "5810",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4118",
        "ok": "4118",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5238",
        "ok": "5238",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8201",
        "ok": "8201",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14180",
        "ok": "14180",
        "ko": "-"
    },
    "percentiles4": {
        "total": "18078",
        "ok": "18078",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 12
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 175,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.524",
        "ok": "9.524",
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
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11687",
        "ok": "11687",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4235",
        "ok": "4235",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2619",
        "ok": "2619",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3685",
        "ok": "3685",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5720",
        "ok": "5720",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9022",
        "ok": "9022",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10689",
        "ok": "10689",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 12,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 176,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.524",
        "ok": "9.524",
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

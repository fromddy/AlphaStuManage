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
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15800",
        "ok": "15800",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5790",
        "ok": "5790",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3873",
        "ok": "3873",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5035",
        "ok": "5035",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6874",
        "ok": "6874",
        "ko": "-"
    },
    "percentiles3": {
        "total": "14195",
        "ok": "14195",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15289",
        "ok": "15289",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 392,
    "percentage": 98
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
        "total": "1020",
        "ok": "1020",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7959",
        "ok": "7959",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3820",
        "ok": "3820",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1884",
        "ok": "1884",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3925",
        "ok": "3925",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5269",
        "ok": "5269",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6869",
        "ok": "6869",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7059",
        "ok": "7059",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 194,
    "percentage": 97
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
        "total": "1102",
        "ok": "1102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "15800",
        "ok": "15800",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7759",
        "ok": "7759",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4323",
        "ok": "4323",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6250",
        "ok": "6250",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11999",
        "ok": "11999",
        "ko": "-"
    },
    "percentiles3": {
        "total": "15003",
        "ok": "15003",
        "ko": "-"
    },
    "percentiles4": {
        "total": "15398",
        "ok": "15398",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 198,
    "percentage": 99
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

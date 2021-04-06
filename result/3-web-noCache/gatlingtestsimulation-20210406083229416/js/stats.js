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
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22335",
        "ok": "22335",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6285",
        "ok": "6285",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4655",
        "ok": "4655",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5474",
        "ok": "5474",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8196",
        "ok": "8196",
        "ko": "-"
    },
    "percentiles3": {
        "total": "16404",
        "ok": "16404",
        "ko": "-"
    },
    "percentiles4": {
        "total": "20057",
        "ok": "20057",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 31,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 359,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
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
        "total": "107",
        "ok": "107",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22335",
        "ok": "22335",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7481",
        "ok": "7481",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5562",
        "ok": "5562",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6287",
        "ok": "6287",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10501",
        "ok": "10501",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18153",
        "ok": "18153",
        "ko": "-"
    },
    "percentiles4": {
        "total": "22004",
        "ok": "22004",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 179,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
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
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "16396",
        "ok": "16396",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5090",
        "ok": "5090",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3090",
        "ok": "3090",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4848",
        "ok": "4848",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6426",
        "ok": "6426",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10896",
        "ok": "10896",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13615",
        "ok": "13615",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 180,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
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

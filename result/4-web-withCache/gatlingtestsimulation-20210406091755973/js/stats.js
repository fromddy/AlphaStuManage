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
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6177",
        "ok": "6177",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2262",
        "ok": "2262",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1463",
        "ok": "1463",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2270",
        "ok": "2270",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3398",
        "ok": "3398",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4694",
        "ok": "4694",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5389",
        "ok": "5389",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 87,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 34,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 279,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
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
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4109",
        "ok": "4109",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1291",
        "ok": "1291",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "990",
        "ok": "990",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1044",
        "ok": "1044",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2233",
        "ok": "2233",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2922",
        "ok": "2922",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3913",
        "ok": "3913",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 83,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 27,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 90,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
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
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6177",
        "ok": "6177",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3234",
        "ok": "3234",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1188",
        "ok": "1188",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3292",
        "ok": "3292",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4105",
        "ok": "4105",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5002",
        "ok": "5002",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5785",
        "ok": "5785",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 189,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
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

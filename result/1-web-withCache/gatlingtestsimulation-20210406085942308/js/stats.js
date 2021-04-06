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
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "27602",
        "ok": "27602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11210",
        "ok": "11210",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4755",
        "ok": "4755",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10487",
        "ok": "10487",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13856",
        "ok": "13856",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20299",
        "ok": "20299",
        "ko": "-"
    },
    "percentiles4": {
        "total": "22787",
        "ok": "22787",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 396,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "14.286",
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
        "total": "3928",
        "ok": "3928",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "27602",
        "ok": "27602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11385",
        "ok": "11385",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4485",
        "ok": "4485",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10884",
        "ok": "10884",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12967",
        "ok": "12967",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19225",
        "ok": "19225",
        "ko": "-"
    },
    "percentiles4": {
        "total": "27308",
        "ok": "27308",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 200,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.143",
        "ok": "7.143",
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
        "total": "103",
        "ok": "103",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22785",
        "ok": "22785",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "11036",
        "ok": "11036",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5005",
        "ok": "5005",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9750",
        "ok": "9750",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14426",
        "ok": "14426",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20499",
        "ok": "20499",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21706",
        "ok": "21706",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 196,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.143",
        "ok": "7.143",
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

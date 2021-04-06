var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "398",
        "ok": "396",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "39377"
    },
    "maxResponseTime": {
        "total": "44425",
        "ok": "44425",
        "ko": "40229"
    },
    "meanResponseTime": {
        "total": "19575",
        "ok": "19473",
        "ko": "39803"
    },
    "standardDeviation": {
        "total": "11165",
        "ok": "11100",
        "ko": "426"
    },
    "percentiles1": {
        "total": "18508",
        "ok": "18359",
        "ko": "39803"
    },
    "percentiles2": {
        "total": "28363",
        "ok": "28256",
        "ko": "40016"
    },
    "percentiles3": {
        "total": "38383",
        "ok": "37966",
        "ko": "40186"
    },
    "percentiles4": {
        "total": "43728",
        "ok": "43729",
        "ko": "40220"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 380,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.468",
        "ok": "8.426",
        "ko": "0.043"
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
        "ok": "198",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "2587",
        "ok": "2587",
        "ko": "39377"
    },
    "maxResponseTime": {
        "total": "44425",
        "ok": "44425",
        "ko": "40229"
    },
    "meanResponseTime": {
        "total": "23635",
        "ok": "23472",
        "ko": "39803"
    },
    "standardDeviation": {
        "total": "11330",
        "ok": "11269",
        "ko": "426"
    },
    "percentiles1": {
        "total": "26452",
        "ok": "26377",
        "ko": "39803"
    },
    "percentiles2": {
        "total": "32372",
        "ok": "32269",
        "ko": "40016"
    },
    "percentiles3": {
        "total": "41150",
        "ok": "41190",
        "ko": "40186"
    },
    "percentiles4": {
        "total": "44074",
        "ok": "44074",
        "ko": "40220"
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
    "count": 198,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.255",
        "ok": "4.213",
        "ko": "0.043"
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
        "total": "198",
        "ok": "198",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "302",
        "ok": "302",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "42201",
        "ok": "42201",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15474",
        "ok": "15474",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9350",
        "ok": "9350",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13651",
        "ok": "13651",
        "ko": "-"
    },
    "percentiles2": {
        "total": "21901",
        "ok": "21901",
        "ko": "-"
    },
    "percentiles3": {
        "total": "33398",
        "ok": "33398",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36546",
        "ok": "36546",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 182,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.213",
        "ok": "4.213",
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

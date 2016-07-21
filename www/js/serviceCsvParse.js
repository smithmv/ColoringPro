var myModule = angular.module('CSVParserService', ['SqlSaveService']);
myModule.factory('csvparser', function ($http, sqlsave) {

    var csvparser = {};
    
    csvparser.doParse = function () {
        var dir = "js/lib/koren_sedina_100.js";
            
            var file = (ionic.Platform.isAndroid()) ? dir : cordova.file.applicationDirectory + "www/" + dir;

        Papa.parse(file, {
            encoding: "UTF-8",
            download: true,
            error: function(err, file) {
                console.log(">>>> PAPA PARSE ERROR");
                console.log(">>>>" + err); // this returns undefined
                console.log(">>>>" + file); // this returns undefined as well
            },
            complete: function(results) {
                sqlsave.createDatabase();
                console.log(">>>> PAPA RESULTS");
                console.log(results);
            },
            header: true,
            dynamicTyping: true
        });   

        return "";
    }
    return csvparser;
});

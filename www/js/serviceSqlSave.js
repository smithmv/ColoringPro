var myModule = angular.module('SqlSaveService', ['ngCordova']);
myModule.factory('sqlsave', function ($cordovaSQLite) {

    var sqlsave = {};
    
    sqlsave.saveData = function () {
         
    }

    sqlsave.createDatabase = function () {
        console.log(">>>> CREATING DATABASE");
        var db = null;
        if (ionic.Platform.isAndroid()) {
            // Works on android but not in iOS
            db = $cordovaSQLite.openDB({ name: "rules.db", iosDatabaseLocation: 'default' });
        } else {
            // Works on iOS 
            db = window.sqlitePlugin.openDatabase({ name: "rules.db", location: 2, createFromLocation: 1 });
        }
        var qKorenSedina100 = "CREATE table KORENSEDINA100 (id INTEGER PRIMARY KEY ASC AUTOINCREMENT, " +
            "stepNumber INTEGER DEFAULT 0, " +
            "isVK INTEGER DEFAULT 0, " +
            "isKNR INTEGER DEFAULT 0, " +
            "KNR TEXT DEFAULT NULL, " +
            "isOXI INTEGER DEFAULT 0, " +
            "OXIPercent TEXT DEFAULT NULL," +
            "timeMinutes INTEGER DEFAULT NULL, " +
            "isToning INTEGER DEFAULT 0" +
            "isPP INTEGER DEFAULT 0";

        var qKorenSedina100LinkTable = "CREATE table KORENSEDINA100LINK (id INTEGER PRIMARY KEY ASC AUTOINCREMENT, " +
            "startLevel INTEGER NOT NULL, " +
            "finishLevel INTEGER NOT NULL, " +
            "recId INTEGER DEFAULT NULL, " +
            "FOREIGN KEY(recId) REFERENCES KORENSEDINA100(id)";

        $cordovaSQLite.execute(db, qKorenSedina100).then(function (res) {
        });

        $cordovaSQLite.execute(db, qKorenSedina100LinkTable).then(function (res) {
        });

        console.log(">>>> CREATING DATABASE FINISHED");
    }

    return sqlsave;
});

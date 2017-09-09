google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
    var data_bb = google.visualization.arrayToDataTable([["City","Point"],["hokkaido",4],["aomori",1],["iwate",1],["miyagi",1],["akita",1],["yamagata",1],["fukushima",1],["ibaraki",6],["tochigi",1],["gunma",1],["saitama",2],["chiba",2],["tokyo",3],["kanagawa",2],["yamanashi",1],["niigata",1],["nagano",4],["shizuoka",3],["aichi",1],["gifu",1],["mie",2],["toyama",1],["ishikawa",2],["fukui",3],["shiga",3],["kyoto",4],["osaka",1],["hyogo",2],["nara",3],["wakayama",1],["okayama",4],["hiroshima",2],["tottori",4],["shimane",5],["yamaguchi",3],["kagawa",1],["tokushima",1],["ehime",4],["kochi",1],["fukuoka",5],["saga",6],["nagasaki",1],["kumamoto",1],["oita",1],["miyazaki",6],["kagoshima",1],["okinawa",4]]);
    var data_hc = google.visualization.arrayToDataTable([["City","Point"],["hokkaido",4],["aomori",1],["iwate",1],["miyagi",2],["akita",1],["yamagata",1],["fukushima",1],["ibaraki",7],["tochigi",1],["gunma",1],["saitama",2],["chiba",2],["tokyo",3],["kanagawa",2],["yamanashi",1],["niigata",1],["nagano",4],["shizuoka",3],["aichi",2],["gifu",1],["mie",2],["toyama",1],["ishikawa",2],["fukui",4],["shiga",4],["kyoto",5],["osaka",1],["hyogo",3],["nara",4],["wakayama",1],["okayama",6],["hiroshima",1],["tottori",5],["shimane",4],["yamaguchi",5],["kagawa",1],["tokushima",1],["ehime",4],["kochi",1],["fukuoka",6],["saga",4],["nagasaki",2],["kumamoto",1],["oita",1],["miyazaki",5],["kagoshima",2],["okinawa",4]]);
    var data_hm = google.visualization.arrayToDataTable([["City","Point"],["hokkaido",3],["aomori",1],["iwate",1],["miyagi",2],["akita",1],["yamagata",1],["fukushima",1],["ibaraki",5],["tochigi",1],["gunma",1],["saitama",2],["chiba",3],["tokyo",3],["kanagawa",2],["yamanashi",1],["niigata",1],["nagano",5],["shizuoka",3],["aichi",2],["gifu",1],["mie",2],["toyama",1],["ishikawa",2],["fukui",4],["shiga",1],["kyoto",4],["osaka",1],["hyogo",2],["nara",4],["wakayama",1],["okayama",5],["hiroshima",2],["tottori",4],["shimane",5],["yamaguchi",6],["kagawa",1],["tokushima",1],["ehime",3],["kochi",1],["fukuoka",5],["saga",5],["nagasaki",3],["kumamoto",1],["oita",1],["miyazaki",4],["kagoshima",1],["okinawa",4]]);
    
    var chart_width = 900;
    var chart_height = 600;

    var options = {
        region:'JP',
        resolution:'provinces',
        colorAxis: {colors: ['#ff0000', '#ffffff']},
        width: chart_width,
        height: chart_height
    };

    var chart_bb = new google.visualization.GeoChart(document.getElementById('chart_bb'));
    chart_bb.draw(data_bb, options);
    var chart_hc = new google.visualization.GeoChart(document.getElementById('chart_hc'));
    chart_hc.draw(data_hc, options);
    var chart_hm = new google.visualization.GeoChart(document.getElementById('chart_hm'));
    chart_hm.draw(data_hm, options);

    document.getElementById("chart_bb").style.display = "block";
    document.getElementById("chart_hc").style.display = "none";
    document.getElementById("chart_hm").style.display = "none";

    var obj = document.getElementById('magazine');
    obj.onchange = function() {
        document.getElementById("chart_bb").style.display = "none";
        document.getElementById("chart_hc").style.display = "none";
        document.getElementById("chart_hm").style.display = "none";
        var i = obj.selectedIndex;
        var v = obj.options[i].value;
        if (v == 1) {
            document.getElementById("chart_bb").style.display = "block";
        } else if (v == 2) {
            document.getElementById("chart_hc").style.display = "block";
        } else if (v == 3) {
            document.getElementById("chart_hm").style.display = "block";
        }
    }
};

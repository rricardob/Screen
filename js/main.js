$(document).ready(function () {
    loadData();
    $(".fixed-table-loading").css("display","none"),
    update();
    setInterval(update, 1000);
});

function update() {
    let date = null;
    //$("#clock").fitText(1.3);
    moment.locale("es");
    date = moment(new Date());
    $("#clock").html(date.format("dddd DD, MMMM YYYY hh:mm:ss A"));
}

function loadData(){
    let mydata = [
        {
            "fechahora": "05/02/2021 15:38",
            "arribo": "test0",
            "embarcacion": "Adolfito I",
            "servicios" : "atraco",
            "empresa": "TASA"
        },
        {
            "fechahora": "05/02/2021 15:38",
            "arribo": "test0",
            "embarcacion": "Adolfito II",
            "servicios" : "atraco",
            "empresa": "TASA"
        },
        {
            "fechahora": "05/02/2021 15:38",
            "arribo": "test0",
            "embarcacion": "Adolfito II",
            "servicios" : "atraco",
            "empresa": "TASA"
        },
        {
            "fechahora": "05/02/2021 15:38",
            "arribo": "test0",
            "embarcacion": "Adolfito II",
            "servicios" : "atraco",
            "empresa": "TASA"
        },
        {
            "fechahora": "05/02/2021 15:38",
            "arribo": "test0",
            "embarcacion": "Adolfito II",
            "servicios" : "atraco",
            "empresa": "TASA"
        }
        ];
        
    $('#table').bootstrapTable({
        data: mydata
    });
}
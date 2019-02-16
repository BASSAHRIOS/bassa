$(document).ready(function() {
     $('#listado-equipo-2').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        responsive: true,
        serverSide: false,
        "ajax":{
            url :"Equipo/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            { "data":"Id"},
            { "data":"Tag"},
            { "data":"tipoEquipo"},
            { "data":"Marca"},
            { "data":"Modelo"},
            { "data":"NumeroSerie"},
            { "data":"Voltaje"},
            { "data":"Capacidad"},
            { "data":"tipoRefrigerante"},
            { "data":"tipoCompresor"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Equipo/Editar/' + row.Id + '" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Equipo/Detalle/' + row.Id + '" rel="tooltip"><i class="fa fa-list fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Equipo/Eliminar/' + row.Id + '" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                return buttons;
               }
            }
        ]
    });

   $('#ClienteId').change(function () {
        obtieneCliente();
    });

   $('#ClienteId').change(function(){       
        LlenaComboSucByClienteId();
   });

   $('#SucursalId').change(function(){
        //obtieneSucursal();
   });

});

function obtieneCliente(){    
    //alert("hello world");
    var Cliente = $("#ClienteId").val(); 
    var str = Cliente;
    var res = str.split(",");
    var cuenta = 0; 
    //alert('Cadena: '+res[0]+','+res[1]);
    //alert ('Cliente:'+Cliente);
    $("#Tag").val(res[1]);
      //$("#caja").html("<h1>" + $(":text#texto").val().length + " Caracteres</h1>");
    cuenta  = res[1].length;
    //alert('Tiene:' +cuenta);
    asignaCeros(cuenta,res[1]);
}

function asignaCeros(cuenta,res){
    if (cuenta==3){
        $("#Tag").val("0"+res);
    }else if (cuenta ==2){
        $("#Tag").val("00"+res);
    }else if (cuenta ==1){
        $("#Tag").val("000"+res);
    }else{
        $("#Tag").val(res);
    }
}
//esta funcion se ejecuta en poliza/nuevo y equipo/nuevo
function LlenaComboSucByClienteId(){    
    var ClienteId= $("#ClienteId").val();
    var str = ClienteId;
    var res = str.split(",");

    if (res[0] > 0)
    {
        var dataString = {
            'ClienteId':res[0]
        };
        $('#SucursalId').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Sucursal/ByClienteId/",
        data: dataString,
        success: function(res){
            data = jQuery.parseJSON(res);
            $('#SucursalId').append("<option value=''>Seleccione...</option>");
            $.each(data, function (k, v) {
                $('#SucursalId').append("<option value='" + v.Id + "'>" + v.Nombre + "</option>");
            });
            hideSpinner();
            },error:
                        function (XmlHttpError, error, description) {
                            alert(XmlHttpError.responseText);
                            hideSpinner();
        },
        });
    }
}

function obtieneSucursal(){
     $("#Tag").val("");
    var SucursalId = $("#SucursalId").val();
    obtieneCliente(); 
    var Tag = $("#Tag").val();
    $("#Tag").val(Tag+SucursalId);
}

function getEquipoBySucursal(){    
    var SucursalId= $("#SucursalId").val();
    
    if (SucursalId > 0)
    {
        var dataString = {
            'SucursalId':SucursalId
        };
        $('#EquipoId').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Equipo/getEquipoBySucursal/",
        data: dataString,
        success: function(res){
            data = jQuery.parseJSON(res);
            $('#EquipoId').append("<option value=''>Seleccione...</option>");
            $.each(data, function (k, v) {
                $('#EquipoId').append("<option value='" + v.Id + "'>" + v.Tag + "</option>");
            });
            hideSpinner();
            },error:
                        function (XmlHttpError, error, description) {
                            alert(XmlHttpError.responseText);
                            hideSpinner();
        },
        });
    }
}

$(document).ready(function() {
     $('#listado-cliente').DataTable({
        destroy: true,
        deferRender:true,
        processing:true,
        responsive: true,
        serverSide: true,
        "ajax":{
            url :"Cliente/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            {"data":"Id"},
            { "data":"RazonSocial"},
            { "data":"NombreComercial"},
            { "data":"NumeroCliente"},
                       
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Cliente/Editar/' + row.Id + '" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Cliente/Detalle/' + row.Id + '" rel="tooltip"><i class="fa fa-list fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Cliente/Eliminar/' + row.Id + '" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                return buttons;
               }
            }

        ]
    });
$("#btnSaveCliente").click(function(){
     NuevoCliente();
    });
});

function NuevoCliente(){
    var flag = true;
    var ClienteId       = $("#ClienteId").val();
    var RazonSocial     = $("#RazonSocial").val();
    var NombreComercial = $("#NombreComercial").val();
    var NumeroCliente   = $("#NumeroCliente").val();
    var Rfc             = $("#Rfc").val();
    var Telefono        = $("#Telefono").val();

    if (RazonSocial==""){
        $("#msgRazonSocial").html("Campo obligatorio");
        flag=false;
    }
    if (NombreComercial==""){
        $("#msgNombreComercial").html("Campo obligatorio");
        flag=false;
    }

    if (NumeroCliente==""){
        $("#msgNumeroCliente").html("Campo obligatorio");
        flag=false;
    }
    
    if (Rfc==""){
        $("#msgrfc").html("Campo obligatorio");
        flag=false;
    }

    if (flag==true){
        showSpinner();
        var dataString={
            'ClienteId':ClienteId,
            'RazonSocial':RazonSocial,
            'NombreComercial':NombreComercial,
            'NumeroCliente':NumeroCliente,  
            'Rfc':Rfc,
            'Telefono':Telefono  
        };
        $.ajax({
            type: "POST",
            url: "Cliente/NuevoJson/",
            data: dataString,
            success: function(res){
                $("#ClienteId").val(res);
                $("#msgRazonSocial").html("");
                $("#msgNombreComercial").html("");
                $("#msgNumeroCliente").html("");
                $("#msgrfc").html("");
                $("#msgMensajeGuardado").html("Cliente registrado "+res);
                hideSpinner();             
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
    }
}
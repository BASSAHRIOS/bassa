$(document).ready(function() {
     $('#listado-contacto').DataTable({
        destroy: true,
        deferRender:true,
        processing:true,
        responsive: true,
        serverSide: true,
        "ajax":{
            url :"Contacto/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            { "data":"Id"},
            { "data":"Nombre"},
            { "data":"Direccion"},
            { "data":"Estado"},
            { "data":"Pais"},
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
    $("#btnSaveContacto").click(function(){
     NuevoContacto();
    });
    $("#btn-mostrar-contactos").click(function(){
        ListaContactoByClienteId();
    });
});

function NuevoContacto(){
    $("#msgMensajeGuardadoContacto").html("");
    var flag = true;
    var ContactoId = $("#ContactoId").val();
    var SucursalId = $("#SucursalId").val();
    var PrimerNombre= $("#PrimerNombre").val();
    var SegundoNombre=$("#SegundoNombre").val();
    var ApellidoPaterno=$("#ApellidoMaterno").val();
    var ApellidoMaterno=$("#ApellidoPaterno").val();
    var ClienteId   = $("#ClienteId").val();
    var TelefonoOficina    = $("#TelefonoOficina").val();
    var Email       = $("#Email").val();
    var Email2      = $("#Email2").val();
    
    if (SucursalId=="" || SucursalId==null || SucursalId=="0"){
        $("#msgSucursalId").html("Campo obligatorio");
        flag=false;
    }
    if (PrimerNombre==""){
        $("#msgPrimerNombre").html("Campo obligatorio");
        flag=false;
    }
    if (ApellidoPaterno==""){
        $("#msgApellidoPaterno").html("Campo obligatorio");
        flag=false;
    }
    if (TelefonoOficina==""){
        $("#msgTelefono").html("Campo obligatorio");
        flag=false;
    }
    if (Email==""){
        $("#msgEmail").html("Campo obligatorio");
        flag=false;
    }

    if (flag==true){
        showSpinner();
        var dataString={
            'ContactoId':ContactoId,
            'SucursalId':SucursalId,
            'PrimerNombre':PrimerNombre,
            'SegundoNombre':SegundoNombre,
            'ApellidoPaterno':ApellidoPaterno,
            'ApellidoMaterno':ApellidoMaterno,
            'TelefonoOficina':TelefonoOficina,
            'Email':Email,
            'ClienteId':ClienteId,
            'Email2':Email2
        };
        $.ajax({
            type: "POST",
            url: "Contacto/NuevoJson/",
            data: dataString,
            success: function(res){
                $("#msgMensajeGuardadoContacto").html("Contacto registrado");
                $("#SucursalId").val("0");
                $("#PrimerNombre").val("");
                $("#SegundoNombre").val("");
                $("#ApellidoMaterno").val("");
                $("#ApellidoPaterno").val("");
                $("#TelefonoOficina").val("");
                $("#Email").val("");
                $("#Email2").val("");
                hideSpinner();             
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
    }
}


function ListaContactoByClienteId(){
    var ClienteId= $("#ClienteId").val();
    if (ClienteId > 0)
    {
        var postData = {
            'ClienteId':ClienteId
        };
        var dataString = JSON.stringify(postData);
        $('#listado-contacto2').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        responsive: true,
        serverSide: false,
        "ajax":{
            url :"Contacto/ListaJsonByClienteId/", // json datasource
            type: "post",  // method  , by default get
            data: {myData:dataString},
            dataSrc: "records"
        },
        "columns": [
            {"data":"Id"},
            { "data":"Nombre"},
            { "data":"Email"},
            { "data":"Email2"},
            { "data":"Sucursal"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Eliminar" onclick="ModalEliminarContacto('+ row.Id +');" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                buttons+='<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Editar" onclick="ContactoById('+ row.Id +');" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a>'
                return buttons;
               }
            }
        ]
        });
    }
}

function ModalEliminarContacto(ContactoId){
    $("#ContactoId").val(ContactoId);
    $("#modal-eliminar-contacto").modal("show");
}
function EliminarContactoById(){
    var ContactoId= $("#ContactoId").val();
    var dataString = {
            'ContactoId':ContactoId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "Contacto/EliminarJsonById/",
    data: dataString,
    success: function(res){
         hideSpinner();
        $("#modal-eliminar-contacto").modal("hide");
        ListaContactoByClienteId();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
}

function ContactoById(ContactoId){
    var dataString = {
        'ContactoId':ContactoId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "Contacto/getByIdObject/",
    data: dataString,
    success: function(res){
        var data = jQuery.parseJSON(res);
        $("#SucursalId").val(data.SucursalId);
        $("#PrimerNombre").val(data.PrimerNombre);
        $("#SegundoNombre").val(data.SegundoNombre);
        $("#ApellidoPaterno").val(data.ApellidoPaterno);
        $("#ApellidoMaterno").val(data.ApellidoMaterno);
        $("#TelefonoOficina").val(data.TelefonoOficina);
        $("#Email").val(data.Email);
        $("#ContactoId").val(data.Id);
        hideSpinner();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
}
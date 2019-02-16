$(document).ready(function() {
    
  $("#SucursalId").click(function(){
      
  });
  $("#btnSaveSucursal").click(function(){    
    NuevoSucursal();
  });
  $("#btn-mostrar-sucursal").click(function(){
    ListaSucursalByClienteId();
  });
});

function NuevoSucursal(){
    var flag = true;
    var SucursalId  = $("#SucursalId2").val();
    var Calle       = $("#Calle").val();
    var Colonia     = $("#Colonia").val();
    var Municipio   = $("#Municipio").val();
    var Estado      = $("#Estado").val();
    var Pais        = $("#Pais").val();
    var Nombre      = $("#Nombre").val();
    var ClienteId   = $("#ClienteId").val();
    var ResponsableSuc = $("#ResponsableSuc").val();
    if (Calle==""){
        $("#msgCalle").html("Campo obligatorio");
        flag=false;
    }
    if (Colonia==""){
        $("#msgColonia").html("Campo obligatorio");
        flag=false;
    }

    if (Municipio==""){
        $("#msgMunicipio").html("Campo obligatorio");
        flag=false;
    }

    if (Estado=="0"){
        $("#msgEstado").html("Campo obligatorio");
        flag=false;
    }

    if (Pais=="0"){
        $("#msgPais").html("Campo obligatorio");
        flag=false;
    }

    if (Nombre==""){
        $("#msgNombreSucursal").html("Campo obligatorio");
        flag=false;
    }
    
    if (ResponsableSuc==""){
        $("#msgResponsableSuc").html("Campo obligatorio");
        flag=false;
    }
    if (flag==true){
        showSpinner();
        var dataString={
            'SucursalId':SucursalId,
            'Calle':Calle,
            'Colonia':Colonia,
            'Municipio':Municipio,
            'Estado':Estado,
            'Pais':Pais,
            'Nombre':Nombre,
            'ClienteId':ClienteId,
            'ResponsableSuc':ResponsableSuc
        }
        $.ajax({
            type: "POST",
            url: "Sucursal/NuevoJson/",
            data: dataString,
            success: function(res){
                $("#msgCalle").html("");
                $("#msgColonia").html("");
                $("#msgMunicipio").html("");
                $("#msgEstado").html("");
                $("#msgPais").html("");
                $("#msgNombreSucursal").html("");                
                $("#msgMensajeGuardadoSuc").html("Sucursal registrado ");
                $("#Calle").val('');
                $("#Colonia").val('');  
                $("#Municipio").val('');
                $("#Estado").val('0');
                $("#Pais").val('0');   
                $("#Nombre").val('');
                $("#ResponsableSuc").val('');
                hideSpinner();             
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
        
    }
}
function LlenaComboSucursalByClienteId(){
    var ClienteId= $("#ClienteId").val();
    if (ClienteId > 0)
    {
        var dataString = {
            'ClienteId':ClienteId
        };
        $('#SucursalId').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Sucursal/ByClienteId/",
        data: dataString,
        success: function(res){
            var data = jQuery.parseJSON(res);
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
function ListaSucursalByClienteId(){
    var ClienteId= $("#ClienteId").val();
    if (ClienteId > 0)
    {
        var postData = {
            'ClienteId':ClienteId
        };
        var dataString = JSON.stringify(postData);
        $('#listado-sucursal').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        responsive: true,
        serverSide: false,
        "ajax":{
            url :"Sucursal/ListaJsonByClienteId/", // json datasource
            type: "post",  // method  , by default get
            data: {myData:dataString},
            dataSrc: "records"
        },
        "columns": [
            {"data":"Id"},
            { "data":"Nombre"},
            { "data":"Direccion"},
            { "data":"ResponsableSuc"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" onclick="ModalEliminarSucursal('+ row.Id +');" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                buttons+='<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Editar" onclick="SucursalById('+ row.Id +');" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a>'
                return buttons;
               }
            }

        ]
        });
    }
}
function ModalEliminarSucursal(SucursalId){
    $("#SucursalId2").val(SucursalId);
    $("#modal-eliminar-sucursal").modal("show");
}
function EliminarSucursalById(){
    var SucursalId= $("#SucursalId2").val();
    var dataString = {
            'SucursalId':SucursalId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "Sucursal/EliminarJsonById/",
    data: dataString,
    success: function(res){
         hideSpinner();
        $("#modal-eliminar-sucursal").modal("hide");
        ListaSucursalByClienteId();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
}

function SucursalById(SucursalId){
    var dataString = {
        'SucursalId':SucursalId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "Sucursal/getByIdObject/",
    data: dataString,
    success: function(res){
        var data = jQuery.parseJSON(res);
        $("#SucursalId2").val(data.Id);
        $("#Calle").val(data.Calle);
        $("#Colonia").val(data.Colonia);
        $("#Municipio").val(data.Colonia);
        $("#Estado").val(data.EstadoId);
        $("#Pais").val(data.PaisId);
        $("#Nombre").val(data.Nombre);
        hideSpinner();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
}
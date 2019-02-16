function AgregarMaterialUtilizado(){
    var flag = true;
    var MatUtilId= $("#MatUtilId").val();
    var ServicioId  = $("#ServicioId").val();
    var Cantidad    = $("#Cantidad").val();
    var NoParte     = $("#NoParte").val();
    var Descripcion = $("#Descripcion").val();
    var NoSerie     = $("#NoSerie").val();
    
    if (Cantidad==""){
        $("#msgCantidad").html("Campo obligatorio");
        flag=false;
    }
    if (NoParte==""){
        $("#msgNoParte").html("Campo obligatorio");
        flag=false;
    }

    if (Descripcion==""){
        $("#msgDescripcion").html("Campo obligatorio");
        flag=false;
    }
    
    if (NoSerie==""){
        $("#msgNoSerie").html("Campo obligatorio");
        flag=false;
    }

    if (flag==true){
        showSpinner();
        var dataString={
            'MatUtilId':MatUtilId,
            'ServicioId':ServicioId,
            'Cantidad':Cantidad,
            'NoParte':NoParte,
            'Descripcion':Descripcion,
            'NoSerie':NoSerie 
        };
        $.ajax({
            type: "POST",
            url: "MaterialUtilizado/NuevoJson/",
            data: dataString,
            success: function(res){
                $("#msgCantidad").html("");
                $("#msgNoParte").html("");
                $("#msgDescripcion").html("");
                $("#msgNoSerie").html("");
                $("#msgMensajeGuardado").html("Material utilizado registrado ");
                
                $("#Cantidad").val("");
                $("#NoParte").val("");
                $("#Descripcion").val("");
                $("#NoSerie").val("");
                $("#MatUtilId").val(0);
                hideSpinner();      
                ListaMaterialByServicioId();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
    }
}

function ListaMaterialByServicioId(){
    var ServicioId= $("#ServicioId").val();
    if (ServicioId > 0)
    {
        var postData = {
            'ServicioId':ServicioId
        };
        var dataString = JSON.stringify(postData);
        $('#listado-materiales').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        responsive: true,
        serverSide: false,
        "ajax":{
            url :"MaterialUtilizado/ListaJsonByServicioId/", // json datasource
            type: "post",  // method  , by default get
            data: {myData:dataString},
            dataSrc: "records"
        },
        "columns": [
            {"data":"Id"},
            { "data":"Cantidad"},
            { "data":"NoParte"},
            { "data":"Descripcion"},
            { "data":"NoSerie"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Eliminar" onclick="ModalMaterialUtilizado('+row.Id +');" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                buttons+='<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Editar" onclick="MaterialUtilizadoById('+ row.Id +');" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a>'
                return buttons;
               }
            }
        ]
        });
    }
}

function ModalMaterialUtilizado(Id){
    $("#MatUtilId").val(Id);
    $("#modal-eliminar-matUtilizado").modal("show");
}
function EliminarMaterialUtilizadoById(){
    var MatUtilId= $("#MatUtilId").val();
    var dataString = {
            'MatUtilId':MatUtilId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "MaterialUtilizado/EliminarJsonById/",
    data: dataString,
    success: function(res){
         hideSpinner();
        $("#modal-eliminar-matUtilizado").modal("hide");
        ListaMaterialByServicioId();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
}

function MaterialUtilizadoById(MatUtilId){
    var dataString = {
        'MatUtilId':MatUtilId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "MaterialUtilizado/getByIdObject/",
    data: dataString,
    success: function(res){
        var data = jQuery.parseJSON(res);
        
        $("#Cantidad").val("");
        $("#NoParte").val("");
        $("#Descripcion").val("");
        $("#NoSerie").val("");
                
        $("#Cantidad").val(data.Cantidad);
        $("#NoParte").val(data.NoParte);
        $("#Descripcion").val(data.Descripcion);
        $("#NoSerie").val(data.NoSerie);
        hideSpinner();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
}
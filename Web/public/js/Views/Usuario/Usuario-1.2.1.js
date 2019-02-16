$(document).ready(function() {
    var PerfilId= $("#PerfilId").val();
    if (PerfilId > 0){
       $('#div-contacto').css("display","none");
        $('#div-tecnico').css("display","none");
        if(PerfilId==2){
            $('#div-contacto').css("display","block");
            ListaContacto();
        }else if (PerfilId==3){
            $('#div-tecnico').css("display","block");
            ListaTecnico();
        } 
    }
  
 $('#listado-usuario').DataTable({
    destroy: true,
    deferRender:true,
    processing:false,
    serverSide: false,
    responsive: true,
    "ajax":{
        url :"Usuario/ListaJson/", // json datasource
        type: "post",  // method  , by default get
        data: {},
        dataSrc: "records"
    },
    "columns": [
        { "data":"Id"},
        { "data":"Nombre"},
        { "data":"UserName"},
        { "data":"Activo"},
        { "data":"Email"},
        { "data":"Perfil"},
        { "data":"FechaHoraRegistro"},
        {
           "class": "text-left text-nowrap",
           mRender: function (data, type, row) {
            var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Usuario/Editar/' + row.Id + '" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a> '
            buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Usuario/Detalle/' + row.Id + '" rel="tooltip"><i class="fa fa-list fa-fw"></i></a> '
            buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Usuario/Eliminar/' + row.Id + '" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
            return buttons;
           }
        }

    ]
    });
    
    $("#PerfilId").change(function(){
        var PerfilId= $(this).val();
        $('#div-contacto').css("display","none");
        $('#div-tecnico').css("display","none");
        if(PerfilId==2){
            $('#div-contacto').css("display","block");
            ListaContacto();
        }else if (PerfilId==3){
            $('#div-tecnico').css("display","block");
            ListaTecnico();
        }
    });
    
});

function ListaContacto(){
    $('#tbl-usr-list-contacto').DataTable({
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
            {
                "render":function ( data, type, row ) {
                return (row.PrimerNombre + ' ' + row.SegundoNombre + ' ' + row.ApellidoPaterno + ' ' + row.ApellidoMaterno);
            }
            }, 
            { "data":"Email"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" onclick="ContactoById2(' + row.Id + ')" rel="tooltip"><i class="fa fa-check fa-fw"></i></a>'
                return buttons;
               }
            }
        ]
    });
}

function ContactoById2(Id){
    var dataString={
        'Id':Id
    };
    showSpinner();
    $.ajax({
        type: "POST",
        url: "Contacto/ByIdJson/",
        data: dataString,
        success: function(res){
            var msg = jQuery.parseJSON(res);
            $("#PrimerNombre").val(msg.PrimerNombre);
            $("#SegundoNombre").val(msg.SegundoNombre);
            $("#ApellidoPaterno").val(msg.ApellidoPaterno);
            $("#ApellidoMaterno").val(msg.ApellidoMaterno);
            $("#Email").val(msg.Email);
            $("#UserName").val(msg.Email);
            $("#TecnicoId").val(0);
            $("#ClienteId").val(msg.ClienteId);
            hideSpinner();
        },
        error: function (data) {
            alert("Error al intentar obtener el registro By Id");
            hideSpinner();
        }
  });
}

function ListaTecnico(){
    $('#tbl-usr-list-tecnico').DataTable({
        destroy: true,
        deferRender:true,
        processing:true,
        responsive: true,
        serverSide: true,
        "ajax":{
            url :"Tecnico/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            {
                "render":function ( data, type, row ) {
                return (row.PrimerNombre + ' ' + row.SegundoNombre + ' ' + row.ApellidoPaterno + ' ' + row.ApellidoMaterno);
            }
            },
            { "data":"NumeroEmpleado"},
            { "data":"Email"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-sm btn-default" data-placement="top" data-title="Detalles" onclick="TecnicoById(' + row.Id + ')" rel="tooltip"><i class="fa fa-check fa-fw"></i></a> '
                return buttons;
               }
            }
        ]
    });
}

function TecnicoById(Id){
    var dataString={
        'Id':Id
    };
    showSpinner();
    $.ajax({
        type: "POST",
        url: "Tecnico/ByIdJson/",
        data: dataString,
        success: function(res){
            var msg = jQuery.parseJSON(res);
            $("#PrimerNombre").val(msg.PrimerNombre);
            $("#SegundoNombre").val(msg.SegundoNombre);
            $("#ApellidoPaterno").val(msg.ApellidoPaterno);
            $("#ApellidoMaterno").val(msg.ApellidoMaterno);
            $("#Email").val(msg.Email);
            $("#UserName").val(msg.Email);
            $("#TecnicoId").val(msg.Id);
            $("#ClienteId").val(0);
            hideSpinner();
        },
        error: function (data) {
            alert("Error al intentar obtener el registro By Id");
            hideSpinner();
        }
  });
}

$(document).ready(function() {
     $('#listado-tecnico').DataTable({
        destroy: true,
        deferRender:true,
        processing:true,
        serverSide: true,
        responsive: true,
        "ajax":{
            url :"Tecnico/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            { "data":"NumeroEmpleado"},
            { "data":"PrimerNombre"},
            { "data":"SegundoNombre"},
            { "data":"ApellidoPaterno"},
            { "data":"ApellidoMaterno"},
            { "data":"Direccion"},
            { "data":"TelefonoCelular"},
            { "data":"Email"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Tecnico/Editar/' + row.Id + '" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Tecnico/Detalle/' + row.Id + '" rel="tooltip"><i class="fa fa-list fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Tecnico/Eliminar/' + row.Id + '" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                return buttons;
               }
            }
        ]
    });
});

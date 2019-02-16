$(document).ready(function() {
    $('#listado-cuentas').DataTable({
        destroy: true,
        deferRender:true,
        processing:true,
        responsive: true,
        serverSide: true,
        "ajax":{
            url :"Cuentas/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            {"data":"Id"},
            { "data":"RazonSocial"},
            { "data":"NombreComercial"},
            { "data":"R.F.C"},
            { "data":"Calle"},
            { "data":"Colonia"},
            { "data":"Ciudad"},
            { "data":"Estado"},
            { "data":"C.P."},
            { "data":"Tipo Cliente"},
            { "data":"Tipo Industria"},
            { "data":"Vendedor"},
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
});



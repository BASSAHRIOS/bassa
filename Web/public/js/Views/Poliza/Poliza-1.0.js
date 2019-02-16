$(document).ready(function() {
     $('#listado-poliza').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        serverSide: false,
        responsive: true,
        "ajax":{
            url :"Poliza/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            { "data":"Id"},
            { "data":"Cliente"},
            { "data":"NumeroPoliza"},
            { "data":"Sucursal"},
            { "data":"Tag"},
            { "data":"TipoPoliza"},
            { "data":"DuracionEjecucionPoliza"},
            { "data":"FechaInicio"},
            { "data":"FechaVence"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Poliza/Editar/' + row.Id + '" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Poliza/Detalle/' + row.Id + '" rel="tooltip"><i class="fa fa-list fa-fw"></i></a> '
                buttons = buttons + '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Detalles" href="Poliza/Eliminar/' + row.Id + '" rel="tooltip"><i class="fa fa-minus-circle fa-fw"></i></a> '
                return buttons;
               }
            }

        ]
    });


});



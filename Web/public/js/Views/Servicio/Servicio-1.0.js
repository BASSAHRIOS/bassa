$(document).ready(function() {
    $('#listado-servicios').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        responsive: true,
        serverSide: false,
        "ajax":{
            url :"Servicio/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {},
            dataSrc: "records"
        },
        "columns": [
            {"data":"Id"},
            {"data":"FechaAtencion"},
            {"data":"HoraEntrada"},
            {"data":"HoraSalida"},
            {"data":"RazonSocial"},
            {"data":"Tecnico"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons = '<a class="btn-table btn-showSpin btn-sm btn-default" data-placement="top" data-title="Editar" href="Compresor/Paso1/' + row.Id + '" rel="tooltip"><i class="fa fa-edit fa-fw"></i></a> '
                return buttons;
               }
            }
        ]
    });
});


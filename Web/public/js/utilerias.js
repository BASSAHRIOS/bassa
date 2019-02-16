$(document).ready(function() {
    $("[id='Estatus']").bootstrapSwitch();
    $("[id='Compartido']").bootstrapSwitch();
    
    $(document).on('click', '.fecha', function () {
        $(this).datepicker({
            language: "es",
            format: "dd/mm/yyyy",
            todayHighlight:true,
            startDate: '-1d',
            autoclose: true,
            dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
            monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        }).on('changeDate', function (ev) {
        }).datepicker("show");
    });
    
    $(document).on('click', '.fechaformat2', function () {
        $(this).datepicker({
            language: "es",
            format: "yyyy-mm-dd",
            todayHighlight:true,
            autoclose: true,
            dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
            monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        }).on('changeDate', function (ev) {
        	
        }).datepicker("show");
    });
    
    $(document).on('click', '.fechaReporte', function () {
        $(this).datepicker({
            language: "es",
            format: "yyyy-mm-dd",
            today: "Today",
            todayHighlight:true,
            autoclose: true,
            dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
            monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        }).on('changeDate', function (ev) {
        	
        }).datepicker("show");
    });
    
    $(document).on('click', '.fechaFuturo', function () {
        $(this).datepicker({
            language: "es",
            format: "yyyy-mm-dd",
            today: "Today",
            todayHighlight:true,
            autoclose: true,
            dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
            monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        }).on('changeDate', function (ev) {
        	
        }).datepicker("show");
    });
    
    $('#listado').DataTable({
        responsive: true
    });
        
    $('#listado2').DataTable({
        responsive: true
    });
    
    $('.tbl_responsive').DataTable({
        responsive: true,
        "lengthMenu": [[25, 50, -1], [25, 50, "All"]]
    });
});

function valida(e){
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
    if (tecla == 9) { 
        return true;
    }
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function showSpinner() {
    /*
    //var colorRgb = '#316288';
    var colorRgb = '#646464';
    var opts = {
        lines: 13, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: colorRgb, // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
    };
    //$('#processing').spin(opts);
    */
   //alert("mostrando");
   //$(".modalSpinner").show();
   $.blockUI({ message: '<h5><img src="public/images/ajax-loader.gif" /> Procesando...</h5>' });
}

function hideSpinner()
{
    //$('#processing').spin(false);
    hideProgress();
}
function hideProgress() {
    //$('.processing-progress').css('display', 'none');
    //$(".modalSpinner").hide();
    $.unblockUI();
}

function Limitador(Id,Text){
    var maxLength = 500;
    var length = Text.length;
    $("#chars"+Id).html(length);
}

$(document).ready(function() {
   
});
//misma funcion que se ejecujta en el alta de equipo solo que no se esplitea, se envia el id directo
// se ejecuta en la busqueda del calendario
function LlenaComboSucByClienteId2(){
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
            data = jQuery.parseJSON(res);
            $('#SucursalId').append("<option value=''>TODOS...</option>");
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
function getCalendario(){
    var FechaInicio=$("#FechaInicio").val();
    var FechaFin=$("#FechaFin").val();
    var ClienteId=$("#ClienteId").val();
    var SucursalId=$("#SucursalId").val();
    if (FechaInicio!='' && FechaFin!=''){
    var postData= {
         'FechaInicio':FechaInicio,
         'FechaFin':FechaFin,
         'ClienteId':ClienteId,
         'SucursalId':SucursalId
     };
     var dataString = JSON.stringify(postData);
     $('#listado-calendario').DataTable({
        destroy: true,
        deferRender:true,
        processing:false,
        responsive: true,
        serverSide: false,
        "ajax":{
            url :"Calendario/ListaJson/", // json datasource
            type: "post",  // method  , by default get
            data: {myData:dataString},
            dataSrc: "records"
        },
        "columns": [
            { "data":"Id"},
            { "data":"Cliente"},
            { "data":"Sucursal"},
            { "data":"NumeroPoliza"},
            { "data":"TipoEquipo"},
            { "data":"Tag"},
            { "data":"FechaInicioServicio"},
            { "data":"FechaFinServicio"},
            { "data":"Tecnico"},
            {
               "class": "text-left text-nowrap",
               mRender: function (data, type, row) {
                var buttons ="";
                if (row.EstatusServicioId==1 || row.EstatusServicioId==0){
                    if (row.EstatusAsignacion=="0" && row.EstatusLiberacion=="0"){
                        buttons = "<button type='button' onclick='modalAsignaServicio("+ row.Id + ',' + row.PolizaAsignacionId + ");' class='btn btn-primary'><i class='fa fa-check-square'>Asignar</i></button>"
                    }
                    if (row.EstatusLiberacion=="1"){
                        buttons +=  "<button type='button' onclick='modalLiberarServicio("+ row.PolizaAsignacionId + ");' class='btn btn-primary'><i class='fa fa-edit'>Liberar</i></button>"
                    }
                }
                return buttons;
               }
            }
        ]
    });
}
}


function modalAsignaServicio(PolizaCalendarioId,PolizaAsignacionId){
    $("#PolizaAsignacionId").val(0);
    var dataString = {
        'PolizaCalendarioId':PolizaCalendarioId
    };
    showSpinner();
    $.ajax({
    type: "POST",
    url: "Calendario/getByIdObjectJson/",
    data: dataString,
    success: function(res){
        $('#TecnicoId1').empty();
        $('#TecnicoId2').empty();
        $('#TecnicoId3').empty();
        $('#TecnicoId4').empty();
        var data = jQuery.parseJSON(res);
        $("#PolizaCalendarioId").val(0);
        $("#PolizaCalendarioId").val(PolizaCalendarioId);
        $("#FechaInicioServicio2").val(data.FechaServicio);
        $("#FechaFinServicio2").val(data.FechaFinServicio);
        if (PolizaAsignacionId > 0){
            $("#PolizaAsignacionId").val(0);
            $("#PolizaAsignacionId").val(PolizaAsignacionId);
        }
        hideSpinner();
        $('#ModalAsignarServicio').modal('show');
        llenaComboTecnicos1();
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
	
}
function modalLiberarServicio(PolizaAsignacionId){
    $('#modal-liberar-tecnico').modal('show');
    $("#PolizaAsignacionId").val(PolizaAsignacionId);
}
function GuardarLiberarServicio(){
    var PolizaAsignacionId=$("#PolizaAsignacionId").val();
    var dataString = {
        'PolizaAsignacionId':PolizaAsignacionId
    };
    showSpinner();
    $.ajax({
        type: "POST",
        url: "Calendario/LiberarServicio/",
        data: dataString,
        success: function(res){
            $('#modal-liberar-tecnico').modal('hide');
            getCalendario();
            hideSpinner();
            },error:
                        function (XmlHttpError, error, description) {
                            alert(XmlHttpError.responseText);
                            hideSpinner();
        },
    });
}
//llena el combo de tecnico 1 en el modal
function llenaComboTecnicos1(){
    var list = new Array();
    var FechaInicioServicio=$("#FechaInicioServicio2").val();
    var FechaFinServicio=$("#FechaFinServicio2").val();
 if (FechaInicioServicio != '' && FechaFinServicio!='')
 {
    $(".cmbTecnico").each(function() {
        var Id= $(this).val();
        //alert(Id);
        if (Id > 0)
        {
            list.push(Id);
        }
    });
    var postData= {
         'TecnicoId':list,
         'FechaInicioServicio':FechaInicioServicio,
         'FechaFinServicio':FechaFinServicio
    };
    var dataString = JSON.stringify(postData);
    $('#TecnicoId1').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Tecnico/getAllJsonByNotIn/",
        data: {myData:dataString},
        success: function(res){
            $('#TecnicoId1').empty();
            data = jQuery.parseJSON(res);
            $('#TecnicoId1').append("<option value=''>Seleccione...</option>");
            $.each(data, function (k, v) {
                $('#TecnicoId1').append("<option value='" + v.Id + "'>" + v.Nombre + "</option>");
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

function llenaComboTecnicos2(){
    var list = new Array();
    var FechaInicioServicio=$("#FechaInicioServicio2").val();
    var FechaFinServicio=$("#FechaFinServicio2").val();
 if (FechaInicioServicio != '' && FechaFinServicio!='')
 {
    $(".cmbTecnico").each(function() {
        var Id= $(this).val();
        //alert(Id);
        if (Id > 0)
        {
            list.push(Id);
        }
    });
    var postData= {
         'TecnicoId':list,
         'FechaInicioServicio':FechaInicioServicio,
         'FechaFinServicio':FechaFinServicio
    };
    var dataString = JSON.stringify(postData);
    $('#TecnicoId2').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Tecnico/getAllJsonByNotIn/",
        data: {myData:dataString},
        success: function(res){
            $('#TecnicoId2').empty();
            $('#TecnicoId3').empty();
            $('#TecnicoId4').empty();
            data = jQuery.parseJSON(res);
            $('#TecnicoId2').append("<option value=''>Seleccione...</option>");
            $.each(data, function (k, v) {
                $('#TecnicoId2').append("<option value='" + v.Id + "'>" + v.Nombre + "</option>");
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

function llenaComboTecnicos3(){
    var list = new Array();
    var FechaInicioServicio=$("#FechaInicioServicio2").val();
    var FechaFinServicio=$("#FechaFinServicio2").val();
 if (FechaInicioServicio != '' && FechaFinServicio!='')
 {
    $(".cmbTecnico").each(function() {
        var Id= $(this).val();
        //alert(Id);
        if (Id > 0)
        {
            list.push(Id);
        }
    });
    var postData= {
         'TecnicoId':list,
         'FechaInicioServicio':FechaInicioServicio,
         'FechaFinServicio':FechaFinServicio
    };
    var dataString = JSON.stringify(postData);
    $('#TecnicoId3').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Tecnico/getAllJsonByNotIn/",
        data: {myData:dataString},
        success: function(res){
            data = jQuery.parseJSON(res);
            $('#TecnicoId3').append("<option value=''>Seleccione...</option>");
            $.each(data, function (k, v) {
                $('#TecnicoId3').append("<option value='" + v.Id + "'>" + v.Nombre + "</option>");
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
function llenaComboTecnicos4(){
    var list = new Array();
     var FechaInicioServicio=$("#FechaInicioServicio2").val();
     var FechaFinServicio=$("#FechaFinServicio2").val();
  if (FechaInicioServicio != '' && FechaFinServicio!='')
 {
    $(".cmbTecnico").each(function() {
        var Id= $(this).val();
        //alert(Id);
        if (Id > 0)
        {
            list.push(Id);
        }
    });
    var postData= {
         'TecnicoId':list,
         'FechaInicioServicio':FechaInicioServicio,
         'FechaFinServicio':FechaFinServicio
    };
    var dataString = JSON.stringify(postData);
    $('#TecnicoId4').empty();
        showSpinner();
        $.ajax({
        type: "POST",
        url: "Tecnico/getAllJsonByNotIn/",
        data: {myData:dataString},
        success: function(res){
            data = jQuery.parseJSON(res);
            $('#TecnicoId4').append("<option value=''>Seleccione...</option>");
            $.each(data, function (k, v) {
                $('#TecnicoId4').append("<option value='" + v.Id + "'>" + v.Nombre + "</option>");
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

function GuardaAsignacion(){
	var PolizaCalendarioId=$("#PolizaCalendarioId").val();
	var FechaInicioServicio=$("#FechaInicioServicio2").val();
        var FechaFinServicio=$("#FechaFinServicio2").val();
        var PolizaAsignacionId=$("#PolizaAsignacionId").val();
	var TecnicoId1=$("#TecnicoId1").val();
        var TecnicoId2=$("#TecnicoId2").val();
        var TecnicoId3=$("#TecnicoId3").val();
        var TecnicoId4=$("#TecnicoId4").val();
	var flag=true;

	if (FechaInicioServicio=="")
	{
		flag =false;
	}
	if (TecnicoId1=="" || TecnicoId1=="0")
	{
		flag =false;
	}
	if (flag==true){
        showSpinner();
        var dataString={
            'PolizaCalendarioId':PolizaCalendarioId,
            'FechaInicioServicio':FechaInicioServicio,
            'FechaFinServicio':FechaFinServicio,
            'TecnicoId1':TecnicoId1,
            'TecnicoId2':TecnicoId2,
            'TecnicoId3':TecnicoId3,
            'TecnicoId4':TecnicoId4,
            'PolizaAsignacionId':PolizaAsignacionId
        };
        $.ajax({
            type: "POST",
            url: "Calendario/GuardaAsignacionJson/",
            data: dataString,
            success: function(res){
            	if (res > 0)
            	{
	               $("#FechaInicioServicio2").val("");
                       $("#FechaFinServicio2").val("");
	               $("#PolizaCalendarioId").val("0");
	               $("#TecnicoId").val("");
	               $('#ModalAsignarServicio').modal('hide');
                        $("#PolizaAsignacionId").val("0");
	            getCalendario();
	            hideSpinner();    
                }    
        },error:
                    function (XmlHttpError, error, description) {
                        alert(XmlHttpError.responseText);
                        hideSpinner();
        },
    });
    }
}



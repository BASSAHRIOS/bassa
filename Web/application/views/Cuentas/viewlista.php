<?php
	$base = $this->config->item('base_url');
?>
<div class='panel-body'>
<div class="page-header">
<h4>
Clientes
<a class="btn-success pull-right btn-showSpin btn btn-default active" rel="tooltip" href="<?php echo $base;?>Cuentas/DatosGenerales" data-title="" data-placement="left" data-original-title="" title="">
	Nuevo
</a>
</h4>
</div>
<div class="panel-info panel">
<div class="panel-heading">
	Listado de Cuentas
</div>
<div class="panel-body">
    <div id="Tablalistado_wrapper" class="table-responsive dataTables_wrapper form-inline dt-bootstrap no-footer">
	<table id="listado-cuentas" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th>Id</th>
                <th>Razon Social</th>
                <th>Nombre Comercial</th>
                <th>R.F.C</th>
                <th>Calle</th>
                <th>Colonia</th>
                <th>Ciudad</th>
                <th>Estado</th>
                <th>C.P.</th>
                <th>Tipo Cliente</th>
                <th>Tipo Industria</th>
                <th>Vendedor</th>
                <th>Acciones</th>
            </tr>
        </thead>
 	</table>
    </div>
</div>
</div>
</div>
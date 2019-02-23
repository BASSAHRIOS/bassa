<form role="form" method="post" action="<?= base_url();?>Cuentas/Equipos/0">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="tipoequipo">Tipo de equipo:</label>
                            <?php echo "<select name='idTipoEquipo' id='idTipoEquipo' class='form-control'>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstTiposEquipo)) {
                              foreach ($lstTiposEquipo as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="marca">Marca</label>
                            <?php echo "<select name='idMarca' id='idMarca' class='form-control'>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstMarcas)) {
                              foreach ($lstMarcas as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="modelo">Modelo:</label>
                            <input type="text" class="form-control" id="Modelo" name="Modelo">
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="noserie">No. Serie:</label>
                            <input type="text" class="form-control" id="NumSerie" name="NumSerie">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="capacidadtons">Capacidad (Tons):</label>
                            <input type="text" class="form-control" id="CapacidadTons" name="CapacidadTons">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="aplicacion">Aplicación:</label>
                            <?php echo "<select name='idAplicacion' id='idAplicacion' class='form-control'>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstTiposAplicacion)) {
                              foreach ($lstTiposAplicacion as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="tipoenfriamiento">Tipo enfriamiento:</label>
                            <?php echo "<select name='idTipoEnfriamiento' id='idTipoEnfriamiento' class='form-control'>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstTiposEnfriamiento)) {
                              foreach ($lstTiposEnfriamiento as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="tipocompresor">Tipo compresor:</label>
                            <?php echo "<select name='idTipoCompresor' id='idTipoCompresor' class='form-control'>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstTiposCompresor)) {
                              foreach ($lstTiposCompresor as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                        <div class="form-group col-md-4">
                            <br>
                            <button type="button" class="btn btn-success pull-right">Agregar</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                           <div id="Tablalistado_wrapper" class="table-responsive dataTables_wrapper form-inline dt-bootstrap no-footer">
                                <table id="listado-equipo-cuentas" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Tipo equipo</th>
                                            <th>Marca</th>
                                            <th>Modelo</th>
                                            <th>Num serie</th>
                                            <th>Capacidad</th>
                                            <th>Aplicación</th>
                                            <th>Tipo enfriamiento</th>
                                            <th>Tipo compresor</th>
                                            <th>Tipo refrigerante</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-md-12">
            <a href="Cuentas/DatosGenerales" class="btn btn-warning nextBtn pull-left"><i class="fa fa-arrow-left"></i>Anterior</a>
            <button class="btn btn-warning nextBtn pull-right" type="submit" >Finalizar<i class="fa fa-home"></i></button>
        </div>
        
    </div>
</form>
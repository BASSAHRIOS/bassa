<form role="form" method="post" action="<?= base_url();?>Cuentas/DatosGenerales">
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <h6 class="text-on-pannel text-primary"><strong class="text-uppercase">Datos generales</strong></h6>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="razonsocial">Razon Social:</label>
                            <input type="text" class="form-control" id="RazonSocial" name="RazonSocial" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="nombrecomercial">Nombre Comercial</label>
                            <input type="text" class="form-control" id="NombreComercial" name="NombreComercial" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="rfc">R.F.C:</label>
                            <input type="text" class="form-control" id="RFC" name="RFC" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="tipocliente">Tipo cliente:</label>
                            <?php echo "<select name='idTipoCliente' id='idTipoCliente' class='form-control' required>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstTiposCliente)) {
                              foreach ($lstTiposCliente as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="tipoindustria">Tipo industria:</label>
                            <?php echo "<select name='idTipoIndustria' id='idTipoIndustria' class='form-control' required>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstTipoIndustria)) {
                              foreach ($lstTipoIndustria as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <h6 class="text-on-pannel text-primary"><strong class="text-uppercase">Dirección</strong></h6>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="calle">Calle</label>
                            <input type="text" class="form-control" id="Calle" name="Calle" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="colonia">Colonia:</label>
                            <input type="text" class="form-control" id="Colonia" name="Colonia" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="ciudad">Ciudad:</label>
                            <input type="text" class="form-control" id="Ciudad" name="Ciudad" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="estado">Estado:</label>
                            <?php echo "<select name='idEstado' id='idEstado' class='form-control' required>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstEstados)) {
                              foreach ($lstEstados as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['NombreEstado']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="cp">C.P.:</label>
                            <input type="text" class="form-control" id="CP" name="CP" required>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="panel panel-primary">
                <div class="panel-body">
                    <h6 class="text-on-pannel text-primary"><strong class="text-uppercase">Datos adicionales</strong></h6>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="areasOportunidad">Areas de oportunidad:</label>
                            <?php echo "<select multiple name='idAreasOportunidad[]' id='idAreasOportunidad' class='form-control' required>";
                            echo '<option value="0">SELECCIONE</option>'; 
                            if (count($lstAreasOportunidad)) {
                              foreach ($lstAreasOportunidad as $list) {
                                    echo "<option value='".$list['Id']."'>".$list['Descripcion']."</option>";
                                }
                            }
                            echo "</select>";
                            ?>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="cp">Observaciones:</label>
                            <textarea class="form-control" name="Observaciones" id="Observaciones" required></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-md-12">
           <div class="panel panel-primary">
               <div class="panel-body">
                   <h6 class="text-on-pannel text-primary"><strong class="text-uppercase">Contactos</strong></h6>
                   <div class="row">
                       <div class="form-group col-md-4">
                           <label for="nombre">Nombre:</label>
                           <input type="text" class="form-control" id="NombreContacto" name="NombreContacto">
                       </div>
                       <div class="form-group col-md-4">
                           <label for="direccion">Dirección:</label>
                           <input type="text" class="form-control" id="DireccionContacto" name="DireccionContacto">
                       </div>
                       <div class="form-group col-md-3">
                           <label for="telefono">Telefono:</label>
                           <input type="text" class="form-control" id="TelefonoContacto" name="TelefonoContacto">
                       </div>
                       <div class="form-group col-md-1">
                           <label for="ext">Ext:</label>
                           <input type="text" class="form-control" id="ExtensionContacto" name="ExtensionContacto" >
                       </div>
                   </div>
                   <div class="row">
                       <div class="form-group col-md-5">
                           <label for="correo">Correo:</label>
                           <input type="text" class="form-control" id="CorreoContacto" name="CorreoContacto">
                       </div>
                       <div class="form-group col-md-5">
                           <label for="departamento">Departamento:</label>
                           <input type="text" class="form-control" id="DepartamentoContacto" name="DepartamentoContacto">
                       </div>
                       <div class="form-group col-md-2">
                           <br>
                           <button type="button" class="btn btn-success pull-right">Agregar</button>
                       </div>
                   </div>
                   <div class="row">
                       <div class="form-group col-md-12">
                           <div id="Tablalistado_wrapper" class="table-responsive dataTables_wrapper form-inline dt-bootstrap no-footer">
                                <table id="listado-datos-cuentas" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Direccion</th>
                                            <th>Telefono</th>
                                            <th>Extensión</th>
                                            <th>Correo</th>
                                            <th>Departamento</th>
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
            <button class="btn btn-warning nextBtn pull-right" type="submit" >Siguiente<i class="fa fa-arrow-right"></i></button>
       </div>
    </div>
         
</form>
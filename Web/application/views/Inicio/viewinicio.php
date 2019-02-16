<?php
    if ($_SESSION["PerfilId"]==2)//perfil cliente
    {
?>
   <div class="row"> 
                <div class="panel-body">
                    <div id="Tablalistado_wrapper" class="table-responsive dataTables_wrapper form-inline dt-bootstrap no-footer">
                          <table id="listado-equipo" class="table tbl_responsive table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Sucursal</th>
                                        <th>Tag</th>
                                        <th>Identificacion Cliente</th>
                                        <th>Tipo Equipo</th>
                                        <th>Marca</th>
                                        <th>Modelo</th>
                                        <th>Numero Serie</th>                                        
                                        <th>Operacion</th>
<!--                                        <th>Mantenimiento</th>
                                        <th>Fuera de Servicio</th>-->
                                        <th>Fecha Ultimo Servicio</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                 <tbody>
            <?php
                if (is_array($lista2) > 0):
                foreach ($lista2 as $key2): ?>
                <tr>
                    <td><?=$key2['id'];?></td>
                    <td><?php echo $key2['Sucursal'];?></td>
                    <td><?php echo $key2['Tag'];?></td>
                    <td><?php echo $key2['IdentificacionCliente'];?></td>
                    <td><?php echo $key2['tipoEquipo'];?></td>
                    <td><?php echo $key2['marca'];?></td>
                    <td><?php echo $key2['modelo'];?></td>                   
                    <td><?php echo $key2['NumeroSerie'];?></td>
                    <td>
                        <div class="radio radio-<?=$key2["Clase"]?>">
                            <input checked="checked" type="radio" id="radioB<?=$key2['id'];?>" name="radio<?=$key2['id'];?>"  value="x">
                            <label for="radioB<?=$key2['id'];?>"></label>
                        </div>
                    </td>   
<!--                    <td>
                        <div class="radio radio-warning">
                            <label><input type="radio" name="optradio2"></label>
                        </div>
                    </td>
                    <td>
                        <div class="radio radio-danger">
                            <label><input type="radio" name="optradio3"></label>
                        </div>
                    </td>-->
                    <td><?php echo $key2['fechaUltimoServicio'];?></td>
                    <!--<td><span class="<?php echo $key2['etiqueta'];?>"><?php echo $key2['estatusEquipo'];?></span></td>-->
                    <td>
                         <a title="Ver Historial" href="Servicio/HistorialServicioPorEquipo/<?=$key2["id"]?>"><i class="fa fa-clock-o"></i></a>
                         <a title="Ver Detalle Equipo" href="Equipo/Detalle/<?=$key2["id"]?>"><i class="fa fa-list fa-fw"></i></a>
                     </td>
                </tr>
            <?php 
                endforeach;  
                endif;
            ?>
 		</tbody>
                          </table>
                    </div>
                </div>
            </div>
<?php
    }
?>
        
        
<?php
    if ($_SESSION["PerfilId"]==3)//perfil tecnico
    {
?>
    <div class="row"> 
                <div class="panel-body">
                    <div id="Tablalistado_wrapper" class="table-responsive dataTables_wrapper form-inline dt-bootstrap no-footer">
                          <table id="listado-calendario" class="table tbl_responsive table-striped table-bordered table-hover" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Cliente</th> 
                                        <th>Equipo</th>
                                        <th>Num Poliza</th>
                                        <th>Tag</th>
                                        <th>Sucursal</th>
                                        <th>Fecha Inicio Servicio</th>
                                        <th>Fecha Fin Servicio</th>
                                        <th>EstatusServicio</th> 
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
            <?php
                if (is_array($lista) > 0):
                foreach ($lista as $key): ?>
                <tr>
                    <td><?=$key['PolizaAsignacionId'];?></td>
                    <td><?php echo $key['Cliente'];?></td>
                    <td><?php echo $key['Tag'];?></td>
                    <td><?php echo $key['NumeroPoliza'];?></td>
                    <td><?php echo $key['TipoEquipo'];?></td>
                    <td><?php echo $key['Sucursal'];?></td>
                    <td><?php echo $key['FechaInicioServicio'];?></td>
                    <td><?php echo $key['FechaFinServicio'];?></td>
                    <td><?php echo $key['EstatusServicio'];?></td> 
                    <td>
                        <a class="btn btn-primary btn-sm" title="Iniciar" href="<?=$key['Controlador'];?>/<?=$key['Accion'];?>/<?=$key["ServicioId"]?>/<?=$key['PolizaAsignacionId']?>"><i class="fa fa-play-circle-o"></i></a>
                    </td>
                </tr>
            <?php 
                endforeach;  
                endif;
            ?>
 		</tbody>
                          </table>
                    </div>
                </div>
            </div>
<?php
    }
?>
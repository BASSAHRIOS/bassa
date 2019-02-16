<div class='panel-body'>
    <div class="page-header">
        <h4>
            Historial de Servicios por Equipo
        </h4>
    </div>
    <div class="panel-info panel">
        <div class="panel-heading">
            Listado
        </div>
        <div class="panel-body">
            <div id="Tablalistado_wrapper" class="table-responsive dataTables_wrapper form-inline dt-bootstrap no-footer">
                <table id="listado-servicios" class="table tbl_responsive table-striped table-bordered table-hover" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tag</th>
                            <th>Identificacion Cliente</th>
                            <th>FechaAtencion</th>
                            <th>HoraEntrada</th>
                            <th>HoraSalida</th>                          
                            <th>Tecnico</th>
                            <th>Acciones</th>                            
                        </tr>
                    </thead>
                    <tbody>
                         <?php
                         
                            if (is_array($detalle) > 0):
                                foreach ($detalle as $key):
                            ?>
                                    <tr>
                                        <td><?=$key['Id'];?></td>
                                        <td><?=$key['Tag'];?></td>
                                        <td><?=$key['IdentificacionCliente'];?></td>
                                        <td><?=$key['FechaAtencion'];?></td>
                                        <td><?=$key['HoraEntrada'];?></td>
                                        <td><?=$key['HoraSalida'];?></td>
                                        <td><?=$key['tecnico'];?></td>
                                        <td>
                                            <?php if (($key['TipoEquipoId']==1) and ($key['HoraSalida']<>'')){?>
                                                <a title="Ver Reporte" href="ReporteServicioCompresor/ReporteCompresor/<?=$key["Id"]?>"><i class="fa fa-file-pdf-o"></i></a> 
                                            <?php
                                            }?>
                                            
                                            <?php if ($key['TipoEquipoId']==2){?>
                                                <a title="Ver Reporte" href="ReporteServicioChiller/ReporteChiller/<?=$key["Id"]?>"><i class="fa fa-file-pdf-o"></i></a> 
                                            <?php
                                            }?> 
                                                
                                            <?php if ($key['TipoEquipoId']==5){?>
                                                <a title="Ver Reporte" href="ReporteServicio/ReporteServicio/<?=$key["Id"]?>"><i class="fa fa-file-pdf-o"></i></a> 
                                            <?php
                                            }?>
                                            
                                                
                                        </td>
                                    </tr>
                            <?php 
                                endforeach;  
                                endif;
                            ?>
                                </tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
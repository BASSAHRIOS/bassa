<?php
    $base = $this->config->item('base_url');
if (current_url() !== base_url() && current_url() !== base_url() . "Inicio") {?>
            <ul class="breadcrumb">
                <?php
                $segments = $this->uri->segment_array();
                $last_segment = '';?>
                <li>
                    <a href="<?php echo base_url(); ?>Inicio/Index"><div class="home">Inicio</div></a>
                </li>
                <?php
                foreach ($segments as $segment) {
                    $last_segment .= '/' . $segment;
                    ?>
                    <li>
                    <?php
                        echo '<a href="'.base_url().substr($last_segment,1) . '">' .ucfirst(str_replace('-', ' ',str_replace('_', ' ', $segment))) . '</a>';
                    ?>
                    </li>
                    <?php
                }
                ?>
            </ul>
        <?php } ?>
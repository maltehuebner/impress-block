<?php declare(strict_types=1);

/*
Plugin Name: Impress Block
Plugin URI: https://maltehuebner.de
Description: Provides an Impress block for Gutenberg
Version: 1.0
Author: Malte Hübner
Author URI: https://maltehuebner.de
License: GPL2+
License URI: https://www.gnu.org/licenses/gpl-2.0.txt
*/

function create_block_starter_block_block_init(): void
{
    $result = register_block_type(__DIR__.'/blocks/impress-block/block.json', [
        'render_callback' => 'renderCallback',
    ]);
}

function renderCallback(array $attributes, string $content, \WP_Block $block): string
{
    ob_start();
    include WP_PLUGIN_DIR.'/impress-block/blocks/impress-block/template.php';

    return ob_get_clean() ?: '';
}

add_action('init', 'create_block_starter_block_block_init');
<?php
/*
**************************************************************************

Plugin Name:  Gherkin Syntax for SyntaxHighlighter Evolved
Plugin URI:   http://www.bankofcanada.ca/
Version:      1.1
Description:  Adds Gherkin/Cucumber/Behat syntax for SyntaxHighlighter Evolved.
Author:       Michael Hall, Bank of Canada
        
**************************************************************************
*/

class GherkinHighlighter {

    public static function init(){
		wp_register_script( 'syntaxhighlighter-brush-gherkin', 
                            plugins_url('gherkin-syntax-for-syntaxhighlighter-evolved/shBrushGherkin.js'),
                            array('syntaxhighlighter-core'),
                            '20111219.1' );
        add_filter('syntaxhighlighter_brushes',array('GherkinHighlighter','gherkin_lang'));
    }
    public static function gherkin_lang($arr){
        $arr['behat'] = 'gherkin';
        $arr['gherkin'] = 'gherkin';
        return $arr;
    }
}
add_action( 'init', array('GherkinHighlighter','init'), 4 );
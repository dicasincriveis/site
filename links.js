function replace_text_wps($text) {
    $text = str_replace('TEXT_TO_REPLACE', 'TEXT_YOU_WANT_TO_REPLACE_WITH', $text);
    $text = str_replace('tech support', '<a href="/techsupport">Tech support</a>', $text);
    $text = str_replace('computers', '<a href="/computers">Computers</a>', $text);
    return $text;
}
 
add_filter('the_content', 'replace_text_wps');

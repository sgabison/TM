/**
 * Wrap the searchfield in a form to allow the iOS keyboard to correctly show the search text
 * This code is from http://www.sencha.com/forum/showthread.php?151529-searchfield-not-showing-quot-Search-quot-button-on-iOS-keyboard.-Bug/page2
 */
Ext.define('transparence.view.search.SearchFormField', {
    extend: 'Ext.field.Search',
    xtype: 'searchformfield',
 
    getElementConfig: function () {
        var tpl = this.callParent();
 
        tpl.tag = 'form';
        tpl.onsubmit = 'return false;';
 
        return tpl;
    }
});

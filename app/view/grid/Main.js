/**
 * This simple example shows the ability of the Ext.List component.
 * 
 * In this example, it uses a grouped store to show group headers in the list.
 * It also includes an indicator so you can quickly swipe through each of the
 * groups. On top of that it has a disclosure button so you can disclose more
 * information for a list item.
 */

Ext.define('transparence.view.grid.Main', {
	extend : 'Ext.grid.Grid',
	alias : 'widget.gridview',

	// require any components/classes what we will use in our example
	requires : ['Ext.data.Store', 'Ext.grid.Grid', 'Ext.grid.HeaderGroup',
			'Ext.grid.plugin.Editable', 'Ext.grid.plugin.ViewOptions',
			'Ext.grid.plugin.MultiSelection', 'Ext.grid.plugin.PagingToolbar',
			'Ext.grid.plugin.ColumnResizing', 'Ext.grid.plugin.SummaryRow'],
	initialize : function() {
		var me = this;
		this.callParent();
	},

	config : {
		itemId : 'gridView',
		store : 'Meds',
		title : 'Liste des médicaments en pharmacie',
		plugins : [{
					type : 'grideditable'
				}, {
					type : 'gridviewoptions'
				}, {
					type : 'gridmultiselection'
				}, {
					type : 'gridpagingtoolbar'
				}, {
					type : 'gridcolumnresizing'
				}, {
					type : 'gridsummaryrow'
				}],
		columns : [{
					text : 'Nom',
					dataIndex : 'name',
					width : 200,
					editable : true,
					summaryType : 'count',
					summaryRenderer : function(value) {
						return value + ' Médicaments';
					}
				}, {
					text : 'Miscellaneous',
					xtype : 'gridheadergroup',
					items : [{
								text : 'Dosage',
								tpl : '{dosage} cp',
								align : 'center',
								width : 110,
								xtype : 'templatecolumn',
								dataIndex : 'dosage',
								summaryType : 'average',
								summaryRenderer : function(value) {
									return ' mg';
								},
								editable : true
							}, {
								text : 'Libellé',
								dataIndex : 'libelle',
								width : 320,
								align : 'center',
								editable : true
							}]
				}, {
					text : 'Indications',
					xtype : 'gridheadergroup',
					items : [{
								text : 'indication',
								dataIndex : 'indication',
								width : 300,
								editable : true
							}, {
								text : 'posologie',
								dataIndex : 'posologie',
								width : 300
							}]
				}, {
					text : 'laboratoire_exploitant',
					dataIndex : 'laboratoire_exploitant',
					width : 300
				}, {
					text : 'Unités par prise',
					dataIndex : 'nombre_dunites_de_prise',
					width : 120,
					editable : true
				}]
	}
});
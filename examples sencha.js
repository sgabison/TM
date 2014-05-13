var tpl = new Ext.XTemplate(
    '<p>Name: {name}</p>',
    '<p>Title: {title}</p>',
    '<p>Company: {company}</p>',
    '<p>Kids: ',
    '<tpl for="kids">',     // interrogate the kids property within the data
        '<p>{name}</p>',
    '</tpl></p>'
);
tpl.overwrite(panel.body, data);  // pass the root node of the data object


var tpl = new Ext.XTemplate(
    '<p>Name: {name}</p>',
    '<p>Kids: ',
    '<tpl for="kids">',
        '<p>{name} is a ',
        '<tpl if="age &gt;= 13">',
            '<p>teenager</p>',
        '<tpl elseif="age &gt;= 2">',
            '<p>kid</p>',
        '<tpl else>',
            '<p>baby</p>',
        '</tpl>',
    '</tpl></p>'
);

var tpl = new Ext.XTemplate(
    '<p>Name: {name}</p>',
    '<p>Kids: ',
    '<tpl for="kids">',
        '<p>{name} is a ',
        '<tpl switch="name">',
            '<tpl case="Aubrey" case="Nikol">',
                '<p>girl</p>',
            '<tpl default">',
                '<p>boy</p>',
        '</tpl>',
    '</tpl></p>'
);

Ext.onReady(function () {


  var store_json = Ext.create('Ext.data.JsonStore', { 
    storeId: 'radio', 
    fields: ['boxLabel', 'name', 'inputValue'], 
    proxy: { 
      type: 'ajax', 
      url: 'items.json', 
      reader: {
        type: 'json', 
        root: 'groupitems',
        totalProperty: 'total'
      }, 
      baseParams: { 
        operation:'showall' 
      }, 
    },
  });


  store_json.load({ 
    callback: function(records, operation, success) 
    {        
        itemsInGroup = []; 


        console.log(records); 


        for (var i = 0; i < records.length; i++) { 
          itemsInGroup.push(records[i].data); 
        } 
        
        console.log(itemsInGroup);


        Ext.create('Ext.form.Panel', { 
          title: 'RadioGroup Example', 
          renderTo: Ext.getBody(), 
          items:[{ 
            xtype: 'radiogroup', 
            fieldLabel: 'Radio', 
            items: itemsInGroup 
          }]
        }); 
    }
  });
});
// fire an event
    onFieldChange : function(comp, value) {
        this.fireAction('filter', this.getValues(), this);
    }
@function icon-character-for-name($name) {
    // http://pictos.cc/font/

    // Row 1
    @if ($name == "anchor") { @return "a"; }
    @else if ($name == "box") { @return "b"; }
    @else if ($name == "upload") { @return "c"; }
    @else if ($name == "forbidden") { @return "d"; }
    @else if ($name == "lightning") { @return "e"; }
    @else if ($name == "rss") { @return "f"; }
    @else if ($name == "team") { @return "g"; }
    @else if ($name == "help") { @return "h"; }
    @else if ($name == "info") { @return "i"; }
    @else if ($name == "attachment") { @return "j"; }
    @else if ($name == "heart") { @return "k"; }
    @else if ($name == "list") { @return "l"; }
    @else if ($name == "music") { @return "m"; }
    @else if ($name == "table") { @return "n"; }
    @else if ($name == "folder") { @return "o"; }
    @else if ($name == "pencil") { @return "p"; }
    @else if ($name == "chat2") { @return "q"; }
    @else if ($name == "retweet") { @return "r"; }
    @else if ($name == "search") { @return "s"; }
    @else if ($name == "time") { @return "t"; }
    @else if ($name == "switch") { @return "u"; }
    @else if ($name == "camera") { @return "v"; }
    @else if ($name == "chat") { @return "w"; }
    @else if ($name == "settings2") { @return "x"; }
    @else if ($name == "settings") { @return "y"; }
    @else if ($name == "tags") { @return "z"; }

    // Row 2
    @else if ($name == "attachment2") { @return "A"; }
    @else if ($name == "bird") { @return "B"; }
    @else if ($name == "cloud") { @return "C"; }
    @else if ($name == "delete_black1") { @return "D"; }
    @else if ($name == "eye") { @return "E"; }
    @else if ($name == "file") { @return "F"; }
    @else if ($name == "browser") { @return "G"; }
    @else if ($name == "home") { @return "H"; }
    @else if ($name == "inbox") { @return "I"; }
    @else if ($name == "network") { @return "J"; }
    @else if ($name == "key") { @return "K"; }
    @else if ($name == "radio") { @return "L"; }
    @else if ($name == "mail") { @return "M"; }
    @else if ($name == "news") { @return "N"; }
    @else if ($name == "case") { @return "O"; }
    @else if ($name == "photos") { @return "P"; }
    @else if ($name == "power") { @return "Q"; }
    @else if ($name == "action") { @return "R"; }
    @else if ($name == "favorites") { @return "S"; }
    @else if ($name == "plane") { @return "T"; }
    @else if ($name == "user") { @return "U"; }
    @else if ($name == "video") { @return "V"; }
    @else if ($name == "compose") { @return "W"; }
    @else if ($name == "truck") { @return "X"; }
    @else if ($name == "chart2") { @return "Y"; }
    @else if ($name == "chart") { @return "Z"; }

    // Row 3
    @else if ($name == "expand") { @return "`"; }
    @else if ($name == "refresh") { @return "1"; }
    @else if ($name == "check") { @return "2"; }
    @else if ($name == "check2") { @return "3"; }
    @else if ($name == "play") { @return "4"; }
    @else if ($name == "pause") { @return "5"; }
    @else if ($name == "stop") { @return "6"; }
    @else if ($name == "forward") { @return "7"; }
    @else if ($name == "rewind") { @return "8"; }
    @else if ($name == "play2") { @return "9"; }
    @else if ($name == "refresh2") { @return "0"; }
    @else if ($name == "minus") { @return "-"; }
    @else if ($name == "battery") { @return "="; }
    @else if ($name == "left") { @return "["; }
    @else if ($name == "right") { @return "]"; }
    @else if ($name == "calendar") { @return "\005C"; }
    @else if ($name == "shuffle") { @return ";"; }
    @else if ($name == "wireless") { @return "'"; }
    @else if ($name == "speedometer") { @return ","; }
    @else if ($name == "more") { @return "."; }
    @else if ($name == "print") { @return "/"; }


    // Row 4
    @else if ($name == "download") { @return "~"; }
    @else if ($name == "warning_black") { @return "!"; }
    @else if ($name == "locate") { @return "@"; }
    @else if ($name == "trash") { @return "#"; }
    @else if ($name == "cart") { @return "$"; }
    @else if ($name == "bank") { @return "%"; }
    @else if ($name == "flag") { @return "^"; }
    @else if ($name == "add") { @return "&"; }
    @else if ($name == "delete") { @return "*"; }
    @else if ($name == "lock") { @return "("; }
    @else if ($name == "unlock") { @return ")"; }
    @else if ($name == "minus2") { @return "_"; }
    @else if ($name == "add2") { @return "+"; }
    @else if ($name == "up") { @return "{"; }
    @else if ($name == "down") { @return "}"; }
    @else if ($name == "screens") { @return "|"; }
    @else if ($name == "bell") { @return ":"; }
    @else if ($name == "quote") { @return "\""; }
    @else if ($name == "volume_mute") { @return "<"; }
    @else if ($name == "volume") { @return ">"; }
    @else if ($name == "help") { @return "?"; }

    // Backwards compat; icons that are not in the font
    @else if ($name == "arrow_left") { @return "["; }
    @else if ($name == "arrow_right") { @return "]"; }
    @else if ($name == "arrow_up") { @return "{"; }
    @else if ($name == "arrow_down") { @return "}"; }
    @else if ($name == "organize") { @return "I"; }
    @else if ($name == "bookmarks") { @return "I"; }
    @else if ($name == "loop2") { @return "r"; }
    @else if ($name == "star") { @return "S"; }
    @else if ($name == "maps") { @return "@"; }
    @else if ($name == "reply") { @return "R"; }

    @else {
        @return null;
    }
}

pour voir une app:
	http://apps.innofied.com/iphonetest/?url=http://transparence-medicale.fr/transparence

event in view:
initialize	: function() {
        this.callParent(arguments);

        var padElement = Ext.get('touchpad');

        padElement.on(['touchstart', 'touchend', 'touchmove',
                        'swipe', 'dragstart', 'drag', 'dragend',
                        'tap', 'singletap', 'doubletap', 'longpress', 'pinch', 'rotate'],
        'onTouchPadEvent', this);
    },
    onTouchPadEvent    : function(e, target, options, eventController) {
        this.down('toucheventlogger').addLog(eventController.info.eventName);
    }

checkbox:
	            items: [{
                xtype: 'radiofield',
                name: 'color',
                value: 'red',
                label: 'Red',
                checked: true
            }, {
                xtype: 'radiofield',
                name: 'color',
                value: 'green',
                label: 'Green'
            }, {
                xtype: 'radiofield',
                name: 'color',
                value: 'blue',
                label: 'Blue'
            }]

    
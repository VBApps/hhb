Ext.define('hhb.controller.hhbMainController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.hhbMainController',

    control: {
        "#myviewport": {
            afterrender: 'onViewportAfterRender'
        },
        "#in_and_outputs": {
            click: 'onBtnInOutputClick'
        },
        "#profil_edit": {
            click: 'onBtnEditProfilClick'
        },
        "#newinout": {
            click: 'onBtnAddInOutClick'
        },
        "#mybutton10": {
            click: 'onBtnAddInOutCancelClick'
        },
        "#btn_cancel": {
            click: 'onBtnCancelEditClick'
        },
        "#newInOut": {
            afterrender: 'onFormNewInOutAfterRender'
        },
        "#logout": {
            click: 'onBtnLogoutClick'
        },
        "#editprofil": {
            afterrender: 'onFormEditProfilAfterRender'
        },
        "#btn_save": {
            click: 'onBtnSaveNewInOutClick'
        },
        "#btnrefresh": {
            click: 'onBtnrefreshClick'
        },
        "#inoutputs": {
            itemdblclick: 'onInoutputsItemDblClick',
            itemkeydown: 'onInoutputsItemKeydown'
        }
    },

    onViewportAfterRender: function(component, eOpts) {
        component.down('#logout').setText(uname+' abmelden');
        //$("#loading-mask").hide();
        //$("#loading").hide();
    },

    onBtnInOutputClick: function(button, e, eOpts) {
        var viewport = button.up('viewport');
        var tabs = viewport.down('#tabpan');
        if (!tabs.getComponent('inoutputs')) {
            tabs.add(Ext.widget('inoutputs', {
                title: 'Ein- und Ausg&auml;nge',
                closable: true,
                iconCls: 'fa fa-exchange',
                bodyStyle: 'background:#e6e6e6;'
            }));
        }
        tabs.setActiveTab('inoutputs');
        Ext.getStore('inoutputsStore').load();
    },

    onBtnEditProfilClick: function(button, e, eOpts) {
        var viewport = button.up('viewport');
        var tabs = viewport.down('#tabpan');
        if (!tabs.getComponent('editprofil')) {
        tabs.add(Ext.widget('editprofil', {
            title: 'Profil editieren',
            closable: true,
            iconCls: 'fa fa-wrench',
            bodyStyle: 'background:#e6e6e6;'
        }));
        }
        tabs.setActiveTab('editprofil');
        tabs.getComponent('editprofil').form.setValues(Ext.getStore('profileStore').getRange()[0].data);
        console.log(tabs.getComponent('editprofil'));
    },

    onBtnAddInOutClick: function(button, e, eOpts) {
        var viewport = button.up('viewport');
        var tabs = viewport.down('#tabpan');
        if (!tabs.getComponent('newInOut')) {
                tabs.add(Ext.widget('newInOut', {
                    title: 'Neuer Eintrag',
                    closable: true,
                    id: 'newInOut',
                    iconCls: 'fa fa-magic',
                    bodyStyle: 'background:#e6e6e6;'
                }));
        }
        tabs.setActiveTab('newInOut');
    },

    onBtnAddInOutCancelClick: function(button, e, eOpts) {
        var form = button.up('form');
        form.reset();
        var viewp = button.up('viewport');
        var tabs = viewp.down('#tabpan');
        tabs.remove('newInOut');
    },

    onBtnCancelEditClick: function(button, e, eOpts) {
        var form = button.up('form');
        form.reset();
        var viewp = button.up('viewport');
        var tabs = viewp.down('#tabpan');
        tabs.remove('editprofil');
    },

    onFormNewInOutAfterRender: function(component, eOpts) {
        component.down('#inoutdate').setValue(new Date());
    },

    onBtnLogoutClick: function(button, e, eOpts) {
        Ext.Ajax.request({
            url:"logout.php?logout=true",
            method: "POST",
            params: JSON.stringify({
                uname: uname
            }),
            success: function(){
                window.location = "../";
            },
            failure: function(response, opts){
                console.log("failed");
            },
            headers: { 'Content-Type': 'application/json' }
        });
    },

    onFormEditProfilAfterRender: function(component, eOpts) {
        component.getForm().setValues(Ext.getStore('profileStore').data.items[0].getData().rows[0]);
    },

    onBtnSaveNewInOutClick: function(button, e, eOpts) {
        console.log(button.up('form'));
        var form = button.up('form'),
            store = Ext.getStore('inoutputsStore'),
            record = form.getRecord(),
            values = form.getValues();

        if (form.isValid()) {
             if(!record) {
                        var values = form.getValues();
                        // create a new create
                        record = Ext.create(store.model, values);

                        if(store.getRootNode) {

                            var node;

                            if(!Ext.isEmpty(form.selectedNode)) {
                                node = form.selectedNode;
                            } else {
                                node = store.getRootNode();
                            }
                            if (store.node) {
                                node = store.node;
                            }

                            node.appendChild(record);

                        } else {

                            store.add(record);
                        }

                    } else {
                        form.getForm().updateRecord(record);
                    }
            store.sync();
            var viewp = button.up('viewport');
            var tabs = viewp.down('#tabpan');
            tabs.remove('newInOut');
            Ext.getStore('inoutputsStore').load();
        }
    },

    onBtnrefreshClick: function(button, e, eOpts) {
        var grid = button.up('grid');
        grid.store.load();
    },

    onInoutputsItemDblClick: function(dataview, record, item, index, e, eOpts) {

    },

    onInoutputsItemKeydown: function(dataview, record, item, index, e, eOpts) {

    }

});

Ext.define('hhb.view.main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',

    requires: [
        'hhb.view.mainViewModel',
        'hhb.view.mainViewController',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.panel.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.VBox',
        'Ext.container.Container'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    itemId: 'myviewport',
    scrollable: true,
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'north',
            height: 50,
            html: '<div style=\'font-weight:bold;font-size:22px;color:white;font-family:Calibri;padding-top:0px;\'><img src=\'resources/images/home.png\' style=\'padding-top:12px;padding-left:12px;\' width=32px height=32px>&nbsp;&nbsp;Mein Haushaltsbuch</div>',
            style: 'background:#04B431',
            bodyStyle: 'background:#04B431;',
            iconCls: '',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    height: 35,
                    hidden: true,
                    style: 'background:#04B431',
                    items: [
                        {
                            xtype: 'tbfill'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'tabpanel',
            flex: 1,
            region: 'center',
            itemId: 'tabpan',
            activeTab: 0,
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'vbox',
                        align: 'middle'
                    },
                    bodyStyle: 'background:#E6E6E6;',
                    itemId: 'overview',
                    iconCls: 'fa fa-binoculars',
                    bodyPadding: 20,
                    title: '&Uuml;bersicht',
                    items: [
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'panel',
                                    itemId: 'kontostand1',
                                    style: 'text-align:center',
                                    cls: 'shadow',
                                    height: 150,
                                    width: 450,
                                    html: 'Aktueller Kontostand<br><br><center>' + Saldo + '</center>'
                                },
                                {
                                    xtype: 'panel',
                                    itemId: 'bevorstehende',
                                    style: 'margin-top:15px;text-align:center',
                                    cls: 'shadow',
                                    height: 150,
                                    width: 450,
                                    html: 'Bevorstehende Buchungen<br><br><center>' + Saldo + '</center>'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'details',
                    bodyStyle: 'background:#E6E6E6;',
                    title: 'Einzelheiten',
                    tabConfig: {
                        xtype: 'tab',
                        iconCls: 'fa fa-tasks'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'west',
            split: false,
            itemId: 'settings',
            scrollable: true,
            width: 250,
            bodyStyle: 'background:#E6E6E6;',
            iconCls: 'fa fa-sliders',
            title: 'Verwaltung',
            items: [
                {
                    xtype: 'button',
                    height: 35,
                    itemId: 'in_and_outputs',
                    style: {
                        color: 'white'
                    },
                    width: '100%',
                    iconCls: 'fa fa-exchange',
                    text: 'Ein- und Ausg&auml;nge verwalten'
                },
                {
                    xtype: 'button',
                    height: 35,
                    itemId: 'edit_accounts',
                    style: {
                        color: 'white'
                    },
                    width: '100%',
                    iconCls: 'fa fa-credit-card',
                    text: 'Konten verwalten'
                },
                {
                    xtype: 'button',
                    height: 35,
                    itemId: 'edit_cat',
                    style: {
                        color: 'white'
                    },
                    width: '100%',
                    iconCls: 'fa fa-list-ul',
                    text: 'Kategorien bearbeiten'
                },
                {
                    xtype: 'button',
                    height: 35,
                    itemId: 'profil_edit',
                    style: {
                        color: 'white'
                    },
                    width: '100%',
                    iconCls: 'fa fa-wrench',
                    text: 'Profil editieren'
                },
                {
                    xtype: 'button',
                    height: 35,
                    itemId: 'help',
                    style: {
                        color: 'white'
                    },
                    width: '100%',
                    iconCls: 'fa fa-question',
                    text: 'Hilfe',
                    listeners: {
                        click: 'onHelpClick'
                    }
                },
                {
                    xtype: 'button',
                    height: 35,
                    itemId: 'logout',
                    style: {
                        color: 'white'
                    },
                    width: '100%',
                    iconCls: 'fa fa-sign-out'
                }
            ]
        }
    ]

});
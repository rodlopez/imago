Ext.define('MvcClientes.view.Principal.MyViewport',{
	extend: 'Ext.container.Viewport',
	layout: 'border',
    width: 468,
    height: 549,
    initComponent: function() {
	var me=this;
        me.items = [
            {
                id:'PnlNorte',
				xtype: 'panel',
                title: '.:Administrar:.',
                region: 'north',
                margins: '2,1,0,0',
                style: 'background:#15428B;font-size: 25px; text-align: left',
                activeItem: 0,
                bodyStyle: 'background:#15428B',
                shadow: 'frame',
                shadowOffset: 10
            },
            {
                id:'PnlEste',
     			xtype: 'panel',
                title: 'Menu Principal',
				split: true,
                region: 'west',
                width: 192,
                split: true,
                collapsible: true,
                margins: '3,3,0,0',
                layout: 'accordion',
				activeItem: 1,
                items: [
                    {   xtype: 'treepanel',
                        title: 'Registros',
                        height: 212,
						iconCls:'catalogos',
                        forceLayout: true,
                        collapsed: true,
                        collapsible: true,
                        rootVisible: false,
                        border: false,
                        autoWidth: true,
						listeners:{//Listeners apuntando a cada node
						            itemclick:function(view, record, item, index, e)
									{
										if (index==1)
										   {
											
												 addTabListadoClientes();
												 
											}
										
									}
								 },
                        root: {
                            text: '',
                            isTarget: false,
                            expanded: true,
                            checked: false,
                            allowDrag: false,
                            allowDrop: false,
                            editable: false,
                            qtip: 1,
                            children: [
                                {
                                    text: 'Usuarios',
                                    children: [
                                        {
                                           
 										    text: 'Usuarios Registrados',
                                            leaf: true,
											

                                        }
                                    ]
                                },
                                
                            ]
						
                        },
                        loader: {

                        }
                    },
    
                   
                ]
			
            },
            {
                id:'PnlSur',
				xtype: 'panel',
                title: '',
                region: 'south',
                tpl: '',
                height: 21,
                margins: '0',
                activeItem: 0,
                html: '<p>Usuario Actual:  Made with ExtJS 4.0.7 © \n, IcebergDelphi:=Hiber Tadeo Moreno Tovilla</p>',
                style: 'font-size: 9px; text-align: left;',
                split: true
            },
			   
			    TabPanelMain
		];
        me.callParent();
	

 ////Funciones ////////////////////////////////	
        
				 
	    function addTabListadoClientes(){ 
      	 var tab=this.TabPanelMain.getComponent('TabListadoClientes');
		   if(!tab){ //si no existe lo creamos
				    tab = Ext.create('MvcClientes.view.Clientes.PanelClientes', {});
				this.TabPanelMain.add(tab); //Se agrega el Panel Cliente al TabMain 
				this.TabPanelMain.doLayout(); //Redibujado del Panel 
				this.TabPanelMain.setActiveTab(tab); //Activamos el Tab
               			
             } 
			    this.TabPanelMain.setActiveTab(tab); //Se activa el Tab Clickeado 
				     		 
	    }
		
		
	
		
    }
		
 });

this.TabPanelMain = Ext.create('MvcClientes.view.Principal.TabMain', {
						region: 'center',
						id:'TabMain'
			     });
	

	
 
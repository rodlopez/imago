// Ext.define('MvcClientes.view.Clientes.CapturaEdicionClientes', {
//     extend: 'Ext.window.Window',
// 	alias:'widget.FormAddEdicionClientes',
//     height: 205,
//     width: 850,
// 	autoShow: true,
//     layout: {
//         type: 'fit'
//     },
//     closable: false,
//     title: 'Captura/Edicion Clientes',
//     modal: true,
	
	
//     initComponent: function() {
//         var me = this;
// 			Ext.applyIf(me, {
// 				items: [
// 					{
// 						xtype: 'form',
// 						itemId:'FrmDatosClientes',
// 						height: 110,
// 						width:500,
// 						layout: {
// 							type: 'auto'
// 						},
// 						bodyPadding: 10,
// 						dockedItems: [
// 							{
// 								xtype: 'fieldset',
// 								 height: 60,
// 								 layout: {
// 									columns: 5,
// 									type: 'table'
// 								},
// 								title: 'Datos personales',
// 								dock: 'top',
// 								items: [
// 								    {
// 										xtype: 'textfield',
// 										width: 1,
// 										name:'idcliente',
// 										hidden:true
// 									},
// 									{
// 										xtype: 'textfield',
// 										itemId: 'EdtCliente',
// 										 // width: 110,
// 										fieldLabel: 'Nombre',
// 										labelAlign: 'left',
// 										name:'Nombre'
// 									},
// 									{
// 										xtype: 'textfield',
// 										itemId: 'EdtCliente',
// 										// width: 110,
// 										fieldLabel: 'Apellidos',
// 										labelAlign: '',
// 										name:'Apellidos'
// 									},
// 									{
// 										xtype: 'textfield',
// 										itemId: 'EdtCliente',
// 										// width: 80,
// 										fieldLabel: 'Usuario',
// 										labelAlign: 'top',
// 										name:'Usuario'
// 									},
// 									{
// 										xtype: 'combobox',
// 										itemId: 'CboSexo',
// 										// width:40,
// 										fieldLabel: 'Sexo',
// 										labelAlign: 'top',
// 										store: ['M','F'],
// 										name:'Sexo'
// 									},
// 									{
// 										xtype: 'numberfield',
// 										itemId: 'EdtEdad',
// 										width: 50,
// 										fieldLabel: 'Edad',
// 										labelAlign: 'top',
// 										name:'Edad'
// 									}
// 								]
// 							},
// 							{
// 								xtype: 'panel',
// 								height: 40,
// 								layout: {
// 									type: 'absolute'
// 								},
// 								animCollapse: false,
// 								collapseFirst: false,
// 								frameHeader: false,
// 								dock: 'top',
// 								items: [
// 									{
// 										xtype: 'button',
// 										height: 30,
// 										itemId: 'BtnClienteAceptar',
// 										width: 80,
// 										text: 'Aceptar',
// 										x: 260,
// 										y: 5,
// 										action:'actGuardar'
// 									},
// 									{
// 										xtype: 'button',
// 										height: 30,
// 										itemId: 'BtnClienteCancelar',
// 										width: 80,
// 										text: 'Cancelar',
// 										scope: this,
//                                         handler: this.close,
// 										x: 345,
// 										y: 5
// 									}
// 								]
// 							}
// 						]
// 					}
// 				]
// 			});

//         me.callParent(arguments);
//     }
// });

////////////Pueden usar tambien este diseño de Formulario///////////////////


Ext.define('MvcClientes.view.Clientes.CapturaEdicionClientes', {
    extend: 'Ext.window.Window',
	alias:'widget.FormAddEdicionClientes',
    height: 345,
    width: 350,
    layout: {
        type: 'fit'
    },
	autoShow: true,
    closable: false,
    title: 'Captura/Edicion Clientes',
    modal: true,
	
    initComponent: function() {
        var me = this;
			Ext.applyIf(me, {
				items: [
					{
						xtype: 'form',
						height: 74,
						layout: {
							type: 'auto'
						},
						items		: [ 
			                {xtype : "textfield", name : "id", fieldLabel : "Id",hidden: true},
							{xtype : "textfield", name : "usuario", fieldLabel : "Usuario"},
							{xtype : "textfield", name : "nombre", fieldLabel : "Nombre"},
							{xtype : "textfield", name : "apellidos", fieldLabel : "Apellidos"},
							{xtype: "combobox",	fieldLabel: "Sexo", name:"sexo", store: ['Hombre','Mujer'],},			
							// {xtype: 'filefield',emptyText: 'Select an image',fieldLabel: 'Photo',name: 'imagen',buttonText: '', buttonConfig: {iconCls: 'upload-icon'}}, 
// 							{
// xtype: 'fileuploadfield',
// id: 'form-file',
// emptyText: 'Select image',
// name: 'archivo',
// buttonText: 'Browse',
// buttonConfig: {
// iconCls: 'upload-icon'
// }
// },
// {
// xtype: 'button',
// //action: 'submit',
// text: 'Upload',
// handler: function(){
// var form = this.up('form').getForm();
// form.submit({
// url: 'upload.php',

// // waitMsg: 'Loading data...',
// // success: function(fp, o) {
// // msg('Success', 'Processed file "' + o.result.file + '" on the server');
// // }
// });

// }
// }


						],


						

						
				dockedItems : [{
						xtype: 'toolbar',
						dock: 'bottom',
						id:'buttons',
						ui: 'footer',
						items: ['->', {
							itemId: 'BtnGuardar',
							text: 'Guardar',
							action: 'actGuardar'
						},{
							
							text: 'Cancelar',
							scope: this,
							handler: this.close
						}]
				     }],

		

				}]
          }); 
		  me.callParent(arguments);
      }					
});		
						
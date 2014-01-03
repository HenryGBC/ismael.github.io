window.AddView = Backbone.View.extend({
		
		events : {
			"click .anadir" : "agregar",
			"click #plato_pedido" : "eliminar"

		},

		initialize :function(config){
			
			this.$el = config.$el; 
		},
		agregar : function (event){
			event.preventDefault();
			var nombrePedido = this.$el.find('input[name=tituloplato]').val(),
				self = this;
			var cantidadPedido = this.$el.find('input[name=cantidad]').val();
				console.log(nombrePedido, cantidadPedido);

			self.$el.find('.plato').html('');
			id=nombrePedido; 
			var data = {
				"plato_pedido" : id,
				"nombre" : nombrePedido,
				"cantidad" : cantidadPedido
			};

			var pedidoHTML = window.templates.pedidoTemplate(data);
			console.log(pedidoHTML)
			self.$el.find('.pedido').prepend(pedidoHTML);

			
		},
		eliminar : function (event){
			event.preventDefault();
			debugger;
			this.$el.find('.plato').remove();
		},
		render : function (){

		}

	});


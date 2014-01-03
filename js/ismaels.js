$(function(){
		/*var id = '#plato_pedido';
		var idPlato;
		$('.anadir').on('click', function(ev){
			ev.preventDefault();
			var plato = $('input[name=tituloplato]').val();
			var cantidad = $('input[name=cantidad]').val();
			var clase = "plato"
			var template = '<article id ="'+plato+'" class="'+clase+'"> \
							<a href="#"> \
								<span class="nomplato"> \
									<strong>'+plato+'</strong> \
								</span> \
								<span class="cantidad"> \
									<strong> \
									'+cantidad+' \
									</strong> \
								</span> \
							</a> \
						</article>';
			
			$('.pedido').prepend($(template));
	
			
			
		});


		$('#Hallaca').on('click', function(ev){
			debugger;
		});


			
			
*/


		window.addPlate = new window.AddView({
			$el : $('body')
		});

		window.templates = {};
		templates.pedidoTemplate = _.template($('#pedidosTemplate').html() );



});	
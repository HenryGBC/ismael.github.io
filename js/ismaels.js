$(function(){
		
		$('.anadir').on('click', function(ev){
			ev.preventDefault();
			var plato = $('input[name=tituloplato]').val();
			var cantidad = $('input[name=cantidad]').val();
			var clase = "plato"
			var template = '<article id ="plato_pedido" class="'+clase+'"> \
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

		$('.plato').on('click', function(ev){
			ev.preventDefault();
			var id = $(".pedido").attr("id");
			alert(id);

		});

			
			


});	
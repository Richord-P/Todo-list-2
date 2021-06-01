
$ (document).ready(function() {
	$("#taskInput").val('');

	$("#taskInput").keypress(function(e){
		if (e.keyCode == 13 && $("#taskInput").val().trim() != '') {
		$('#todo-list').prepend('<li class = "item_element">'+
				'<i class="fas fa-check-circle check_verde "></i>'+
				'<span class="listItem">'+$("#taskInput").val()+'   '+'</span>'+
				'<i class="fad fa-trash-alt deleteItem"></i></li>');
			$("#taskInput").val('');
			$('#mensajeNada').addClass('displayNone');

		}
	});

	$('#todo-list').on('click','.deleteItem',function(e){
		$(this).parent().remove();
		show_empty_message();
	});

	$('#todo-list').on('click','.listItem', function(e){
		$(this).toggleClass('tachar');
	});

	$('#todo-list').on('click','.check_verde',function(e){
		$(this).toggleClass('c_verde');
	});

	$('#checkAll').on('click',function(e){
		$('.check_verde').addClass('c_verde');
	});

	$('#uncheckAll').on('click',function(e){
		$('.check_verde').removeClass('c_verde');
	});

	$('#deleteAll').on('click',function(e){
		$('.c_verde').parent().remove();
		show_empty_message();
	});


	$('#sinfiltro').click(function(e){
		$('.listItem').parent().removeClass('displayNone');
			show_empty_message();
	});

	$('#selected_filter').click(function(e){
		
		filtrar_lista('.c_verde');
		
	});

	$('#tachado_filter').click(function(e){
		filtrar_lista('.tachar');

	});

	$('#hide_list').click(function(e){
		esconder();
	});

	$('#show_list').click(function(e){
		esconder();
	});


	


	function filtrar_lista(className){
		show_empty_message();
		let existenElementos = false;
			$('.item_element').removeClass('displayNone');
			$('.item_element').each(function(elementIndex){
			if ($(this).find(className).length == 0){
				$(this).addClass('displayNone');
			}else{
				existenElementos = true;
			}
		})
			if (existenElementos == false) {
				$('#mensajeNada').removeClass('displayNone');

			}
	}




});


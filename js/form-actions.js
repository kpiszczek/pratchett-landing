$(document).ready(function() {
	$(".konwent-tshirt-option, .smok-tshirt-option").hide();
	
	$("input[name=konwent-tshirt]").on('click', function(){
		if ($("input[name=konwent-tshirt]").is(":checked")){
			$(".konwent-tshirt-option").show();
		} else {
			$(".konwent-tshirt-option").hide();
		}
	});
	
	$("input[name=smok-tshirt]").on('click', function(){
		if ($("input[name=smok-tshirt]").is(":checked")){
			$(".smok-tshirt-option").show();
		} else {
			$(".smok-tshirt-option").hide();
		}
	});
	
	$("select[name=gatunek]").change(function() {
		
		$("select[name=jedzenie]").find(".option").remove();
		
		var species = $("select[name=gatunek]").val();
		var text = "";
		
		switch(species){
			case "Wampir":
				text = 'Należę do ligi';
				break;
			case "Troll":
				text = 'Dieta Skalista';
				break;
			case "Krasnolud":
				text = 'Byle był ketchup!';
				break;
			case "Nac Mac Feegle":
				text = 'Ta łowiecka sama wskocyła do garnka';
				break;
			case "Gnom":
				text = 'Tylko odrobinkę';
				break;
			case "Driada":
				text = 'Wystarczy dosKonwent Lancrański - Pratchett.pltęp do słońca';
				break;
			case "Elf":
				text = 'Nieżelazne sztućce';
				break;
			case "Bibliotekarz":
				text = 'Banany';
				break;
		}
		
		if (text) {
			$("select[name=jedzenie]").append('<option class="option" value="' + species + '">' + text + '</option>');
		}
		
	});
	
	$("select[name=gatunek]").change(function() {
		
		$("select[name=spanie]").find(".option").remove();
		
		var species = $("select[name=gatunek]").val();
		var text = "";
		
		switch(species){
			case "Zombie":
				text = 'najbliższy cmentarz';
				break;
			case "Igor":
				text = 'Tak jest jafnie panie!';
				break;
			case "Golem":
				text = 'jaskinia wystarczy';
				break;
			case "Gargulec":
				text = 'Śpię na dachu';
				break;
			case "Postać Antropomorficzna":
				text = 'PIP';
				break;
			case "Inny":
				text = 'Śpię za szafą';
				break;
		}
		
		if (text) {
			$("select[name=spanie]").append('<option class="option" value="' + species + '">' + text + '</option>');
		}
	});
});


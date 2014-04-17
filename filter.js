


// Cities data
$(function() {
	var tags = [
		[2,"Gaborone","Botswana","Africa"],
		[3,"Kinshasa","Democratic Republic of the Congo","Africa"],
		[4,"Alexandria","Egypt","Africa"],
		[5,"Cairo","Egypt","Africa"],
		[6,"Addis Ababa","Ethiopia","Africa"],
		[7,"Accra","Ghana","Africa"],
		[8,"Nairobi","Kenya","Africa"],
		[9,"Casablanca","Morocco","Africa"],
		[10,"Lagos","Nigeria","Africa"],
		[11,"Dakar","Senegal","Africa"],
		[12,"Cape Town","South Africa","Africa"],
		[13,"Durban","South Africa","Africa"],
		[14,"Johannesburg","South Africa","Africa"],
		[15,"Tunis","Tunisia","Africa"],
		[16,"Dar es Salaam","United Republic of Tanzania","Africa"],
		[17,"Dhaka","Bangladesh","Asia"],
		[18,"Beijing","China","Asia"],
		[19,"Changchun","China","Asia"],
		[20,"Changsha","China","Asia"],
		[21,"Chengdu","China","Asia"],
		[22,"Chongqing","China","Asia"],
		[23,"Dalian","China","Asia"],
		[24,"Dongguan","China","Asia"],
		[25,"Foshan","China","Asia"],
		[26,"Guangzhou","China","Asia"],
		[27,"Haerbin","China","Asia"],
		[28,"Hangzhou","China","Asia"],
		[29,"Nanjing","China","Asia"],
		[30,"Ningbo","China","Asia"],
		[31,"Qingdao","China","Asia"],
		[32,"Shanghai","China","Asia"],
		[33,"Shenyang","China","Asia"],
		[34,"Shenzhen","China","Asia"],
		[35,"Suzhou","China","Asia"],
		[36,"Tianjin","China","Asia"],
		[37,"Wuhan","China","Asia"],
		[38,"Wuxi","China","Asia"],
		[39,"Xiamen","China","Asia"],
		[40,"Xi'an","China","Asia"],
		[41,"Hong Kong","China, Hong Kong SAR","Asia"],
		[42,"Ahmadabad","India","Asia"],
		[43,"Bangalore","India","Asia"],
		[44,"Calcutta","India","Asia"],
		[45,"Chennai","India","Asia"],
		[46,"Hyderabad","India","Asia"],
		[47,"Mumbai","India","Asia"],
		[48,"New Delhi","India","Asia"],
		[49,"Jakarta","Indonesia","Asia"],
		[50,"Fukuoka","Japan","Asia"],
		[51,"Kobe","Japan","Asia"],
		[52,"Nagoya","Japan","Asia"],
		[53,"Osaka","Japan","Asia"],
		[54,"Sapporo","Japan","Asia"],
		[55,"Tokyo","Japan","Asia"],
		[56,"Yokohama","Japan","Asia"],
		[57,"Almaty","Kazahkstan","Asia"],
		[58,"Kuala Lumpur","Malaysia","Asia"],
		[59,"Karachi","Pakistan","Asia"],
		[60,"Manila","Philippines","Asia"],
		[61,"Busan","Republic of Korea","Asia"],
		[62,"Incheon","Republic of Korea","Asia"],
		[63,"Seoul","Republic of Korea","Asia"],
		[64,"Singapore","Singapore","Asia"],
		[65,"Colombo","Sri Lanka","Asia"],
		[66,"Taipei","Taiwan","Asia"],
		[67,"Bangkok","Thailand","Asia"],
		[68,"Ankara","Turkey","Asia"],
		[69,"Hanoi","Vietnam","Asia"],
		[70,"Ho Chí Minh City","Vietnam","Asia"],
		[71,"Adelaide","Australia","Australia"],
		[72,"Brisbane","Australia","Australia"],
		[73,"Melbourne","Australia","Australia"],
		[74,"Perth","Australia","Australia"],
		[75,"Sydney","Australia","Australia"],
		[76,"Auckland","New Zealand ","Australia"],
		[77,"Vienna","Austria","Europe"],
		[78,"Antwerp","Belgium","Europe"],
		[79,"Brussels","Belgium","Europe"],
		[80,"Sofia","Bulgaria","Europe"],
		[81,"Zagreb","Croatia","Europe"],
		[82,"Prague","Czech Republic","Europe"],
		[83,"Copenhagen","Denmark","Europe"],
		[84,"Helsinki","Finland","Europe"],
		[85,"Lyon","France","Europe"],
		[86,"Marseille","France","Europe"],
		[87,"Paris","France","Europe"],
		[88,"Toulouse","France","Europe"],
		[89,"Berlin","Germany","Europe"],
		[90,"Cologne","Germany","Europe"],
		[91,"Dusseldorf","Germany","Europe"],
		[92,"Frankfurt","Germany","Europe"],
		[93,"Hamburg","Germany","Europe"],
		[94,"Hannover","Germany","Europe"],
		[95,"Leipzig","Germany","Europe"],
		[96,"Munich","Germany","Europe"],
		[97,"Nuremburg","Germany","Europe"],
		[98,"Stuttgart","Germany","Europe"],
		[99,"Budapest","Hungary","Europe"],
		[100,"Dublin","Ireland","Europe"],
		[101,"Florence","Italy","Europe"],
		[102,"Milan","Italy","Europe"],
		[103,"Rome","Italy","Europe"],
		[104,"Turin","Italy","Europe"],
		[105,"Riga","Latvia","Europe"],
		[106,"Vilnius","Lithuania","Europe"],
		[107,"Luxembourg","Luxembourg","Europe"],
		[108,"Oslo","Norway","Europe"],
		[109,"Krakow","Poland","Europe"],
		[110,"Warsaw","Poland","Europe"],
		[111,"Lisbon","Portugal","Europe"],
		[112,"Bucharest","Romania","Europe"],
		[113,"Moscow","Russian Federation","Europe"],
		[114,"Saint Petersburg","Russian Federation","Europe"],
		[115,"Belgrade","Serbia","Europe"],
		[116,"Bratislava","Slovakia","Europe"],
		[117,"Barcelona","Spain","Europe"],
		[118,"Bilbao","Spain","Europe"],
		[119,"Madrid","Spain","Europe"],
		[120,"Gothenburg","Sweden","Europe"],
		[121,"Stockholm","Sweden","Europe"],
		[122,"Basel","Switzerland","Europe"],
		[123,"Geneva","Switzerland","Europe"],
		[124,"Zurich","Switzerland","Europe"],
		[125,"Amsterdam","The Netherlands","Europe"],
		[126,"Rotterdam","The Netherlands","Europe"],
		[127,"The Hague","The Netherlands","Europe"],
		[128,"Istanbul","Turkey","Europe"],
		[129,"Kiev","Ukraine","Europe"],
		[130,"Birmingham","United Kingdom","Europe"],
		[131,"Bristol","United Kingdom","Europe"],
		[132,"Edinburgh","United Kingdom","Europe"],
		[133,"Glasgow","United Kingdom","Europe"],
		[134,"London","United Kingdom","Europe"],
		[135,"Manchester","United Kingdom","Europe"],
		[136,"Manama","Bahrain","Middle East"],
		[137,"Tehran","Iran ","Middle East"],
		[138,"Haifa","Israel","Middle East"],
		[139,"Jerusalem","Israel","Middle East"],
		[140,"Tel Aviv","Israel","Middle East"],
		[141,"Amman","Jordan","Middle East"],
		[142,"Kuwait City","Kuwait","Middle East"],
		[143,"Muscat","Oman","Middle East"],
		[144,"Doha","Qatar","Middle East"],
		[145,"Jiddah","Saudi Arabia","Middle East"],
		[146,"Riyadh","Saudi Arabia","Middle East"],
		[147,"Abu Dhabi","United Arab Emirates","Middle East"],
		[148,"Dubai","United Arab Emirates","Middle East"],
		[149,"Calgary","Canada","North America"],
		[150,"Edmonton","Canada","North America"],
		[151,"Montréal","Canada","North America"],
		[152,"Ottawa","Canada","North America"],
		[153,"Toronto","Canada","North America"],
		[154,"Vancouver","Canada","North America"],
		[155,"San Jose","Costa Rica","Central America"],
		[156,"Guadalajara","Mexico","North America"],
		[157,"Mexico City","Mexico","North America"],
		[158,"Monterrey","Mexico","North America"],
		[159,"San Juan","Puerto Rico","North America"],
		[160,"Atlanta","United States of America","North America"],
		[161,"Austin","United States of America","North America"],
		[162,"Baltimore","United States of America","North America"],
		[163,"Boston","United States of America","North America"],
		[164,"Charlotte","United States of America","North America"],
		[165,"Chicago","United States of America","North America"],
		[166,"Cleveland","United States of America","North America"],
		[167,"Dallas-Fort Worth","United States of America","North America"],
		[168,"Denver","United States of America","North America"],
		[169,"Honolulu","United States of America","North America"],
		[170,"Houston","United States of America","North America"],
		[171,"Los Angeles","United States of America","North America"],
		[172,"Miami","United States of America","North America"],
		[173,"Minneapolis-St. Paul","United States of America","North America"],
		[174,"Nashville","United States of America","North America"],
		[175,"New York","United States of America","North America"],
		[176,"Orlando","United States of America","North America"],
		[177,"Philadelphia","United States of America","North America"],
		[178,"Phoenix","United States of America","North America"],
		[179,"Pittsburgh","United States of America","North America"],
		[180,"Portland","United States of America","North America"],
		[181,"Raleigh-Durham","United States of America","North America"],
		[182,"San Diego","United States of America","North America"],
		[183,"San Francisco","United States of America","North America"],
		[184,"San Jose","United States of America","North America"],
		[185,"Seattle","United States of America","North America"],
		[186,"Tampa-St. Petersburg","United States of America","North America"],
		[187,"Washington, D.C.","United States of America","North America"],
		[188,"Buenos Aires","Argentina","South America"],
		[189,"Belo Horizonte","Brazil","South America"],
		[190,"Brasília","Brazil","South America"],
		[191,"Curitiba","Brazil","South America"],
		[192,"Rio de Janeiro","Brazil","South America"],
		[193,"São Paulo","Brazil","South America"],
		[194,"Santiago","Chile","South America"],
		[195,"Bogotá","Colombia","South America"],
		[196,"Panama City","Panama","South America"],
		[197,"Lima","Peru","South America"],
		[198,"Montevideo","Uruguay","South America"],
		[199,"Caracas","Venezuela (Bolivarian Republic of)","South America"],
		[200,"San Jose","Venezuela (Bolivarian Republic of)","South America"]
	]



	// Remove duplicates from continent/country select options
	function removeDuplicates(inputArray) {
		var i;
		var len = inputArray.length;
		var outputArray = [];
		var temp = {};

		for (i = 0; i < len; i++) {
			temp[inputArray[i]] = 0;
		}
		for (i in temp) {
			outputArray.push(i);
		}
		return outputArray;
	}



	// Build arrays for each select menu
	var continents = [];
		for (var i = 0; i < tags.length; i++) {
		continents.push(tags[i][3]);
	}

	var countries = [];
		for (var i = 0; i < tags.length; i++) {
		countries.push(tags[i][2]);
	}

	var cities = [];
		for (var i = 0; i < tags.length; i++) {
		cities.push(tags[i][1]);
	}




	// Filter select menus based on what you've already selected
	function filteredArray(inputarray, filter, indexno, id) {
		var inputarray = jQuery.grep(inputarray, function(element,index){
			return (tags[index][indexno] == filter);
		});
		var inputarray = (removeDuplicates(inputarray));
		$('#select-' + id + '').combobox();
			$('#select-' + id + '').combobox( "option", "source", inputarray );
			$('.ui-autocomplete-input').focus(function(){
				$(this).autocomplete("search", "");
			});

		if (indexno == 3) { $('#2 .ui-autocomplete-input').val('Select Country'); $('#3 .ui-autocomplete-input').val('Select City'); }
		if (indexno == 2) { $('#3 .ui-autocomplete-input').val('Select City'); }
	};




	// Combobox functions
	$("#select-one, #select-two, #select-three").combobox(); // Set initial combobox

	$("#select-one").combobox("option", "source", removeDuplicates(continents)); // Set data source for each
	$("#select-two").combobox("option", "source", removeDuplicates(countries));
	$("#select-three").combobox("option", "source", cities);


	$("#select-one").combobox({ select: function(event, ui) {
			var val = ui.item.value;
			filteredArray(countries, val, 3, 'two');
			$('#2 .disabled').css('display','none');
		}
	});

	$("#select-two").combobox({ select: function(event, ui) {
			var val = ui.item.value;
			filteredArray(cities, val, 2, 'three');
			$('#3 .disabled').css('display','none');
		}
	});

	// Target IE since the functionality is funky
	var ie = (function(){
		var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);
		return v > 4 ? v : undef;

	}());

	// Display dropdown & clear input on focus/click (needs both events to keep field clear when focusing on dropdown menu)
	if (!ie) {
		$('.ui-autocomplete-input').bind('focus click', function(){
			$(this).autocomplete("search", "");
			$(this).val('');
		});
	}

	else if (ie) {
		$('.ui-autocomplete-input').bind('click', function(){
			$(this).autocomplete("search", "");
		});
	}


});

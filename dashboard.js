
// DASHBOARD CONTROLLER

var dashboardController = (function() {


	var data = {
		codes: [
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,2,3,2,2,3,1,2,1,3,3,0,3,3,1,1,3,3,2,2,2,3,2,0,0,0,2,1,1,3,0,3,2,3,0],
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,2,3,2,2,3,1,2,1,3,3,0,3,3,1,1,3,3,2,2,2,3,2,0,0,0,2,1,1,3,0,3,2,3,0],
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,2,3,2,2,3,1,2,1,3,3,0,3,3,1,1,3,3,2,2,2,3,2,0,0,0,2,1,3,3,0,3,2,3,0],
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,2,3,2,2,3,1,2,3,3,3,0,3,3,1,3,1,3,2,2,2,3,2,0,0,0,2,1,3,3,0,3,2,3,0],
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,0,1,2,2,3,1,2,2,3,3,0,3,1,1,1,2,3,2,2,2,3,1,0,2,0,2,1,3,2,0,3,2,3,0],
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,0,3,2,2,3,1,2,1,3,3,0,3,1,3,3,3,3,2,2,2,3,2,2,2,0,2,1,3,2,0,2,2,3,0],
			[1,1,0,1,0,1,0,2,2,0,0,3,2,0,1,2,3,2,2,3,1,2,1,3,3,0,3,3,1,3,3,3,2,2,2,3,2,0,0,0,2,1,3,2,0,3,2,3,1],
			[1,1,0,3,0,1,2,2,2,0,0,3,2,0,1,0,2,2,2,3,1,2,1,3,3,0,3,3,1,3,3,3,2,2,2,3,0,2,2,0,2,1,1,3,0,3,2,3,0]
			],
		DNA_colors: ["rgb(213, 225, 237)", "rgb(118, 203, 227)", "rgb(0, 174, 209)", "rgb(0, 99, 154)"], /*white, light blue, medium blue, dark blue*/			
		animal_file_names: [
			"human.jpg",
			"neanderthal.jpg",
			"chimpanzee.jpg",
			"dog.jpg",
			"finch.jpg",
			"tortoise.jpg",
			"frog.jpg",
			"fish.jpg"
		],
		animal_names: [
			"The Human",
			"The Neanderthal",
			"The Chimpanzee",
			"The Dog",
			"Darwin's Finch",
			"The Galapagos' Tortoise",
			"Wallace's Flying Frog",
			"The Coalecanth"
		], 	
		explanatory_box: {		
			text: [
				"<br><em>Homo sapiens</em> - 'wise man' in latin<br><br><em>Homo sapiens</em> is the only living human species on earth today.<br>Other extinct human species include <em>Homo erectus</em> or <em>Homo neanderthalensis</em>.<br>Our species is estimated to be 300, 000 years old.<br><br>You can find out more about how we are related to the other species on the wall at the bottom of the page!",
				"<br><em>Homo neanderthalensis</em> - named after the region in Germany where evidence of their existence was found.<br><br><em>Homo neanderthalensis</em> is an extinct human species but we can obtain DNA from their bones (a recent technological breakthrough). This opens the possibility for cloning and therefore potentially bringing them back to life.<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!",
				"<br><em>Pan troglodytes</em> - the name pan refers to their genus and comes from the Greek god of the wild. Troglodytes was a greek name for mythical cave dwellers.<br><br><em>Pan troglodytes</em> are our closest living relatives sharing 98.8% of our DNA. Differences between us and them include that they live in smaller groups (15 to 150) and that their disputes are generally settled without violence.<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!",
				"<br><em>Canis familiaris</em> - the word 'canis' means dog in latin while 'familiaris' designated an intimate resident of the household.<br><br><em>Canis familiaris</em> are an example of man-made evolution through selective breeding. This is like most other pets we own or animals and vegetables we eat.<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!",
				"<br>The Galapagos Finches are a group of 15 species of birds.<br><br>They are known for their large variance in beak size to cater for varying diets. The ground-finch for example uses its thick beak to crunch nuts while the warbler finch has a thin beak specialised to catch insects hiding in foliage. This provided key evidence to Darwin for organisms adapting to their local environment<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!",
				"<br><em>Chelonoidis nigra</em> - the name 'Chelonoidis' refers to their genus and is derived from the Greek word Chelone, meaning 'tortoise'. Nigra in Latin means dark or black. Galapago means 'tortoise' too in Spanish<br><br>Their varying shell sizes helped Darwin in elaborating his theory of evolution.<br>They are an example of a species that was brought to the brink of extinction through hunting, destruction of habitat for agriculture and introduction of non-native species on their native islands. The latter consumed most of their sources of nutrition.<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!",
				"<br>Wallace's Flying Frog was named after the biologist who collected the first specimen for its identification. Wallace also co-discovered the theory of evolution.<br><br>Their webbed feet enable them to parachute down to the ground from elevated foliage where they live. This is an example of convergent evolution, where they have evolved to possess wings independently from birds.<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!",
				"<br>The word Coalecanth comes from the Greek words 'kollos' and 'akantha' meaning respectively 'hollow' and 'spine'.<br><br>The species was long thought to have gone extinct 66 million years ago thereby constituting a message of hope for all the other species believed to be extinct.<br>The Coalecanth is a nocturnal species of fish whose eyes have evolved to absorb short wavelengths.<br><br>You can find out more about how they are related to the other species on the wall at the bottom of the page!"				
			],
			current_selected: 0,
		},
		comparison_box: {
			button_id_animals_compared: [],
			animals_being_compared: [],
			number_being_compared: [],
			counter_comparison: 0,
			counter_comparison_array: [],	
			percentage_similarity: 0,
			default_text: ["First Animal Selected: ", "Second Animal Selected: "],
			default_text_percentage: "Click on two images to display their sequence here",
			percentages_comparisons: {
				similarity_0_1: 99.7,
				similarity_0_2: 98.8,

			}		
		},
		ordering_box: {
			percentages_calculated: [[], []],
			animals: [[],[]],
			obtained_percentages_1: [],
			obtained_percentages_2: [],		
			codes: []	
		}
	};


	return {

		getData: function() {
			return data;
		},

		getImageID: function(item, index) {

			var splitID, imageNumberString, imageNumber;

			splitID = item.split('-');
			imageNumberString = splitID[index];
			imageNumber = parseFloat(imageNumberString);
			return imageNumber;			
		},

		getElement: function(item, index) {

			var splitID, imageNumberString;

			splitID = item.split('-');
			imageNumberString = splitID[index];

			return imageNumberString;

		},

		getBtn: function(item) {
			var splitID;

			splitID = item.split('-');
			return splitID[4];
		},


		addToArray: function(item, array, limit, itemRemoved, numberRemoved) {
			array.push(item);
			if (array.length > limit) {
				array.splice(itemRemoved, numberRemoved);
			}
		},

		removeFromArray: function(array, itemRemoved, numberRemoved) {
			array.splice(itemRemoved, numberRemoved);
		},

		calculatePercentageSimilarity: function(DNA1, DNA2) {

			var dnaCode1, dnaCode2, numberOfIdentical, percentage, percentageRounded;
			// console.log("argument 1: " + DNA1);

			numberOfIdentical = 0;
			for (var i = 0; i < data.codes[0].length; i++) {
				if (data.codes[DNA1][i] === data.codes[DNA2][i]) {
					numberOfIdentical += 1;
				}
			}

			percentage = numberOfIdentical / data.codes[0].length * 100;
			percentageRounded = percentage.toFixed(2);

			return percentageRounded;

		},


		findBiggest: function(array) {
			return array.indexOf(Math.max(...array));
		},

		findSmallest: function(array) {
			return array.indexOf(Math.min(...array));
		},

	}

}) ();


// UI CONTROLLER

var UIController = (function() {

	var UIData = dashboardController.getData();

	var DOMStrings = {
		explanatory_box: {
			more_information_title: "more-information-title",
			more_information_box: ".more-information-box",
			extended_information_box: "#extended-information",
			back_to_top_btn: "#back-to-top-btn",
			lines: [
			"#more-information-line-0"
			],
			buttons: [
				"#more-information-line-0-btn",
				"#more-information-line-1-btn",
				"#more-information-line-2-btn",
				"#more-information-line-3-btn",
				"#more-information-line-4-btn",
				"#more-information-line-5-btn",
				"#more-information-line-6-btn",
				"#more-information-line-7-btn"
			],
			animal_names: [
				"more-information-line-0-text",
				"more-information-line-1-text",			
				"more-information-line-2-text",
				"more-information-line-3-text",				
				"more-information-line-4-text",
				"more-information-line-5-text",
				"more-information-line-6-text",
				"more-information-line-7-text"
			],
			extended_information_animal_name: "extended-information-animal-name",
			extended_information_image: "extended-information-image",
			extended_information_text: "extended-information-text",
			balls: [
				["-0-1", "-0-2", "-0-3", "-0-4", "-0-5", "-0-6", "-0-7", "-0-8", "-0-9", "-0-10", "-0-11", "-0-12", "-0-13", "-0-14", "-0-15", "-0-16", "-0-17", "-0-18", "-0-19", "-0-20", "-0-21", "-0-22", "-0-23", "-0-24", 
				"-0-25", "-0-26", "-0-27", "-0-28", "-0-29", "-0-30", "-0-31", "-0-32", "-0-33", "-0-34", "-0-35", "-0-36", "-0-37", "-0-38", "-0-39", "-0-40", "-0-41", "-0-42", "-0-43", "-0-44", "-0-45", "-0-46", "-0-47", "-0-48", "-0-49"], 
				["-1-1", "-1-2", "-1-3", "-1-4", "-1-5", "-1-6", "-1-7", "-1-8", "-1-9", "-1-10", "-1-11", "-1-12", "-1-13", "-1-14", "-1-15", "-1-16", "-1-17", "-1-18", "-1-19", "-1-20", "-1-21", "-1-22", "-1-23", "-1-24", 
				"-1-25", "-1-26", "-1-27", "-1-28", "-1-29", "-1-30", "-1-31", "-1-32", "-1-33", "-1-34", "-1-35", "-1-36", "-1-37", "-1-38", "-1-39", "-1-40", "-1-41", "-1-42", "-1-43", "-1-44", "-1-45", "-1-46", "-1-47", "-1-48", "-1-49"],
				["-2-1", "-2-2", "-2-3", "-2-4", "-2-5", "-2-6", "-2-7", "-2-8", "-2-9", "-2-10", "-2-11", "-2-12", "-2-13", "-2-14", "-2-15", "-2-16", "-2-17", "-2-18", "-2-19", "-2-20", "-2-21", "-2-22", "-2-23", "-2-24", 
				"-2-25", "-2-26", "-2-27", "-2-28", "-2-29", "-2-30", "-2-31", "-2-32", "-2-33", "-2-34", "-2-35", "-2-36", "-2-37", "-2-38", "-2-39", "-2-40", "-2-41", "-2-42", "-2-43", "-2-44", "-2-45", "-2-46", "-2-47", "-2-48", "-2-49"],
				["-3-1", "-3-2", "-3-3", "-3-4", "-3-5", "-3-6", "-3-7", "-3-8", "-3-9", "-3-10", "-3-11", "-3-12", "-3-13", "-3-14", "-3-15", "-3-16", "-3-17", "-3-18", "-3-19", "-3-20", "-3-21", "-3-22", "-3-23", "-3-24", 
				"-3-25", "-3-26", "-3-27", "-3-28", "-3-29", "-3-30", "-3-31", "-3-32", "-3-33", "-3-34", "-3-35", "-3-36", "-3-37", "-3-38", "-3-39", "-3-40", "-3-41", "-3-42", "-3-43", "-3-44", "-3-45", "-3-46", "-3-47", "-3-48", "-3-49"],
				["-4-1", "-4-2", "-4-3", "-4-4", "-4-5", "-4-6", "-4-7", "-4-8", "-4-9", "-4-10", "-4-11", "-4-12", "-4-13", "-4-14", "-4-15", "-4-16", "-4-17", "-4-18", "-4-19", "-4-20", "-4-21", "-4-22", "-4-23", "-4-24", 
				"-4-25", "-4-26", "-4-27", "-4-28", "-4-29", "-4-30", "-4-31", "-4-32", "-4-33", "-4-34", "-4-35", "-4-36", "-4-37", "-4-38", "-4-39", "-4-40", "-4-41", "-4-42", "-4-43", "-4-44", "-4-45", "-4-46", "-4-47", "-4-48", "-4-49"],				
				["-5-1", "-5-2", "-5-3", "-5-4", "-5-5", "-5-6", "-5-7", "-5-8", "-5-9", "-5-10", "-5-11", "-5-12", "-5-13", "-5-14", "-5-15", "-5-16", "-5-17", "-5-18", "-5-19", "-5-20", "-5-21", "-5-22", "-5-23", "-5-24", 
				"-5-25", "-5-26", "-5-27", "-5-28", "-5-29", "-5-30", "-5-31", "-5-32", "-5-33", "-5-34", "-5-35", "-5-36", "-5-37", "-5-38", "-5-39", "-5-40", "-5-41", "-5-42", "-5-43", "-5-44", "-5-45", "-5-46", "-5-47", "-5-48", "-5-49"],
				["-6-1", "-6-2", "-6-3", "-6-4", "-6-5", "-6-6", "-6-7", "-6-8", "-6-9", "-6-10", "-6-11", "-6-12", "-6-13", "-6-14", "-6-15", "-6-16", "-6-17", "-6-18", "-6-19", "-6-20", "-6-21", "-6-22", "-6-23", "-6-24", 
				"-6-25", "-6-26", "-6-27", "-6-28", "-6-29", "-6-30", "-6-31", "-6-32", "-6-33", "-6-34", "-6-35", "-6-36", "-6-37", "-6-38", "-6-39", "-6-40", "-6-41", "-6-42", "-6-43", "-6-44", "-6-45", "-6-46", "-6-47", "-6-48", "-6-49"],
				["-7-1", "-7-2", "-7-3", "-7-4", "-7-5", "-7-6", "-7-7", "-7-8", "-7-9", "-7-10", "-7-11", "-7-12", "-7-13", "-7-14", "-7-15", "-7-16", "-7-17", "-7-18", "-7-19", "-7-20", "-7-21", "-7-22", "-7-23", "-7-24", 
				"-7-25", "-7-26", "-7-27", "-7-28", "-7-29", "-7-30", "-7-31", "-7-32", "-7-33", "-7-34", "-7-35", "-7-36", "-7-37", "-7-38", "-7-39", "-7-40", "-7-41", "-7-42", "-7-43", "-7-44", "-7-45", "-7-46", "-7-47", "-7-48", "-7-49"]
					], 							
		},
		comparison_box: {
			transition_to_comparison: "#transition-to-comparison",
			comparison_box:"#comparison-box",
			comparison_title: "comparison-title",
			transition_to_comparison_btn: "#transition-to-comparison-btn",
			list_of_references: "#list-of-references",
			animals: [
				"reference-comparison-image-0",
				"reference-comparison-image-1",
				"reference-comparison-image-2",
				"reference-comparison-image-3",
				"reference-comparison-image-4",
				"reference-comparison-image-5",
				"reference-comparison-image-6",				
				"reference-comparison-image-7"				
			],
			comparison_container: "comparison-DNA",
			balls: [
				["comp-1-1", "comp-1-2", "comp-1-3", "comp-1-4", "comp-1-5", "comp-1-6", "comp-1-7", "comp-1-8", "comp-1-9", "comp-1-10", "comp-1-11", "comp-1-12", "comp-1-13", "comp-1-14", "comp-1-15", "comp-1-16", "comp-1-17", "comp-1-18", "comp-1-19", "comp-1-20", "comp-1-21", "comp-1-22", "comp-1-23", "comp-1-24", 
				"comp-1-25", "comp-1-26", "comp-1-27", "comp-1-28", "comp-1-29", "comp-1-30", "comp-1-31", "comp-1-32", "comp-1-33", "comp-1-34", "comp-1-35", "comp-1-36", "comp-1-37", "comp-1-38", "comp-1-39", "comp-1-40", "comp-1-41", "comp-1-42", "comp-1-43", "comp-1-44", "comp-1-45", "comp-1-46", "comp-1-47", "comp-1-48", "comp-1-49"],
				["comp-2-1", "comp-2-2", "comp-2-3", "comp-2-4", "comp-2-5", "comp-2-6", "comp-2-7", "comp-2-8", "comp-2-9", "comp-2-10", "comp-2-11", "comp-2-12", "comp-2-13", "comp-2-14", "comp-2-15", "comp-2-16", "comp-2-17", "comp-2-18", "comp-2-19", "comp-2-20", "comp-2-21", "comp-2-22", "comp-2-23", "comp-2-24", 
				"comp-2-25", "comp-2-26", "comp-2-27", "comp-2-28", "comp-2-29", "comp-2-30", "comp-2-31", "comp-2-32", "comp-2-33", "comp-2-34", "comp-2-35", "comp-2-36", "comp-2-37", "comp-2-38", "comp-2-39", "comp-2-40", "comp-2-41", "comp-2-42", "comp-2-43", "comp-2-44", "comp-2-45", "comp-2-46", "comp-2-47", "comp-2-48", "comp-2-49"],
			],
			comparison_percentage: "comparison-percentage",
			animal_names_compared: ["name-compared-0" ,"name-compared-1"],
			empty_array: "#empty-array"
		},
		ordering_box: {
			order_box: "#ordering",
			animal_names: [
				["order-animal-1-1", "order-animal-1-2", "order-animal-1-3"],
				["order-animal-2-1", "order-animal-2-2", "order-animal-2-3"],				
			],
			comparison_DNA: "#comparison-DNA",
			buttons: {
				open_ordering_ids: ["more-information-order-0", "more-information-order-1"],
				open_ordering: ["#more-information-order-0", "#more-information-order-1"],
				close_ordering_ids: ["less-information-order-0", "less-information-order-1"],	
				close_ordering: ["#less-information-order-0", "#less-information-order-1"]
			},
			relations: ["#image-0-relations", "#image-1-relations"],
			DNA_lines: ["#DNA-0", "#DNA-1"],
			additional_lines_divs: ["#image-0-relations", "#image-1-relations"], 
			balls: [
				[

				["order-1.1-1", "order-1.1-2", "order-1.1-3", "order-1.1-4", "order-1.1-5", "order-1.1-6", "order-1.1-7", "order-1.1-8", "order-1.1-9", "order-1.1-10", "order-1.1-11", "order-1.1-12", "order-1.1-13", "order-1.1-14", "order-1.1-15", "order-1.1-16", "order-1.1-17", "order-1.1-18", "order-1.1-19", "order-1.1-20", "order-1.1-21", "order-1.1-22", "order-1.1-23", "order-1.1-24", 
					"order-1.1-25", "order-1.1-26", "order-1.1-27", "order-1.1-28", "order-1.1-29", "order-1.1-30", "order-1.1-31", "order-1.1-32", "order-1.1-33", "order-1.1-34", "order-1.1-35", "order-1.1-36", "order-1.1-37", "order-1.1-38", "order-1.1-39", "order-1.1-40", "order-1.1-41", "order-1.1-42", "order-1.1-43", "order-1.1-44", "order-1.1-45", "order-1.1-46", "order-1.1-47", "order-1.1-48", "order-1.1-49"],
				["order-1.2-1", "order-1.2-2", "order-1.2-3", "order-1.2-4", "order-1.2-5", "order-1.2-6", "order-1.2-7", "order-1.2-8", "order-1.2-9", "order-1.2-10", "order-1.2-11", "order-1.2-12", "order-1.2-13", "order-1.2-14", "order-1.2-15", "order-1.2-16", "order-1.2-17", "order-1.2-18", "order-1.2-19", "order-1.2-20", "order-1.2-21", "order-1.2-22", "order-1.2-23", "order-1.2-24", 
					"order-1.2-25", "order-1.2-26", "order-1.2-27", "order-1.2-28", "order-1.2-29", "order-1.2-30", "order-1.2-31", "order-1.2-32", "order-1.2-33", "order-1.2-34", "order-1.2-35", "order-1.2-36", "order-1.2-37", "order-1.2-38", "order-1.2-39", "order-1.2-40", "order-1.2-41", "order-1.2-42", "order-1.2-43", "order-1.2-44", "order-1.2-45", "order-1.2-46", "order-1.2-47", "order-1.2-48", "order-1.2-49"],
				["order-1.3-1", "order-1.3-2", "order-1.3-3", "order-1.3-4", "order-1.3-5", "order-1.3-6", "order-1.3-7", "order-1.3-8", "order-1.3-9", "order-1.3-10", "order-1.3-11", "order-1.3-12", "order-1.3-13", "order-1.3-14", "order-1.3-15", "order-1.3-16", "order-1.3-17", "order-1.3-18", "order-1.3-19", "order-1.3-20", "order-1.3-21", "order-1.3-22", "order-1.3-23", "order-1.3-24", 
					"order-1.3-25", "order-1.3-26", "order-1.3-27", "order-1.3-28", "order-1.3-29", "order-1.3-30", "order-1.3-31", "order-1.3-32", "order-1.3-33", "order-1.3-34", "order-1.3-35", "order-1.3-36", "order-1.3-37", "order-1.3-38", "order-1.3-39", "order-1.3-40", "order-1.3-41", "order-1.3-42", "order-1.3-43", "order-1.3-44", "order-1.3-45", "order-1.3-46", "order-1.3-47", "order-1.3-48", "order-1.3-49"]				

				],
				[


				["order-2.1-1", "order-2.1-2", "order-2.1-3", "order-2.1-4", "order-2.1-5", "order-2.1-6", "order-2.1-7", "order-2.1-8", "order-2.1-9", "order-2.1-10", "order-2.1-11", "order-2.1-12", "order-2.1-13", "order-2.1-14", "order-2.1-15", "order-2.1-16", "order-2.1-17", "order-2.1-18", "order-2.1-19", "order-2.1-20", "order-2.1-21", "order-2.1-22", "order-2.1-23", "order-2.1-24", 
					"order-2.1-25", "order-2.1-26", "order-2.1-27", "order-2.1-28", "order-2.1-29", "order-2.1-30", "order-2.1-31", "order-2.1-32", "order-2.1-33", "order-2.1-34", "order-2.1-35", "order-2.1-36", "order-2.1-37", "order-2.1-38", "order-2.1-39", "order-2.1-40", "order-2.1-41", "order-2.1-42", "order-2.1-43", "order-2.1-44", "order-2.1-45", "order-2.1-46", "order-2.1-47", "order-2.1-48", "order-2.1-49"],
				["order-2.2-1", "order-2.2-2", "order-2.2-3", "order-2.2-4", "order-2.2-5", "order-2.2-6", "order-2.2-7", "order-2.2-8", "order-2.2-9", "order-2.2-10", "order-2.2-11", "order-2.2-12", "order-2.2-13", "order-2.2-14", "order-2.2-15", "order-2.2-16", "order-2.2-17", "order-2.2-18", "order-2.2-19", "order-2.2-20", "order-2.2-21", "order-2.2-22", "order-2.2-23", "order-2.2-24", 
					"order-2.2-25", "order-2.2-26", "order-2.2-27", "order-2.2-28", "order-2.2-29", "order-2.2-30", "order-2.2-31", "order-2.2-32", "order-2.2-33", "order-2.2-34", "order-2.2-35", "order-2.2-36", "order-2.2-37", "order-2.2-38", "order-2.2-39", "order-2.2-40", "order-2.2-41", "order-2.2-42", "order-2.2-43", "order-2.2-44", "order-2.2-45", "order-2.2-46", "order-2.2-47", "order-2.2-48", "order-2.2-49"],
				["order-2.3-1", "order-2.3-2", "order-2.3-3", "order-2.3-4", "order-2.3-5", "order-2.3-6", "order-2.3-7", "order-2.3-8", "order-2.3-9", "order-2.3-10", "order-2.3-11", "order-2.3-12", "order-2.3-13", "order-2.3-14", "order-2.3-15", "order-2.3-16", "order-2.3-17", "order-2.3-18", "order-2.3-19", "order-2.3-20", "order-2.3-21", "order-2.3-22", "order-2.3-23", "order-2.3-24", 
					"order-2.3-25", "order-2.3-26", "order-2.3-27", "order-2.3-28", "order-2.3-29", "order-2.3-30", "order-2.3-31", "order-2.3-32", "order-2.3-33", "order-2.3-34", "order-2.3-35", "order-2.3-36", "order-2.3-37", "order-2.3-38", "order-2.3-39", "order-2.3-40", "order-2.3-41", "order-2.3-42", "order-2.3-43", "order-2.3-44", "order-2.3-45", "order-2.3-46", "order-2.3-47", "order-2.3-48", "order-2.3-49"]				

				]

			],
		}
	};


	return {
		getDOMStrings: function() {
			return DOMStrings;
		},

		displayExtendedInformation: function(lineNumber) {
			var elementTitle, newHTMLTitle, elementText, newHTMLText, elementImage, newHTMLImage;

			elementTitle = DOMStrings.explanatory_box.extended_information_animal_name;
			newHTMLTitle = UIData.animal_names[lineNumber];

			elementText = DOMStrings.explanatory_box.extended_information_text;
			newHTMLText = UIData.explanatory_box.text[lineNumber];

			elementImage = DOMStrings.explanatory_box.extended_information_image;
			newHTMLImage = UIData.animal_file_names[lineNumber];

			document.getElementById(elementTitle).innerHTML = newHTMLTitle;
			document.getElementById(elementText).innerHTML = newHTMLText;
			document.getElementById(elementImage).src = newHTMLImage;
		},


		colorDNA: function(lineNumber, codeNumber, lineID, transition) {
			for (var i = 0; i < UIData.codes[0].length; i++) {
				var element = lineID[lineNumber][i];
				// console.log("element: " + element);
				var color = UIData.DNA_colors[codeNumber[i]];
				document.getElementById(element).style.backgroundColor = color;
				// document.getElementById(element).style.height = "53px";		
				document.getElementById(element).style.marginLeft = "6px";	
				if (transition === "true") {
					document.getElementById(element).style.transition = "0.4s";									
				}
			}
		},

		unColorDNA: function(lineNumber, codeNumber, lineID, transition) {
			for (var i = 0; i < UIData.codes[0].length; i++) {
				var element = lineID[lineNumber][i];
				// document.getElementById(element).style.height = "50px";		
				document.getElementById(element).style.marginLeft = "4px";												
				document.getElementById(element).style.backgroundColor = "grey";
				if (transition === "true") {
					document.getElementById(element).style.transition = "0.2s";									
				}				
			}
		},

		fillNames: function(lineNumber) {
			var element, name;
			element = DOMStrings.explanatory_box.animal_names[lineNumber];
			name = UIData.animal_names[lineNumber];
			document.getElementById(element).innerHTML = name;
		},

		uncoverBox: function(box) {
			var element, elementID;
			element = box.split('#');
			elementID = element[1];
			document.getElementById(elementID).style.display = "block";
		},

		hideBox: function(box) {
			var element, elementID;
			element = box.split('#');
			elementID = element[1];
			document.getElementById(elementID).style.display = "none";			
		},


		scrollToBox: function(box) {
			document.getElementById(box).scrollIntoView( {behavior: "smooth"} );
		},

		enlargeText: function(line) {
			var element;
			element = DOMStrings.explanatory_box.animal_names[line];
			document.getElementById(element).style.fontWeight = "900";
			document.getElementById(element).style.fontSize = "40px";			
			document.getElementById(element).style.transition = "0.2s";
		},

		reduceText: function(line) {
			var element;
			element = DOMStrings.explanatory_box.animal_names[line];
			document.getElementById(element).style.fontWeight = "bold";
			document.getElementById(element).style.fontSize = "35px";						
			document.getElementById(element).style.transition = "0.2s";
		},

		makeActive: function(item) {
			document.getElementById(item).style.borderColor = "green";
			document.getElementById(item).style.borderWidth = "5px";
			document.getElementById(item).style.borderRadius = "10px";			
		},

		removeActive: function(item) {
			document.getElementById(item).style.borderColor = "white";
		},

		displayPercentage: function(element, item) {
			if (item === "nothing") {
				document.getElementById(element).innerHTML = "";
			} else {
				document.getElementById(element).innerHTML = UIData.animal_names[UIData.comparison_box.button_id_animals_compared[0]] + "'s 16S gene is " + item + "% similar to " + UIData.animal_names[UIData.comparison_box.button_id_animals_compared[1]] + "'s one ";
			}
		},

		displayAnimalName: function(element, item) {
			document.getElementById(element).innerHTML = item;
		},

		toggleDisplayButton: function(buttonToToggle, buttonNumber, style) {
			document.getElementById(buttonToToggle[buttonNumber]).style.display = style;			
		},


	}

}) ();


// GLOBAL APP CONTROLLER

var controller = (function(dsbrdCtrl, UICtrl) {

	var controllerData, DOM, counter, counterCompareDNA;

	controllerData = dsbrdCtrl.getData();
	DOM = UICtrl.getDOMStrings();
	counter = -1;
	counterCompareDNA = -1;


	var setupEventListeners = function() {
		for (var i = 0; i < DOM.explanatory_box.buttons.length; i ++) {
			document.querySelector(DOM.explanatory_box.buttons[i]).addEventListener("click", expandInformation);
			document.querySelector(DOM.explanatory_box.buttons[i]).addEventListener("mouseenter", colorDNALine);
			document.querySelector(DOM.explanatory_box.buttons[i]).addEventListener("mouseleave", unColorDNALine);				

			document.querySelector(DOM.explanatory_box.buttons[i]).addEventListener("mouseenter", enlargeDnaText);
			document.querySelector(DOM.explanatory_box.buttons[i]).addEventListener("mouseleave", reduceDnaText);							
		}

		document.querySelector(DOM.explanatory_box.back_to_top_btn).addEventListener("click", backToTop);
		document.querySelector(DOM.comparison_box.transition_to_comparison_btn).addEventListener("click", goToComparison);

		document.querySelector(DOM.comparison_box.list_of_references).addEventListener("click", compareDNA);

		document.querySelector(DOM.comparison_box.list_of_references).addEventListener("click", orderDNA);
		for (var l = 0; l < 2; l++) {
			// document.querySelector(DOM.ordering_box.DNA_lines[l]).addEventListener("mouseenter", UICtrl.showButton);
			// document.querySelector(DOM.ordering_box.DNA_lines[l]).addEventListener("mouseleave", UICtrl.hideButton);			
			document.querySelector(DOM.ordering_box.buttons.open_ordering[l]).addEventListener("click", openMoreInformation);
			document.querySelector(DOM.ordering_box.buttons.close_ordering[l]).addEventListener("click", closeMoreInformation);
		}			
		// document.querySelector(DOM.ordering_box.buttons.open_ordering).addEventListener("click", UICtrl.showButton);
	};



	var expandInformation = function(event) {
		var itemID, verifier;

		verifier = dsbrdCtrl.getElement(event.target.id, 0);

		if (verifier === "") {
			itemID = event.target.parentNode.parentNode.id;
		} else if (verifier === "more") {
			itemID = event.target.id;
		}


		imageNumber =  dsbrdCtrl.getImageID(itemID, 3);

		if (itemID) {
			// 1. Add the line selected to the data structure
			controllerData.explanatory_box.current_selected = imageNumber;

			// 2. Un hide the box with extended information
			UICtrl.uncoverBox(DOM.explanatory_box.extended_information_box);

			// 3. Display the relevant information in the DOM
			UICtrl.displayExtendedInformation(controllerData.explanatory_box.current_selected);

			// 4. Scroll to the box
			setTimeout(UICtrl.scrollToBox, 500, DOM.explanatory_box.extended_information_animal_name);
		}

	};

	var colorDNALine = function(event) {
		var itemID, trigger, buttonNumber;

		itemID = event.target.id;
		trigger = dsbrdCtrl.getBtn(itemID);

			buttonNumber = dsbrdCtrl.getImageID(itemID, 3);
			// 1. Color the DNA in with the appropriate color upon hover with the mouse
			UICtrl.colorDNA(buttonNumber, controllerData.codes[buttonNumber], DOM.explanatory_box.balls, "true");

	};

	var unColorDNALine = function(event) {
		var itemID, trigger, buttonNumber;

		itemID = event.target.id;
		trigger = dsbrdCtrl.getBtn(itemID);

			buttonNumber = dsbrdCtrl.getImageID(itemID, 3);

			// 2. Remove the color after delay
			setTimeout(function() {	UICtrl.unColorDNA(buttonNumber, buttonNumber, DOM.explanatory_box.balls, "true"); }, 0);
			// setTimeout(UICtrl.unColorDNA(buttonNumber), 100000);

	};

	var enlargeDnaText = function(event) {
		var itemID, trigger, buttonNumber;

		itemID = event.target.id;
		trigger = dsbrdCtrl.getBtn(itemID);

		buttonNumber = dsbrdCtrl.getImageID(itemID, 3);				

		UICtrl.enlargeText(buttonNumber);
	};


	var reduceDnaText = function(event) {

		var itemID, trigger, buttonNumber;

		itemID = event.target.id;
		trigger = dsbrdCtrl.getBtn(itemID);

		buttonNumber = dsbrdCtrl.getImageID(itemID, 3);				

		UICtrl.reduceText(buttonNumber);

	};

	var goToComparison = function() {
		// 1.Unhide the comparison-box
		UICtrl.uncoverBox(DOM.comparison_box.comparison_box);

		// 2. Scroll to the comparison-box
		UICtrl.scrollToBox(DOM.comparison_box.comparison_title);
	};

	var backToTop = function() {
		UICtrl.hideBox(DOM.explanatory_box.extended_information_box);
		UICtrl.scrollToBox(DOM.explanatory_box.more_information_title);

	};

	var compareDNA = function(event) {

		// 1. Get Image Number
		var itemID, buttonNumber, lastDivided, arrayImage, arrayButton, counter, buttonID, imageID, percentage, counter;
		itemID = event.target.parentNode.id;
		buttonNumber = dsbrdCtrl.getImageID(itemID, 3);
		arrayImage = controllerData.comparison_box.animals_being_compared;
		arrayButton = controllerData.comparison_box.button_id_animals_compared;

		if (itemID) {

			// 1. Add to counter every time an image is clicked. if counter = 0, then all the calculated percentages will be added to arrayImage[0]
			if (counterCompareDNA < 1) {
				counterCompareDNA += 1;
			} else {
				counterCompareDNA = 0;
			}	

			// 2. Add to array of animals being compared 
			dsbrdCtrl.addToArray(itemID, arrayImage, 3, 0, 1);
			dsbrdCtrl.addToArray(buttonNumber, controllerData.comparison_box.button_id_animals_compared, 3, 0, 1);

		}
		
			// 3. Change style of images clicked to active and display DNA on placeholder
			for (var i = 0; i < arrayImage.length; i++) {
				UICtrl.makeActive(arrayImage[i]);
			}	

			// 4. Remove active of first two images clicked once third is clicked and then remove first two from copmarison array
			if (arrayImage.length === 3) {
				for (var p = 0; p < (arrayImage.length - 1); p++) {

					UICtrl.removeActive(arrayImage[p]);
					
				}		

				UICtrl.unColorDNA(1, arrayButton[1], DOM.comparison_box.balls, "true");

			
				dsbrdCtrl.removeFromArray(arrayImage, 0, 2);
				dsbrdCtrl.removeFromArray(arrayButton, 0, 2);
		 		document.getElementById(DOM.comparison_box.animal_names_compared[1]).innerHTML = "";	
		 		UICtrl.displayPercentage(DOM.comparison_box.comparison_percentage, "nothing");	
		 		// if user clicks again on one of the images, this will ensure that the image that was clicked again doesn't get stopped from being displayed as active
		 		UICtrl.makeActive(arrayImage[0]);			
			}			

			// 5. Color the DNA and display the name of the animals selected in the DOM
			for (var l = 0; l < arrayImage.length; l++) {
				UICtrl.colorDNA(l, controllerData.codes[arrayButton[l]], DOM.comparison_box.balls, "true"); /*lineNumber, codeNumber, lineID, transition*/
			}
			if (arrayImage.length === 1) {
				UICtrl.displayAnimalName(DOM.comparison_box.animal_names_compared[0], controllerData.animal_names[arrayButton[0]]);
				UICtrl.displayAnimalName(DOM.comparison_box.animal_names_compared[1], controllerData.comparison_box.default_text[1]);				
				UICtrl.displayAnimalName(DOM.comparison_box.comparison_percentage, controllerData.comparison_box.default_text_percentage);								
			} else {
				for (var y =0; y < arrayImage.length; y++) {
					UICtrl.displayAnimalName(DOM.comparison_box.animal_names_compared[y], controllerData.animal_names[arrayButton[y]]);													
				}
			}				


			// 6. Calculate the Percentage similarity and display
			if (arrayButton.length === 2) {
				percentage = dsbrdCtrl.calculatePercentageSimilarity(arrayButton[0], arrayButton[1]);
	 			UICtrl.displayPercentage(DOM.comparison_box.comparison_percentage, percentage);			
			}

			// 7. Show the show button if an image has been clicked
			UICtrl.toggleDisplayButton(DOM.ordering_box.buttons.open_ordering_ids, 1, "none");
			UICtrl.toggleDisplayButton(DOM.ordering_box.buttons.open_ordering_ids, counterCompareDNA, "block")

			if (controllerData.comparison_box.animals_being_compared.length === 1) {
				for (var z = 0; z < 2; z++) {
					UICtrl.hideBox(DOM.ordering_box.relations[z]);
					UICtrl.toggleDisplayButton(DOM.ordering_box.buttons.close_ordering_ids, z, "none");
				}
			}

			if (counterCompareDNA === 0) {
				UICtrl.scrollToBox(DOM.comparison_box.animals[0]);
			} else {
				UICtrl.scrollToBox(DOM.comparison_box.comparison_container);
			}
	};	


	var openMoreInformation = function(event) {
		var itemID, buttonNumber;

		itemID = event.target.id;

		lineNumber = dsbrdCtrl.getImageID(itemID, 3);


		// 1. Display the box with more information
		UICtrl.uncoverBox(DOM.ordering_box.relations[lineNumber]);	

		// 2. Scroll to the percentage display
		UICtrl.scrollToBox(DOM.comparison_box.comparison_percentage);

		// 3. Show the hide button
		UICtrl.toggleDisplayButton(DOM.ordering_box.buttons.close_ordering_ids, lineNumber, "block"); /*buttonToToggle, buttonNumber, style*/

		// 4. Hide the show button
		UICtrl.toggleDisplayButton(DOM.ordering_box.buttons.open_ordering_ids, lineNumber, "none"); /*buttonToToggle, buttonNumber, style*/

	};


	var closeMoreInformation = function(event) {
		var itemID;

		itemID = event.target.id;

		lineNumber = dsbrdCtrl.getImageID(itemID, 3);

		// 1. Hide the box with more information
		UICtrl.hideBox(DOM.ordering_box.relations[lineNumber]);

		// 2. Hide the "hide" button
		UICtrl.hideBox(DOM.ordering_box.buttons.close_ordering[lineNumber]);

		// 3. Show the show button
		UICtrl.toggleDisplayButton(DOM.ordering_box.buttons.open_ordering_ids, lineNumber, "block"); /*buttonToToggle, buttonNumber, style*/		
	};	




	var orderDNA = function(event) {
		var itemID, arrayImage, arrayButton, percentage, buttonNumber, arrayOrder, a, percentageNumber, biggest, smallest, array, extremes1, extremes2, biggest1, biggest2, smallest1, smallest2;

		itemID = event.target.parentNode.id;
		buttonNumber = dsbrdCtrl.getImageID(itemID, 3);				
		arrayImage = controllerData.comparison_box.animals_being_compared;
		arrayButton = controllerData.comparison_box.button_id_animals_compared;		
		arrayOrder = controllerData.ordering_box.percentages_calculated;
		arrayAnimals = controllerData.ordering_box.animals;
		array = [arrayAnimals, arrayOrder];

		if (itemID) {

			// 1. Add to counter every time an image is clicked. if counter = 0, then all the calculated percentages will be added to arrayImage[0]
			if (counter < 1) {
				counter += 1;
			} else {
				counter = 0;
			}

			// 3. Calculate percentage difference with each species, push results in array and remove item of array that is the comparison with itself
			for (var d = 0; d < array.length; d++) { (array[d][counter]).splice(0, 7); }
			(controllerData.ordering_box.codes).splice(0, 7);				

			for (var i = 0; i < controllerData.codes.length; i++) {
				percentageNumber = parseFloat(dsbrdCtrl.calculatePercentageSimilarity(arrayButton[counter], i));
				arrayOrder[counter].push(percentageNumber);
				arrayAnimals[counter].push(controllerData.animal_names[i]);
				controllerData.ordering_box.codes.push(controllerData.codes[i]);
			}


			for (var e = 0; e < array.length; e++) { (array[e][counter]).splice(buttonNumber, 1); }
			(controllerData.ordering_box.codes).splice(buttonNumber, 1);


			// 4. find the index of the percentage that is the highest, display the DNA of the most closely related and display the name of the species
			// find biggest and smallest

				biggest1 = dsbrdCtrl.findBiggest(arrayOrder[0]);
				smallest1 = dsbrdCtrl.findSmallest(arrayOrder[0]);

				biggest2 = dsbrdCtrl.findBiggest(arrayOrder[1]);
				smallest2 = dsbrdCtrl.findSmallest(arrayOrder[1]);


			if (biggest1 > -1 && smallest1 > -1) {
				// display the DNA of most closely related
				UICtrl.colorDNA(1, controllerData.ordering_box.codes[biggest1], DOM.ordering_box.balls[0], "true"); 
				UICtrl.colorDNA(2, controllerData.ordering_box.codes[smallest1], DOM.ordering_box.balls[0], "true");

				// display the name of the species
				document.getElementById(DOM.ordering_box.animal_names[0][1]).innerHTML = arrayAnimals[0][biggest1];
				document.getElementById(DOM.ordering_box.animal_names[0][2]).innerHTML = arrayAnimals[0][smallest1];				
			}


			if (biggest2 > -1 && smallest2 > -1) {
				// display the DNA of most closely related
				UICtrl.colorDNA(1, controllerData.ordering_box.codes[biggest2], DOM.ordering_box.balls[1], "true"); /*lineNumber, codeNumber, lineID, transition*/
				UICtrl.colorDNA(2, controllerData.ordering_box.codes[smallest2], DOM.ordering_box.balls[1], "true");

				// display the name of the species
				document.getElementById(DOM.ordering_box.animal_names[1][1]).innerHTML = arrayAnimals[1][biggest2];
				document.getElementById(DOM.ordering_box.animal_names[1][2]).innerHTML = arrayAnimals[1][smallest2];			
			}

		}

	};

	return {
		init: function() {
			console.log("application has started successfully");
			setupEventListeners();

			// 2. Fill in the initial names
			for (var l = 0; l < controllerData.codes.length; l++) {
				UICtrl.fillNames(l);
			}			
		}
	}

}) (dashboardController, UIController);

controller.init();



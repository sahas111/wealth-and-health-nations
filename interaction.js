var img = document.getElementById("goodday");
var feed_me_button=document.getElementById("feed_me_button")
var run_around_button=document.getElementById("run_the_block")


console.log(img);
feed_me_button.addEventListener("click", function() {
	feed_me(10);

})
'keydown'
'mouseover'

run_around_button.addEventListener("click", function() {
	run_around(10);
})

function feed_me(mealsize){
	img.style.width = ((img.offsetWidth) + parseInt(mealsize)) + 'px';
    return img.style.width;
}

function run_around(mealsize){
	img.style.width = ((img.offsetWidth) - parseInt(mealsize)) + 'px';
    return img.style.width;
}
console.log(5+5);

var list_of_numbers = [30, 2, 5];
console.log(list_of_numbers[2]);
var text = 'I love cats';
console.log(text[5]);
var cat_object = {
	height: 10,
	weight: 5,
	past_weight_values: [4.5, 5.1,4.9],
	name: 'Princess Caroline'
};
console.log(cat_object['name']);
console.log(cat_object['height']);
console.log(cat_object.color='red');
var cat_list = [cat_object];

cat_list.push({ weight: 6 , past_weight_values : [5.9, 5.3, 6.1], name: 'Snowball' });
cat_list.push({ weight: 6 , past_weight_values : [5.9, 5.3, 6.1], name: 'tangled' });
cat_list.push({ weight: 6 , name: 'tangled' });
cat_list[1].name='cinderella';

var cat_list2 = [cat_object, cat_object];
cat_list2[0].name='king';
dog_list = cat_list.map(function(cat) {
	return {
		name: "Mr ".concat(cat.name),
		weight: cat.weight*2
	};
});
dog_list[0].name = 'peanutbutter';
var cat_json= JSON.stringify(cat_list);

var new_cat_list=JSON.parse(cat_json);




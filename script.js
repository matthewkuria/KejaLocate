const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
//House Items
const houseMenu =[
	{
		id: 1,
		category: "townHouse",
		img: "./images/rentalf1.jpg",
		price: 45000,
		location: "Mombasa Road",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 2,
		category: "hostel",
		img: "./images/rentalf2.jpg",
		price: 3000,
		location: "Chuka University",
		noOfBeds: 1,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 3,
		category: "singles",
		img: "./images/rentalf3.jpg",
		price: 1500,
		location: "Kangundo Road",
		noOfBeds: 1,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 4,
		category: "hostels",
		img: "./images/rentalf4.jpg",
		price: 3000,
		location: "Meru University",
		noOfBeds: 1,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 5,
		category: "townHouse",
		img: "./images/rentalf5.jpg",
		price: 32000,
		location: "Nanyuki",
		noOfBeds: 8,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 6,
		category: "villas",
		img: "./images/rentalf6.jpg",
		price: 21000,
		location: "Milimani -Nakuru",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 7,
		category: "ownCompound",
		img: "./images/rentalf7.jpg",
		price: 12000,
		location: "Mombasa Road",
		noOfBeds: 2,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 8,
		category: "ownCompound",
		img: "./images/rentalf8.jpg",
		price: 14000,
		location: "Lanet Nakuru",
		noOfBeds: 3,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 9,
		category: "villas",
		img: "./images/rentalf9.jpg",
		price: 500000,
		location: "Karen nairobi",
		noOfBeds: 4,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 10,
		category: "bungalow",
		img: "./images/rentalf10.jpg",
		price: 54000,
		location: "Kitusuri nairobi",
		noOfBeds: 4,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 11,
		category: "villas",
		img: "./images/rentalf11.jpg",
		price: 340000,
		location: "Eldoret ",
		noOfBeds: 4,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 12,
		category: "mansion",
		img: "./images/rentalf12.jpg",
		price: 500000,
		location: "Pipeline, Nakuru",
		noOfBeds: 4,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 13,
		category: "hostels",
		img: "./images/rentalf13.jpg",
		price: 25000,
		location: "Karen nairobi",
		noOfBeds: 2,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 14,
		category: "hostels",
		img: "./images/rentalf14.jpg",
		price: 10000,
		location: "Meru University",
		noOfBeds: 1,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 15,
		category: "bedsitter",
		img: "./images/rentalf15.jpg",
		price: 5000,
		location: "Juja Thika",
		noOfBeds: 1,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 16,
		category: "bedsitter",
		img: "./images/rentalf16.jpg",
		price: 3500,
		location: "Lanet,Nakuru",
		noOfBeds: 1,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 17,
		category: "apartment",
		img: "./images/rentalf17.jpg",
		price: 330000,
		location: " Hillpark Nairobi",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
	{
		id: 18,
		category: "apartment",
		img: "./images/rentalf9.jpg",
		price: 450000,
		location: "Kilimani nairobi",
		noOfBeds: 4,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
];

//Get the selected House Function
// Function to filter results based on selected housing type

  // Get the ComboBox element
  var comboBox = document.getElementById("housingType");
  var houseContainer = document.getElementById('housecontainer');
  var houseCategories = document.getElementsByClassName("card");

  comboBox.addEventListener("change", function(){
	  //Get Selected category
	  var selectedCategory = comboBox.value;

  // Loop through all cards
  for (var i = 0; i < houseCategories.length; i++) {
    var houseCategory = houseCategories[i];

    // If the selected category is "all" or the data-category attribute matches the selected category, display the image; otherwise, hide it
    if (selectedCategory === "all" || houseCategory.getAttribute("data-category") === selectedCategory) {
      houseCategory.style.display = "block";
    } else {
      houseCategory.style.display = "none";
    }
  }
	  
  });	



//End of get the selected house function

const featured = document.querySelector('.featured');

window.addEventListener('DOMContentLoaded', function(){
	displayHouseItems(houseMenu);
	filterResults();
});

function displayHouseItems(houseMenuItems){
	let displayMenu = houseMenuItems.map(function(item){
//		console.log(item);
		return `<div class="card" data-category=${item.category} style="width: 18rem;">
				<a href=${item.img}>
			  <img src=${item.img} class="photo" alt="rentals KejaLocate" width="250px" height="270px">
				</a>
				<!--Like/Hearty Icon-->
				<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><style>svg{fill:#9e9a9a !important}</style><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
			  <div class="card-body">
				<h5 class="price">Ksh ${item.price} pm <span class="categoType"> &#9679;For Rent</span></h5>
	  <!--Bedrooms Icon-->
				  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/><h6><span class="noOfBeds">Number:</span>${item.noOfBeds}</h6></svg>
	  <!--Location Icon-->
				  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/><span class="location">${item.location}</span></svg>
				  
				<p class="house-text">${item.desc}
				  </p>
				<a href="#" class="btn btn-primary">Read More...</a>
			  </div>
			</div>`;
	});
	displayMenu = displayMenu.join("");
	featured.innerHTML = displayMenu;
}



hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
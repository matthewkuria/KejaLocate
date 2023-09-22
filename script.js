const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const date = document.querySelector(".date");
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
		price: 45000,
		location: "Chuka University",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 3,
		category: "singles",
		img: "./images/rentalf3.jpg",
		price: 45000,
		location: "Kangundo Road",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 4,
		category: "hostels",
		img: "./images/rentalf4.jpg",
		price: 45000,
		location: "Meru University",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 5,
		category: "townHouse",
		img: "./images/rentalf5.jpg",
		price: 45000,
		location: "Nanyuki",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 6,
		category: "villas",
		img: "./images/rentalf6.jpg",
		price: 45000,
		location: "Milimani -Nakuru",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 7,
		category: "townHouse",
		img: "./images/rentalf7.jpg",
		price: 45000,
		location: "Mombasa Road",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 8,
		category: "ownCompound",
		img: "./images/rentalf8.jpg",
		price: 45000,
		location: "Lanet Nakuru",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
		{
		id: 9,
		category: "villas",
		img: "./images/rentalf9.jpg",
		price: 500000,
		location: "Karen nairobi",
		noOfBeds: 6,
		desc:`A spectacular modern multi bedroom house located along Mombasa Road.All bedrooms are ensuite.Ample parking.Gated and manned 24/7`,
	},
];


date.innerHTML = new Date().getFullYear();

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
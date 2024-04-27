fetch('https://fakestoreapi.com/products/').then((res)=>{
	//return res.json()
	return res.json();
}).then((complete)=>{
	//document.getElementById('root').innerHTML=complete[2].title;
	let data="";
	complete.map((value)=>{
		data+=`<div class="card">
			<h1 class="title" id="root">${value.title}</h1>
                	<img alt="img" src=${value.image}>
                	<p class="description" >${value.description}</p>
                	<p class="category">${value.category}</p>
                	<p class="price">$${value.price}</p>
			<hr></hr>
			<a class="buy" href="#"><span>Buy</span></a>
		     </div>`;
	});
	document.getElementById("cards").innerHTML=data;
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) { /* Adjust the value based on when you want the header to stick */
      header.style.position = 'fixed';
      header.style.top = '0';
    } else {
      header.style.position = 'absolute';
      header.style.top = '0';
    }
  });

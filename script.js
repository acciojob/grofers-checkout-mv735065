const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= document.querySelectorAll(".price");
	let sum=0;
	for(let price of prices) {
		let val = parseFloat(price.innerText);
		sum+=val;
	}
    if(document.querySelector(".newRow")){
		document.querySelector(".newRow").remove();
	}
	
	let row=document.createElement('tr');
	row.className="newRow";
		let tdd=document.createElement('td');
	tdd.id="ans";
	tdd.innerText=sum;
	row.append(tdd);
	
   document.querySelector("table").append(row);
	
};

getSumBtn.addEventListener("click", getSum);


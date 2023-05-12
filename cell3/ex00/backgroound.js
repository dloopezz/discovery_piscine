function randomizeColor ()
{
	const charset = "0123456789ABCDEF";
	let color = "#";
	let i = 0;

	while (i < 6)
	{
		color += charset[Math.floor(Math.random() * 16)];
		i++;
	}
	return color;
}

function changeColor() {
	const body = document.getElementById("all");
	let randomColor = randomizeColor();

	body.style.backgroundColor = randomColor;  
}

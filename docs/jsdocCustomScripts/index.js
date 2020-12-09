//hsla(208, 40%, 46%, 1)
const dlColorRatio = 40 / 56;

//hsla(208, 20%, 46%, 1)
const hrColorRatio = 20 / 56;

document.addEventListener("DOMContentLoaded", () => {

	getSetCSSRootColors();
	observeAndGetFirstHrChildInDl();

	document.querySelectorAll(".pre").forEach((elm) => ReplaceTag(elm, "pre"));
});


function getSetCSSRootColors() 
{
	// SYSTEM COLOR
	let jumbotronColor = "hsl(150, 56%, 46%)";
	
	//hsl(208, 56%, 46%)
	jumbotronColor = hsl(jumbotronColor);
	
	let h,s,l,a = 1;
	if (getColorType(jumbotronColor) == colorType.hsl)
	{
		let hsl = jumbotronColor;
		let sep = hsl.indexOf(",") > -1 ? "," : " ";
		hsl = hsl.substr(4).split(")")[0].split(sep);

		h = hsl[0];
		s = hsl[1].substr(0,hsl[1].length - 1) / 100;
		l = hsl[2].substr(0,hsl[2].length - 1) / 100;
	}
	else 
	{
		let hsla = jumbotronColor;
		let sep = hsla.indexOf(",") > -1 ? "," : " ";
		hsla = hsla.substr(5).split(")")[0].split(sep);
		
		// strip the slash
		if (hsla.indexOf("/") > -1)
			hsla.splice(3,1);

		h = hsla[0];
		s = hsla[1].substr(0,hsla[1].length - 1) / 100;
		l = hsla[2].substr(0,hsla[2].length - 1) / 100;
		a = hsla[3];
	}

	h = Number.parseFloat(h);
	s = Number.parseFloat(s);
	l = Number.parseFloat(l);
	a = Number.parseFloat(a);

	console.log({h,s,l,a})

	let style = document.createElement("style");
	style.innerHTML = 
`:root {
	--system-color : ${jumbotronColor};
	--system-oppositeColor : hsla(${((h + 137) % 360)}, 69%, 46%, ${a});
	--dl-border-color : hsla(${h}, ${s * dlColorRatio * 100}%, ${l * 100}%, ${a});
	--hr-Color : hsla(${h}, ${s * hrColorRatio * 100}%, ${l * 100}%, ${a});
}`

	document.head.appendChild(style);

}

function observeAndGetFirstHrChildInDl()
{
	let mainContent = document.querySelector(".main-content");
	let myObserver = new MutationObserver(
		() => {
			let arr = document.querySelector(".main-content").querySelectorAll("dl hr");
			let doneDl = [];
			arr.forEach(element => {
				/**
				 * @type {CSSStyleDeclaration}
				 */
				let s = element.style;
				
				element.classList.remove("first");

				if (s.display == "none") 
				{
					return;
				}
				if (doneDl.includes(element.parentElement)) return;

				element.classList.add("first");
				doneDl.push(element.parentElement);
			});
		}
	);

	myObserver.observe(mainContent, {attributeFilter:["style"], subtree:true});
}

function addMoreAttribute(){
	
}

function ReplaceTag(elm, tag) {
	elm.outerHTML = elm.outerHTML.replace(/^\<\w+/g,`<${tag}`).replace(/\w+\>$/g,`${tag}>`);
}
function addCookie( details )
{
    Cookies.set( `button_clicked`, `yes`)
}


 

let btn = document.querySelector( `button` )
btn.addEventListener( `click`, addCookie )
let get_value = Cookies.get(`button_clicked`)
if ( get_value === undefined )
{
    btn.insertAdjacentHTML(`afterend`,`<h3>Click Button </h3>`)
} else
{
    btn.insertAdjacentHTML(`afterend`,`<h3>Congrats you got a 🍪  </h3>`)

}
function deleteCookie( details )
{
    Cookies.remove( `button_clicked` );
    
}
function selectColor(details)
{
    Cookies.set(`chosen_color` , `${details[`target`].getAttribute(`color`)}`)
}
let color_btn = document.querySelectorAll( `.btn` );

for ( let i = 0; i < color_btn.length; i++ )
{
    color_btn[i].addEventListener( `click`, selectColor )

    
}






 

let deletbtn = document.querySelector( `.delet_btn` )
deletbtn.addEventListener( `click`, deleteCookie )



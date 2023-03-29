document.addEventListener( 'DOMContentLoaded', function ()
{

    let chosen_color = Cookies.get( `chosen_color` )
    let get_main= document.querySelector(`main`)

    if ( chosen_color === undefined )
    {
        get_main.insertAdjacentHTML( `afterbegin`, `<h3>Error Please go back to home page and select a color </h3>` )

    } else
    {
        get_main.insertAdjacentHTML( `afterbegin`, `<div style="width:500px; height:500px; display:grid; place-items:center;  background-color:${ chosen_color }"></div>` )
 
    }
} );
function delete_color( details )
{
    Cookies.remove( `chosen_color` );
}
let delete_button = document.querySelector( `.delet_btn` );
delete_button.addEventListener(`click`, delete_color)

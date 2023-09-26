const content = document.querySelector('#content');
function rem()
{
    while(content.children.length>1){
        // content.children[1].remove();
        content.removeChild(content.lastElementChild)
    }
}
export default rem;
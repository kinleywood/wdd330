const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');

dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

addEventListener('keydown', (event) => {
  if (event.key === 'c' && event.ctrlKey) {
          console.log('Action canceled!');
      }
  });

  addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});
addEventListener('touchend', () => console.log('Touch stopped'));